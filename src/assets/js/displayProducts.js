export function displayProducts(products) {
  const main = document.querySelector("main");
  const productsContainer = document.createElement("section"); // Create the container element
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
  main.appendChild(productsContainer);
}
