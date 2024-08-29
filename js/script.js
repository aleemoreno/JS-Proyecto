
// funcion para mostrar productos en la página principal
function displayProducts() {
  const productContainer = document.querySelector('#contenedor-productosenstock');
  
  if (!productContainer) {
    console.error('Element with ID "contenedor-productosenstock" not found');
    return;
  }
  
  productContainer.innerHTML = '';

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('producto');
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <div class="producto-detalles">
        <h3 class="producto-titulo">${product.title}</h3>
        <p class="producto-precio">$${product.price.toFixed(2)}</p>
        <button class="addtocart-button" data-product-id="${product.id}"><p class="button-text">ADD TO CART</p></button>
      </div>
    `;
    productContainer.appendChild(productElement);
  });

 // eventos para los botones de añadir al carrito
  const addToCartButtons = document.querySelectorAll('.addtocart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = button.getAttribute('data-product-id');
      const product = products.find(p => p.id === parseInt(productId));
      if (product) addToCart(product);
    });
  });
}

// funcion para agregar un producto al carrito
function addToCart(product) {

  // Obtener el carrito desde el localStorage 
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartCounter();
  Swal.fire({
    title: '¡Producto agregado!',
    text: `${product.title} ha sido agregado al carrito.`,
    icon: 'success',
    confirmButtonText: 'OK',
    timer: 1500,
    showConfirmButton: false,
    customClass: {
      popup: 'popup-class no-icon',
      title: 'title-class',
      content: 'content-class',
      confirmButton: 'confirm-button-class'
    },
     didOpen: () => {
              const contentElement = document.getElementById('swal2-html-container');
              if (contentElement) {
                contentElement.style.color = '#ff0000'; /* le queria cambiar el color por que me daba toc xd */
              }
            }
  });
}

// funcion  para actualizar el contador del carrito
function updateCartCounter() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCounter = document.querySelector('.numerito');
  if (cartCounter) {
    cartCounter.textContent = cart.length;
  }
}

// funcion para mostrar el carrito
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.querySelector('main');
  cartContainer.innerHTML = ''; 
  let totalPrice = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty! :(</p>';
  } else {
    cart.forEach((product, index) => {
      const productElement = document.createElement('div');
      productElement.classList.add('contenedor-carrito');
      productElement.innerHTML = `
        <div class="contenedor-cardcarrito">
          <div class="card-img-carrito">
            <img src="${product.image}" class="producto-img-carrito" alt="${product.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Price: $${product.price.toFixed(2)}</p>
              <button class="btn btn-danger btn-sm remove-button" data-index="${index}">Remove</button>
            </div>
          </div>
        </div>
      `;
      cartContainer.appendChild(productElement);
      totalPrice += product.price;
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('contenedor-carrito');
    totalElement.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Total</h5>
        <p class="card-text">Total Price: $${totalPrice.toFixed(2)}</p>
        <button class="btn btn-success btn-buy">Comprar</button>
      </div>
    `;
    cartContainer.appendChild(totalElement);

    document.querySelectorAll('.remove-button').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        removeFromCart(index);
      });
    });

    setTimeout(() => {
      const buyButton = document.querySelector('.btn-buy');
      if (buyButton) {
        buyButton.addEventListener('click', () => {
          Swal.fire({
            title: "¡Compra realizada!",
            text: "Gracias por tu compra.",
            icon: "success",
            confirmButtonText: "OK",
            customClass: {
              popup: 'popup-class no-icon',
              title: 'title-class',
              content: 'content-class',
              confirmButton: 'confirm-button-class'
            },
            didOpen: () => {
              const contentElement = document.getElementById('swal2-html-container');
              if (contentElement) {
                contentElement.style.color = '#ff0000'; /* le queria cambiar el color por que me daba toc xd */
              }
            }
          });
        });
      }
    }, 0); 
  }
}

// funcion para eliminar productos del carrito
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// funcion principal para inicializar la página
function initializePage() {
  updateCartCounter(); // Actualiza el contador del carrito

  if (window.location.pathname.includes('carrito.html')) {
    displayCart(); // Muestra el carrito si estamos en la página del carrito
  } else if (window.location.pathname.includes('index.html')) {
    loadProducts(); // Carga los productos si estamos en la página principal
  }
}

// Llamar a la funcion  principal una vez que el DOM este cargado
document.addEventListener('DOMContentLoaded', initializePage);
