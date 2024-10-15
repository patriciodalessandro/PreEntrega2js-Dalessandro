const usuario = "patricio";
const contraseña = "patito123";

let codVestidoNegro = 1
let precioVestidoNegro = 30500 ;

let  codRemeraGris = 2 ;
let  precioRemeraGris = 15000 ;

let  codJeanBlue = 3 ;
let  precioJeanBlue  = 55000 ;

let  codSweaterGris = 4 ;
let  precioSweaterGris = 50000 ;

alert ("Bienvenid@ al carrito de compras de Lutto Clothing. \nSi desea comprar debe loguearse a continuación");

let user = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");

if (user != "" && pass != "" ){


    if ((user === usuario ) && (pass === contraseña)){

        alert("Hola "+usuario+".\nPara comprar nuestros productos deberás ingresar el código que corresponda de la siguiente lista ");

        let sumaCarrito = 0 ;
        let listaProductos = "" ;

        let codProd = parseInt(prompt("1: Vestido Negro Acanalado = $30500 \n 2: Remera Gris Básica = 15000 \n 3: Jean Blue Classic = $55000 \n 4: Sweater Gris 50000 \n Ingrese el codigo de un producto"));

        console.log(codProd);

        if (!isNaN(codProd)){

            if(codProd === codVestidoNegro){

                listaProductos += "Vestido Negro Acanalado $" + precioVestidoNegro + "\n";
                sumaCarrito += precioVestidoNegro ;
            }else if (codProd === codRemeraGris){

                listaProductos += "Remera Gris Básica $" + precioRemeraGris + "\n";
                sumaCarrito += precioRemeraGris ;

            }else if (codProd === codJeanBlue){

                listaProductos += "Jean Blue Classic" + precioJeanblue + "\n";
                sumaCarrito += precioJeanblue ;

            }else if (codProd === codSweaterGris){

                listaProductos += "Sweater Gris" + precioSweaterGris + "\n";
                sumaCarrito += precioSweaterGris ;
            }else {

                console.log("codigo invalido");
            }

            



        }else {

            alert("Debes ingresar un numero");

        }

        codProd = parseInt(prompt("Ingrese el codigo de un segundo producto"));

        console.log(codProd);

        if (!isNaN(codProd)){

            if(codProd === codVestidoNegro){

                listaProductos += "Vestido Negro Acanalado $" + precioVestidoNegro + "\n";
                sumaCarrito += precioVestidoNegro ;
                
            }else if (codProd === codRemeraGris){

                listaProductos += "Remera Gris Básica $" + precioRemeraGris + "\n";
                sumaCarrito += precioRemeraGris ;

            }else if (codProd === codJeanBlue){

                listaProductos += "Jean Blue Classic" + precioJeanBlue + "\n";
                sumaCarrito += precioJeanBlue ;

            }else if (codProd === codSweaterGris){

                listaProductos += "Sweater Gris" + precioSweaterGris + "\n";
                sumaCarrito += precioSweaterGris ;
            }else {

                console.log("codigo invalido");
            }


            if (sumaCarrito > 0) {

                alert("Usted compro:\n"+listaProductos+"\n"+"La suma total de la compra es: $"+sumaCarrito);

            }else {

                alert("No fue posible realizar la compra");
            }
            



        }else {

            alert("Debes ingresar un numero");

        }



    }else{

        alert("Usuario y/o contraseña incorrectas.Recarga la pagina!!");

    }




}else{


    alert("Tenes que ingresar todos los datos. Recarga la pagina! (para esto puedes utlizar la tecla F5)");

}

