from pymongo import MongoClient, UpdateOne
from pymongo.errors import PyMongoError


def main():
    with MongoClient('mongodb://localhost:27017/', serverSelectionTimeoutMS=5000) as cliente:
        cliente.admin.command('ping')
        col = cliente['ventas_online']['ventas_escalabilidad']
        if col.count_documents({}) < 1000:
            raise ValueError('Se necesitan al menos 1000 ventas sinteticas.')
        operaciones = [UpdateOne({'venta_id': f'SIM{i:08d}'},
                                 {'$set': {'revision': 'verificada'}})
                       for i in range(1, 1001)]
        resultado = col.bulk_write(operaciones, ordered=False)
        print('Coincidencias:', resultado.matched_count)
        print('Modificados:', resultado.modified_count)
        print('Verificados:', col.count_documents({'revision': 'verificada'}))


if __name__ == '__main__':
    try:
        main()
    except (PyMongoError, ValueError) as exc:
        print('Error:', exc)
        raise SystemExit(1)
