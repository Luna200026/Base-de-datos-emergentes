use ventas_online

// Preparación: quitar los índices creados al seguir la guía (solo por nombre, sin dropIndexes())
// para que las mediciones "antes" se hagan sin índice. Si no existen, no pasa nada.
;["cliente_id_1", "estado_1", "cliente_id_1_estado_1", "cliente_id_1_fecha_-1", "items.sku_1"].forEach(function (nombre) {
    try { db.ventas.dropIndex(nombre) } catch (e) { }
})
;["categoria_1", "categoria_1_precio_1", "etiquetas_1"].forEach(function (nombre) {
    try { db.productos.dropIndex(nombre) } catch (e) { }
})

// Ejercicio 1
db.ventas.getIndexes()

// Ejercicio 2
db.ventas.find({ cliente_id: "C001" }).explain("executionStats")

// Ejercicio 3
db.ventas.createIndex({ cliente_id: 1 })

// Ejercicio 4
db.ventas.find({ cliente_id: "C001" }).explain("executionStats")
// Antes: COLLSCAN, nReturned 8, totalDocsExamined 100, totalKeysExamined 0
// Después: IXSCAN, nReturned 8, totalDocsExamined 8, totalKeysExamined 8
// executionTimeMillis: anotar el valor que muestre tu equipo (con 100 documentos casi no cambia)

// Ejercicio 5
// COLLSCAN: MongoDB recorre todos los documentos de la colección para ver cuáles cumplen el filtro.
// IXSCAN: MongoDB usa un índice para ir directo a los documentos que coinciden,
// por eso examina muchos menos documentos.

// Ejercicio 6
db.ventas.find({ estado: "completada" }).explain("executionStats")

// Ejercicio 7
db.ventas.createIndex({ estado: 1 })
db.ventas.find({ estado: "completada" }).explain("executionStats")

// Ejercicio 8
// Con cliente_id el índice reduce los documentos examinados de 100 a 8.
// Con estado solo baja de 100 a 76, porque la mayoría de las ventas están completadas.
// cliente_id es más selectivo (50 clientes distintos) que estado (solo 3 valores posibles),
// así que su índice filtra mucho más.

// Ejercicio 9
db.ventas.createIndex({ cliente_id: 1, estado: 1 })
db.ventas.find({ cliente_id: "C001", estado: "completada" }).explain("executionStats")

// Ejercicio 10
db.ventas.createIndex({ cliente_id: 1, fecha: -1 })
db.ventas.find({
    cliente_id: "C001",
    fecha: { $gte: ISODate("2026-01-01") }
}).explain("executionStats")

// Ejercicio 11
db.ventas.find({ "items.sku": "P001" }).explain("executionStats")

// Ejercicio 12
db.ventas.createIndex({ "items.sku": 1 })
db.ventas.find({ "items.sku": "P001" }).explain("executionStats")

// Ejercicio 13
// items es un array, así que MongoDB crea una entrada del índice por cada elemento del array.
// Una sola venta con 3 productos queda indexada 3 veces (una por cada sku); a eso se le llama
// índice multikey. En explain aparece isMultiKey: true.

// Ejercicio 14
db.productos.getIndexes()

// Ejercicio 15
db.productos.find({ categoria: "Computo" }).explain("executionStats")

// Ejercicio 16
db.productos.createIndex({ categoria: 1 })
db.productos.find({ categoria: "Computo" }).explain("executionStats")
// Antes: COLLSCAN, 50 documentos examinados. Después: IXSCAN, 13 documentos examinados.

// Ejercicio 17
db.productos.createIndex({ categoria: 1, precio: 1 })

// Ejercicio 18
db.productos.find({
    categoria: "Computo",
    precio: { $gte: 5000 }
}).explain("executionStats")

// Ejercicio 19
db.productos.find({ categoria: "Computo" }).sort({ precio: 1 }).explain("executionStats")
// MongoDB usa el índice categoria_1_precio_1: con él encuentra los productos de Computo
// y además ya los devuelve ordenados por precio, sin necesitar una etapa SORT aparte.

// Ejercicio 20
// Consulta de la práctica 3: productos con la etiqueta "gaming"
db.productos.find({ etiquetas: "gaming" }).explain("executionStats")

// Ejercicio 21
// Propongo un índice sobre etiquetas. Es una búsqueda frecuente en una tienda (filtrar por
// tipo de producto) y sin índice MongoDB revisa los 50 productos para devolver solo 7.
// Como etiquetas es un array, el índice será multikey.

// Ejercicio 22
db.productos.createIndex({ etiquetas: 1 })
db.productos.find({ etiquetas: "gaming" }).explain("executionStats")
// Antes: COLLSCAN, 50 documentos examinados. Después: IXSCAN, 7 documentos examinados.

// Ejercicio 23
// Valores con los datos cargados en la práctica 5 (100 ventas y 50 productos):
//
// Consulta            | Índice                | Plan antes | Plan después | Docs antes | Docs después
// Cliente C001        | cliente_id            | COLLSCAN   | IXSCAN       | 100        | 8
// Estado completada   | estado                | COLLSCAN   | IXSCAN       | 100        | 76
// Producto P001       | items.sku             | COLLSCAN   | IXSCAN       | 100        | 7
// Computo >= $5,000   | categoria + precio    | COLLSCAN   | IXSCAN       | 50         | 11

// Ejercicio 24
// El índice sobre items.sku fue el que más redujo totalDocsExamined: de 100 a 7 (93 documentos menos).
// Muy cerca quedó cliente_id, de 100 a 8.

// Ejercicio 25
// Con 100 documentos recorrer toda la colección tarda casi nada, por eso la diferencia de tiempo
// apenas se nota. Pero el costo de un COLLSCAN crece con el tamaño de la colección: con un millón
// de ventas MongoDB tendría que revisar un millón de documentos para devolver unos pocos.
// Con un índice solo revisa los documentos que coinciden, así que la consulta sigue siendo rápida
// aunque la colección crezca.
