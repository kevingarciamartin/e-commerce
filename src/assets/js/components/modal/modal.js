import './modal.css'

export function rendermodal () {
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "style.css";
document.head.appendChild(link);

const contentContainer = document.createElement("div");
contentContainer.className = "content-container";

const modal = document.createElement("div");
modal.className = "confirmation-modal";

document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 

const confirmationContainer = document.createElement("div");
confirmationContainer.style.backgroundColor = "#4CAF50"; 
confirmationContainer.style.color = "white";
confirmationContainer.style.padding = "30px";
confirmationContainer.style.borderRadius = "10px";
confirmationContainer.style.textAlign = "center";
confirmationContainer.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
document.body.appendChild(confirmationContainer);

const thankYouMessage = document.createElement("h1");
thankYouMessage.textContent = "Thank you for shopping with us!";
confirmationContainer.appendChild(thankYouMessage);

const orderMessage = document.createElement("p");
orderMessage.textContent =
  "Your order will be processed and delivered shortly. We at Kenvorisa appreciate your business.";
orderMessage.style.marginTop = "10px";
orderMessage.style.fontSize = "18px";
confirmationContainer.appendChild(orderMessage);

const continueButton = document.createElement("button");
continueButton.textContent = "Continue shopping";
continueButton.style.marginTop = "20px";
continueButton.style.padding = "10px 20px";
continueButton.style.border = "none";
continueButton.style.borderRadius = "5px";
continueButton.style.backgroundColor = "white";
continueButton.style.color = "#4CAF50";
continueButton.style.cursor = "pointer";
continueButton.style.fontSize = "16px";
continueButton.style.fontWeight = "bold";
confirmationContainer.appendChild(continueButton);

continueButton.addEventListener("click", () => {
  window.location.href = "index.html"; 
});

const title = document.createElement("h2");
title.textContent = "Thank you for shopping with us!";

const message = document.createElement("p");
message.textContent =
  "Your order will be processed and delivered shortly. We at Kenvorisa appreciate your business.";

const button = document.createElement("button");
button.className = "continue-shopping-btn";
button.textContent = "Continue shopping";
button.onclick = () => {
  window.location.href = "shop.html"; 
};

modal.appendChild(title);
modal.appendChild(message);
modal.appendChild(button);
contentContainer.appendChild(modal);
document.body.appendChild(contentContainer);

}
