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
  const categoryDatalist = document.querySelector(
    "#page-heading__toolbar-categories"
  );
  const categoryOptions = document.querySelectorAll(
    ".page-heading__toolbar-category-option"
  );

  document.addEventListener("click", (e) => {
    if (e.target.id !== "page-heading__toolbar-category-filter") {
      categoryDatalist.classList.add('hidden')
    }
  });

  categoryFilter.addEventListener("click", () => {
    categoryDatalist.classList.toggle("hidden");
  });

  categoryOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      const productsContainer = document.querySelector(
        "main .products-container"
      );
      const currentCategory = document.querySelector(
        "#page-heading__toolbar-current-category"
      );
      const selectedCategory = e.target.textContent;
      currentCategory.textContent = selectedCategory;
      productsContainer.innerHTML = "";
      renderProducts(selectedCategory.toLowerCase());
      categoryDatalist.classList.add("hidden");
    });
  });
}
