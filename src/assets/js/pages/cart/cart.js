import "./cart.css";
import {
  resetMain,
  loadCartFromStorage,
  saveCartToStorage,
  calculateTotal,
} from "../../utils/helpers";
import { renderCheckout } from "../checkout/checkout";

export function renderCart() {
  resetMain();

  const cart = loadCartFromStorage();
  const cartPage = new ShoppingCartPage(cart);
  cartPage.renderItemList();
}

class ShoppingCartPage {
  constructor(cart) {
    this.cart = cart;
    this.itemListContainer = document.querySelector(".content-container");
  }

  renderItemList() {
    this.itemListContainer.appendChild;
    this.itemListContainer.innerHTML = `
      <h3 class="cart-heading">Shopping cart</h3><div class="cart-container"><div class="cart-list"></div></div>
    `;
    this.cartList = this.itemListContainer.querySelector(".cart-list");

    this.cart.forEach((item) => {
      const itemElement = this.createItemElement(item);
      item.exclude
        ? itemElement.classList.add("item-cart-not-buy")
        : itemElement.classList.remove("item-cart-not-buy");
      this.cartList.appendChild(itemElement);
    });
    const orderSummaryCard = createOrderSummaryCard(this.cart);
    this.cartContainer =
      this.itemListContainer.querySelector(".cart-container");

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
          <label>
            Qty: <input type="number" value="${
              item.quantity
            }" min="1" class="quantity-input">
          </label>
          <button class="btn-remove">Remove from cart</button>
          <button class="btn-toggle">${
            item.excluded ? "Include in order" : "Exclude from order"
          }</button>
        </div>
        <p class="item-price">Price: $${(item.price * item.quantity).toFixed(
          2
        )}</p>
      </div>
    `;

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

function createOrderSummaryCard(cart) {
  const totalQuantity = cart.reduce((sum, item) => {
    if (!item.exclude) {
      return sum + item.quantity;
    }
    return sum;
  }, 0);

  const subtotal = calculateTotal(cart);

  const card = document.createElement("div");
  card.className = "order-summary-card";

  card.innerHTML = `
    <div class="summary-header">
      <h2>Order Summary</h2>
      <p>${totalQuantity} item${totalQuantity !== 1 ? "s" : ""}</p>
    </div>
    <div class="summary-line">
      <span>Subtotal</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="summary-line">
      <span>Shipping</span>
      <span>TBD</span>
    </div>
    <div class="summary-line total">
      <span>Total</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <button id="continue-to-payment" class="continue-to-payment-btn">Continue to Payment</button>
  `;

  const paymentButton = card.querySelector(".continue-to-payment-btn");
  paymentButton.addEventListener("click", () => {
    // console.log('Continuing to payment...');
    renderCheckout();
  });

  return card;
}
