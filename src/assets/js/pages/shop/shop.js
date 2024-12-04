import "./shop.css";
import { resetMain } from "../../utils/helpers.js";
import { renderPageHeading } from "../../components/pageHeading/pageHeading.js";
import { renderProducts } from "../../components/products/products.js";

export function renderShop() {
  resetMain();
  renderPageHeading("Our products", true);
  renderProducts("all");
}
