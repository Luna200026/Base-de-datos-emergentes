from datetime import datetime, timedelta, timezone
from time import perf_counter
import random
from faker import Faker
from pymongo import MongoClient
from pymongo.errors import PyMongoError

URI = 'mongodb://localhost:27017/'
BD = 'ventas_online'
COLECCION = 'ventas_escalabilidad'
LOTE = 2000
META = 10000  # 10000, 100000, 250000, 500000 o 1000000

fake = Faker('es_MX')


def crear_venta(numero):
    semilla = 2026 + numero
    rng = random.Random(semilla)
    fake.seed_instance(semilla)
    cantidad = rng.randint(1, 5)
    precio = round(rng.uniform(80, 9000), 2)
    return {
        'venta_id': f'SIM{numero:08d}',
        'cliente_id': f'C{rng.randint(1, 50):03d}',
        'fecha': datetime(2024, 1, 1, tzinfo=timezone.utc) + timedelta(days=rng.randint(0, 1000)),
        'estado': rng.choice(['completada', 'pendiente', 'cancelada']),
        'canal': rng.choice(['online', 'tienda', 'app']),
        'total': round(cantidad * precio, 2),
        'items': [{'sku': f'P{rng.randint(1, 50):03d}', 'cantidad': cantidad, 'precio': precio}],
        'region': rng.choice(['Norte', 'Centro', 'Sur']),
        'referencia': fake.bothify(text='REF-####-????'),
        'origen': 'practica11',
    }


def cargar_hasta(coleccion, meta):
    if coleccion.count_documents({'origen': {'$ne': 'practica11'}}, limit=1):
        raise ValueError('Hay documentos ajenos a la practica en la coleccion.')
    actual = coleccion.count_documents({})
    ultimo = coleccion.find_one({}, {'venta_id': 1, '_id': 0}, sort=[('venta_id', -1)])
    ultimo_numero = int(ultimo['venta_id'][3:]) if ultimo else 0
    if actual != ultimo_numero:
        raise ValueError('La secuencia no es continua; revise los datos antes de continuar.')
    if actual > meta:
        raise ValueError('La coleccion ya supera la meta solicitada.')
    inicio = perf_counter()
    for primero in range(actual + 1, meta + 1, LOTE):
        ultimo_lote = min(primero + LOTE - 1, meta)
        documentos = [crear_venta(i) for i in range(primero, ultimo_lote + 1)]
        coleccion.insert_many(documentos, ordered=True)
        print(f'Cargados: {ultimo_lote:,} / {meta:,}')
    return perf_counter() - inicio


# Ejercicio 4: revisar diez documentos y comprobar total = cantidad x precio
def verificar_documentos(coleccion, cantidad=10):
    for doc in coleccion.find({}, {'_id': 0}).sort('venta_id', 1).limit(cantidad):
        item = doc['items'][0]
        esperado = round(item['cantidad'] * item['precio'], 2)
        print(doc['venta_id'], item['cantidad'], 'x', item['precio'], '=', doc['total'],
              'OK' if doc['total'] == esperado else 'NO COINCIDE')


# Ejercicio 11: comparar 2,000 insert_one contra un insert_many de 2,000
def comparar_inserciones(db):
    col = db['ventas_prueba_insercion']
    if col.count_documents({}) > 0:
        raise ValueError('La coleccion auxiliar no esta vacia; revise antes de continuar.')
    cantidad = 2000
    documentos = [crear_venta(i) for i in range(1, cantidad + 1)]
    try:
        inicio = perf_counter()
        for documento in documentos:
            col.insert_one(documento.copy())
        individual = perf_counter() - inicio
        col.delete_many({})
        inicio = perf_counter()
        col.insert_many([{k: v for k, v in d.items() if k != '_id'} for d in documentos], ordered=True)
        lotes = perf_counter() - inicio
        print(f'Individual: {individual:.3f} s | insert_many: {lotes:.3f} s')
        print('Documentos comparados:', col.count_documents({}))
    finally:
        col.delete_many({})


def main():
    with MongoClient(URI, serverSelectionTimeoutMS=5000) as cliente:
        cliente.admin.command('ping')
        col = cliente[BD][COLECCION]
        print('Registros iniciales:', col.count_documents({}))
        segundos = cargar_hasta(col, META)
        print('Registros finales:', col.count_documents({}))
        print('Tiempo de carga:', round(segundos, 3), 's')
        verificar_documentos(col)
        # Comparacion opcional, ejecutar solo cuando se indique:
        # comparar_inserciones(cliente[BD])


if __name__ == '__main__':
    try:
        main()
    except (PyMongoError, ValueError) as exc:
        print('Error:', exc)
        raise SystemExit(1)


# Ejercicio 2
# Faker genera datos falsos pero realistas (aquí, la referencia de cada venta).
# La semilla (2026 + número de venta) hace que cada venta se genere siempre igual, así que
# los datos son reproducibles: si se vuelve a correr, se obtienen exactamente los mismos documentos.
# El lote de 2,000 documentos permite insertar con insert_many en pocas operaciones
# en lugar de una por documento, sin cargar todo en memoria al mismo tiempo.

# Ejercicio 6
# Simple sobre venta_id: búsqueda exacta de una venta, el campo es único y muy selectivo.
# Compuesto sobre cliente_id + estado: la tienda consulta las ventas de un cliente filtradas por estado.
# Sobre fecha (descendente): consultas por periodo, normalmente las más recientes primero.
# Multikey sobre items.sku: items es un array, así que el índice tiene una entrada por cada producto vendido.

# Ejercicio 14
# Mantener los índices de cliente_id + estado, fecha e items.sku, porque cubren las consultas
# más comunes de la tienda (por cliente, por periodo y por producto). Hacer las cargas grandes con
# insert_many o bulk_write en lotes. Crear solo los índices que se usan, porque cada índice
# hace más lentas las inserciones y construirlo sobre millones de documentos tarda. Para reportes, resumir primero en MongoDB con aggregate
# ($match y $group) y llevar a Pandas solo el resultado resumido, no millones de documentos.
