// Calculates the time delay until the next midnight
export function getDelayUntilNextMidnight() {
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return nextMidnight - now;
}

export function resetMain() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="content-container"></div>
  `;
}

// Local strorage of items in the cart, incl save and load
export const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const loadCartFromStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCartFunction = (product) => {
  const cart = loadCartFromStorage();

  // Find if the product with the same ID and size exists
  const position = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  );

  if (position === -1) {
    // If the product with this size does not exist, add it as a new entry
    saveCartToStorage([...cart, { ...product, quantity: 1 }]);
  } else {
    // If the product with this size exists, increment its quantity
    cart[position].quantity += 1;
    saveCartToStorage(cart);
  }
};

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function scrollToTop(scrollBehavior = "auto") {
  window.scrollTo({ top: 0, behavior: scrollBehavior });
}
