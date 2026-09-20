const allProducts = [];

storeData.categories.forEach(category => {
  category.subcategories.forEach(subcategory => {
    allProducts.push(...subcategory.products);
  });
});

const productsContainer = document.getElementById("products");
const cartItemsContainer = document.getElementById("cart-items");
const historyContainer = document.getElementById("history-items");

const undoBtn = document.getElementById("undo-btn");
const redoBtn = document.getElementById("redo-btn");

const cart = {};

const undoStack = [];
const redoStack = [];

const operationHistory = [];

function addHistory(message) {
  operationHistory.unshift(message);

  if (operationHistory.length > 10) {
    operationHistory.pop();
  }

  renderHistory();
}

function renderHistory() {
  historyContainer.innerHTML = "";

  operationHistory.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    historyContainer.appendChild(p);
  });
}

function renderCart() {
  cartItemsContainer.innerHTML = "";

  const cartKeys = Object.keys(cart);

  if (cartKeys.length === 0) {
    cartItemsContainer.innerHTML = "Cart is Empty";
    return;
  }

  cartKeys.forEach(productId => {
    const product = allProducts.find(p => p.id === productId);

    const div = document.createElement("div");

    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>Quantity: ${cart[productId]}</p>

      <button class="increase-btn">+</button>
      <button class="decrease-btn">-</button>
      <button class="remove-btn">Remove</button>
    `;

    const increaseBtn = div.querySelector(".increase-btn");
    const decreaseBtn = div.querySelector(".decrease-btn");
    const removeBtn = div.querySelector(".remove-btn");

    increaseBtn.addEventListener("click", () => {
      undoStack.push({
        type: "INCREASE",
        productId
      });

      redoStack.length = 0;

      cart[productId]++;

      addHistory(`Increased ${product.name}`);

      renderCart();
    });

    decreaseBtn.addEventListener("click", () => {
      undoStack.push({
        type: "DECREASE",
        productId
      });

      redoStack.length = 0;

      if (cart[productId] > 1) {
        cart[productId]--;
      } else {
        delete cart[productId];
      }

      addHistory(`Decreased ${product.name}`);

      renderCart();
    });

    removeBtn.addEventListener("click", () => {
      undoStack.push({
        type: "REMOVE",
        productId,
        quantity: cart[productId]
      });

      redoStack.length = 0;

      delete cart[productId];

      addHistory(`Removed ${product.name}`);

      renderCart();
    });

    cartItemsContainer.appendChild(div);
  });
}

allProducts.forEach(product => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Brand: ${product.brand}</p>
    <p>Price: ₹${product.price}</p>
    <button>Add To Cart</button>
  `;

  const button = div.querySelector("button");

  button.addEventListener("click", () => {

    undoStack.push({
      type: "ADD",
      productId: product.id
    });

    redoStack.length = 0;

    if (cart[product.id]) {
      cart[product.id]++;
    } else {
      cart[product.id] = 1;
    }

    addHistory(`Added ${product.name}`);

    renderCart();
  });

  productsContainer.appendChild(div);
});

undoBtn.addEventListener("click", () => {
  if (undoStack.length === 0) return;

  const operation = undoStack.pop();

  redoStack.push(operation);

  switch (operation.type) {
    case "ADD":
      if (cart[operation.productId] > 1) {
        cart[operation.productId]--;
      } else {
        delete cart[operation.productId];
      }
      break;

    case "REMOVE":
      cart[operation.productId] = operation.quantity;
      break;

    case "INCREASE":
      cart[operation.productId]--;
      break;

    case "DECREASE":
      if (cart[operation.productId]) {
        cart[operation.productId]++;
      } else {
        cart[operation.productId] = 1;
      }
      break;
  }

  renderCart();
});

redoBtn.addEventListener("click", () => {
  if (redoStack.length === 0) return;

  const operation = redoStack.pop();

  undoStack.push(operation);

  switch (operation.type) {
    case "ADD":
      if (cart[operation.productId]) {
        cart[operation.productId]++;
      } else {
        cart[operation.productId] = 1;
      }
      break;

    case "REMOVE":
      delete cart[operation.productId];
      break;

    case "INCREASE":
      cart[operation.productId]++;
      break;

    case "DECREASE":
      if (cart[operation.productId] > 1) {
        cart[operation.productId]--;
      } else {
        delete cart[operation.productId];
      }
      break;
  }

  renderCart();
});