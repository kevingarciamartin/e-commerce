import "./products.css";
import { filterCategory } from "../../utils/filter";

export function renderProducts(category = "all") {
  const products = getProducts(category);
  const main = document.querySelector("main");
  const contentContainer = document.createElement("section");
  const productsContainer = document.createElement("div");

  contentContainer.classList.add("content-container");
  productsContainer.classList.add("products-container");

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");

    productElement.classList.add("product");

    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}"/>
            <div class="title-price">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            </div>
            <div class="svg-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-info">
            <title>information-outline</title>
            <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
            </svg>
           <button class="Add-to-cart-button">Add to cart</button>
           </div>
       `;

    productsContainer.appendChild(productElement);
  });

  main.appendChild(contentContainer);
  contentContainer.appendChild(productsContainer);
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
  }
}
