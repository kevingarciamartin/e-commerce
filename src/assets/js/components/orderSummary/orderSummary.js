export const calculateTotal = (cart) => {
  return cart.reduce((total, item) => {
    if (!item.exclude) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);
};

export function createOrderSummaryCard(
  cart,
  buttonName,
  paymentFunction,
  externalButton = null
) {
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
        <h2>Order summary</h2>
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
    `;

  let paymentButton;

  if (externalButton) {
    paymentButton = externalButton;
  } else {
    paymentButton = document.createElement("button");
    paymentButton.textContent = buttonName;
    paymentButton.className = "continue-to-payment-btn";
    paymentButton.disabled = totalQuantity === 0 ? true : false;
    paymentButton.addEventListener("click", paymentFunction);
  }

  card.appendChild(paymentButton);

  return card;
}
