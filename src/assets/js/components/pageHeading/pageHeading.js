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
  const filterContainer = document.createElement("fieldset");
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
  categoryFilter.setAttribute("placeholder", categories[0]);

  filterLabel.textContent = "Filter by category:";

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    categoryDatalist.appendChild(option);
  });

  toolbarContainer.appendChild(filterContainer);
  filterContainer.appendChild(filterLabel);
  filterContainer.appendChild(categoryFilter);
  filterContainer.appendChild(categoryDatalist);

  // Buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("page_heading__button-container");

  const sortByTitleButton = document.createElement("button");
  sortByTitleButton.classList.add("page-heading__toolbar-button");
  sortByTitleButton.textContent = "A-Z";
  buttonContainer.appendChild(sortByTitleButton);

  const sortByPriceButton = document.createElement("button");
  sortByPriceButton.classList.add("page-heading__toolbar-button");
  sortByPriceButton.textContent = "Price";
  buttonContainer.appendChild(sortByPriceButton);

  const reverseOrderButton = document.createElement("button");
  reverseOrderButton.classList.add("page-heading__toolbar-button");
  reverseOrderButton.textContent = "Reverse"; //TODO: Change to svg
  buttonContainer.appendChild(reverseOrderButton);

  toolbarContainer.appendChild(buttonContainer);

  return toolbarContainer;
}
