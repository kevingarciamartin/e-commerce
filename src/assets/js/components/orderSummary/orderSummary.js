const calculateTotal = (cart) => {
    return cart.reduce((total, item) => {
      if (!item.exclude) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };
  
export function createOrderSummaryCard(cart, buttonName, paymentFunction) {
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
      <button id="continue-to-payment" class="continue-to-payment-btn">${buttonName}</button>
    `;
  
    const paymentButton = card.querySelector(".continue-to-payment-btn");
    paymentButton.addEventListener("click", () => {
      paymentFunction()
    });
  
    return card;
  }
  

