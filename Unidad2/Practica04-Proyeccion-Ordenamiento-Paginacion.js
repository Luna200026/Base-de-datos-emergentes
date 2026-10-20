use ventas_online

// Ejercicio 1
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
)

// Ejercicio 2
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, categoria: 1, stock: 1 }
)

// Ejercicio 3
db.productos.find(
    { categoria: "Audio" },
    { _id: 0, nombre: 1, precio: 1 }
)

// Ejercicio 4
db.productos.find(
    {},
    { etiquetas: 0 }
)

// Ejercicio 5
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ precio: 1 })

// Ejercicio 6
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ precio: -1 })

// Ejercicio 7
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, stock: 1 }
).sort({ stock: 1 })

// Ejercicio 8
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1 }
).sort({ nombre: 1 })

// Ejercicio 9
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, categoria: 1, precio: 1 }
).sort({ categoria: 1, precio: -1 })

// Ejercicio 10
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ precio: -1 }).limit(5)

// Ejercicio 11
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ precio: 1 }).limit(5)

// Ejercicio 12
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, stock: 1 }
).sort({ stock: 1 }).limit(10)

// Ejercicio 13
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, stock: 1 }
).sort({ stock: -1 }).limit(5)

// Ejercicio 14
db.productos.find(
    { categoria: "Audio" },
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ precio: -1 }).limit(3)

// Ejercicio 15
db.productos.find(
    { categoria: "Accesorios" },
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ precio: 1 }).limit(5)

// Ejercicio 16
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ sku: 1 }).skip(0).limit(10)

// Ejercicio 17
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ sku: 1 }).skip(10).limit(10)

// Ejercicio 18
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ sku: 1 }).skip(30).limit(10)

// Ejercicio 19
db.productos.find(
    { categoria: "Computo" },
    { _id: 0, sku: 1, nombre: 1, precio: 1 }
).sort({ precio: -1 }).skip(0).limit(5)

// Ejercicio 20
// Los 5 productos activos de Almacenamiento con más stock y precio menor a $1,500.
// Indica qué productos económicos de almacenamiento tienen más existencias,
// útiles para una promoción o para venderlos en volumen.
db.productos.find(
    { categoria: "Almacenamiento", precio: { $lt: 1500 }, activo: true },
    { _id: 0, sku: 1, nombre: 1, precio: 1, stock: 1 }
).sort({ stock: -1 }).limit(5)
