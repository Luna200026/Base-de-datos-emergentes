from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["ventas_online"]

# Ejercicio 1
print(list(db.productos.find({"categoria": {"$nin": ["Accesorios", "Almacenamiento"]}})))

# Ejercicio 2
print(list(db.productos.find({"categoria": {"$in": ["Accesorios", "Almacenamiento"]}})))

# Ejercicio 3
print(list(db.productos.find({"stock": {"$gt": 10, "$lt": 30}})))

# Ejercicio 4
print(list(db.productos.find({"stock": {"$lte": 25}})))

# Ejercicio 5
print(list(db.productos.find({"precio": {"$lt": 1000}})))

# Ejercicio 6
print(list(db.productos.find({"stock": {"$gte": 40}})))

# Ejercicio 7
print(list(db.productos.find({"stock": {"$gt": 30}})))

# Ejercicio 8
print(list(db.productos.find({"precio": {"$ne": 980}})))

# Ejercicio 9
print(list(db.productos.find({"stock": {"$eq": 30}})))

# Ejercicio 10
print(list(db.productos.find({"precio": {"$eq": 890}})))

# Ejercicio 11
print(list(db.productos.find({"stock": {"$ne": 25}})))

# Ejercicio 12
print(list(db.productos.find({"precio": {"$gt": 5000}})))

# Ejercicio 13
print(list(db.productos.find({"precio": {"$gte": 1450}})))

# Ejercicio 14
print(list(db.productos.find({"stock": {"$lt": 30}})))

# Ejercicio 15
print(list(db.productos.find({"precio": {"$gte": 500, "$lte": 2000}})))

# Ejercicio 16
print(list(db.productos.find({"precio": {"$gt": 500, "$lt": 2000}})))

# Ejercicio 17
print(list(db.productos.find({"categoria": {"$in": ["Audio", "Accesorios"]}})))

# Ejercicio 18
print(list(db.productos.find({"categoria": {"$nin": ["Audio", "Accesorios"]}})))

# Ejercicio 19
print(list(db.productos.find({"categoria": "Audio", "precio": {"$gt": 1000}})))

# Ejercicio 20
print(list(db.productos.find({
    "$or": [
        {"categoria": "Computo"},
        {"stock": {"$lt": 15}}
    ]
})))

# Ejercicio 21
print(list(db.productos.find({
    "$nor": [
        {"categoria": "Audio"},
        {"precio": {"$gt": 5000}}
    ]
})))

# Ejercicio 22
print(list(db.productos.find({"especificaciones": {"$exists": True}})))

# Ejercicio 23
print(list(db.productos.find({"especificaciones": {"$exists": False}})))

# Ejercicio 24
print(list(db.productos.find({"etiquetas": "gaming"})))

# Ejercicio 25
print(list(db.productos.find({"etiquetas": {"$all": ["audio", "promocion"]}})))

# Ejercicio 26
print(list(db.productos.find({"etiquetas": {"$size": 2}})))

# Ejercicio 27
print(list(db.productos.find({"categoria": "Accesorios", "stock": {"$gt": 30}})))

# Ejercicio 28
print(list(db.productos.find({"precio": {"$lt": 2000}, "etiquetas": "usb"})))

# Ejercicio 29
print(list(db.productos.find({
    "categoria": {"$in": ["Audio", "Computo"]},
    "stock": {"$gte": 20}
})))

# Ejercicio 30
# Productos activos de "Computo" con precio menor a $10,000 y stock mayor o igual a 10.
# Sirve para saber qué equipos de cómputo económicos hay disponibles y con suficiente
# inventario para ofrecerlos en una promoción.
print(list(db.productos.find({
    "categoria": "Computo",
    "precio": {"$lt": 10000},
    "stock": {"$gte": 10},
    "activo": True
})))
