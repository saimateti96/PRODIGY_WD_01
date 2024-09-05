function toggleMenu() {
  const menu = document.getElementById('menu');
  const toggle = document.getElementById('menu-toggle');
  menu.classList.toggle('show');
  toggle.classList.toggle('active');
  
  const barsIcon = toggle.querySelector('.fa-bars');
  const timesIcon = toggle.querySelector('.fa-times');
  
  if (menu.classList.contains('show')) {
    barsIcon.style.display = 'none';
    timesIcon.style.display = 'block';
  } else {
    barsIcon.style.display = 'block';
    timesIcon.style.display = 'none';
  }
}

let cartItems = [];

function addToCartAndShowMessage(itemName, itemPrice) {
  addToCart(itemName, itemPrice);
  showMessage(`${itemName} has been added to your cart!`);
  showMessage("Your product is added!");
}

function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  updateCartCount();
}

function buyNow(itemName, itemPrice) {
  showMessage(`Buying now: ${itemName} for ₹${itemPrice}`);
}

function showMessage(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

function updateCartCount() {
  document.getElementById('cart').textContent = cartItems.length;
}

function searchProducts() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  const productItems = document.querySelectorAll('.product-item');

  productItems.forEach(item => {
    const productName = item.querySelector('h3').textContent.trim().toLowerCase();
    if (productName.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
