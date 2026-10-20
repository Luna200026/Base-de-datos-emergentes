from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["ventas_online"]

# Ejercicio 1
print(list(db.productos.find({"sku": "P009"})))
db.productos.update_one({"sku": "P009"}, {"$set": {"precio": 4990}})
print(list(db.productos.find({"sku": "P009"})))

# Ejercicio 2
print(list(db.productos.find({"sku": "P010"})))
db.productos.update_one({"sku": "P010"}, {"$inc": {"stock": 10}})
print(list(db.productos.find({"sku": "P010"})))

# Ejercicio 3
print(list(db.productos.find({"sku": "P011"})))
db.productos.update_one({"sku": "P011"}, {"$inc": {"stock": -3}})
print(list(db.productos.find({"sku": "P011"})))

# Ejercicio 4
print(list(db.productos.find({"sku": "P005"})))
db.productos.update_one({"sku": "P005"}, {"$set": {"precio": 1550}, "$inc": {"stock": 8}})
print(list(db.productos.find({"sku": "P005"})))

# Ejercicio 5
print(list(db.productos.find({"sku": "P005"})))
db.productos.update_one({"sku": "P005"}, {"$addToSet": {"etiquetas": "recomendado"}})
db.productos.update_one({"sku": "P005"}, {"$addToSet": {"etiquetas": "recomendado"}})
print(list(db.productos.find({"sku": "P005"})))
# La etiqueta solo aparece una vez: $addToSet no la vuelve a agregar si ya existe.

# Ejercicio 6
print(list(db.productos.find({"categoria": "Accesorios"})))
db.productos.update_many({"categoria": "Accesorios"}, {"$inc": {"stock": 10}})
print(list(db.productos.find({"categoria": "Accesorios"})))

# Ejercicio 7
db.productos.update_many({"categoria": "Computo"}, {"$addToSet": {"etiquetas": "catalogo"}})
print(list(db.productos.find({"categoria": "Computo"})))

# Ejercicio 8
db.productos.update_one({"sku": "P009"}, {"$set": {"garantia_meses": 12}})
print(list(db.productos.find({"sku": "P009"})))
db.productos.update_one({"sku": "P009"}, {"$unset": {"garantia_meses": ""}})
print(list(db.productos.find({"sku": "P009"})))

# Ejercicio 9
db.productos.insert_one({"sku": "TEMP02", "nombre": "Producto temporal 2", "categoria": "Prueba", "precio": 200, "stock": 5})
print(list(db.productos.find({"sku": "TEMP02"})))
db.productos.delete_one({"sku": "TEMP02"})
print(list(db.productos.find({"sku": "TEMP02"})))

# Ejercicio 10
db.productos.insert_many([
    {"sku": "TEMP03", "nombre": "Producto temporal 3", "categoria": "Prueba", "precio": 300, "stock": 3},
    {"sku": "TEMP04", "nombre": "Producto temporal 4", "categoria": "Prueba", "precio": 400, "stock": 4}
])
print(list(db.productos.find({"sku": {"$in": ["TEMP03", "TEMP04"]}})))
db.productos.delete_one({"sku": "TEMP03"})
print(list(db.productos.find({"sku": {"$in": ["TEMP03", "TEMP04"]}})))

# Ejercicio 11
db.productos.insert_many([
    {"sku": "DEL01", "nombre": "Producto eliminar 1", "categoria": "Eliminar", "precio": 100, "stock": 1},
    {"sku": "DEL02", "nombre": "Producto eliminar 2", "categoria": "Eliminar", "precio": 200, "stock": 2},
    {"sku": "DEL03", "nombre": "Producto eliminar 3", "categoria": "Eliminar", "precio": 300, "stock": 3}
])
print(list(db.productos.find({"categoria": "Eliminar"})))
db.productos.delete_many({"categoria": "Eliminar"})
print(list(db.productos.find({"categoria": "Eliminar"})))

# Ejercicio 12
# Ejecutar primero find() con el mismo filtro permite ver qué documentos serán afectados
# antes de modificarlos o eliminarlos, y así evitar cambios o borrados por un filtro equivocado.

# Ejercicio 13
# matchedCount: documentos que coincidieron con el filtro.
# modifiedCount: documentos que realmente cambiaron.

# Ejercicio 14
# $addToSet solo agrega el elemento si no existe en el array, por lo que evita duplicados;
# agregarlo directamente ($push) lo inserta aunque ya exista.
