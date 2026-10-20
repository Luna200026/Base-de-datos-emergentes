use ventas_online

// Ejercicio 1
db.ventas.aggregate([
    {
        $lookup: {
            from: "clientes",
            localField: "cliente_id",
            foreignField: "cliente_id",
            as: "cliente"
        }
    }
])

// Ejercicio 2
db.ventas.aggregate([
    { $lookup: { from: "clientes", localField: "cliente_id", foreignField: "cliente_id", as: "cliente" } },
    { $unwind: "$cliente" },
    {
        $project: {
            _id: 0,
            venta_id: 1,
            fecha: 1,
            nombre_cliente: "$cliente.nombre",
            total: 1
        }
    }
])

// Ejercicio 3
db.ventas.aggregate([
    { $lookup: { from: "clientes", localField: "cliente_id", foreignField: "cliente_id", as: "cliente" } },
    { $unwind: "$cliente" },
    { $project: { _id: 0, venta_id: 1, cliente: "$cliente.nombre", total: 1 } },
    { $sort: { total: -1 } }
])

// Ejercicio 4
db.ventas.aggregate([
    { $lookup: { from: "clientes", localField: "cliente_id", foreignField: "cliente_id", as: "cliente" } },
    { $unwind: "$cliente" },
    {
        $project: {
            _id: 0,
            venta_id: 1,
            cliente: "$cliente.nombre",
            ciudad: "$cliente.direccion.ciudad",
            total: 1
        }
    },
    { $sort: { total: -1 } },
    { $limit: 10 }
])

// Ejercicio 5
db.ventas.aggregate([
    { $match: { estado: "completada" } },
    { $lookup: { from: "clientes", localField: "cliente_id", foreignField: "cliente_id", as: "cliente" } },
    { $unwind: "$cliente" },
    { $project: { _id: 0, venta_id: 1, cliente: "$cliente.nombre", total: 1, estado: 1 } }
])

// Ejercicio 6
db.ventas.aggregate([
    { $lookup: { from: "clientes", localField: "cliente_id", foreignField: "cliente_id", as: "cliente" } },
    { $unwind: "$cliente" },
    { $match: { "cliente.direccion.ciudad": "Culiacán" } },
    {
        $project: {
            _id: 0,
            venta_id: 1,
            cliente: "$cliente.nombre",
            ciudad: "$cliente.direccion.ciudad",
            total: 1
        }
    }
])

// Ejercicio 7
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" }
])

// Ejercicio 8
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    {
        $project: {
            _id: 0,
            venta_id: 1,
            producto: "$producto.nombre",
            categoria: "$producto.categoria",
            cantidad: "$items.cantidad",
            precio: "$items.precio",
            importe: { $multiply: ["$items.cantidad", "$items.precio"] }
        }
    }
])

// Ejercicio 9
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    { $group: { _id: "$producto.categoria", unidades: { $sum: "$items.cantidad" } } }
])

// Ejercicio 10
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    {
        $group: {
            _id: "$producto.categoria",
            ingreso: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    }
])

// Ejercicio 11
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    {
        $group: {
            _id: "$producto.categoria",
            unidades: { $sum: "$items.cantidad" },
            ingreso: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso: -1 } }
])

// Ejercicio 12
db.ventas.aggregate([
    { $match: { estado: "completada" } },
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    {
        $group: {
            _id: "$producto.categoria",
            unidades: { $sum: "$items.cantidad" },
            ingreso: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso: -1 } }
])

// Ejercicio 13
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    {
        $group: {
            _id: "$producto.categoria",
            ingreso: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso: -1 } },
    { $limit: 5 }
])

// Ejercicio 14
db.productos.aggregate([
    { $lookup: { from: "proveedores", localField: "proveedor_id", foreignField: "proveedor_id", as: "proveedor" } },
    { $unwind: "$proveedor" },
    {
        $project: {
            _id: 0,
            sku: 1,
            producto: "$nombre",
            categoria: 1,
            proveedor: "$proveedor.nombre",
            ciudad_proveedor: "$proveedor.ciudad"
        }
    },
    { $sort: { proveedor: 1, producto: 1 } }
])

