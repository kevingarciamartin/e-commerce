import "../styles/reset.css";
import "../styles/style.css";
import { api } from "./api.js";
import { renderHome } from "./pages/home/home.js";
import { renderShop } from "./pages/shop/shop.js";
import { renderCart } from "./pages/cart/cart.js";
import { renderSearchbar } from "./components/searchbar/searchbar.js";
import { scrollToTopButton } from "./components/scrollToTopButton/scrollToTopButton.js";
import { scrollToTop } from "./utils/helpers.js";

export function app() {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("logo-btn")) renderHome();
    else if (event.target.id === "shop-btn" || event.target.id === "shop-icon")
      renderShop();
    else if (event.target.id === "cart-btn" || event.target.id === "cart-icon")
      renderCart();

    if (
      event.target.classList.contains("logo-btn") ||
      event.target.id === "shop-btn" ||
      event.target.id === "cart-btn"
    ) {
      scrollToTop();
    }
  });

  // Initial render
  renderSearchbar();
  renderHome();
  scrollToTopButton();
}
