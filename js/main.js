// Load products dynamically
window.onload = function () {
  if (document.title.includes("Product")) {
    displayProducts();
  }

  if (document.title.includes("Cart")) {
    displayCart();
  }
};

function displayProducts() {
  const container = document.querySelector(".products");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = products.find(p => p.id === productId);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart`);
}

function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const section = document.querySelector(".cart");
  if (cartItems.length === 0) {
    section.innerHTML = "<p>Your cart is currently empty.</p>";
    return;
  }

  let total = 0;
  section.innerHTML = "";
  cartItems.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `<h3>${item.name}</h3><p>₹${item.price}</p>`;
    section.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `<h2>Total: ₹${total}</h2>`;
  section.appendChild(totalDiv);
}
