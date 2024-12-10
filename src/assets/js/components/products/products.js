import "./products.css";
import { filterCategory } from "../../utils/filter";
import { sortByTitle, sortByPrice, reverseArray } from "../../utils/sort";
import { addToCartFunction } from "../../utils/helpers";

let currentCategory = "all";

export function renderProducts(
  category = currentCategory,
  sortBy = "default",
  reverseOrder = false,
  limit = null
) {
  currentCategory = category;
  localStorage.setItem("currentShopCategory", category);

  let products = getProducts(category);

  switch (sortBy) {
    case "title":
      products = sortByTitle(products);
      break;
    case "price":
      products = sortByPrice(products);
      break;
    default:
      break;
  }

  if (reverseOrder === true) products = reverseArray(products);

  // Limit the number of products if a limit is specified
  const limitedProducts = limit ? products.slice(0, limit) : products;

  const contentContainer = document.querySelector("main .content-container");
  contentContainer.classList.add("content-container");

  let productsContainer = document.querySelector(
    ".content-container .products-container"
  );
  if (productsContainer === null) {
    productsContainer = document.createElement("section");
    productsContainer.classList.add("products-container");
  } else {
    productsContainer.innerHTML = "";
  }

  limitedProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    // Create the size selection dropdown only if it's not an electronic product
    let sizeSelect = "";
    if (product.category !== "electronics") {
      // Check if the product is NOT electronics
      const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
      sizeSelect = document.createElement("select");
      sizeSelect.classList.add("size-select");

      sizeOptions.forEach((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
      });

      // Default selected size
      let selectedSize = sizeOptions[0];
      sizeSelect.addEventListener("change", (e) => {
        selectedSize = e.target.value; // Update selectedSize when changed
      });
    }

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-image"/>
      <div class="title-price">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">$${product.price}</p>
      </div>
      <div class="size-selection">
        ${
          product.category !== "electronics"
            ? `<label for="size">Size:</label>${sizeSelect.outerHTML}`
            : "" // Render size dropdown only if not electronics
        }
      </div>
      <div class="product-description hidden">
        <h3>Description</h3>
        <p >${product.description}</p>
        </div>
      <div class="svg-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-info">
          <title>information-outline</title>
          <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
        </svg>
        <button class="add-to-cart-button">
          <span class="button-text">Add to cart</span>
          <span class="checkmark">✓</span>
        </button>
      </div>
    `;

    // Add the event listener to 'Add to cart' button
    productElement
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (e) => {
        const button = e.currentTarget;

        if (button.classList.contains("clicked")) {
          return;
        }

        button.classList.add("clicked");
        button.disabled = true;

        const selectedSize =
          product.category !== "electronics"
            ? productElement.querySelector(".size-select").value
            : null; // Only get size if not electronics

        const selectedProduct = {
          ...product,
          size: selectedSize, // Pass the selected size or null
        };

        // Your existing logic for adding the item to the cart
        addToCartFunction(selectedProduct);

        setTimeout(() => {
          button.classList.remove("clicked");
          button.disabled = false;
        }, 2000);
      });

    // Add event listener for toggling description
    const svgInfo = productElement.querySelector(".svg-info");
    svgInfo.addEventListener("click", () => {
      const titlePrice = productElement.querySelector(".title-price");
      const productImage = productElement.querySelector(".product-image");
      const productDescription = productElement.querySelector(
        ".product-description"
      );
      const sizeSelection = productElement.querySelector(".size-selection");

      // Toggle visibility of elements
      if (productDescription.classList.contains("hidden")) {
        titlePrice.style.display = "none";
        productImage.style.display = "none";
        if (sizeSelection) sizeSelection.style.display = "none"; // Hide size dropdown if exists
        productDescription.classList.remove("hidden");
      } else {
        titlePrice.style.display = "flex";
        productImage.style.display = "block";
        if (sizeSelection) sizeSelection.style.display = "flex"; // Show size dropdown if exists
        productDescription.classList.add("hidden");
      }
    });

    productsContainer.appendChild(productElement);
  });

  contentContainer.appendChild(productsContainer);
}

export function getProducts(category = "all") {
  try {
    let products = localStorage.getItem("products");
    products = JSON.parse(products);

    const filteredProducts =
      category === "all" ? products : filterCategory(products, category);

    return filteredProducts;
  } catch (error) {
    console.error("There are no products in local storage", error);
    return [];
  }
}
