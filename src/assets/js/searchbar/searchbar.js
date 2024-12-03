const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const resultsContainer = document.getElementById("results-container");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

searchBtn.addEventListener("click", async () => {
  const query = searchBar.value.trim();

  if (!query) {
    alert("Please enter a search term.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    displayResults(data);
  } catch (error) {
    console.error("Error fetching search results:", error);
    alert("An error occurred while searching. Please try again.");
  }
});

function displayResults(results) {
  resultsContainer.innerHTML = ""; 

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
searchBar.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
