use ventas_online

// Ejercicio 1
db.clientes.insertMany([
    { cliente_id: "C003", nombre: "María Torres", correo: "maria.torres@email.com", telefono: "6678056747", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["accesorios", "hogar"], activo: true },
    { cliente_id: "C004", nombre: "José Rojo", correo: "jose.rojo@email.com", telefono: "6671042527", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["movilidad", "almacenamiento", "accesorios"], activo: true },
    { cliente_id: "C005", nombre: "Luis Félix", correo: "luis.felix@email.com", telefono: "6679225646", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["electronica", "almacenamiento", "tecnologia"], activo: true },
    { cliente_id: "C006", nombre: "Fernanda Quintero", correo: "fernanda.quintero@email.com", telefono: "6677314012", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["audio", "gaming", "hogar"], activo: true },
    { cliente_id: "C007", nombre: "Jorge Valenzuela", correo: "jorge.valenzuela@email.com", telefono: "6675900991", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["gaming", "electronica"], activo: true },
    { cliente_id: "C008", nombre: "Daniela Cruz", correo: "daniela.cruz@email.com", telefono: "6678735513", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["tecnologia", "gaming", "hogar"], activo: true },
    { cliente_id: "C009", nombre: "Ricardo Ruiz", correo: "ricardo.ruiz@email.com", telefono: "6677679821", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["electronica", "oficina", "almacenamiento"], activo: true },
    { cliente_id: "C010", nombre: "Sofía Camacho", correo: "sofia.camacho@email.com", telefono: "6674766902", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["movilidad", "almacenamiento", "tecnologia"], activo: true },
    { cliente_id: "C011", nombre: "Miguel Inzunza", correo: "miguel.inzunza@email.com", telefono: "6678204296", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["hogar", "electronica"], activo: true },
    { cliente_id: "C012", nombre: "Valeria Castro", correo: "valeria.castro@email.com", telefono: "6678875326", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["electronica", "almacenamiento"], activo: true },
    { cliente_id: "C013", nombre: "Alejandro Beltrán", correo: "alejandro.beltran@email.com", telefono: "6679420478", direccion: { ciudad: "Hermosillo", estado: "Sonora", cp: "83000" }, preferencias: ["hogar", "oficina", "audio"], activo: true },
    { cliente_id: "C014", nombre: "Paola Beltrán", correo: "paola.beltran@email.com", telefono: "6675513674", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["oficina", "accesorios", "audio"], activo: true },
    { cliente_id: "C015", nombre: "Eduardo García", correo: "eduardo.garcia@email.com", telefono: "6674352718", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["hogar", "almacenamiento", "gaming"], activo: true },
    { cliente_id: "C016", nombre: "Andrea Reyes", correo: "andrea.reyes@email.com", telefono: "6671564049", direccion: { ciudad: "Navolato", estado: "Sinaloa", cp: "80300" }, preferencias: ["hogar", "almacenamiento", "oficina"], activo: true },
    { cliente_id: "C017", nombre: "Fernando Osuna", correo: "fernando.osuna@email.com", telefono: "6678598748", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["electronica", "almacenamiento", "audio"], activo: false },
    { cliente_id: "C018", nombre: "Karla Camacho", correo: "karla.camacho@email.com", telefono: "6679362112", direccion: { ciudad: "Tepic", estado: "Nayarit", cp: "63000" }, preferencias: ["almacenamiento", "electronica", "audio"], activo: true },
    { cliente_id: "C019", nombre: "Roberto Gutiérrez", correo: "roberto.gutierrez@email.com", telefono: "6672546333", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["computacion", "almacenamiento", "tecnologia"], activo: true },
    { cliente_id: "C020", nombre: "Mariana García", correo: "mariana.garcia@email.com", telefono: "6675158025", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["movilidad", "accesorios"], activo: true },
    { cliente_id: "C021", nombre: "Héctor Torres", correo: "hector.torres@email.com", telefono: "6676258696", direccion: { ciudad: "Guasave", estado: "Sinaloa", cp: "81000" }, preferencias: ["gaming", "computacion", "tecnologia"], activo: true },
    { cliente_id: "C022", nombre: "Gabriela Quintero", correo: "gabriela.quintero@email.com", telefono: "6678935346", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["computacion", "hogar", "accesorios"], activo: true },
    { cliente_id: "C023", nombre: "Raúl Sánchez", correo: "raul.sanchez@email.com", telefono: "6673270731", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["electronica", "oficina", "computacion"], activo: true },
    { cliente_id: "C024", nombre: "Lucía Rojo", correo: "lucia.rojo@email.com", telefono: "6673492025", direccion: { ciudad: "Guadalajara", estado: "Jalisco", cp: "44100" }, preferencias: ["hogar", "oficina", "movilidad"], activo: true },
    { cliente_id: "C025", nombre: "Arturo Vargas", correo: "arturo.vargas@email.com", telefono: "6672232006", direccion: { ciudad: "Guadalajara", estado: "Jalisco", cp: "44100" }, preferencias: ["tecnologia", "electronica", "oficina"], activo: true },
    { cliente_id: "C026", nombre: "Diana Hernández", correo: "diana.hernandez@email.com", telefono: "6676498901", direccion: { ciudad: "Guadalajara", estado: "Jalisco", cp: "44100" }, preferencias: ["tecnologia", "movilidad", "almacenamiento"], activo: true },
    { cliente_id: "C027", nombre: "Sergio Quintero", correo: "sergio.quintero@email.com", telefono: "6673864434", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["electronica", "almacenamiento", "hogar"], activo: true },
    { cliente_id: "C028", nombre: "Claudia Flores", correo: "claudia.flores@email.com", telefono: "6678697676", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["oficina", "gaming"], activo: true },
    { cliente_id: "C029", nombre: "Óscar Félix", correo: "oscar.felix@email.com", telefono: "6671572987", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["hogar", "oficina"], activo: true },
    { cliente_id: "C030", nombre: "Patricia Díaz", correo: "patricia.diaz@email.com", telefono: "6671808451", direccion: { ciudad: "Guasave", estado: "Sinaloa", cp: "81000" }, preferencias: ["tecnologia", "hogar"], activo: true },
    { cliente_id: "C031", nombre: "Javier Medina", correo: "javier.medina@email.com", telefono: "6673166605", direccion: { ciudad: "Hermosillo", estado: "Sonora", cp: "83000" }, preferencias: ["almacenamiento", "tecnologia"], activo: true },
    { cliente_id: "C032", nombre: "Elena Zazueta", correo: "elena.zazueta@email.com", telefono: "6677542635", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["computacion", "movilidad"], activo: true },
    { cliente_id: "C033", nombre: "Francisco Reyes", correo: "francisco.reyes@email.com", telefono: "6674140674", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["electronica", "oficina", "audio"], activo: true },
    { cliente_id: "C034", nombre: "Brenda Gutiérrez", correo: "brenda.gutierrez@email.com", telefono: "6678846710", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["almacenamiento", "oficina", "audio"], activo: false },
    { cliente_id: "C035", nombre: "Manuel Gómez", correo: "manuel.gomez@email.com", telefono: "6672586554", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["almacenamiento", "electronica", "audio"], activo: true },
    { cliente_id: "C036", nombre: "Adriana Gastélum", correo: "adriana.gastelum@email.com", telefono: "6676543899", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["electronica", "almacenamiento"], activo: true },
    { cliente_id: "C037", nombre: "Antonio Ruiz", correo: "antonio.ruiz@email.com", telefono: "6673629981", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["tecnologia", "gaming"], activo: true },
    { cliente_id: "C038", nombre: "Natalia Gutiérrez", correo: "natalia.gutierrez@email.com", telefono: "6674597623", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["electronica", "audio"], activo: true },
    { cliente_id: "C039", nombre: "Iván Sánchez", correo: "ivan.sanchez@email.com", telefono: "6675424365", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["hogar", "computacion", "electronica"], activo: true },
    { cliente_id: "C040", nombre: "Mónica Torres", correo: "monica.torres@email.com", telefono: "6676976939", direccion: { ciudad: "Hermosillo", estado: "Sonora", cp: "83000" }, preferencias: ["electronica", "tecnologia"], activo: true },
    { cliente_id: "C041", nombre: "Ramón Valenzuela", correo: "ramon.valenzuela@email.com", telefono: "6675643699", direccion: { ciudad: "Guadalajara", estado: "Jalisco", cp: "44100" }, preferencias: ["hogar", "gaming"], activo: true },
    { cliente_id: "C042", nombre: "Alejandra Sánchez", correo: "alejandra.sanchez@email.com", telefono: "6675297049", direccion: { ciudad: "Guadalajara", estado: "Jalisco", cp: "44100" }, preferencias: ["gaming", "computacion", "audio"], activo: true },
    { cliente_id: "C043", nombre: "Emilio Ramírez", correo: "emilio.ramirez@email.com", telefono: "6672618161", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["oficina", "tecnologia", "hogar"], activo: true },
    { cliente_id: "C044", nombre: "Verónica Morales", correo: "veronica.morales@email.com", telefono: "6676877173", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["electronica", "hogar"], activo: true },
    { cliente_id: "C045", nombre: "Rafael Ortiz", correo: "rafael.ortiz@email.com", telefono: "6674617775", direccion: { ciudad: "Guadalajara", estado: "Jalisco", cp: "44100" }, preferencias: ["oficina", "gaming"], activo: true },
    { cliente_id: "C046", nombre: "Ximena Félix", correo: "ximena.felix@email.com", telefono: "6675220771", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["gaming", "hogar"], activo: true },
    { cliente_id: "C047", nombre: "Pablo Chávez", correo: "pablo.chavez@email.com", telefono: "6675721627", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["tecnologia", "oficina", "movilidad"], activo: true },
    { cliente_id: "C048", nombre: "Carolina Beltrán", correo: "carolina.beltran@email.com", telefono: "6676349960", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["audio", "oficina"], activo: true },
    { cliente_id: "C049", nombre: "Diego Sánchez", correo: "diego.sanchez@email.com", telefono: "6672889074", direccion: { ciudad: "Hermosillo", estado: "Sonora", cp: "83000" }, preferencias: ["accesorios", "hogar", "tecnologia"], activo: true },
    { cliente_id: "C050", nombre: "Lorena Gómez", correo: "lorena.gomez@email.com", telefono: "6679767502", direccion: { ciudad: "Guasave", estado: "Sinaloa", cp: "81000" }, preferencias: ["tecnologia", "computacion"], activo: true }
])

