// Definición de productos
let productos = [
    { codigo: 1, nombre: "Vestido Negro Acanalado", precio: 30500 },
    { codigo: 2, nombre: "Remera Gris Básica", precio: 15000 },
    { codigo: 3, nombre: "Jean Blue Classic", precio: 55000 },
    { codigo: 4, nombre: "Sweater Gris", precio: 50000 }
];

let carrito = [];

// Buscar un producto por código
function buscarProducto(codigoProducto) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].codigo === codigoProducto) {
            return productos[i];
        }
    }
    alert("Código de producto inválido.");
    return null;
}

// Agregar producto al carrito
function agregarProductoCarrito(producto) {
    carrito.push(producto);
}

// Obtener la lista de productos en el carrito
function obtenerListaProductos() {
    return carrito;
}

// Eliminar un producto del carrito
function eliminarProductoCarrito(codigoProducto) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].codigo === codigoProducto) {
            carrito.splice(i, 1);
            return true;
        }
    }
    alert("Producto no encontrado en el carrito.");
    return false;
}
