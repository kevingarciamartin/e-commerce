import "./homeproducts.css";
import { renderShop } from "../../shop/shop.js";
import { addToCartFunction, scrollToTop } from "../../../utils/helpers.js";

export function homeProducts() {
  const contentContainer = document.querySelector(".content-container");
  const HomeProductsContainer = document.createElement("div");
  HomeProductsContainer.classList.add("home-products-container");

  const title = document.createElement("h1");
  title.textContent = "Better choices, better prices";
  title.classList.add("home-products-title");
  HomeProductsContainer.appendChild(title);

  const products = getProducts("all"); // Get all products (from the "all" category)

  const homeproduct = document.createElement("div");
  homeproduct.classList.add("homeproduct");
  HomeProductsContainer.appendChild(homeproduct);

  function renderProducts() {
    const { columns, rows } = calculateLayout();
    const productsToShow = columns * rows;

    homeproduct.innerHTML = ""; // Clear any previous content

    const limitedProducts = products.slice(0, productsToShow);

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
        <img src="${product.image}" alt="${
        product.title
      }" class="product-image"/>
        <div class="title-price">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
        </div>
        <div class="size-selection">
          ${
            product.category !== "electronics"
              ? `<label for="size">Size: </label>${sizeSelect.outerHTML}`
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

      // Append the product to the container
      homeproduct.appendChild(productElement);
    });
  }

  renderProducts();

  // Add a resize event listener to adjust the number of products
  window.addEventListener("resize", renderProducts);

  const button = document.createElement("button");
  button.textContent = "See more products";
  button.classList.add("home-products-button");
  button.addEventListener("click", () => {
    renderShop();
    scrollToTop();
  });
  HomeProductsContainer.appendChild(button);

  contentContainer.append(HomeProductsContainer);
}

function getProducts(category) {
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

function calculateLayout() {
  const containerWidth = document.querySelector(
    "main .content-container"
  ).offsetWidth;
  const cardWidth = 250; // Minimum width of each card
  const gap = 48; // 3rem gap converted to pixels
  const columns = Math.floor((containerWidth + gap) / (cardWidth + gap));
  const rows = columns === 1 ? 4 : 2;
  return { columns, rows };
}
