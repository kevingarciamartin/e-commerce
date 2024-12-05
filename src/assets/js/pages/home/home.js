import "./home.css";
import { resetMain } from "../../utils/helpers";
import { renderHero } from "./hero/hero";
import { renderGraphics } from "./graphics/graphics";
import { homeProducts } from "./homeproducts/homeproducts";

export function renderHome() {
  resetMain();
  renderHero();
  renderGraphics();
  homeProducts("all", 8);
}
