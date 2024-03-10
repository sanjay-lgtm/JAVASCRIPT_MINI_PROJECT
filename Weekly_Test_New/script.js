const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

let cart = [];

function renderProducts() {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  Products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');
    const quantity = cart.find(item => item.id === product.id)?.quantity || 0;
    productDiv.innerHTML = `
      <span>${product.name} &nbsp; $${product.price}</span>
      <button onclick="addToCart(${product.id})">+</button>
      <span id="quantity-${product.id}">${quantity}</span>
      <button onclick="removeFromCart(${product.id})">-</button>
    `;
    productsDiv.appendChild(productDiv);
  });
}

function renderCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>No Product added to the cart</p>';
  } else {
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `${item.name} &nbsp; $${item.price} x ${item.quantity}`;
      cartDiv.appendChild(itemDiv);
    });
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('totalPrice').innerText = `Total Price: $${totalPrice}`;
  }
}

function addToCart(productId) {
  const product = Products.find(p => p.id === productId);
  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderProducts();
  renderCart();
}

function removeFromCart(productId) {
  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex !== -1) {
    if (cart[existingIndex].quantity === 1) {
      cart.splice(existingIndex, 1);
    } else {
      cart[existingIndex].quantity--;
    }
    renderProducts();
    renderCart();
  }
}

renderProducts();
