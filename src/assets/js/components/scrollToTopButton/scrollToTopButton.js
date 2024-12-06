import "./scrollToTopButton.css";
import { scrollToTop } from "../../utils/helpers";

export function scrollToTopButton() {
  const body = document.querySelector("body");
  const button = document.createElement("button");

  button.id = "scroll-to-top-btn";
  button.title = "Go to top";
  button.innerHTML = `
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 4.5835V17.4168M11.5 17.4168L18.2084 11.0002M11.5 17.4168L4.79169 11.0002" stroke="#6D6D6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  body.appendChild(button);

  window.addEventListener("scroll", () => {
    const scrollPercentage =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);
    const scale = Math.min(scrollPercentage * 3, 1);

    button.style.transform = `scale(${scale})`;
  });

  button.addEventListener("click", () => {
    scrollToTop("smooth");
  });
}
