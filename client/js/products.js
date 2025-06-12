const container = document.getElementById('product-container');

fetch('/api/products')
  .then(response => response.json())
  .then(products => {
    container.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p><strong>Price:</strong> ₹${product.price}</p>
        <p>${product.description}</p>
        <p><em>${product.category}</em></p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    container.innerHTML = '<p style="color:red;">Failed to load products.</p>';
    console.error("API error:", err);
  });
