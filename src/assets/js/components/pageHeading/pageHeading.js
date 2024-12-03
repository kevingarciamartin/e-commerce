import "./pageHeading.css";

export function renderPageHeading(title, showToolbar = false) {
  const contentContainer = document.querySelector("main .content-container");
  const pageHeadingContainer = document.createElement("section");
  const pageTitle = document.createElement("h1");

  pageHeadingContainer.classList.add("page-heading-container");

  pageTitle.textContent = title;

  contentContainer.appendChild(pageHeadingContainer);
  pageHeadingContainer.appendChild(pageTitle);

  if (showToolbar) {
    const toolbar = createFilterAndSortToolbar();
    pageHeadingContainer.appendChild(toolbar);
  }
}

function createFilterAndSortToolbar() {
  // Filter by category
  const toolbarContainer = document.createElement("div");
  const filterLabel = document.createElement("label");
  const categoryFilter = document.createElement("input");
  const categoryDatalist = document.createElement("datalist");
  const categories = [
    "All",
    "Electronics",
    "Jewelry",
    "Men's clothing",
    "Women's clothing",
  ];

  toolbarContainer.classList.add("page-heading__toolbar-container");
  categoryFilter.id = "page-heading__toolbar-category-filter";
  categoryDatalist.id = "page-heading__toolbar-categories";

  filterLabel.setAttribute("for", "page-heading__toolbar-category-filter");
  categoryFilter.setAttribute("list", "page-heading__toolbar-categories");

  filterLabel.textContent = "Filter by category:";

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    categoryDatalist.appendChild(option);
  });

  toolbarContainer.appendChild(filterLabel);
  toolbarContainer.appendChild(categoryFilter);
  toolbarContainer.appendChild(categoryDatalist);

  // Sort by title
  const sortByTitleButton = document.createElement("button");
  sortByTitleButton.classList.add("page-heading__toolbar-button");
  sortByTitleButton.textContent = "A-Z";
  toolbarContainer.appendChild(sortByTitleButton);

  // Sort by price
  const sortByPriceButton = document.createElement("button");
  sortByPriceButton.classList.add("page-heading__toolbar-button");
  sortByPriceButton.textContent = "Price";
  toolbarContainer.appendChild(sortByPriceButton);

  // Reverse order
  const reverseOrderButton = document.createElement("button");
  reverseOrderButton.classList.add("page-heading__toolbar-button");
  reverseOrderButton.textContent = "Reverse"; //TODO: Change to svg
  toolbarContainer.appendChild(reverseOrderButton);

  return toolbarContainer;
}
