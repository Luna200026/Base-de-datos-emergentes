use ventas_online

db.createCollection("productos")

show collections

db.productos.insertOne({
    sku: "P001",
    nombre: "Laptop Pro",
    categoria: "Computo",
    precio: 18500,
    stock: 12
})

db.productos.find()

db.productos.find({ sku: "P001" })

db.productos.insertOne({
    sku: "P002",
    nombre: "Mouse inalambrico",
    categoria: "Accesorios",
    precio: 450,
    stock: 80,
    color: "negro",
    activo: true
})

db.productos.find()

db.productos.find({ activo: true })

db.productos.insertOne({
    sku: "P003",
    nombre: "Audifonos BT",
    categoria: "Audio",
    precio: 1250,
    stock: 35,
    bluetooth: true,
    etiquetas: ["audio", "movilidad"],
    activo: true
})

db.productos.find({ sku: "P003" })

db.productos.insertOne({
    sku: "P004",
    nombre: "Monitor 27",
    categoria: "Computo",
    precio: 6200,
    stock: 18,
    especificaciones: {
        resolucion: "2560x1440",
        hz: 144
    },
    etiquetas: ["monitor", "gaming"]
})

db.productos.find({
    "especificaciones.hz": 144
})

db.productos.insertMany([
    {
        sku: "P005",
        nombre: "Teclado mecanico",
        categoria: "Accesorios",
        precio: 1600,
        stock: 27,
        etiquetas: ["mecanico", "gaming"],
        activo: true
    },
    {
        sku: "P006",
        nombre: "Webcam HD",
        categoria: "Accesorios",
        precio: 980,
        stock: 40,
        etiquetas: ["video", "usb"],
        activo: true
    },
    {
        sku: "P007",
        nombre: "SSD 1TB",
        categoria: "Almacenamiento",
        precio: 1450,
        stock: 30,
        etiquetas: ["ssd", "almacenamiento"]
    }
])

db.productos.find({ etiquetas: "gaming" })

db.productos.find()

db.productos.countDocuments()

db.productos.countDocuments({
    categoria: "Accesorios"
})

db.productos.find({ sku: "P001" })
db.productos.find({ etiquetas: "gaming" })
db.productos.find({ "especificaciones.hz": 144 })

db.productos.insertOne({
    sku: "P008",
    nombre: "Bocina Bluetooth",
    categoria: "Audio",
    precio: 890,
    stock: 25,
    etiquetas: ["audio", "bluetooth"],
    activo: true
})

