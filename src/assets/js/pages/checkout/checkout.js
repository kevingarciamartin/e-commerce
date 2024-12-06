import "./checkout.css";
import "../../components/orderSummary/orderSummary.css";
import { resetMain, loadCartFromStorage } from "../../utils/helpers.js";
import {
  calculateTotal,
  createOrderSummaryCard,
} from "../../components/orderSummary/orderSummary.js";
import { renderPageHeading } from "../../components/pageHeading/pageHeading.js";
import { renderModal } from "../../components/modal/modal.js";

export function renderCheckout(cart = []) {
  resetMain();

  renderPageHeading("Checkout");

  if (!cart || cart.length === 0) {
    cart = loadCartFromStorage();
  }

  const main = document.querySelector("main .content-container");
  const checkoutContainer = document.createElement("section");
  main.appendChild(checkoutContainer);

  // First section
  const delivery = document.createElement("h2");
  delivery.textContent = "1. Enter delivery address";
  checkoutContainer.appendChild(delivery);

  const addressSection = document.createElement("div");
  addressSection.classList.add("address-section");

  const addressFields = [
    { id: "first-name", label: "First name*" },
    { id: "last-name", label: "Last name*" },
    { id: "email", label: "E-mail address*" },
    { id: "phone", label: "Phone number*" },
    { id: "address", label: "Delivery address*" },
    { id: "postal", label: "Postal code*" },
    { id: "city", label: "City*" },
    { id: "country", label: "Country*" },
  ];

  addressFields.forEach((field) => {
    const fieldWrapper = document.createElement("div");
    fieldWrapper.classList.add("field-wrapper");

    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = field.label;

    const input = document.createElement("input");
    input.type = "text";
    input.id = field.id;
    input.required = true;

    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);
    addressSection.appendChild(fieldWrapper);
  });

  checkoutContainer.appendChild(addressSection);

  // Second section
  const payment = document.createElement("h2");
  payment.textContent = "2. Select payment method";
  payment.setAttribute("class", "payment-heading");
  checkoutContainer.appendChild(payment);

  const paymentSection = document.createElement("div");
  paymentSection.classList.add("payment-section");

  const paymentMethods = ["Card", "Klarna", "PayPal", "Swish"];
  paymentMethods.forEach((method) => {
    const radioWrapper = document.createElement("div");
    radioWrapper.classList.add("radio-wrapper");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.id = method.toLowerCase();
    radioInput.name = "payment";
    radioInput.value = method.toLowerCase();

    const radioLabel = document.createElement("label");
    radioLabel.setAttribute("for", method.toLowerCase());
    radioLabel.textContent = method;

    radioWrapper.appendChild(radioInput);
    radioWrapper.appendChild(radioLabel);
    paymentSection.appendChild(radioWrapper);
  });

  checkoutContainer.appendChild(paymentSection);

  //Third section
  const purchase = document.createElement("h2");
  purchase.textContent = "3. Complete purchase";
  checkoutContainer.appendChild(purchase);

  const summaryDiv = document.createElement("div");
  summaryDiv.classList.add("summary-card");

  // Create the "Pay Now" button
const modalButton = document.createElement("button");
modalButton.textContent = "Pay now";
modalButton.type = "button";
modalButton.className = "modal-button";
modalButton.disabled = true;

  function handlePayNow() {
   // renderModal();
  }
  modalButton.addEventListener("click", handlePayNow);

  const shippingCost = 9.99;
  const orderSummaryCard = createOrderSummaryCard(
    cart,
    "Pay now",
    handlePayNow,
    modalButton
  );

  const shippingLine = orderSummaryCard.querySelector(
    ".summary-line:nth-child(3) span:last-child"
  );
  const totalLine = orderSummaryCard.querySelector(
    ".summary-line.total span:last-child"
  );

  const updateOrderSummary = () => {
    const subtotal = calculateTotal(cart);
    shippingLine.textContent = `$${shippingCost.toFixed(2)}`;
    totalLine.textContent = `$${(subtotal + shippingCost).toFixed(2)}`;
  };

  updateOrderSummary();
  summaryDiv.appendChild(orderSummaryCard);
  checkoutContainer.appendChild(summaryDiv);

  const validateForm = () => {
    const allAddressFieldsFilled = addressFields.every((field) => {
      const input2 = document.getElementById(field.id);
      return input2.value.trim() !== "";
    });

    const paymentSelected = Array.from(
      document.querySelectorAll('input[name="payment"]')
    ).some((radio) => radio.checked);

    modalButton.disabled = !(allAddressFieldsFilled && paymentSelected);
  };

  addressFields.forEach((field) => {
    const input2 = document.getElementById(field.id);
    input2.addEventListener("input", validateForm);
  });

  const paymentRadios = document.querySelectorAll('input[name="payment"]');
  paymentRadios.forEach((radio) => {
    radio.addEventListener("change", validateForm);
  });
}

// const modal = document.createElement("div");
// modal.className = "modal hidden";

// const modalContent = document.createElement("div");
// modalContent.className = "modal-content";
// modalContent.textContent =
//   "Thank you for shopping with us!\r\n Your order will be processed and delivered shortly. We at Kenvorisa appreciate your business.";

// const closeButton = document.createElement("button");
// closeButton.textContent = "Continue shopping";
// closeButton.className = "close-button";

// modalContent.appendChild(closeButton);
// modal.appendChild(modalContent);
// checkoutContainer.appendChild(modal);

// modalButton.addEventListener("click", () => {
//   modal.classList.remove("hidden");
//   document.body.classList.add("blur-background");
// });

// closeButton.addEventListener("click", () => {
//   renderShop();
//   modal.classList.remove("hidden");
//   document.body.classList.remove("blur-background");
// });
