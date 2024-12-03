import "./checkout.css";
import "../../../styles/style.css";
import { resetMain } from "../../utils/helpers.js";

export function renderCheckout() {
  resetMain();
  const main = document.querySelector("main");
  const checkoutContainer = document.createElement("section");

  const checkout = document.createElement("h1");
  checkout.textContent = "Checkout";
  checkoutContainer.appendChild(checkout);

  const delivery = document.createElement("h2");
  delivery.textContent = "1. Enter delivery address";
  checkoutContainer.appendChild(delivery);

  const form = document.createElement("form");
  form.setAttribute("method", "post");

  const firstName1 = document.createElement("label");
  firstName1.setAttribute("for", "first_name");
  firstName1.textContent = "First name*";
  form.appendChild(firstName1);

  const firstName2 = document.createElement("input");
  firstName2.setAttribute("type", "text");
  firstName2.setAttribute("name", "first_name");
  firstName2.setAttribute("required", true);
  form.appendChild(firstName2);

  const lastName1 = document.createElement("label");
  lastName1.setAttribute("for", "last_name");
  lastName1.textContent = "Last name*";
  form.appendChild(lastName1);

  const lastName2 = document.createElement("input");
  lastName2.setAttribute("type", "text");
  lastName2.setAttribute("name", "last_name");
  lastName2.setAttribute("required", true);
  form.appendChild(lastName2);

  const email1 = document.createElement("label");
  email1.setAttribute("for", "email");
  email1.textContent = "E-mail address*";
  form.appendChild(email1);

  const email2 = document.createElement("input");
  email2.setAttribute("type", "text");
  email2.setAttribute("name", "email");
  email2.setAttribute("required", true);
  form.appendChild(email2);

  const phone1 = document.createElement("label");
  phone1.setAttribute("for", "phone");
  phone1.textContent = "Phone number*";
  form.appendChild(phone1);

  const phone2 = document.createElement("input");
  phone2.setAttribute("type", "text");
  phone2.setAttribute("name", "phone");
  phone2.setAttribute("required", true);
  form.appendChild(phone2);

  const address1 = document.createElement("label");
  address1.setAttribute("for", "address");
  address1.textContent = "Delivery address*";
  form.appendChild(address1);

  const address2 = document.createElement("input");
  address2.setAttribute("type", "text");
  address2.setAttribute("name", "address");
  address2.setAttribute("required", true);
  form.appendChild(address2);

  const post1 = document.createElement("label");
  post1.setAttribute("for", "postal_code");
  post1.textContent = "Postal code*";
  form.appendChild(post1);

  const post2 = document.createElement("input");
  post2.setAttribute("type", "text");
  post2.setAttribute("name", "postal_code");
  post2.setAttribute("required", true);
  form.appendChild(post2);

  const city1 = document.createElement("label");
  city1.setAttribute("for", "city");
  city1.textContent = "City*";
  form.appendChild(city1);

  const city2 = document.createElement("input");
  city2.setAttribute("type", "text");
  city2.setAttribute("name", "city");
  city2.setAttribute("required", true);
  form.appendChild(city2);

  const country1 = document.createElement("label");
  country1.setAttribute("for", "country");
  country1.textContent = "Country*";
  form.appendChild(country1);

  const country2 = document.createElement("input");
  country2.setAttribute("type", "text");
  country2.setAttribute("name", "country");
  country2.setAttribute("required", true);
  form.appendChild(country2);

  checkoutContainer.appendChild(form);

  const payment = document.createElement("h2");
  payment.textContent = "2. Select payment method";
  checkoutContainer.appendChild(payment);

  const card1 = document.createElement("label");
  card1.setAttribute("for", "card");
  card1.textContent = "Card";
  checkoutContainer.appendChild(card1);

  const card2 = document.createElement("input");
  card2.setAttribute("type", "radio");
  card2.setAttribute("name", "card");
  checkoutContainer.appendChild(card2);

  const klarna1 = document.createElement("label");
  klarna1.setAttribute("for", "klarna");
  klarna1.textContent = "Card";
  checkoutContainer.appendChild(klarna1);

  const klarna2 = document.createElement("input");
  klarna2.setAttribute("type", "radio");
  klarna2.setAttribute("name", "klarna");
  checkoutContainer.appendChild(klarna2);

  const paypal1 = document.createElement("label");
  paypal1.setAttribute("for", "paypal");
  paypal1.textContent = "PayPal";
  checkoutContainer.appendChild(paypal1);

  const paypal2 = document.createElement("input");
  paypal2.setAttribute("type", "radio");
  paypal2.setAttribute("name", "google");
  checkoutContainer.appendChild(paypal2);

  const google1 = document.createElement("label");
  google1.setAttribute("for", "paypal");
  google1.textContent = "Google Pay";
  checkoutContainer.appendChild(google1);

  const google2 = document.createElement("input");
  google2.setAttribute("type", "radio");
  google2.setAttribute("name", "google");
  checkoutContainer.appendChild(google2);

  main.appendChild(checkoutContainer);
}
