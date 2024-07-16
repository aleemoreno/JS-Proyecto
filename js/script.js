

/*  Bienvenid al Usuario, ingresar nombre  */

 function ingresarNombreDeUsuario() {
    
    let nombreDelUsuario = null;

    while ((nombreDelUsuario === null || nombreDelUsuario === '')) {
       nombreDelUsuario = prompt ('Por favor, registre un nombre de Usuario')

       if ((nombreDelUsuario === null || nombreDelUsuario === '')) {
        alert ('Debe ingresar un nombre de Usuario para acceder a NECA STORE')
       }
    }
     alert ('Bienvenido ' +nombreDelUsuario) 
} 

/* Verificar edad del usuario */

 function verificacionDeEdad() {
    let edadDelUsuario = null;
  12312
    while (edadDelUsuario === null || isNaN(edadDelUsuario)) {
      edadDelUsuario = prompt('Por favor, ingrese su edad');
      
      if (edadDelUsuario === null || isNaN(edadDelUsuario)) {
        alert('Debe ingresar su edad para poder acceder a NECA STORE');
      } else {
        edadDelUsuario = parseInt(edadDelUsuario);
        if (edadDelUsuario >= 18) {
          alert('Bienvenido a NECA STORE');
          return true; 
        } else if (edadDelUsuario <= 17) {
          alert('Lo siento, pero este sitio web es solo para mayores de 18');
          return false;
        }
      }
    }
  }

  if (verificacionDeEdad()) {
    ingresarNombreDeUsuario();

    /* Arrays */

    let total = 0 
    let bandera = true
    const productosFiguras = ['1 - Jack Skellington', '2 - Tortugas Ninja', '3 - Frankestein', '4 - Dracula', '5 - E.T', '6 - Gargolyes' ]
    
    const Precios = [39, 39, 50, 50, 39, 39]
    
    function compraLogica(precio) {
        total += precio   
    }


function productosLogica(numero) {
    if(numero > productosFiguras.length || numero < 1) {
        alert('Hubo un error, por favor seleccione un numero de producto')
    }else {
        let indice = numero - 1
        compraLogica(Precios[indice])
        bandera = confirm ('Quiere seguir comprando?')
    }
}

while(bandera){
     let menu = 'Escriba el numero de la Figura que quiere comprar:\n' + productosFiguras.join('\n')
     let seleccion = prompt(menu)

     if (seleccion === null || seleccion === '') {
        alert('Por favor, seleccione un numero de producto')
     }else {
        productosLogica(parseInt(seleccion))
    }
}    

alert ('El total es:'+ total)

}
  
