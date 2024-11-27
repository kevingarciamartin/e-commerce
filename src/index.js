import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import "./assets/styles/index.css";
import { fetchProducts } from "./assets/js/fetch.js";
import { displayProducts } from "./assets/js/displayProducts.js";

const apiUrl = "https://fakestoreapi.com/products";

fetchProducts(apiUrl).then((products) => {
  console.log("Fetched products:", products);
  displayProducts(products);
});
