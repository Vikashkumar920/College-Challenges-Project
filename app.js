const allProducts = [];

storeData.categories.forEach(category => {
  category.subcategories.forEach(subcategory => {
    allProducts.push(...subcategory.products);
  });
});

const userHistory = {
  user1: ["p-101", "p-301", "p-302", "p-303"],
  user2: ["p-101", "p-301", "p-201", "p-302"],
  user3: ["p-101", "p-202", "p-302"],
  user4: ["p-201", "p-202", "p-301"],
  user5: ["p-301", "p-302", "p-303"],
  user6: ["p-101", "p-303", "p-202"]
};

const productsDiv = document.getElementById("products");
const recommendationDiv = document.getElementById("recommendations");

renderProducts();

function renderProducts() {
  productsDiv.innerHTML = "";

  allProducts.forEach(product => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.brand}</p>
            <p>₹${product.price}</p>
            <button onclick="showRecommendations('${product.id}')">
                View Product
            </button>
        `;

    productsDiv.appendChild(card);
  });
}

function showRecommendations(productId) {

  const freq = {};

  Object.values(userHistory).forEach(history => {

    if (history.includes(productId)) {

      history.forEach(otherProduct => {

        if (otherProduct !== productId) {

          freq[otherProduct] =
            (freq[otherProduct] || 0) + 1;
        }
      });
    }
  });

  const topProducts = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  renderRecommendations(topProducts, productId);
}

function renderRecommendations(recommendations, productId) {

  recommendationDiv.innerHTML =
    "<h2>Recommended For You</h2>";

  if (recommendations.length === 0) {
    recommendationDiv.innerHTML +=
      "<p>No recommendations found</p>";
    return;
  }

  recommendations.forEach(item => {

    const product = allProducts.find(
      p => p.id === item[0]
    );

    const card = document.createElement("div");

    card.className = "recommend-card";

    card.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.brand}</p>
            <p>Viewed Together ${item[1]} times</p>
            <small>Often viewed with selected product</small>
        `;

    recommendationDiv.appendChild(card);
  });
}