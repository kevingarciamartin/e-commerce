import "./pageHeading.css";

export function renderPageHeading(title) {
  const contentContainer = document.querySelector("main .content-container");
  const pageHeadingContainer = document.createElement("section");
  const pageTitle = document.createElement("h1");

  pageHeadingContainer.classList.add("page-heading-container");

  pageTitle.textContent = title;

  contentContainer.appendChild(pageHeadingContainer);
  pageHeadingContainer.appendChild(pageTitle);
}
