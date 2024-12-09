import "./cart.css";
import {
  resetMain,
  loadCartFromStorage,
  saveCartToStorage,
} from "../../utils/helpers";
import { renderCheckout } from "../checkout/checkout";
import { createOrderSummaryCard } from "../../components/orderSummary/orderSummary";
import { renderPageHeading } from "../../components/pageHeading/pageHeading";

export function renderCart() {
  resetMain();
  renderPageHeading("Shopping cart");

  const cart = loadCartFromStorage();
  const cartPage = new ShoppingCartPage(cart);
  cartPage.renderItemList();
}

export class ShoppingCartPage {
  constructor(cart) {
    this.cart = cart;
    this.itemListContainer = document.createElement("section");
  }

  renderItemList() {
    this.contentContainer = document.querySelector(".content-container");
    this.itemListContainer.classList.add("cart-container");
    this.itemListContainer.innerHTML = `
      <div class="cart-list"></div>
    `;
    this.contentContainer.appendChild(this.itemListContainer);
    this.cartList = this.itemListContainer.querySelector(".cart-list");

    this.cart.forEach((item) => {
      const itemElement = this.createItemElement(item);
      item.exclude
        ? itemElement.classList.add("item-cart-not-buy")
        : itemElement.classList.remove("item-cart-not-buy");
      this.cartList.appendChild(itemElement);
    });

    const continueToPaymentButton = document.createElement("button");
    continueToPaymentButton.textContent = "Continue to payment";
    continueToPaymentButton.type = "button";
    continueToPaymentButton.className = "continue-to-payment-btn";
    continueToPaymentButton.addEventListener("click", () => {
      renderCheckout();
    });

    const orderSummaryCard = createOrderSummaryCard(
      this.cart,
      "Continue to payment",
      () => renderCheckout(this.cart)
    );

    this.cartContainer = this.itemListContainer;
    this.cartContainer.appendChild(orderSummaryCard);
  }

  createItemElement(item) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.dataset.itemId = item.id;

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="item-image">
      <div class="item-details">
        <h3>${item.title}</h3>
        <div class="item-controls">
        <div class="quantity">
          <label>
            <span class="minus">−</span><input type="number" value="${
              item.quantity
            }"min="1" max="100" class="quantity-input"><span class="plus">+</span>
          </label>
          </div>
          <button class="btn-remove">Remove from cart</button>
          <button class="btn-toggle">${
            item.exclude ? "Include in order" : "Exclude from order"
          }</button>
        </div>
        <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    `;

    itemDiv.querySelector(".minus").addEventListener("click", () => {
      if (item.quantity > 1) {
        // Prevent quantity from going below 1
        this.updateQuantity(item.id, item.quantity - 1);
        this.renderItemList();
        saveCartToStorage(this.cart);
      }
    });

    itemDiv.querySelector(".plus").addEventListener("click", () => {
      if (item.quantity < 100) {
        this.updateQuantity(item.id, item.quantity + 1);
        this.renderItemList();
        saveCartToStorage(this.cart);
      }
    });

    this.attachItemEventListeners(itemDiv, item);

    return itemDiv;
  }

  updateQuantity(id, quant) {
    this.cart.forEach((item) => {
      if (item.id === id) {
        item.quantity = quant;
      }
    });
  }

  removeItem(id) {
    let objIndex = this.cart.findIndex((item) => item.id === id);

    if (objIndex !== -1) {
      this.cart.splice(objIndex, 1);
    }
  }

  toggle(id) {
    this.cart.forEach((item) => {
      if (item.id === id) {
        item.exclude = !item.exclude;
      }
    });
  }

  attachItemEventListeners(itemElement, item) {
    const quantityInput = itemElement.querySelector(".quantity-input");
    const removeBtn = itemElement.querySelector(".btn-remove");
    const buttonToggle = itemElement.querySelector(".btn-toggle");

    quantityInput.addEventListener("change", (e) => {
      const newQuantity = parseInt(e.target.value);
      this.updateQuantity(item.id, newQuantity);
      this.updateItemPrice(itemElement, item);
      saveCartToStorage(this.cart);
      this.renderItemList();
    });

    removeBtn.addEventListener("click", () => {
      this.removeItem(item.id);
      saveCartToStorage(this.cart);
      this.renderItemList();
    });

    buttonToggle.addEventListener("click", () => {
      this.toggle(item.id);

      let obj = this.cart.find((i) => i.id === item.id);

      buttonToggle.textContent = obj.exclude
        ? "Include in order"
        : "Exclude from order";
      this.updateItemPrice(itemElement, item);
      saveCartToStorage(this.cart);
      this.renderItemList();
    });
  }

  updateItemPrice(itemElement, item) {
    const priceElement = itemElement.querySelector(".item-price");
    priceElement.textContent = `Price: $${(item.price * item.quantity).toFixed(
      2
    )}`;
  }
}
