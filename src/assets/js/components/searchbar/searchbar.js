import './searchbar.css'

export function renderSearchbar() {
  const searchBarWrapper = document.getElementById("search-bar-wrapper");

  // Search Bar Structure
  const searchBar = document.createElement("div");
  searchBar.classList.add("search-bar");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "search-bar";
  searchInput.placeholder = "Search...";
  searchInput.setAttribute("aria-label", "Search");

  const searchButton = document.createElement("button");
  searchButton.id = "search-btn";

  // Search Icon (SVG)
  searchButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
  `;

  // Append elements to the search bar
  searchBar.appendChild(searchInput);
  searchBar.appendChild(searchButton);
  searchBarWrapper.appendChild(searchBar);

  const resultsContainer = document.createElement("div");
  resultsContainer.id = "results-container";
  searchBarWrapper.appendChild(resultsContainer);

  // API
  let products = [];
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      products = data; 
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });

  // Event Listener 
  searchButton.addEventListener("click", () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );

    displayResults(results, resultsContainer);
  });

  // Hide results when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideSearchbar = searchBarWrapper.contains(event.target);

    if (!isClickInsideSearchbar) {
      resultsContainer.innerHTML = ""; // Clear search results
    }
  });
}

function displayResults(results, container) {
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  const ul = document.createElement("ul");
  results.forEach((product) => {
    const li = document.createElement("li");
    li.style.cursor = "pointer"; // Add cursor to indicate clickability
    li.innerHTML = `
      <div>
        <img src="${product.image}" alt="${product.title}" style="width: 50px; height: 50px;"/>
        <strong>${product.title}</strong>
        <p>Price: $${product.price}</p>
      </div>
    `;

    // Add click event listener for redirecting to product details page
    li.addEventListener("click", () => {
      window.location.href = `/product-details?id=${product.id}`;
    });

    ul.appendChild(li);
  });

  container.appendChild(ul);
}
