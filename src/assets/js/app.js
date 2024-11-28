import "../styles/reset.css";
import "../styles/style.css";
import { api } from "./api.js";
import { displayProducts } from "./displayProducts.js";

export function app() {
    displayProducts();
}