db.productos.insertMany([
    { sku: "P009", nombre: "Tablet 10", categoria: "Computo", precio: 5200, stock: 15, etiquetas: ["tablet", "movilidad"], activo: true, especificaciones: { pantalla: "10 pulgadas", almacenamiento: "128GB" } },
    { sku: "P010", nombre: "Memoria USB 64GB", categoria: "Almacenamiento", precio: 320, stock: 100, etiquetas: ["usb", "almacenamiento"], activo: true },
    { sku: "P011", nombre: "Microfono USB", categoria: "Audio", precio: 1350, stock: 10, etiquetas: ["audio", "usb"], activo: true },
    { sku: "P012", nombre: "Laptop Basica", categoria: "Computo", precio: 12500, stock: 20, etiquetas: ["laptop", "oficina"], activo: true, especificaciones: { ram: "8GB", almacenamiento: "512GB" } },
    { sku: "P013", nombre: "Mouse Gamer", categoria: "Accesorios", precio: 780, stock: 45, etiquetas: ["mouse", "gaming"], activo: true },
    { sku: "P014", nombre: "Disco Duro 2TB", categoria: "Almacenamiento", precio: 1650, stock: 22, etiquetas: ["hdd", "almacenamiento"], activo: true },
    { sku: "P015", nombre: "Audifonos Gamer", categoria: "Audio", precio: 1750, stock: 28, etiquetas: ["audio", "gaming"], activo: true },
    { sku: "P016", nombre: "Monitor 24", categoria: "Computo", precio: 3900, stock: 16, etiquetas: ["monitor", "oficina"], activo: true, especificaciones: { resolucion: "1920x1080", hz: 75 } },
    { sku: "P017", nombre: "Teclado Inalambrico", categoria: "Accesorios", precio: 950, stock: 33, etiquetas: ["teclado", "inalambrico"], activo: true },
    { sku: "P018", nombre: "SSD 500GB", categoria: "Almacenamiento", precio: 890, stock: 50, etiquetas: ["ssd", "almacenamiento"], activo: true },
    { sku: "P019", nombre: "Camara Web Full HD", categoria: "Accesorios", precio: 1250, stock: 24, etiquetas: ["video", "usb"], activo: true },
    { sku: "P020", nombre: "Laptop Gaming", categoria: "Computo", precio: 24500, stock: 8, etiquetas: ["laptop", "gaming"], activo: true, especificaciones: { ram: "16GB", gpu: "RTX 4060" } },
    { sku: "P021", nombre: "Bocina Portatil", categoria: "Audio", precio: 690, stock: 42, etiquetas: ["audio", "movilidad"], activo: true },
    { sku: "P022", nombre: "Hub USB-C", categoria: "Accesorios", precio: 620, stock: 60, etiquetas: ["usb", "conectividad"], activo: true },
    { sku: "P023", nombre: "Tarjeta microSD 128GB", categoria: "Almacenamiento", precio: 420, stock: 75, etiquetas: ["memoria", "almacenamiento"], activo: true },
    { sku: "P024", nombre: "Monitor 32", categoria: "Computo", precio: 7800, stock: 12, etiquetas: ["monitor", "gaming"], activo: true, especificaciones: { resolucion: "3840x2160", hz: 60 } },
    { sku: "P025", nombre: "Audifonos Cableados", categoria: "Audio", precio: 350, stock: 55, etiquetas: ["audio", "cableado"], activo: true },
    { sku: "P026", nombre: "Base para Laptop", categoria: "Accesorios", precio: 540, stock: 38, etiquetas: ["laptop", "ergonomia"], activo: true },
    { sku: "P027", nombre: "SSD 2TB", categoria: "Almacenamiento", precio: 2750, stock: 14, etiquetas: ["ssd", "almacenamiento"], activo: true },
    { sku: "P028", nombre: "Mini PC", categoria: "Computo", precio: 9800, stock: 11, etiquetas: ["computo", "compacto"], activo: true, especificaciones: { ram: "16GB", almacenamiento: "1TB" } },
    { sku: "P029", nombre: "Microfono Condensador", categoria: "Audio", precio: 2100, stock: 18, etiquetas: ["audio", "estudio"], activo: true },
    { sku: "P030", nombre: "Adaptador USB WiFi", categoria: "Accesorios", precio: 480, stock: 70, etiquetas: ["usb", "redes"], activo: true },
    { sku: "P031", nombre: "Disco Externo 1TB", categoria: "Almacenamiento", precio: 1350, stock: 29, etiquetas: ["hdd", "usb"], activo: true },
    { sku: "P032", nombre: "Chromebook 14", categoria: "Computo", precio: 6900, stock: 17, etiquetas: ["laptop", "movilidad"], activo: true, especificaciones: { ram: "8GB", almacenamiento: "128GB" } },
    { sku: "P033", nombre: "Barra de Sonido", categoria: "Audio", precio: 3200, stock: 13, etiquetas: ["audio", "hogar"], activo: true },
    { sku: "P034", nombre: "Mouse Ergonomico", categoria: "Accesorios", precio: 720, stock: 46, etiquetas: ["mouse", "ergonomia"], activo: true },
    { sku: "P035", nombre: "Memoria USB 128GB", categoria: "Almacenamiento", precio: 490, stock: 90, etiquetas: ["usb", "almacenamiento"], activo: true },
    { sku: "P036", nombre: "All in One 24", categoria: "Computo", precio: 15800, stock: 9, etiquetas: ["computo", "oficina"], activo: true, especificaciones: { ram: "16GB", pantalla: "24 pulgadas" } },
    { sku: "P037", nombre: "Audifonos Diadema", categoria: "Audio", precio: 1100, stock: 31, etiquetas: ["audio", "bluetooth"], activo: true },
    { sku: "P038", nombre: "Teclado Compacto", categoria: "Accesorios", precio: 680, stock: 52, etiquetas: ["teclado", "usb"], activo: true },
    { sku: "P039", nombre: "SSD 256GB", categoria: "Almacenamiento", precio: 650, stock: 65, etiquetas: ["ssd", "almacenamiento"], activo: true },
    { sku: "P040", nombre: "Monitor Curvo 27", categoria: "Computo", precio: 7100, stock: 14, etiquetas: ["monitor", "gaming"], activo: true, especificaciones: { resolucion: "3440x1440", hz: 165 } },
    { sku: "P041", nombre: "Bocina Inteligente", categoria: "Audio", precio: 1450, stock: 21, etiquetas: ["audio", "wifi"], activo: true },
    { sku: "P042", nombre: "Cable USB-C", categoria: "Accesorios", precio: 220, stock: 120, etiquetas: ["usb", "cable"], activo: true },
    { sku: "P043", nombre: "Disco Duro 4TB", categoria: "Almacenamiento", precio: 2850, stock: 12, etiquetas: ["hdd", "almacenamiento"], activo: true },
    { sku: "P044", nombre: "Laptop Ultraligera", categoria: "Computo", precio: 19800, stock: 7, etiquetas: ["laptop", "movilidad"], activo: true, especificaciones: { ram: "16GB", almacenamiento: "1TB" } },
    { sku: "P045", nombre: "Audifonos Deportivos", categoria: "Audio", precio: 980, stock: 36, etiquetas: ["audio", "bluetooth"], activo: true },
    { sku: "P046", nombre: "Soporte Monitor", categoria: "Accesorios", precio: 850, stock: 27, etiquetas: ["monitor", "ergonomia"], activo: true },
    { sku: "P047", nombre: "Memoria USB 256GB", categoria: "Almacenamiento", precio: 760, stock: 58, etiquetas: ["usb", "almacenamiento"], activo: true },
    { sku: "P048", nombre: "PC Escritorio", categoria: "Computo", precio: 14200, stock: 10, etiquetas: ["computo", "oficina"], activo: true, especificaciones: { ram: "16GB", almacenamiento: "1TB" } },
    { sku: "P049", nombre: "Interfaz de Audio", categoria: "Audio", precio: 2650, stock: 15, etiquetas: ["audio", "estudio"], activo: false },
    { sku: "P050", nombre: "Mochila para Laptop", categoria: "Accesorios", precio: 1050, stock: 34, etiquetas: ["laptop", "movilidad"], activo: true }
])

db.productos.find()

db.productos.find({ sku: "P003" })

db.productos.find({ categoria: "Computo" })

db.productos.find({ categoria: "Accesorios" })

db.productos.find({ activo: true })

db.productos.find({ etiquetas: "gaming" })

db.productos.find({ etiquetas: "usb" })

db.productos.find({ "especificaciones.hz": 144 })

db.productos.find({ "especificaciones.resolucion": "2560x1440" })

db.productos.countDocuments()

db.productos.countDocuments({ categoria: "Accesorios" })

db.productos.find({ sku: "P008" })

db.productos.find({ sku: "P009" })
db.productos.find(
    { sku: "P009" },
    { _id: 0, sku: 1, "especificaciones.almacenamiento": 1 }
)

db.productos.countDocuments({ categoria: "Almacenamiento" })

db.productos.find(
    { etiquetas: "movilidad" },
    { _id: 0, sku: 1, nombre: 1, categoria: 1 }
)
db.productos.distinct("categoria", { etiquetas: "movilidad" })