db.clientes.countDocuments()

// Ejercicio 2
db.proveedores.insertMany([
    { proveedor_id: "PR004", nombre: "Electrónica Sinaloense", ciudad: "Culiacán", estado: "Sinaloa", activo: true },
    { proveedor_id: "PR005", nombre: "Audio Profesional de México", ciudad: "Ciudad de México", estado: "Ciudad de México", activo: true },
    { proveedor_id: "PR006", nombre: "Almacenamiento Total", ciudad: "Monterrey", estado: "Nuevo León", activo: true },
    { proveedor_id: "PR007", nombre: "Periféricos del Bajío", ciudad: "León", estado: "Guanajuato", activo: true },
    { proveedor_id: "PR008", nombre: "Mayorista Tecnológico del Noroeste", ciudad: "Hermosillo", estado: "Sonora", activo: true },
    { proveedor_id: "PR009", nombre: "Conectividad Integral", ciudad: "Guadalajara", estado: "Jalisco", activo: true },
    { proveedor_id: "PR010", nombre: "Importadora Pacífico Digital", ciudad: "Mazatlán", estado: "Sinaloa", activo: true }
])

db.proveedores.countDocuments()

// Ejercicio 3
db.productos.updateMany(
    { sku: { $in: ["P001", "P012", "P020", "P044", "P048"] } },
    { $set: { proveedor_id: "PR001" } }
)
db.productos.updateMany(
    { sku: { $in: ["P009", "P016", "P024", "P032", "P040"] } },
    { $set: { proveedor_id: "PR002" } }
)
db.productos.updateMany(
    { sku: { $in: ["P004", "P028", "P036", "P026", "P046"] } },
    { $set: { proveedor_id: "PR003" } }
)
db.productos.updateMany(
    { sku: { $in: ["P002", "P013", "P017", "P034", "P038"] } },
    { $set: { proveedor_id: "PR004" } }
)
db.productos.updateMany(
    { sku: { $in: ["P011", "P029", "P033", "P049", "P041"] } },
    { $set: { proveedor_id: "PR005" } }
)
db.productos.updateMany(
    { sku: { $in: ["P007", "P014", "P027", "P043", "P031"] } },
    { $set: { proveedor_id: "PR006" } }
)
db.productos.updateMany(
    { sku: { $in: ["P005", "P006", "P019", "P050", "P042"] } },
    { $set: { proveedor_id: "PR007" } }
)
db.productos.updateMany(
    { sku: { $in: ["P010", "P018", "P023", "P035", "P039"] } },
    { $set: { proveedor_id: "PR008" } }
)
db.productos.updateMany(
    { sku: { $in: ["P022", "P030", "P047", "P021", "P045"] } },
    { $set: { proveedor_id: "PR009" } }
)
db.productos.updateMany(
    { sku: { $in: ["P003", "P008", "P015", "P025", "P037"] } },
    { $set: { proveedor_id: "PR010" } }
)

