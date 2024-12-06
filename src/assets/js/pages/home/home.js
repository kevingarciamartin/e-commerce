import "./home.css";
import { resetMain } from "../../utils/helpers";
import { renderHero } from "./hero/hero";
import { homeProducts } from "./homeproducts/homeproducts";
import { renderGraphics } from "./graphics/graphics";

export function renderHome() {
  resetMain();
  renderHero();
  homeProducts("all", 8);
  renderGraphics();
}
