import "./shop.css";
import { resetMain } from "../../utils/helpers.js";
import { renderPageHeading } from "../../components/pageHeading/pageHeading.js";
import { renderProducts } from "../../components/products/products.js";

export function renderShop() {
  resetMain();
  renderPageHeading("Our products", true);
  renderProducts("all");

  const categoryFilter = document.querySelector(
    "#page-heading__toolbar-category-filter"
  );
  const categoryOptions = document.querySelectorAll(
    ".page-heading__toolbar-category-option"
  );

  categoryFilter.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("hidden");
  });

  categoryOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      const productsContainer = document.querySelector(
        "main .products-container"
      );
      const categoryDatalist = document.querySelector(
        "#page-heading__toolbar-categories"
      );
      const selectedCategory = e.target.textContent;
      categoryFilter.value = selectedCategory;
      productsContainer.innerHTML = "";
      renderProducts(selectedCategory.toLowerCase());
      categoryDatalist.classList.add("hidden");
    });
  });
}
