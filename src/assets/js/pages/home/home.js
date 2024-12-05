import "./home.css";
import { resetMain } from "../../utils/helpers";
import { renderHero } from "./hero/hero";
import { renderProducts } from "../../components/products/products.js";

export function renderHome() {
  resetMain();
  renderHero();
  renderProducts("all", "default", false, 8);
}
