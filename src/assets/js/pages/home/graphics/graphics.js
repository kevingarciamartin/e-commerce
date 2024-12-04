import "./graphics.css";
import graphics from "../../../../images/Graphics.png";

export function renderGraphics() {
  const contentContainer = document.querySelector(".content-container");

  const graphicsContainer = document.createElement("div");
  graphicsContainer.className = "graphics-container";

  const graphicsImage = document.createElement("img");
  graphicsImage.src = graphics;
  graphicsImage.alt = "Kenvorisa brand image";
  graphicsImage.className = "graphics-image";

  const graphicsTextContainer = document.createElement("div");
  graphicsTextContainer.className = "graphics-text-container";

  const graphicsText = document.createElement("p");
  graphicsText.className = "graphics-text";
  graphicsText.innerHTML =
    "Shop with confidence from a <br> trusted brand - quality you <br> love, service you can rely on.";

  const welcomeText = document.createElement("p");
  welcomeText.className = "welcome-text";
  welcomeText.innerHTML = "We at Kenvorisa are happy to <br> have you here!";

  // Create the circle div
  const circleDiv = document.createElement("div");
  circleDiv.className = "circle-background";

  graphicsTextContainer.appendChild(graphicsText);
  graphicsTextContainer.appendChild(welcomeText);

  graphicsContainer.appendChild(graphicsImage);
  graphicsContainer.appendChild(graphicsTextContainer);

  // Append the circle div to the container
  graphicsContainer.appendChild(circleDiv);

  contentContainer.appendChild(graphicsContainer);
}
