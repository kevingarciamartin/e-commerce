import "./home.css";
import { resetMain } from "../../helpers";
import { renderHero } from "./hero/hero";

export function renderHome() {
  resetMain();
  renderHero();
}
