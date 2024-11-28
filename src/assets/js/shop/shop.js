import "./shop.css";
import { resetMain } from "../helpers.js";
import { renderProducts } from "./products/products.js";

export function renderShop() {
  resetMain();
  renderProducts();
}
