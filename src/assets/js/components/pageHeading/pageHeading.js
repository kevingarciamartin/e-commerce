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
  const categoryFilter = document.createElement("div");
  const categoryCurrent = document.createElement("span");
  const categoryDatalist = document.createElement("div");
  const categories = [
    "All",
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ];

  toolbarContainer.classList.add("page-heading__toolbar-container");
  categoryFilter.id = "page-heading__toolbar-category-filter";
  categoryCurrent.id = "page-heading__toolbar-current-category";
  categoryDatalist.id = "page-heading__toolbar-categories";
  categoryDatalist.classList.add("hidden");

  filterLabel.setAttribute("for", "page-heading__toolbar-category-filter");

  filterLabel.textContent = "Filter by category:";
  categoryFilter.innerHTML = `
    <span id="page-heading__toolbar-current-category">${categories[0]}</span>
    <svg id="page-heading__toolbar-filter-arrow" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.5" d="M11.5 4.5835V17.4168M11.5 17.4168L18.2084 11.0002M11.5 17.4168L4.79169 11.0002" stroke="#6D6D6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  categories.forEach((category) => {
    const option = document.createElement("button");
    option.classList.add("page-heading__toolbar-category-option");
    option.textContent = category;
    categoryDatalist.appendChild(option);
  });

  toolbarContainer.appendChild(filterContainer);
  filterContainer.appendChild(filterLabel);
  filterContainer.appendChild(categoryFilter);
  filterContainer.appendChild(categoryDatalist);

  // Buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("page-heading__button-container");

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
