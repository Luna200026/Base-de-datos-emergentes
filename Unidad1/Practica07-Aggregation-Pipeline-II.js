use ventas_online

// Ejercicio 1
db.ventas.aggregate([
    { $project: { _id: 0, venta_id: 1, cliente_id: 1, fecha: 1, total: 1 } }
])

// Ejercicio 2
db.ventas.aggregate([
    {
        $project: {
            _id: 0,
            venta_id: 1,
            total: 1,
            iva_estimado: { $multiply: ["$total", 0.16] }
        }
    }
])

// Ejercicio 3
db.ventas.aggregate([
    { $project: { _id: 0, venta_id: 1, fecha: 1, anio: { $year: "$fecha" } } }
])

// Ejercicio 4
db.ventas.aggregate([
    { $project: { _id: 0, venta_id: 1, fecha: 1, mes: { $month: "$fecha" } } }
])

// Ejercicio 5
db.ventas.aggregate([
    {
        $project: {
            _id: 0,
            venta_id: 1,
            anio: { $year: "$fecha" },
            mes: { $month: "$fecha" },
            total: 1
        }
    }
])

// Ejercicio 6
db.ventas.aggregate([
    { $project: { anio: { $year: "$fecha" }, mes: { $month: "$fecha" }, total: 1 } },
    {
        $group: {
            _id: { anio: "$anio", mes: "$mes" },
            ventas: { $sum: 1 },
            ingreso_total: { $sum: "$total" }
        }
    },
    { $sort: { "_id.anio": 1, "_id.mes": 1 } }
])

// Ejercicio 7
db.ventas.aggregate([
    { $project: { anio: { $year: "$fecha" }, mes: { $month: "$fecha" } } },
    { $group: { _id: { anio: "$anio", mes: "$mes" }, ventas: { $sum: 1 } } },
    { $sort: { "_id.anio": 1, "_id.mes": 1 } }
])

// Ejercicio 8
db.ventas.aggregate([
    { $project: { anio: { $year: "$fecha" }, mes: { $month: "$fecha" }, total: 1 } },
    { $group: { _id: { anio: "$anio", mes: "$mes" }, ingreso_total: { $sum: "$total" } } },
    { $sort: { "_id.anio": 1, "_id.mes": 1 } }
])

// Ejercicio 9
db.ventas.aggregate([
    { $unwind: "$items" }
])

// Ejercicio 10
db.ventas.aggregate([
    { $unwind: "$items" },
    {
        $project: {
            _id: 0,
            venta_id: 1,
            sku: "$items.sku",
            cantidad: "$items.cantidad",
            precio: "$items.precio"
        }
    }
])

// Ejercicio 11
db.ventas.aggregate([
    { $unwind: "$items" },
    { $group: { _id: "$items.sku", unidades_vendidas: { $sum: "$items.cantidad" } } }
])

// Ejercicio 12
db.ventas.aggregate([
    { $unwind: "$items" },
    { $group: { _id: "$items.sku", unidades_vendidas: { $sum: "$items.cantidad" } } },
    { $sort: { unidades_vendidas: -1 } }
])

// Ejercicio 13
db.ventas.aggregate([
    { $unwind: "$items" },
    {
        $group: {
            _id: "$items.sku",
            ingreso_producto: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso_producto: -1 } }
])

// Ejercicio 14
db.ventas.aggregate([
    { $unwind: "$items" },
    {
        $group: {
            _id: "$items.sku",
            unidades_vendidas: { $sum: "$items.cantidad" },
            ingreso_producto: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso_producto: -1 } },
    { $limit: 5 }
])

// Ejercicio 15
db.ventas.aggregate([
    { $unwind: "$items" },
    { $group: { _id: "$items.sku", unidades_vendidas: { $sum: "$items.cantidad" } } },
    { $sort: { unidades_vendidas: -1 } },
    { $limit: 10 }
])

// Ejercicio 16
db.ventas.aggregate([
    { $match: { estado: "completada" } },
    { $unwind: "$items" },
    { $group: { _id: "$items.sku", unidades: { $sum: "$items.cantidad" } } },
    { $sort: { unidades: -1 } }
])

// Ejercicio 17
db.ventas.aggregate([
    { $match: { estado: "completada" } },
    { $project: { anio: { $year: "$fecha" }, mes: { $month: "$fecha" }, total: 1 } },
    {
        $group: {
            _id: { anio: "$anio", mes: "$mes" },
            ventas: { $sum: 1 },
            ingreso: { $sum: "$total" }
        }
    },
    { $sort: { "_id.anio": 1, "_id.mes": 1 } }
])

// Ejercicio 18
db.ventas.aggregate([
    { $unwind: "$items" },
    { $group: { _id: null, unidades_totales: { $sum: "$items.cantidad" } } }
])

// Ejercicio 19
db.ventas.aggregate([
    { $unwind: "$items" },
    { $group: { _id: "$items.sku", unidades: { $sum: "$items.cantidad" } } },
    { $group: { _id: null, promedio_unidades_por_producto: { $avg: "$unidades" } } }
])

// Ejercicio 20
// Productos que más se venden por el canal "app" en ventas completadas:
// unidades e ingreso por sku. Sirve para saber qué productos conviene destacar
// o promocionar dentro de la aplicación.
db.ventas.aggregate([
    { $match: { canal: "app", estado: "completada" } },
    { $unwind: "$items" },
    {
        $group: {
            _id: "$items.sku",
            unidades: { $sum: "$items.cantidad" },
            ingreso: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso: -1 } }
])
