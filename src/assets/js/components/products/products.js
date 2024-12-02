import "./products.css";
import { filterCategory } from "../../utils/filter";

export function renderProducts(category = "all") {
  const products = getProducts(category);
  const contentContainer = document.querySelector("main .content-container");
  const productsContainer = document.createElement("div");

  productsContainer.classList.add("products-container");

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");

    productElement.classList.add("product");

    productElement.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <img src="${product.image}" alt="${product.title}" width="200" />
      <p><strong>Price:</strong> $${product.price}</p>
    `;

    productsContainer.appendChild(productElement);
  });

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
    return [];
  }
}
