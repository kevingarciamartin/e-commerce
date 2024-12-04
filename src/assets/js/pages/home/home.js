import "./home.css";
import { resetMain } from "../../utils/helpers";
import { renderHero } from "./hero/hero";
import { renderGraphics } from "./graphics/graphics";

export function renderHome() {
  resetMain();
  renderHero();
  renderGraphics();
}
