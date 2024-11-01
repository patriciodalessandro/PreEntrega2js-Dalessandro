const usuario = "patricio";
const contrasena = "patito123";

alert("Bienvenido al carrito de compras de Lutto Clothing. \nSi desea comprar debe loguearse a continuación");

let usuarioIngresado = prompt("Ingrese su usuario");
let contrasenaIngresada = prompt("Ingrese su contraseña");

// Validación de usuario y contraseña
if (usuarioIngresado !== "" && contrasenaIngresada !== "") {
    if (validarLogin(usuarioIngresado, contrasenaIngresada)) {
        alert("Hola " + usuario + ".\nPara comprar nuestros productos deberás ingresar el código que corresponda de la siguiente lista.");
        realizarCompra();
    } else {
        alert("Usuario y/o contraseña incorrectas. Recarga la página.");
    }
} else {
    alert("Debes ingresar todos los datos. Recarga la página.");
}

