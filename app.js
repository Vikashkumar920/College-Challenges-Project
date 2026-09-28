const allProducts = [];

storeData.categories.forEach(category => {
  category.subcategories.forEach(subcategory => {
    allProducts.push(...subcategory.products);
  });
});

const productsContainer = document.getElementById("products");
const historyContainer = document.getElementById("history");
const clearBtn = document.getElementById("clear-btn");

let recentlyViewed = [];

renderProducts();
renderHistory();

function renderProducts() {
  productsContainer.innerHTML = "";

  allProducts.forEach(product => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.brand}</p>
            <p>₹${product.price}</p>
            <p>⭐ ${product.rating}</p>
            <button onclick="viewProduct('${product.id}')">
                View Product
            </button>
        `;

    productsContainer.appendChild(card);
  });
}

function viewProduct(productId) {

  const product = allProducts.find(
    p => p.id === productId
  );

  recentlyViewed = recentlyViewed.filter(
    p => p.id !== productId
  );

  recentlyViewed.unshift(product);

  if (recentlyViewed.length > 5) {
    recentlyViewed.pop();
  }

  renderHistory();
}

function renderHistory() {

  if (recentlyViewed.length === 0) {
    historyContainer.innerHTML =
      "<p>No recently viewed products</p>";
    return;
  }

  historyContainer.innerHTML = "";

  recentlyViewed.forEach(product => {

    const card = document.createElement("div");

    card.className = "history-card";

    card.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.brand}</p>
        `;

    historyContainer.appendChild(card);
  });
}

clearBtn.addEventListener("click", () => {
  recentlyViewed = [];
  renderHistory();
});