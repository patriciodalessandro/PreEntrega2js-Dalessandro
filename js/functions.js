// Función para validar el login
function validarLogin(user, pass) {
    return (user === usuario && pass === contrasena);
}

// Función para gestionar la compra
function realizarCompra() {
    let sumaCarrito = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        let codProd = mostrarMenu();
        
        if (!isNaN(codProd)) {
            let producto = buscarProducto(codProd);
            
            if (producto) {
                agregarProductoCarrito(producto);
                sumaCarrito += producto.precio;
            }
        } else {
            alert("Debes ingresar un número válido.");
        }

        seguirComprando = confirm("¿Desea seguir comprando?");
    }

    mostrarResumen(sumaCarrito);
}

// Función para mostrar el menú de productos
function mostrarMenu() {
    let menuTexto = "Ingrese el código de un producto:\n";
    
    for (let i = 0; i < productos.length; i++) {
        menuTexto += (i + 1) + ": " + productos[i].nombre + " = $" + productos[i].precio + "\n";
    }

    return parseInt(prompt(menuTexto));
}

// Función para mostrar el resumen de la compra
function mostrarResumen(sumaCarrito) {
    if (sumaCarrito > 0) {
        let productosCarrito = obtenerListaProductos();
        let listaProductosTexto = "";

        for (let i = 0; i < productosCarrito.length; i++) {
            let producto = productosCarrito[i];
            listaProductosTexto += "Producto: " + producto.nombre + " - Precio: $" + producto.precio + "\n";
        }

        alert("Usted compró:\n" + listaProductosTexto + "\nLa suma total de la compra es: $" + sumaCarrito);
    } else {
        alert("No se realizaron compras.");
    }
}
