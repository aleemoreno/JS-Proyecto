

/* Bienvenid al Usuario, ingresar nombre */

function Bienvenida() {
    
do {
    let nombreDeUsuario = prompt ("Por favor, ingrese su nombre");

    if (nombreDeUsuario === null) {
        return ;
    }else if (/^[a-zA-Z]+$/.test(nombreDeUsuario)) {
        alert ("Bienvenido " + nombreDeUsuario);
    } else  {
        alert ("Caracter invalido.");
    }
}

while (/^[a-zA-Z]+$/.test(nombreDeUsuario));
}

Bienvenida ()


/* Agregar al carrito */

function agregarAlCarrito() {
    let cantidad = prompt ("Ingrese la cantidad a agregar al Carrito");

if (cantidad === null) {

} else if  (!isNaN(cantidad) && parseInt(cantidad) > 0) {

    alert ("Se agrego " + cantidad + " figura(s) al carrito");

 } else {
    alert ("Por favor ingrese un numero.");
    }
}


/* Arrays */


let figuras = [
{
    nombrefigura: "Jack Skellington",
    altura: "9”",
    precio: "$34.99",

},
{
    nombrefigura: "Raphael Ninja Turtle",
    altura: "7”",
    precio: "$36.99",

},
 {
    nombrefigura: "Frankestein",
    altura: "7”",
    precio: "$59.99",

},
]