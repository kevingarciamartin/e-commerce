import "./hero.css";
import hero from "../../../../images/Hero.jpg";
//import { renderShop } from "./src/assets/js/pages/shop/shop.js";

export function renderHero() {
  const main = document.querySelector("main");

  // Create a container for the hero section
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  // Create and add the h1 element
  const heading = document.createElement("h1");
  heading.classList.add("hero-heading");

  // Create a div for the first line
  const line1Wrapper = document.createElement("div");
  const line1 = document.createElement("span");
  line1.textContent = "We have everything you need";
  line1.classList.add("line"); // Add a class for line styling
  line1.style.display = "none"; // Initially hide the line
  line1Wrapper.appendChild(line1);

  // Create a div for the second line
  const line2Wrapper = document.createElement("div");
  const line2 = document.createElement("span");
  line2.textContent = "for this holiday season!";
  line2.classList.add("line", "hero-heading-2"); // Add a class for line styling and new heading
  line2.style.display = "none"; // Initially hide the line
  line2Wrapper.appendChild(line2);

  heading.appendChild(line1Wrapper);
  heading.appendChild(document.createElement("br")); // Add a line break
  heading.appendChild(line2Wrapper); // Append both lines initially

  heroContainer.appendChild(heading);

  // Create and add the button
  const button = document.createElement("button");
  button.textContent = "Shop now";
  button.classList.add("hero-button");
  button.addEventListener("click", () => {
    renderShop();
    history.pushState(null, "", "/shop");
  });

  heroContainer.appendChild(button);

  // Create and add the image
  const img = document.createElement("img");
  img.src = hero;
  img.classList.add("heroimg");
  heroContainer.appendChild(img);

  if (main) {
    main.appendChild(heroContainer);

    // Start typing animation after a delay of 1 second (1000 ms)
    setTimeout(() => {
      startTypingAnimation(line1, line2);
    }, 1000);

    // Show the heading after the delay
    heading.style.opacity = "0";
    setTimeout(() => {
      heading.style.transition = "opacity 0.5s ease-in";
      heading.style.opacity = "1";
    }, 1000); // Fade in after delay
  } else {
    console.error("Main element not found");
  }
}

function startTypingAnimation(line1, line2) {
  let index1 = 0;
  let index2 = 0;
  const text1 = line1.textContent;
  const text2 = line2.textContent;

  const typingSpeed = 80; // Speed of typing in milliseconds

  // Display the first line and start typing effect for it
  line1.style.display = "inline"; // Show the first line
  const typingInterval1 = setInterval(() => {
    if (index1 < text1.length) {
      line1.textContent = text1.slice(0, index1 + 1);
      index1++;
    } else {
      clearInterval(typingInterval1);
      // Start typing effect for the second line without displaying it first
      setTimeout(() => {
        index2 = 0; // Reset index for second line
        const typingInterval2 = setInterval(() => {
          if (index2 < text2.length) {
            if (index2 === 0) {
              line2.style.display = "inline"; // Show second line when starting to type
            }
            line2.textContent = text2.slice(0, index2 + 1);
            index2++;
          } else {
            clearInterval(typingInterval2);
          }
        }, typingSpeed);
      }, 500); // Delay before starting the second line's typing effect
    }
  }, typingSpeed);
}
