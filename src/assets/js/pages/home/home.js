import "./home.css";
import { resetMain } from "../../utils/helpers";
import { renderHero } from "./hero/hero";
import { rendergraphics } from "./graphics/graphics";

export function renderHome() {
  resetMain();
  renderHero();
  rendergraphics();
}
