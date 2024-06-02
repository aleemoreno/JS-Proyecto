

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

const addToCartButtons = document.querySelectorAll (".addtocart-button")


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


const productos = [
    {
        id: "figura-01",
        nombrefigura: "figura-01",
        altura: "9”",
        precio: "$34.99",
        imagen: "./Images/jack-productoo.png"
    },
    {
        id: "figura-02",
        nombrefigura: "figura-02",
        altura: "7”",
        precio: "$36.99",
        imagen:".Images/last ronin.png"
    },
    {
        id: "figura-03",
        nombrefigura: "figura-03",
        altura: "7”",
        precio: "$59.99",
        imagen: ".Images/frankesteinproducto.png"
    },
    {
        id: "figura-04",
        nombrefigura: "figura-04",
        altura: "9”",
        precio: "$34.99",
        imagen: ".Images/dracula-producto.png"
    },
    {
        id: "figura-05",
        nombrefigura: "figura-05",
        altura: "9”",
        precio: "$34.99",
        imagen: ".Images/E.T-producto.png"
    },
    {
        id: "figura-06",
        nombrefigura: "figura-06",
        altura: "9”",
        precio: "$34.99",
        imagen: ".Images/gargolyes-producto.png"
    }
];

const contenedorProductos = document.querySelector("#contenedor-productosenstock");



function cargarProductos() {

    productos.forEach(producto => {

       const div = document.createElement ("div");
       div.classList.add ("producto");
       div.innerHTML = `
       <div class="producto">
       <img src="${producto.imagen} alt="Figura de coleccion">
       <div class="producto-detalles">
         <h3 class="producto-titulo">${producto.nombrefigura}</h3>
         <p class="producto-precio">${producto.precio}</p>
         <button class="addtocart-button" id="${producto.id}"<p class="button-text">ADD TO CART</p></button>
        </div>      
       `;

       contenedorProductos.append(div);
    });
}

document.querySelectorAll(".addtocart-button").forEach(button => {
    button.addEventListener("click", () => {
       
    })
})