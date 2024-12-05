import "./home.css";
import { resetMain } from "../../utils/helpers";
import { renderHero } from "./hero/hero";
import { homeProducts } from "./homeproducts/homeproducts";

export function renderHome() {
  resetMain();
  renderHero();
  homeProducts("all", 8);
}