db.productos.countDocuments({ proveedor_id: { $exists: true } })

// Ejercicio 4
db.productos.find(
    {},
    { _id: 0, sku: 1, nombre: 1, categoria: 1, proveedor_id: 1 }
).sort({ proveedor_id: 1, nombre: 1 })

// Ejercicio 5
db.ventas.insertMany([
    { venta_id: "V003", cliente_id: "C023", fecha: ISODate("2026-03-10T14:45:00Z"), items: [{ sku: "P042", cantidad: 1, precio: 220 }, { sku: "P020", cantidad: 1, precio: 24500 }], total: 24720, canal: "online", estado: "completada" },
    { venta_id: "V004", cliente_id: "C027", fecha: ISODate("2026-07-27T13:15:00Z"), items: [{ sku: "P050", cantidad: 1, precio: 1050 }, { sku: "P009", cantidad: 1, precio: 4990 }], total: 6040, canal: "online", estado: "completada" },
    { venta_id: "V005", cliente_id: "C035", fecha: ISODate("2026-02-19T11:00:00Z"), items: [{ sku: "P017", cantidad: 1, precio: 950 }, { sku: "P021", cantidad: 2, precio: 690 }], total: 2330, canal: "tienda", estado: "cancelada" },
    { venta_id: "V006", cliente_id: "C033", fecha: ISODate("2026-01-10T19:15:00Z"), items: [{ sku: "P022", cantidad: 2, precio: 620 }, { sku: "P041", cantidad: 1, precio: 1450 }, { sku: "P034", cantidad: 2, precio: 720 }], total: 4130, canal: "tienda", estado: "cancelada" },
    { venta_id: "V007", cliente_id: "C044", fecha: ISODate("2026-07-28T20:30:00Z"), items: [{ sku: "P010", cantidad: 3, precio: 320 }, { sku: "P048", cantidad: 1, precio: 14200 }], total: 15160, canal: "app", estado: "completada" },
    { venta_id: "V008", cliente_id: "C018", fecha: ISODate("2026-08-28T19:45:00Z"), items: [{ sku: "P013", cantidad: 1, precio: 780 }], total: 780, canal: "tienda", estado: "completada" },
    { venta_id: "V009", cliente_id: "C044", fecha: ISODate("2026-01-07T14:45:00Z"), items: [{ sku: "P013", cantidad: 2, precio: 780 }, { sku: "P011", cantidad: 1, precio: 1350 }], total: 2910, canal: "tienda", estado: "completada" },
    { venta_id: "V010", cliente_id: "C006", fecha: ISODate("2026-01-14T17:15:00Z"), items: [{ sku: "P035", cantidad: 1, precio: 490 }, { sku: "P047", cantidad: 2, precio: 760 }, { sku: "P017", cantidad: 4, precio: 950 }], total: 5810, canal: "app", estado: "completada" },
    { venta_id: "V011", cliente_id: "C020", fecha: ISODate("2026-03-26T17:00:00Z"), items: [{ sku: "P026", cantidad: 2, precio: 540 }, { sku: "P025", cantidad: 4, precio: 350 }], total: 2480, canal: "online", estado: "pendiente" },
    { venta_id: "V012", cliente_id: "C022", fecha: ISODate("2026-04-12T11:30:00Z"), items: [{ sku: "P001", cantidad: 1, precio: 17990 }, { sku: "P003", cantidad: 2, precio: 1250 }], total: 20490, canal: "online", estado: "completada" },
    { venta_id: "V013", cliente_id: "C015", fecha: ISODate("2026-01-09T18:45:00Z"), items: [{ sku: "P025", cantidad: 1, precio: 350 }], total: 350, canal: "app", estado: "completada" },
    { venta_id: "V014", cliente_id: "C050", fecha: ISODate("2026-03-29T09:00:00Z"), items: [{ sku: "P035", cantidad: 2, precio: 490 }, { sku: "P011", cantidad: 1, precio: 1350 }, { sku: "P047", cantidad: 2, precio: 760 }], total: 3850, canal: "tienda", estado: "cancelada" },
    { venta_id: "V015", cliente_id: "C042", fecha: ISODate("2026-03-24T18:15:00Z"), items: [{ sku: "P024", cantidad: 1, precio: 7800 }, { sku: "P005", cantidad: 1, precio: 1550 }, { sku: "P020", cantidad: 1, precio: 24500 }], total: 33850, canal: "online", estado: "cancelada" },
    { venta_id: "V016", cliente_id: "C032", fecha: ISODate("2026-05-19T18:30:00Z"), items: [{ sku: "P047", cantidad: 1, precio: 760 }], total: 760, canal: "tienda", estado: "completada" },
    { venta_id: "V017", cliente_id: "C032", fecha: ISODate("2026-07-07T19:45:00Z"), items: [{ sku: "P034", cantidad: 1, precio: 720 }], total: 720, canal: "app", estado: "completada" },
    { venta_id: "V018", cliente_id: "C005", fecha: ISODate("2026-04-30T11:30:00Z"), items: [{ sku: "P006", cantidad: 1, precio: 980 }, { sku: "P032", cantidad: 1, precio: 6900 }, { sku: "P050", cantidad: 2, precio: 1050 }], total: 9980, canal: "online", estado: "completada" },
    { venta_id: "V019", cliente_id: "C001", fecha: ISODate("2026-09-14T15:30:00Z"), items: [{ sku: "P047", cantidad: 2, precio: 760 }], total: 1520, canal: "online", estado: "pendiente" },
    { venta_id: "V020", cliente_id: "C015", fecha: ISODate("2026-08-19T20:15:00Z"), items: [{ sku: "P023", cantidad: 3, precio: 420 }, { sku: "P049", cantidad: 2, precio: 2650 }, { sku: "P027", cantidad: 1, precio: 2750 }], total: 9310, canal: "online", estado: "completada" },
    { venta_id: "V021", cliente_id: "C008", fecha: ISODate("2026-05-22T12:30:00Z"), items: [{ sku: "P029", cantidad: 1, precio: 2100 }], total: 2100, canal: "app", estado: "completada" },
    { venta_id: "V022", cliente_id: "C008", fecha: ISODate("2026-07-29T15:00:00Z"), items: [{ sku: "P037", cantidad: 1, precio: 1100 }], total: 1100, canal: "tienda", estado: "completada" },
    { venta_id: "V023", cliente_id: "C027", fecha: ISODate("2026-09-15T19:15:00Z"), items: [{ sku: "P044", cantidad: 1, precio: 19800 }], total: 19800, canal: "online", estado: "completada" },
    { venta_id: "V024", cliente_id: "C004", fecha: ISODate("2026-06-25T18:45:00Z"), items: [{ sku: "P047", cantidad: 2, precio: 760 }, { sku: "P012", cantidad: 1, precio: 12500 }, { sku: "P001", cantidad: 1, precio: 17990 }, { sku: "P018", cantidad: 1, precio: 890 }], total: 32900, canal: "app", estado: "pendiente" },
    { venta_id: "V025", cliente_id: "C031", fecha: ISODate("2026-06-21T09:15:00Z"), items: [{ sku: "P003", cantidad: 2, precio: 1250 }, { sku: "P049", cantidad: 2, precio: 2650 }, { sku: "P015", cantidad: 4, precio: 1750 }], total: 14800, canal: "tienda", estado: "completada" },
    { venta_id: "V026", cliente_id: "C015", fecha: ISODate("2026-04-11T17:00:00Z"), items: [{ sku: "P024", cantidad: 1, precio: 7800 }, { sku: "P006", cantidad: 2, precio: 980 }], total: 9760, canal: "app", estado: "completada" },
    { venta_id: "V027", cliente_id: "C015", fecha: ISODate("2026-03-14T10:00:00Z"), items: [{ sku: "P014", cantidad: 2, precio: 1650 }, { sku: "P039", cantidad: 1, precio: 650 }, { sku: "P044", cantidad: 1, precio: 19800 }, { sku: "P011", cantidad: 1, precio: 1350 }], total: 25100, canal: "online", estado: "completada" },
    { venta_id: "V028", cliente_id: "C012", fecha: ISODate("2026-06-28T14:30:00Z"), items: [{ sku: "P033", cantidad: 4, precio: 3200 }, { sku: "P015", cantidad: 3, precio: 1750 }], total: 18050, canal: "online", estado: "completada" },
    { venta_id: "V029", cliente_id: "C032", fecha: ISODate("2026-05-14T16:15:00Z"), items: [{ sku: "P017", cantidad: 1, precio: 950 }, { sku: "P003", cantidad: 1, precio: 1250 }, { sku: "P042", cantidad: 3, precio: 220 }], total: 2860, canal: "online", estado: "completada" },
    { venta_id: "V030", cliente_id: "C047", fecha: ISODate("2026-08-03T10:30:00Z"), items: [{ sku: "P014", cantidad: 2, precio: 1650 }], total: 3300, canal: "app", estado: "completada" },
    { venta_id: "V031", cliente_id: "C033", fecha: ISODate("2026-04-04T13:45:00Z"), items: [{ sku: "P039", cantidad: 1, precio: 650 }, { sku: "P021", cantidad: 1, precio: 690 }, { sku: "P032", cantidad: 1, precio: 6900 }, { sku: "P043", cantidad: 4, precio: 2850 }], total: 19640, canal: "tienda", estado: "cancelada" },
    { venta_id: "V032", cliente_id: "C014", fecha: ISODate("2026-09-22T17:15:00Z"), items: [{ sku: "P016", cantidad: 1, precio: 3900 }], total: 3900, canal: "tienda", estado: "pendiente" },
    { venta_id: "V033", cliente_id: "C018", fecha: ISODate("2026-06-20T14:45:00Z"), items: [{ sku: "P001", cantidad: 1, precio: 17990 }, { sku: "P032", cantidad: 1, precio: 6900 }, { sku: "P009", cantidad: 2, precio: 4990 }], total: 34870, canal: "tienda", estado: "pendiente" },
    { venta_id: "V034", cliente_id: "C013", fecha: ISODate("2026-03-24T20:15:00Z"), items: [{ sku: "P036", cantidad: 1, precio: 15800 }], total: 15800, canal: "online", estado: "pendiente" },
    { venta_id: "V035", cliente_id: "C043", fecha: ISODate("2026-04-06T11:30:00Z"), items: [{ sku: "P043", cantidad: 1, precio: 2850 }, { sku: "P003", cantidad: 1, precio: 1250 }], total: 4100, canal: "app", estado: "completada" },
    { venta_id: "V036", cliente_id: "C009", fecha: ISODate("2026-04-10T19:15:00Z"), items: [{ sku: "P012", cantidad: 1, precio: 12500 }, { sku: "P045", cantidad: 1, precio: 980 }], total: 13480, canal: "online", estado: "completada" },
    { venta_id: "V037", cliente_id: "C035", fecha: ISODate("2026-08-01T11:30:00Z"), items: [{ sku: "P020", cantidad: 1, precio: 24500 }, { sku: "P015", cantidad: 3, precio: 1750 }, { sku: "P033", cantidad: 1, precio: 3200 }, { sku: "P024", cantidad: 1, precio: 7800 }], total: 40750, canal: "online", estado: "completada" },
    { venta_id: "V038", cliente_id: "C001", fecha: ISODate("2026-05-16T14:00:00Z"), items: [{ sku: "P004", cantidad: 1, precio: 6200 }, { sku: "P007", cantidad: 1, precio: 1450 }], total: 7650, canal: "online", estado: "completada" },
    { venta_id: "V039", cliente_id: "C015", fecha: ISODate("2026-04-30T19:45:00Z"), items: [{ sku: "P028", cantidad: 1, precio: 9800 }, { sku: "P043", cantidad: 3, precio: 2850 }, { sku: "P013", cantidad: 1, precio: 780 }], total: 19130, canal: "online", estado: "completada" },
    { venta_id: "V040", cliente_id: "C028", fecha: ISODate("2026-08-18T17:45:00Z"), items: [{ sku: "P030", cantidad: 1, precio: 480 }, { sku: "P024", cantidad: 1, precio: 7800 }, { sku: "P046", cantidad: 1, precio: 850 }], total: 9130, canal: "online", estado: "cancelada" },
    { venta_id: "V041", cliente_id: "C048", fecha: ISODate("2026-03-26T10:15:00Z"), items: [{ sku: "P049", cantidad: 1, precio: 2650 }], total: 2650, canal: "online", estado: "completada" },
    { venta_id: "V042", cliente_id: "C028", fecha: ISODate("2026-05-22T13:30:00Z"), items: [{ sku: "P010", cantidad: 2, precio: 320 }], total: 640, canal: "online", estado: "completada" },
    { venta_id: "V043", cliente_id: "C030", fecha: ISODate("2026-04-28T14:45:00Z"), items: [{ sku: "P023", cantidad: 1, precio: 420 }, { sku: "P032", cantidad: 1, precio: 6900 }, { sku: "P009", cantidad: 1, precio: 4990 }], total: 12310, canal: "online", estado: "completada" },
    { venta_id: "V044", cliente_id: "C004", fecha: ISODate("2026-07-01T17:00:00Z"), items: [{ sku: "P043", cantidad: 1, precio: 2850 }, { sku: "P036", cantidad: 1, precio: 15800 }, { sku: "P021", cantidad: 2, precio: 690 }, { sku: "P049", cantidad: 1, precio: 2650 }], total: 22680, canal: "app", estado: "completada" },
    { venta_id: "V045", cliente_id: "C006", fecha: ISODate("2026-07-21T19:45:00Z"), items: [{ sku: "P005", cantidad: 4, precio: 1550 }, { sku: "P034", cantidad: 2, precio: 720 }], total: 7640, canal: "tienda", estado: "completada" },
    { venta_id: "V046", cliente_id: "C010", fecha: ISODate("2026-01-14T09:00:00Z"), items: [{ sku: "P009", cantidad: 1, precio: 4990 }, { sku: "P002", cantidad: 1, precio: 425 }, { sku: "P007", cantidad: 3, precio: 1450 }], total: 9765, canal: "tienda", estado: "completada" },
    { venta_id: "V047", cliente_id: "C047", fecha: ISODate("2026-09-01T20:15:00Z"), items: [{ sku: "P022", cantidad: 4, precio: 620 }, { sku: "P046", cantidad: 1, precio: 850 }, { sku: "P010", cantidad: 2, precio: 320 }, { sku: "P020", cantidad: 1, precio: 24500 }], total: 28470, canal: "online", estado: "completada" },
    { venta_id: "V048", cliente_id: "C021", fecha: ISODate("2026-08-17T12:00:00Z"), items: [{ sku: "P032", cantidad: 1, precio: 6900 }, { sku: "P016", cantidad: 2, precio: 3900 }], total: 14700, canal: "tienda", estado: "completada" },
    { venta_id: "V049", cliente_id: "C031", fecha: ISODate("2026-01-22T17:45:00Z"), items: [{ sku: "P032", cantidad: 1, precio: 6900 }, { sku: "P014", cantidad: 1, precio: 1650 }], total: 8550, canal: "tienda", estado: "completada" },
    { venta_id: "V050", cliente_id: "C034", fecha: ISODate("2026-01-18T14:15:00Z"), items: [{ sku: "P050", cantidad: 1, precio: 1050 }], total: 1050, canal: "app", estado: "completada" },
    { venta_id: "V051", cliente_id: "C024", fecha: ISODate("2026-03-02T10:45:00Z"), items: [{ sku: "P038", cantidad: 1, precio: 680 }, { sku: "P005", cantidad: 1, precio: 1550 }, { sku: "P036", cantidad: 1, precio: 15800 }], total: 18030, canal: "online", estado: "completada" },
    { venta_id: "V052", cliente_id: "C015", fecha: ISODate("2026-04-01T17:30:00Z"), items: [{ sku: "P017", cantidad: 2, precio: 950 }], total: 1900, canal: "app", estado: "completada" },
    { venta_id: "V053", cliente_id: "C011", fecha: ISODate("2026-01-23T14:45:00Z"), items: [{ sku: "P003", cantidad: 3, precio: 1250 }, { sku: "P014", cantidad: 2, precio: 1650 }, { sku: "P046", cantidad: 3, precio: 850 }, { sku: "P041", cantidad: 2, precio: 1450 }], total: 12500, canal: "app", estado: "completada" },
    { venta_id: "V054", cliente_id: "C003", fecha: ISODate("2026-04-19T09:30:00Z"), items: [{ sku: "P013", cantidad: 1, precio: 780 }, { sku: "P042", cantidad: 1, precio: 220 }, { sku: "P031", cantidad: 1, precio: 1350 }, { sku: "P004", cantidad: 1, precio: 6200 }], total: 8550, canal: "tienda", estado: "completada" },
    { venta_id: "V055", cliente_id: "C017", fecha: ISODate("2026-03-31T17:15:00Z"), items: [{ sku: "P045", cantidad: 2, precio: 980 }], total: 1960, canal: "tienda", estado: "completada" },
    { venta_id: "V056", cliente_id: "C023", fecha: ISODate("2026-05-09T09:00:00Z"), items: [{ sku: "P026", cantidad: 1, precio: 540 }], total: 540, canal: "online", estado: "completada" },
    { venta_id: "V057", cliente_id: "C001", fecha: ISODate("2026-04-02T12:15:00Z"), items: [{ sku: "P001", cantidad: 1, precio: 17990 }, { sku: "P012", cantidad: 1, precio: 12500 }], total: 30490, canal: "tienda", estado: "completada" },
    { venta_id: "V058", cliente_id: "C022", fecha: ISODate("2026-09-01T10:00:00Z"), items: [{ sku: "P042", cantidad: 2, precio: 220 }], total: 440, canal: "online", estado: "pendiente" },
    { venta_id: "V059", cliente_id: "C009", fecha: ISODate("2026-06-19T11:45:00Z"), items: [{ sku: "P037", cantidad: 3, precio: 1100 }, { sku: "P034", cantidad: 1, precio: 720 }, { sku: "P050", cantidad: 2, precio: 1050 }, { sku: "P016", cantidad: 2, precio: 3900 }], total: 13920, canal: "tienda", estado: "completada" },
    { venta_id: "V060", cliente_id: "C025", fecha: ISODate("2026-08-07T19:30:00Z"), items: [{ sku: "P045", cantidad: 1, precio: 980 }], total: 980, canal: "tienda", estado: "completada" },
    { venta_id: "V061", cliente_id: "C048", fecha: ISODate("2026-05-10T13:15:00Z"), items: [{ sku: "P002", cantidad: 1, precio: 425 }, { sku: "P042", cantidad: 1, precio: 220 }], total: 645, canal: "online", estado: "completada" },
    { venta_id: "V062", cliente_id: "C002", fecha: ISODate("2026-04-04T20:45:00Z"), items: [{ sku: "P048", cantidad: 1, precio: 14200 }], total: 14200, canal: "tienda", estado: "completada" },
    { venta_id: "V063", cliente_id: "C031", fecha: ISODate("2026-01-07T18:30:00Z"), items: [{ sku: "P011", cantidad: 4, precio: 1350 }, { sku: "P039", cantidad: 1, precio: 650 }, { sku: "P033", cantidad: 1, precio: 3200 }], total: 9250, canal: "online", estado: "cancelada" },
    { venta_id: "V064", cliente_id: "C002", fecha: ISODate("2026-08-20T18:00:00Z"), items: [{ sku: "P019", cantidad: 1, precio: 1250 }, { sku: "P010", cantidad: 2, precio: 320 }], total: 1890, canal: "online", estado: "pendiente" },
    { venta_id: "V065", cliente_id: "C015", fecha: ISODate("2026-08-20T20:30:00Z"), items: [{ sku: "P005", cantidad: 4, precio: 1550 }, { sku: "P025", cantidad: 1, precio: 350 }], total: 6550, canal: "online", estado: "pendiente" },
    { venta_id: "V066", cliente_id: "C027", fecha: ISODate("2026-04-19T12:30:00Z"), items: [{ sku: "P021", cantidad: 1, precio: 690 }, { sku: "P011", cantidad: 2, precio: 1350 }], total: 3390, canal: "tienda", estado: "pendiente" },
    { venta_id: "V067", cliente_id: "C026", fecha: ISODate("2026-03-30T10:15:00Z"), items: [{ sku: "P045", cantidad: 2, precio: 980 }], total: 1960, canal: "online", estado: "completada" },
    { venta_id: "V068", cliente_id: "C042", fecha: ISODate("2026-07-17T20:30:00Z"), items: [{ sku: "P014", cantidad: 2, precio: 1650 }, { sku: "P040", cantidad: 1, precio: 7100 }], total: 10400, canal: "online", estado: "cancelada" },
    { venta_id: "V069", cliente_id: "C016", fecha: ISODate("2026-01-24T20:15:00Z"), items: [{ sku: "P020", cantidad: 1, precio: 24500 }], total: 24500, canal: "online", estado: "pendiente" },
    { venta_id: "V070", cliente_id: "C043", fecha: ISODate("2026-01-23T18:30:00Z"), items: [{ sku: "P029", cantidad: 1, precio: 2100 }, { sku: "P025", cantidad: 1, precio: 350 }, { sku: "P041", cantidad: 1, precio: 1450 }], total: 3900, canal: "tienda", estado: "pendiente" },
    { venta_id: "V071", cliente_id: "C015", fecha: ISODate("2026-07-03T15:15:00Z"), items: [{ sku: "P041", cantidad: 3, precio: 1450 }, { sku: "P035", cantidad: 3, precio: 490 }, { sku: "P033", cantidad: 2, precio: 3200 }, { sku: "P019", cantidad: 1, precio: 1250 }], total: 13470, canal: "online", estado: "completada" },
    { venta_id: "V072", cliente_id: "C025", fecha: ISODate("2026-07-17T14:00:00Z"), items: [{ sku: "P024", cantidad: 1, precio: 7800 }, { sku: "P016", cantidad: 2, precio: 3900 }], total: 15600, canal: "online", estado: "completada" },
    { venta_id: "V073", cliente_id: "C032", fecha: ISODate("2026-01-20T17:00:00Z"), items: [{ sku: "P031", cantidad: 1, precio: 1350 }, { sku: "P011", cantidad: 1, precio: 1350 }], total: 2700, canal: "app", estado: "completada" },
    { venta_id: "V074", cliente_id: "C026", fecha: ISODate("2026-09-26T19:00:00Z"), items: [{ sku: "P039", cantidad: 1, precio: 650 }], total: 650, canal: "online", estado: "completada" },
    { venta_id: "V075", cliente_id: "C001", fecha: ISODate("2026-03-23T16:45:00Z"), items: [{ sku: "P005", cantidad: 2, precio: 1550 }], total: 3100, canal: "online", estado: "completada" },
    { venta_id: "V076", cliente_id: "C001", fecha: ISODate("2026-03-09T10:30:00Z"), items: [{ sku: "P036", cantidad: 1, precio: 15800 }, { sku: "P032", cantidad: 1, precio: 6900 }, { sku: "P022", cantidad: 2, precio: 620 }], total: 23940, canal: "online", estado: "completada" },
    { venta_id: "V077", cliente_id: "C007", fecha: ISODate("2026-02-20T09:45:00Z"), items: [{ sku: "P036", cantidad: 1, precio: 15800 }, { sku: "P028", cantidad: 1, precio: 9800 }, { sku: "P049", cantidad: 4, precio: 2650 }], total: 36200, canal: "online", estado: "cancelada" },
    { venta_id: "V078", cliente_id: "C015", fecha: ISODate("2026-02-24T09:45:00Z"), items: [{ sku: "P004", cantidad: 1, precio: 6200 }, { sku: "P029", cantidad: 1, precio: 2100 }], total: 8300, canal: "online", estado: "completada" },
    { venta_id: "V079", cliente_id: "C017", fecha: ISODate("2026-04-01T09:15:00Z"), items: [{ sku: "P034", cantidad: 1, precio: 720 }, { sku: "P016", cantidad: 1, precio: 3900 }], total: 4620, canal: "tienda", estado: "pendiente" },
    { venta_id: "V080", cliente_id: "C017", fecha: ISODate("2026-02-12T15:00:00Z"), items: [{ sku: "P028", cantidad: 1, precio: 9800 }, { sku: "P007", cantidad: 1, precio: 1450 }, { sku: "P045", cantidad: 4, precio: 980 }], total: 15170, canal: "tienda", estado: "completada" },
    { venta_id: "V081", cliente_id: "C021", fecha: ISODate("2026-04-07T17:45:00Z"), items: [{ sku: "P001", cantidad: 1, precio: 17990 }, { sku: "P038", cantidad: 1, precio: 680 }], total: 18670, canal: "online", estado: "completada" },
    { venta_id: "V082", cliente_id: "C017", fecha: ISODate("2026-04-21T20:45:00Z"), items: [{ sku: "P019", cantidad: 2, precio: 1250 }, { sku: "P027", cantidad: 3, precio: 2750 }], total: 10750, canal: "online", estado: "pendiente" },
    { venta_id: "V083", cliente_id: "C020", fecha: ISODate("2026-06-16T20:00:00Z"), items: [{ sku: "P020", cantidad: 1, precio: 24500 }, { sku: "P008", cantidad: 1, precio: 890 }, { sku: "P039", cantidad: 1, precio: 650 }, { sku: "P016", cantidad: 2, precio: 3900 }], total: 33840, canal: "tienda", estado: "completada" },
    { venta_id: "V084", cliente_id: "C028", fecha: ISODate("2026-08-13T19:45:00Z"), items: [{ sku: "P039", cantidad: 2, precio: 650 }, { sku: "P025", cantidad: 4, precio: 350 }], total: 2700, canal: "tienda", estado: "completada" },
    { venta_id: "V085", cliente_id: "C023", fecha: ISODate("2026-07-03T13:45:00Z"), items: [{ sku: "P023", cantidad: 1, precio: 420 }], total: 420, canal: "online", estado: "completada" },
    { venta_id: "V086", cliente_id: "C003", fecha: ISODate("2026-02-01T10:30:00Z"), items: [{ sku: "P046", cantidad: 2, precio: 850 }, { sku: "P019", cantidad: 2, precio: 1250 }], total: 4200, canal: "online", estado: "completada" },
    { venta_id: "V087", cliente_id: "C046", fecha: ISODate("2026-02-13T12:15:00Z"), items: [{ sku: "P014", cantidad: 1, precio: 1650 }], total: 1650, canal: "online", estado: "completada" },
    { venta_id: "V088", cliente_id: "C040", fecha: ISODate("2026-09-26T19:00:00Z"), items: [{ sku: "P007", cantidad: 2, precio: 1450 }, { sku: "P044", cantidad: 1, precio: 19800 }], total: 22700, canal: "online", estado: "completada" },
    { venta_id: "V089", cliente_id: "C027", fecha: ISODate("2026-02-27T10:45:00Z"), items: [{ sku: "P045", cantidad: 4, precio: 980 }], total: 3920, canal: "online", estado: "completada" },
    { venta_id: "V090", cliente_id: "C036", fecha: ISODate("2026-08-18T12:00:00Z"), items: [{ sku: "P049", cantidad: 1, precio: 2650 }, { sku: "P050", cantidad: 1, precio: 1050 }, { sku: "P019", cantidad: 2, precio: 1250 }], total: 6200, canal: "online", estado: "completada" },
    { venta_id: "V091", cliente_id: "C015", fecha: ISODate("2026-02-09T16:45:00Z"), items: [{ sku: "P035", cantidad: 2, precio: 490 }, { sku: "P011", cantidad: 2, precio: 1350 }], total: 3680, canal: "app", estado: "completada" },
    { venta_id: "V092", cliente_id: "C041", fecha: ISODate("2026-06-01T10:15:00Z"), items: [{ sku: "P001", cantidad: 1, precio: 17990 }], total: 17990, canal: "online", estado: "completada" },
    { venta_id: "V093", cliente_id: "C048", fecha: ISODate("2026-03-27T20:30:00Z"), items: [{ sku: "P040", cantidad: 1, precio: 7100 }, { sku: "P010", cantidad: 1, precio: 320 }], total: 7420, canal: "online", estado: "completada" },
    { venta_id: "V094", cliente_id: "C030", fecha: ISODate("2026-07-24T10:00:00Z"), items: [{ sku: "P024", cantidad: 1, precio: 7800 }], total: 7800, canal: "online", estado: "completada" },
    { venta_id: "V095", cliente_id: "C001", fecha: ISODate("2026-02-11T20:15:00Z"), items: [{ sku: "P015", cantidad: 1, precio: 1750 }, { sku: "P013", cantidad: 1, precio: 780 }, { sku: "P022", cantidad: 2, precio: 620 }], total: 3770, canal: "tienda", estado: "completada" },
    { venta_id: "V096", cliente_id: "C009", fecha: ISODate("2026-03-07T15:30:00Z"), items: [{ sku: "P013", cantidad: 2, precio: 780 }], total: 1560, canal: "tienda", estado: "completada" },
    { venta_id: "V097", cliente_id: "C013", fecha: ISODate("2026-07-08T16:00:00Z"), items: [{ sku: "P012", cantidad: 1, precio: 12500 }], total: 12500, canal: "app", estado: "completada" },
    { venta_id: "V098", cliente_id: "C040", fecha: ISODate("2026-05-26T16:00:00Z"), items: [{ sku: "P035", cantidad: 3, precio: 490 }, { sku: "P004", cantidad: 1, precio: 6200 }, { sku: "P036", cantidad: 1, precio: 15800 }, { sku: "P023", cantidad: 1, precio: 420 }], total: 23890, canal: "app", estado: "completada" },
    { venta_id: "V099", cliente_id: "C030", fecha: ISODate("2026-06-11T10:30:00Z"), items: [{ sku: "P046", cantidad: 1, precio: 850 }], total: 850, canal: "app", estado: "pendiente" },
    { venta_id: "V100", cliente_id: "C005", fecha: ISODate("2026-01-29T10:30:00Z"), items: [{ sku: "P019", cantidad: 1, precio: 1250 }, { sku: "P020", cantidad: 1, precio: 24500 }], total: 25750, canal: "tienda", estado: "completada" }
])

