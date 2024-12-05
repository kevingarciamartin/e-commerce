import "./checkout.css";
import { resetMain } from "../../utils/helpers.js";

export function renderCheckout() {
  resetMain();
  const main = document.querySelector("main .content-container");
  const checkoutContainer = document.createElement("section");

  const checkout = document.createElement("h1");
  checkout.textContent = "Checkout";
  checkoutContainer.appendChild(checkout);

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

  main.appendChild(checkoutContainer);
}
