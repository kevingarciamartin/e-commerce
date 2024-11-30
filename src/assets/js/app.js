import "../styles/reset.css";
import "../styles/style.css";
import { api } from "./api.js";
import { renderHome } from "./pages/home/home.js";
import { renderShop } from "./pages/shop/shop.js";
import { renderMyProfile } from "./pages/myProfile/myProfile.js";
import { renderCart } from "./pages/cart/cart.js";

export function app() {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("logo-btn")) {
      renderHome();
    } else if (event.target.id === "shop-btn") {
      renderShop();
    } else if (event.target.id === "my-profile-btn") {
      renderMyProfile();
    } else if (event.target.id === "cart-btn") {
      renderCart();
    }
  });

  // Initial render
  renderHome();
}
