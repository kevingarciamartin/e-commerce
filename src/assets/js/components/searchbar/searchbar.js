import "./searchbar.css";

export function renderSearchbar() {
  // Create and inject the search bar dynamically
  const searchBarWrapper = document.getElementById("search-bar-wrapper");

  // Search Bar Structure
  const searchBar = document.createElement("div");
  searchBar.classList.add("search-bar");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "search-bar";
  searchInput.placeholder = "Search";
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

  // Append search bar to wrapper
  searchBarWrapper.appendChild(searchBar);

  // Append header to the body
  //document.body.prepend(header);

  // Search Functionality
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  searchButton.addEventListener("click", async () => {
    const query = searchInput.value.trim();

    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    try {
      const response = await fetch(API_URL); // No `q` parameter in jsonplaceholder
      const data = await response.json();

      // Filter results based on query (for demo purposes)
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

      displayResults(filteredResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
      alert("An error occurred while searching. Please try again.");
    }
  });

  function displayResults(results) {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Clear old results

    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>No results found.</p>";
      return;
    }

    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.className = "result-item";
      resultItem.textContent = result.title;
      resultsContainer.appendChild(resultItem);
    });
  }

  // Trigger search on "Enter" key press
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });
}
