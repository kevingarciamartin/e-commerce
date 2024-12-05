import "./shop.css";
import { resetMain } from "../../utils/helpers.js";
import { renderPageHeading } from "../../components/pageHeading/pageHeading.js";
import { renderProducts } from "../../components/products/products.js";

export function renderShop() {
  resetMain();
  renderPageHeading("Our products", true);
  renderProducts();
  handleEventlisteners();
}

function handleEventlisteners() {
  const productsContainer = document.querySelector("main .products-container");
  const categoryFilter = document.querySelector(
    "#page-heading__toolbar-category-filter"
  );
  const categoryDatalist = document.querySelector(
    "#page-heading__toolbar-categories"
  );
  const categoryOptions = document.querySelectorAll(
    ".page-heading__toolbar-category-option"
  );
  const sortButtons = document.querySelectorAll(
    ".page-heading__toolbar-button"
  );

  document.addEventListener("click", (e) => {
    if (categoryFilter.contains(e.target)) {
      categoryDatalist.classList.toggle("hidden");
    } else {
      categoryDatalist.classList.add("hidden");
    }
  });

  categoryOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
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

  let currentSortBy = "default";
  let isReversed = false;

  sortButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const sortType = e.target.getAttribute("data-sort");
      const currentCategory = document.querySelector(
        "#page-heading__toolbar-current-category"
      ).toLowerCase;

      if (sortType === "reverse") {
        // Toggle reverse order
        isReversed = !isReversed;
        e.target.classList.toggle("active");
      } else {
        // Handle title and price sorting
        if (currentSortBy === sortType) {
          // If clicking the already active sort, deactivate it
          currentSortBy = "default";
          sortButtons.forEach((btn) => btn.classList.remove("active"));
        } else {
          // Activate the new sort and deactivate others
          currentSortBy = sortType;
          sortButtons.forEach((btn) => {
            if (btn.getAttribute("data-sort") !== "reverse") {
              btn.classList.remove("active");
            }
          });
          e.target.classList.add("active");
        }
      }

      // Call renderProducts with updated parameters
      renderProducts(currentCategory, currentSortBy, isReversed);
    });
  });
}
