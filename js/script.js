

/* funcion para cargar los productos del localStorage */
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('Cart loaded:', cart); // Debugging
  return cart;
}

 /* funcion para guardar los productos en el localStorage */
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log('Cart saved:', cart); // Debugging
}

/* funcion para agregar un producto al carrito */
function addToCart(productId, productTitle, productPrice, productImage) {
  const cart = loadCart();
  const product = { id: productId, title: productTitle, price: productPrice, image: productImage };
  cart.push(product);
  saveCart(cart);
  updateCartCounter();
}

/* funcion para actualizar el contador del carrito */
function updateCartCounter() {
  const cart = loadCart();
  const cartCounter = document.querySelector('.numerito');
  if (cartCounter) {
    cartCounter.textContent = cart.length;
  }
}

/* funcion para mostrar los productos */
function displayCart() {
  const cart = loadCart();
  const cartContainer = document.querySelector('main');
  cartContainer.innerHTML = ''; 
  let totalPrice = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty</p>';
  } else {
    cart.forEach((product, index) => {
      const productElement = document.createElement('div');
      productElement.classList.add('card', 'mb-3');
      productElement.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${product.image}" class="img-fluid rounded-start" alt="${product.title}">
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
    totalElement.classList.add('card', 'mb-3');
    totalElement.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Total</h5>
        <p class="card-text">Total Price: $${totalPrice.toFixed(2)}</p>
      </div>
    `;
    cartContainer.appendChild(totalElement);

    document.querySelectorAll('.remove-button').forEach(button => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        removeFromCart(index);
      });
    });
  }
}

/* funcion  para eliminar productos del carrito */
function removeFromCart(index) {
  const cart = loadCart();
  cart.splice(index, 1); 
  saveCart(cart);
  displayCart(); 
}

/* Event listeners para el botón de Add To Cart */
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  updateCartCounter();

  const addToCartButtons = document.querySelectorAll('.addtocart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = button.getAttribute('data-product-id');
      const productElement = button.closest('.producto');
      const productTitle = productElement.querySelector('.producto-titulo').textContent;
      const productPrice = parseFloat(productElement.querySelector('.producto-precio').textContent.replace('$', ''));
      const productImage = productElement.querySelector('img').src; // Added image
      addToCart(productId, productTitle, productPrice, productImage);
    });
  });

  if (window.location.pathname.includes('carrito.html')) {
    displayCart();
  }
});
