from datetime import datetime, timezone
from statistics import median
from time import perf_counter
import csv
from pathlib import Path
from pymongo import MongoClient
from pymongo.errors import PyMongoError

URI = 'mongodb://localhost:27017/'
BD = 'ventas_online'
COLECCION = 'ventas_escalabilidad'

CONSULTAS = {
    'venta_id': {'venta_id': 'SIM00001234'},
    'cliente_estado': {'cliente_id': 'C001', 'estado': 'completada'},
    'fecha': {'fecha': {'$gte': datetime(2026, 1, 1, tzinfo=timezone.utc)}},
    'sku': {'items.sku': 'P001'},
}

INDICES = [
    ('idx_venta_id', [('venta_id', 1)]),
    ('idx_cliente_estado', [('cliente_id', 1), ('estado', 1)]),
    ('idx_fecha', [('fecha', -1)]),
    ('idx_sku_multikey', [('items.sku', 1)]),
]

CAMPOS = ['registros', 'consulta', 'indice', 'nReturned', 'docs_examined',
          'keys_examined', 'mongo_ms', 'mediana_ms']


def explicar(col, filtro):
    return col.database.command({'explain': {'find': col.name, 'filter': filtro},
                                 'verbosity': 'executionStats'})


def medir_consulta(col, filtro, repeticiones=5):
    tiempos, cantidades = [], []
    for _ in range(repeticiones):
        inicio = perf_counter()
        cantidad = sum(1 for _ in col.find(filtro, {'_id': 1}))
        tiempos.append((perf_counter() - inicio) * 1000)
        cantidades.append(cantidad)
    if len(set(cantidades)) != 1:
        raise ValueError('Resultados inconsistentes entre repeticiones.')
    return cantidades[0], round(median(tiempos), 3)


def registrar(col, registros, condicion):
    filas = []
    for nombre, filtro in CONSULTAS.items():
        stats = explicar(col, filtro)['executionStats']
        cantidad, tiempo = medir_consulta(col, filtro)
        if cantidad != stats['nReturned']:
            raise ValueError('El resultado de explain no coincide con la consulta.')
        filas.append({'registros': registros, 'consulta': nombre, 'indice': condicion,
                      'nReturned': cantidad, 'docs_examined': stats['totalDocsExamined'],
                      'keys_examined': stats['totalKeysExamined'],
                      'mongo_ms': stats['executionTimeMillis'], 'mediana_ms': tiempo})
        print(registros, nombre, condicion, tiempo, 'ms')
    return filas


def eliminar_indices(col):
    existentes = col.index_information()
    for nombre, _ in INDICES:
        if nombre in existentes:
            col.drop_index(nombre)


def crear_indices(col):
    for nombre, campos in INDICES:
        inicio = perf_counter()
        col.create_index(campos, name=nombre)
        print('Indice:', nombre, 'creacion (s):', round(perf_counter() - inicio, 3))


def guardar_csv(filas, registros):
    nombre = Path(f'Practica11-metricas-{registros}.csv')
    with nombre.open('w', newline='', encoding='utf-8-sig') as archivo:
        escritor = csv.DictWriter(archivo, fieldnames=CAMPOS)
        escritor.writeheader()
        escritor.writerows(filas)
    print('Archivo generado:', nombre)


def main():
    with MongoClient(URI, serverSelectionTimeoutMS=5000) as cliente:
        cliente.admin.command('ping')
        col = cliente[BD][COLECCION]
        registros = col.count_documents({})
        if registros == 0:
            raise ValueError('Primero genere los documentos de la practica.')
        eliminar_indices(col)
        filas = registrar(col, registros, 'Sin indice')
        crear_indices(col)
        filas.extend(registrar(col, registros, 'Con indice'))
        guardar_csv(filas, registros)


if __name__ == '__main__':
    try:
        main()
    except (PyMongoError, ValueError) as exc:
        print('Error:', exc)
        raise SystemExit(1)
