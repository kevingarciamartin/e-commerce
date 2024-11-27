// fetch.js
export function fetchProducts(url) {
  return fetch(url) // Make the HTTP request
    .then((res) => res.json()) // Parse the response to JSON format
    .catch((error) => console.error("Error fetching data:", error)); // Log any errors
}