db.ventas.countDocuments()

// Ejercicio 6
db.ventas.find().limit(10)

// Ejercicio 7
db.ventas.find({ cliente_id: "C015" })

// Ejercicio 8
db.ventas.find({ "items.sku": "P001" })

// Ejercicio 9
db.ventas.find({ canal: "online" })

// Ejercicio 10
db.ventas.find({ canal: "app" })

// Ejercicio 11
db.ventas.find({ estado: "completada" })

// Ejercicio 12
db.ventas.find(
    { estado: "cancelada" },
    { _id: 0, venta_id: 1, cliente_id: 1, fecha: 1, total: 1, estado: 1 }
)

// Ejercicio 13
db.ventas.find(
    {},
    { _id: 0, venta_id: 1, cliente_id: 1, fecha: 1, total: 1 }
).sort({ total: -1 })

// Ejercicio 14
db.ventas.find(
    {},
    { _id: 0, venta_id: 1, cliente_id: 1, fecha: 1, total: 1 }
).sort({ total: -1 }).limit(10)

// Ejercicio 15
// Página 1
db.ventas.find().sort({ venta_id: 1 }).skip(0).limit(10)
// Página 2
db.ventas.find().sort({ venta_id: 1 }).skip(10).limit(10)
// Página 3
db.ventas.find().sort({ venta_id: 1 }).skip(20).limit(10)

// Ejercicio 16
db.clientes.find({ "direccion.ciudad": "Mazatlán" })

// Ejercicio 17
db.clientes.find(
    { preferencias: "tecnologia" },
    { _id: 0, cliente_id: 1, nombre: 1, preferencias: 1 }
)

// Ejercicio 18
db.ventas.findOne({ "items.2": { $exists: true } })

// Ejercicio 19
db.ventas.findOne(
    { venta_id: "V010" },
    { _id: 0, venta_id: 1, cliente_id: 1 }
)
db.clientes.findOne({ cliente_id: db.ventas.findOne({ venta_id: "V010" }).cliente_id })

// Ejercicio 20
show collections

// Ejercicio 21
db.productos.countDocuments()
db.clientes.countDocuments()
db.proveedores.countDocuments()
db.ventas.countDocuments()
