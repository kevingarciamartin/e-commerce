import {
  getDelayUntilNextMidnight,
  exampleCart,
  saveCartToStorage,
} from "./utils/helpers.js";

export const api = (() => {
  async function storeProductsInLocalStorage() {
    const apiUrl = "https://fakestoreapi.com/products";

    try {
      const response = await fetch(apiUrl);
      const products = await response.json();
      // Save products to local storage
      localStorage.setItem("products", JSON.stringify(products));
      console.log("Products updated successfully");
    } catch (error) {
      return console.error("Error fetching data:", error);
    }
  }

  function updateProductsInLocalStorage() {
    setTimeout(() => {
      storeProductsInLocalStorage(); // After the first run, schedule it to run every 24 hours
      setInterval(storeProductsInLocalStorage, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
    }, getDelayUntilNextMidnight());

    storeProductsInLocalStorage();
  }

  updateProductsInLocalStorage();
})();

// Kseniia: for testing only. To be deleted
saveCartToStorage(exampleCart);
