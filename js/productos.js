let products = []; // array para almacenar productos desde el archivo JSON

// funcion para cargar los datos del archivo JSON
async function loadProducts() {
  try {
    const response = await fetch('js/figuras.json'); 
    if (!response.ok) throw new Error('Network response was not ok');
    products = await response.json();
    console.log('Products loaded:', products); 
    if (window.location.pathname.includes('index.html')) {
      displayProducts(); 
    }
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

