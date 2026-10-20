from pymongo import MongoClient, DESCENDING
from pymongo.errors import PyMongoError
import pandas as pd

URI = "mongodb://localhost:27017/"


# Ejercicio 1
def ejercicio1(client, db):
    print("\n--- Ejercicio 1 ---")
    print("ping:", client.admin.command("ping"))
    for nombre in ["productos", "clientes", "proveedores", "ventas"]:
        print(nombre, db[nombre].count_documents({}))


# Ejercicio 2
def ejercicio2(db):
    print("\n--- Ejercicio 2 ---")
    campos = {"_id": 0, "sku": 1, "nombre": 1, "precio": 1}
    for doc in db.productos.find({"precio": {"$gt": 5000}}, campos).sort("precio", DESCENDING).limit(5):
        print(doc)


# Ejercicio 3
def ejercicio3(db):
    print("\n--- Ejercicio 3 ---")
    campos = {"_id": 0, "venta_id": 1, "fecha": 1, "estado": 1, "total": 1}
    for doc in db.ventas.find({"cliente_id": "C001"}, campos):
        print(doc)


# Ejercicio 4
def ejercicio4(db):
    print("\n--- Ejercicio 4 ---")
    col = db["practica10_temporal"]
    clave = {"origen": "practica10", "codigo": "LAB10"}
    col.delete_many(clave)
    insertado = col.insert_one({**clave, "nombre": "Documento de prueba", "stock": 5, "precio": 100})
    print("Insertado:", insertado.inserted_id)
    print("Consultado:", col.find_one(clave, {"_id": 0}))
    actualizado = col.update_one(clave, {"$set": {"precio": 150}, "$inc": {"stock": 10}})
    print("Coincidencias:", actualizado.matched_count, "Modificados:", actualizado.modified_count)
    print("Después del cambio:", col.find_one(clave, {"_id": 0}))
    eliminado = col.delete_one(clave)
    print("Eliminados:", eliminado.deleted_count)


# Ejercicio 5
def ejercicio5(db):
    print("\n--- Ejercicio 5 ---")
    pipeline = [
        {"$group": {"_id": "$estado", "ventas": {"$sum": 1},
                    "importe_registrado": {"$sum": "$total"}}},
        {"$sort": {"importe_registrado": -1}}
    ]
    for fila in db.ventas.aggregate(pipeline):
        print(fila)


# Ejercicio 6
def ejercicio6(db):
    print("\n--- Ejercicio 6 ---")
    pipeline = [
        {"$lookup": {"from": "clientes", "localField": "cliente_id",
                     "foreignField": "cliente_id", "as": "datos_cliente"}},
        {"$unwind": {"path": "$datos_cliente", "preserveNullAndEmptyArrays": True}},
        {"$project": {"_id": 0, "venta_id": 1, "total": 1, "estado": 1, "cliente_id": 1,
                      "nombre_cliente": "$datos_cliente.nombre"}},
        {"$limit": 10}
    ]
    for fila in db.ventas.aggregate(pipeline):
        print(fila)


# Ejercicio 7
def ejercicio7(db):
    print("\n--- Ejercicio 7 ---")
    campos = {"_id": 0, "venta_id": 1, "cliente_id": 1, "estado": 1,
              "canal": 1, "total": 1, "fecha": 1}
    df = pd.DataFrame(list(db.ventas.find({}, campos)))
    df["total"] = pd.to_numeric(df["total"], errors="coerce")
    df["fecha"] = pd.to_datetime(df["fecha"], errors="coerce", utc=True)
    print(df.head())
    df.info()
    print(df.isna().sum())
    print(df.describe(include="all"))
    return df


# Ejercicio 8
def ejercicio8(df):
    print("\n--- Ejercicio 8 ---")
    completadas = df.loc[df["estado"] == "completada"]
    resumen = completadas.groupby("canal", dropna=False)["total"].agg(["count", "sum"])
    print(resumen)
    return resumen


# Ejercicio 9
def ejercicio9(df):
    print("\n--- Ejercicio 9 ---")
    df["mes"] = df["fecha"].dt.strftime("%Y-%m")
    por_mes = df.groupby("mes", dropna=False)["total"].agg(["count", "sum"]).reset_index()
    print(por_mes)
    por_mes.to_csv("Practica10-importe-por-mes.csv", index=False, encoding="utf-8-sig")
    resumen_estado = (df.groupby("estado", dropna=False)
                      .agg(ventas=("total", "size"), importe_registrado=("total", "sum"))
                      .reset_index())
    resumen_estado.to_csv("Practica10-resumen-estados.csv", index=False, encoding="utf-8-sig")
    print("CSV generados: Practica10-importe-por-mes.csv y Practica10-resumen-estados.csv")


# Ejercicio 10
def ejercicio10(db, resumen_pandas):
    print("\n--- Ejercicio 10 ---")
    pipeline = [
        {"$match": {"estado": "completada"}},
        {"$group": {"_id": "$canal", "ventas": {"$sum": 1}, "importe": {"$sum": "$total"}}},
        {"$sort": {"_id": 1}}
    ]
    mongo = pd.DataFrame(list(db.ventas.aggregate(pipeline))).set_index("_id")
    comparacion = pd.DataFrame({
        "ventas_mongo": mongo["ventas"],
        "ventas_pandas": resumen_pandas["count"],
        "importe_mongo": mongo["importe"],
        "importe_pandas": resumen_pandas["sum"],
    })
    comparacion["coinciden"] = ((comparacion["ventas_mongo"] == comparacion["ventas_pandas"]) &
                                (comparacion["importe_mongo"] == comparacion["importe_pandas"]))
    print(comparacion)
    # Los dos métodos dan el mismo resultado porque usan el mismo filtro (estado "completada")
    # y total siempre es numérico. Solo habría diferencias si hubiera totales nulos o guardados
    # como texto, porque Pandas los convierte a NaN y MongoDB los ignora en $sum.


# Ejercicio 11
def ejercicio11(df):
    print("\n--- Ejercicio 11 ---")
    # Ventas completadas por canal y mes: cuántas hay y cuánto suman.
    # Sirve para ver qué canal vende más cada mes y detectar meses bajos.
    completadas = df.loc[df["estado"] == "completada"].copy()
    completadas["mes"] = completadas["fecha"].dt.strftime("%Y-%m")
    analisis = (completadas.groupby(["mes", "canal"])["total"]
                .agg(ventas="count", importe="sum")
                .reset_index())
    print(analisis)
    analisis.to_csv("Practica10-analisis-canal-mes.csv", index=False, encoding="utf-8-sig")
    print("CSV generado: Practica10-analisis-canal-mes.csv")


def main():
    client = MongoClient(URI, serverSelectionTimeoutMS=5000)
    try:
        db = client["ventas_online"]
        ejercicio1(client, db)
        ejercicio2(db)
        ejercicio3(db)
        ejercicio4(db)
        ejercicio5(db)
        ejercicio6(db)
        df = ejercicio7(db)
        resumen = ejercicio8(df)
        ejercicio9(df)
        ejercicio10(db, resumen)
        ejercicio11(df)
    except PyMongoError as exc:
        print("Error al comunicarse con MongoDB:", exc)
    finally:
        client.close()
        print("\nConexión cerrada")


if __name__ == "__main__":
    main()
