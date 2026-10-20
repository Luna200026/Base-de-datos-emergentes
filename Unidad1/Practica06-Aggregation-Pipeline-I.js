use ventas_online

// Ejercicio 1
db.ventas.aggregate([
    { $group: { _id: null, numero_ventas: { $sum: 1 } } }
])

// Ejercicio 2
db.ventas.aggregate([
    { $group: { _id: null, ingreso_total: { $sum: "$total" } } }
])

// Ejercicio 3
db.ventas.aggregate([
    { $group: { _id: null, importe_promedio: { $avg: "$total" } } }
])

// Ejercicio 4
db.ventas.aggregate([
    {
        $group: {
            _id: null,
            ventas: { $sum: 1 },
            ingreso_total: { $sum: "$total" },
            venta_minima: { $min: "$total" },
            venta_maxima: { $max: "$total" },
            ticket_promedio: { $avg: "$total" }
        }
    }
])

// Ejercicio 5
db.ventas.aggregate([
    { $group: { _id: "$canal", ventas: { $sum: 1 } } }
])

// Ejercicio 6
db.ventas.aggregate([
    { $group: { _id: "$canal", ingreso_total: { $sum: "$total" } } }
])

// Ejercicio 7
db.ventas.aggregate([
    { $group: { _id: "$canal", ticket_promedio: { $avg: "$total" } } }
])

// Ejercicio 8
db.ventas.aggregate([
    { $group: { _id: "$canal", ventas: { $sum: 1 }, ingreso_total: { $sum: "$total" } } },
    { $sort: { ingreso_total: -1 } }
])

// Ejercicio 9
db.ventas.aggregate([
    { $group: { _id: "$estado", ventas: { $sum: 1 } } },
    { $sort: { ventas: -1 } }
])

// Ejercicio 10
db.ventas.aggregate([
    { $group: { _id: "$estado", ingreso_total: { $sum: "$total" } } },
    { $sort: { ingreso_total: -1 } }
])

// Ejercicio 11
db.ventas.aggregate([
    { $match: { estado: "completada" } }
])

// Ejercicio 12
db.ventas.aggregate([
    { $match: { estado: "completada" } },
    { $group: { _id: null, ventas_completadas: { $sum: 1 }, ingreso_total: { $sum: "$total" } } }
])

// Ejercicio 13
db.ventas.aggregate([
    { $match: { estado: "completada" } },
    { $group: { _id: "$canal", ventas: { $sum: 1 }, ingreso: { $sum: "$total" } } },
    { $sort: { ingreso: -1 } }
])

// Ejercicio 14
db.ventas.aggregate([
    { $group: { _id: "$cliente_id", compras: { $sum: 1 } } },
    { $sort: { compras: -1 } }
])

// Ejercicio 15
db.ventas.aggregate([
    { $group: { _id: "$cliente_id", gasto_total: { $sum: "$total" } } },
    { $sort: { gasto_total: -1 } }
])

// Ejercicio 16
db.ventas.aggregate([
    { $group: { _id: "$cliente_id", gasto_promedio: { $avg: "$total" } } },
    { $sort: { gasto_promedio: -1 } }
])

// Ejercicio 17
db.ventas.aggregate([
    { $group: { _id: "$cliente_id", compras: { $sum: 1 }, gasto_total: { $sum: "$total" } } },
    { $sort: { gasto_total: -1 } },
    { $limit: 5 }
])

// Ejercicio 18
db.ventas.aggregate([
    { $group: { _id: "$cliente_id", compras: { $sum: 1 }, gasto_total: { $sum: "$total" } } },
    { $sort: { compras: -1 } },
    { $limit: 10 }
])

// Ejercicio 19
db.ventas.aggregate([
    { $match: { total: { $gte: 2000 } } },
    { $group: { _id: "$canal", ventas: { $sum: 1 } } },
    { $sort: { ventas: -1 } }
])

// Ejercicio 20
// Ventas pendientes agrupadas por canal: cuántas hay, cuánto dinero suman y su promedio.
// Muestra el ingreso que todavía no se concreta en cada canal y dónde conviene dar
// seguimiento primero para cerrar esas ventas.
db.ventas.aggregate([
    { $match: { estado: "pendiente" } },
    {
        $group: {
            _id: "$canal",
            ventas_pendientes: { $sum: 1 },
            importe_pendiente: { $sum: "$total" },
            promedio: { $avg: "$total" }
        }
    },
    { $sort: { importe_pendiente: -1 } }
])
