const usuario = "patricio";
const contrasena = "patito123";

// Productos y precios
let codVestidoNegro = 1;
let precioVestidoNegro = 30500;

let codRemeraGris = 2;
let precioRemeraGris = 15000;

let codJeanBlue = 3;
let precioJeanBlue = 55000;

let codSweaterGris = 4;
let precioSweaterGris = 50000;

alert("Bienvenido al carrito de compras de Lutto Clothing. \nSi desea comprar debe loguearse a continuacion");

let usuarioIngresado = prompt("Ingrese su usuario");
let contrasenaIngresada = prompt("Ingrese su contrasena");

// Funcion para validar el login
function validarLogin(user, pass) {
    return (user === usuario && pass === contrasena);
}

// Funcion para mostrar el menu de productos
function mostrarMenu() {
    return parseInt(prompt(
        "1: Vestido Negro Acanalado = $30500 \n" +
        "2: Remera Gris Basica = $15000 \n" +
        "3: Jean Blue Classic = $55000 \n" +
        "4: Sweater Gris = $50000 \n" +
        "Ingrese el codigo de un producto"));
}

// Funcion para procesar el codigo de producto
function procesarProducto(codigoProducto) {
    let producto = "";
    let precio = 0;

    switch (codigoProducto) {
        case codVestidoNegro:
            producto = "Vestido Negro Acanalado";
            precio = precioVestidoNegro;
            break;
        case codRemeraGris:
            producto = "Remera Gris Basica";
            precio = precioRemeraGris;
            break;
        case codJeanBlue:
            producto = "Jean Blue Classic";
            precio = precioJeanBlue;
            break;
        case codSweaterGris:
            producto = "Sweater Gris";
            precio = precioSweaterGris;
            break;
        default:
            alert("Codigo de producto invalido.");
            return; // Retorna sin hacer nada si hay un código inválido
    }

    // Muestra el producto y precio en un mensaje
    alert("Producto seleccionado: " + producto + "\nPrecio: $" + precio);
    return precio; // Retorna el precio para que pueda sumarse al carrito
}

// Funcion para gestionar la compra
function realizarCompra() {
    let sumaCarrito = 0;
    let listaProductos = "";
    let seguirComprando = true;

    while (seguirComprando) {
        let codProd = mostrarMenu();

        if (!isNaN(codProd)) {
            let precio = procesarProducto(codProd);
            
            // Si el precio es válido, añadimos a la lista
            if (precio > 0) {
                listaProductos += "Producto: " + codProd + " - Precio: $" + precio + "\n"; 
                sumaCarrito += precio;
            }
        } else {
            alert("Debes ingresar un numero valido.");
        }

        seguirComprando = confirm("¿Desea seguir comprando?");
    }

    if (sumaCarrito > 0) {
        alert("Usted compro:\n" + listaProductos + "\nLa suma total de la compra es: $" + sumaCarrito);
    } else {
        alert("No se realizaron compras.");
    }
}

// Validacion de usuario y contrasena
if (usuarioIngresado !== "" && contrasenaIngresada !== "") {
    if (validarLogin(usuarioIngresado, contrasenaIngresada)) {
        alert("Hola " + usuario + ".\nPara comprar nuestros productos deberas ingresar el codigo que corresponda de la siguiente lista.");
        realizarCompra();
    } else {
        alert("Usuario y/o contrasena incorrectas. Recarga la pagina.");
    }
} else {
    alert("Debes ingresar todos los datos. Recarga la pagina.");
}
