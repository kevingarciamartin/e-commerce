import "./hero.css";
import hero from "../../../../images/Hero.jpg";

export function renderHero() {
  const main = document.querySelector("main");

  // Create a container for the hero section
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  // Create and add the h1 element
  const heading = document.createElement("h1");
  heading.classList.add("hero-heading");

  // Create two separate spans for each line
  const line1 = document.createElement("span");
  line1.textContent = "We have everything you need";
  const line2 = document.createElement("span");
  line2.textContent = "for this holiday season!";

  heading.appendChild(line1);
  heading.appendChild(document.createElement("br")); // Add a line break
  heading.appendChild(line2);

  heroContainer.appendChild(heading);

  // Create and add the button
  const button = document.createElement("button");
  button.textContent = "Shop now";
  button.classList.add("hero-button");
  heroContainer.appendChild(button);

  // Create and add the image
  const img = document.createElement("img");
  img.src = hero;
  img.classList.add("heroimg");
  heroContainer.appendChild(img);

  if (main) {
    main.appendChild(heroContainer);
  } else {
    console.error("Main element not found");
  }
}
