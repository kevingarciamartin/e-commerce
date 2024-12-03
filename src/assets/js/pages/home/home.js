import "./home.css";
import { resetMain } from "../../utils/helpers";
import { renderHero } from "./hero/hero";

export function renderHome() {
  resetMain();
  renderHero();
}
