export function rendermodal() {
  // Create the background overlay for modal
  const modalBackground = document.createElement("div");
  modalBackground.className = "modal-background";
  modalBackground.style.position = "fixed";
  modalBackground.style.top = "0";
  modalBackground.style.left = "0";
  modalBackground.style.width = "100%";
  modalBackground.style.height = "100%";
  modalBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modalBackground.style.zIndex = "999"; // Keep it above other content
  modalBackground.style.display = "flex";
  modalBackground.style.justifyContent = "center";
  modalBackground.style.alignItems = "center";
  modalBackground.style.pointerEvents = "all";  // Block interaction with other parts of the page
  document.body.appendChild(modalBackground);

  // Create the confirmation container (green box)
  const confirmationContainer = document.createElement("div");
  confirmationContainer.style.backgroundColor = "#4CAF50"; 
  confirmationContainer.style.color = "white";
  confirmationContainer.style.padding = "30px";
  confirmationContainer.style.borderRadius = "10px";
  confirmationContainer.style.textAlign = "center";
  confirmationContainer.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
  modalBackground.appendChild(confirmationContainer);

  // Add the "Thank you" message
  const thankYouMessage = document.createElement("h1");
  thankYouMessage.textContent = "Thank you for shopping with us!";
  confirmationContainer.appendChild(thankYouMessage);

  // Add order message
  const orderMessage = document.createElement("p");
  orderMessage.textContent = "Your order will be processed and delivered shortly. We at Kenvorisa appreciate your business.";
  orderMessage.style.marginTop = "10px";
  orderMessage.style.fontSize = "18px";
  confirmationContainer.appendChild(orderMessage);

  // Create the "Continue shopping" button
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

  // Add the functionality for the button
  continueButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to the homepage
  });

  // Function to close the modal and the dark background
  function closeModal() {
    modalBackground.style.display = "none"; // Hide the modal background
    confirmationContainer.style.display = "none"; // Hide the confirmation container
  }

  // Optionally, you can close the modal if the user clicks outside the confirmation box (on the background)
  modalBackground.addEventListener("click", function(e) {
    if (e.target === modalBackground) {
      closeModal();
    }
  });
}
