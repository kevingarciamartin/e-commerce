import "./hero.css";
import hero from "../../../../images/Hero.jpg";
import { renderShop } from "../../shop/shop.js";

export function renderHero() {
  const main = document.querySelector("main");

  // Create a container for the hero section
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero-container");

  // Create and add the h1 element
  const heading = document.createElement("h1");
  heading.classList.add("hero-heading");

  // Create spans for each line
  const line1 = document.createElement("span");
  line1.textContent = "We have everything you need";
  line1.classList.add("line");

  const line2 = document.createElement("span");
  line2.textContent = "for this holiday season!";
  line2.classList.add("line", "hero-heading-2");

  // Set initial styles for line2
  line2.style.visibility = "hidden"; // Start as hidden
  line2.style.opacity = "0"; // Start invisible

  // Append lines to the heading with a line break in between
  heading.appendChild(line1);
  heading.appendChild(document.createElement("br"));
  heading.appendChild(line2);

  heroContainer.appendChild(heading);

  // Create and add the button
  const button = document.createElement("button");
  button.textContent = "Shop now";
  button.classList.add("hero-button");
  button.addEventListener("click", () => {
    renderShop();
  });

  heroContainer.appendChild(button);

  // Create and add the image
  const img = document.createElement("img");
  img.src = hero;
  img.classList.add("heroimg");
  heroContainer.appendChild(img);

  if (main) {
    main.prepend(heroContainer);

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
  const text1 = "We have everything you need";
  const text2 = "for this holiday season!";

  const typingSpeed = 80; // Speed of typing in milliseconds

  // Start typing effect for the first line
  const typingInterval1 = setInterval(() => {
    if (index1 < text1.length) {
      line1.textContent = text1.slice(0, index1 + 1);
      index1++;
    } else {
      clearInterval(typingInterval1);
      // Stop blinking effect after typing is done
      line1.classList.remove("blinking"); // Remove blinking class

      // Prepare for typing effect for the second line
      index2 = 0; // Reset index for second line typing

      // Only reveal line2 now and start typing it
      setTimeout(() => {
        // Show line2 (without blinking cursor)
        line2.style.visibility = "visible"; // Make it visible
        line2.style.opacity = "1"; // Fade it in

        // Start typing for line2 (after revealing it)
        startTypingSecondLine(line2, text2, typingSpeed);
      }, 300); // Delay the reveal and start typing effect after a short period
    }
  }, typingSpeed);
}

function startTypingSecondLine(line2, text2, typingSpeed) {
  let index2 = 0;

  // Only add the blinking cursor when typing starts
  setTimeout(() => {
    line2.classList.add("blinking"); // Add blinking cursor class here (just before typing)
  }, 200); // A short delay before adding the blinking cursor

  const typingInterval2 = setInterval(() => {
    if (index2 < text2.length) {
      line2.textContent = text2.slice(0, index2 + 1); // Append one character at a time
      index2++;
    } else {
      clearInterval(typingInterval2);
      // Stop blinking effect after typing is done
      line2.classList.remove("blinking"); // Remove blinking class
    }
  }, typingSpeed);
}