// Ejercicio 15
db.productos.aggregate([
    { $lookup: { from: "proveedores", localField: "proveedor_id", foreignField: "proveedor_id", as: "proveedor" } },
    { $unwind: "$proveedor" },
    {
        $group: {
            _id: { proveedor_id: "$proveedor.proveedor_id", proveedor: "$proveedor.nombre" },
            productos: { $sum: 1 }
        }
    }
])

// Ejercicio 16
db.productos.aggregate([
    { $lookup: { from: "proveedores", localField: "proveedor_id", foreignField: "proveedor_id", as: "proveedor" } },
    { $unwind: "$proveedor" },
    {
        $group: {
            _id: { proveedor_id: "$proveedor.proveedor_id", proveedor: "$proveedor.nombre" },
            productos: { $sum: 1 }
        }
    },
    { $sort: { productos: -1 } }
])

// Ejercicio 17
db.ventas.aggregate([
    { $lookup: { from: "clientes", localField: "cliente_id", foreignField: "cliente_id", as: "cliente" } },
    { $unwind: "$cliente" },
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" }
])

// Ejercicio 18
db.ventas.aggregate([
    { $lookup: { from: "clientes", localField: "cliente_id", foreignField: "cliente_id", as: "cliente" } },
    { $unwind: "$cliente" },
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    {
        $project: {
            _id: 0,
            venta_id: 1,
            cliente: "$cliente.nombre",
            ciudad: "$cliente.direccion.ciudad",
            producto: "$producto.nombre",
            categoria: "$producto.categoria",
            cantidad: "$items.cantidad",
            precio: "$items.precio"
        }
    }
])

// Ejercicio 19
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    { $lookup: { from: "proveedores", localField: "producto.proveedor_id", foreignField: "proveedor_id", as: "proveedor" } },
    { $unwind: "$proveedor" },
    {
        $group: {
            _id: { proveedor_id: "$proveedor.proveedor_id", proveedor: "$proveedor.nombre" },
            unidades: { $sum: "$items.cantidad" }
        }
    },
    { $sort: { unidades: -1 } }
])

// Ejercicio 20
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    { $lookup: { from: "proveedores", localField: "producto.proveedor_id", foreignField: "proveedor_id", as: "proveedor" } },
    { $unwind: "$proveedor" },
    {
        $group: {
            _id: { proveedor_id: "$proveedor.proveedor_id", proveedor: "$proveedor.nombre" },
            ingreso: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso: -1 } }
])

// Ejercicio 21
db.ventas.aggregate([
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    { $lookup: { from: "proveedores", localField: "producto.proveedor_id", foreignField: "proveedor_id", as: "proveedor" } },
    { $unwind: "$proveedor" },
    {
        $group: {
            _id: { proveedor_id: "$proveedor.proveedor_id", proveedor: "$proveedor.nombre" },
            unidades: { $sum: "$items.cantidad" },
            ingreso: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso: -1 } },
    { $limit: 5 }
])

// Ejercicio 22
db.ventas.aggregate([
    { $match: { estado: "completada" } },
    { $unwind: "$items" },
    { $lookup: { from: "productos", localField: "items.sku", foreignField: "sku", as: "producto" } },
    { $unwind: "$producto" },
    { $lookup: { from: "proveedores", localField: "producto.proveedor_id", foreignField: "proveedor_id", as: "proveedor" } },
    { $unwind: "$proveedor" },
    {
        $group: {
            _id: { proveedor_id: "$proveedor.proveedor_id", proveedor: "$proveedor.nombre" },
            unidades: { $sum: "$items.cantidad" },
            ingreso: { $sum: { $multiply: ["$items.cantidad", "$items.precio"] } }
        }
    },
    { $sort: { ingreso: -1 } },
    { $limit: 5 }
])
