// Add CSS dynamically
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "model.css";
document.head.appendChild(link);

// Add Header
const header = document.createElement("header");
header.innerHTML = `
  <div class="logo">Kenvorisa</div>
  <nav>
    <a href="#">Shop</a>
    <a href="#">Profile</a>
    <button class="cart-button">Cart</button>
  </nav>
`;
document.body.appendChild(header);

// Add Main Content
const main = document.createElement("main");
main.innerHTML = `
  <h1>Checkout</h1>
  <section>
    <h2>1. Delivery Address</h2>
    <form id="checkout-form">
      <label for="full-name">Full Name:</label>
      <input type="text" id="full-name" placeholder="John Doe" required />

      <label for="email">Email Address:</label>
      <input type="email" id="email" placeholder="john@example.com" required />

      <label for="address">Address:</label>
      <input type="text" id="address" placeholder="123 Main Street" required />

      <label for="city">City:</label>
      <input type="text" id="city" placeholder="New York" required />

      <div class="row">
        <div>
          <label for="zip">ZIP Code:</label>
          <input type="text" id="zip" placeholder="10001" required />
        </div>
        <div>
          <label for="country">Country:</label>
          <input type="text" id="country" placeholder="USA" required />
        </div>
      </div>
    </form>
  </section>

  <section>
    <h2>2. Select Payment Method</h2>
    <button class="payment-method">Credit Card</button>
    <button class="payment-method">PayPal</button>
  </section>

  <section>
    <h2>3. Complete Purchase</h2>
    <div class="order-summary">
      <p>Subtotal: <span>$100</span></p>
      <p>Shipping: <span>$5</span></p>
      <p>Total: <span>$105</span></p>
    </div>
    <button id="complete-order">Complete Order</button>
  </section>
`;
document.body.appendChild(main);

// Add Confirmation Modal
const modal = document.createElement("div");
modal.id = "confirmation-modal";
modal.classList.add("hidden");
modal.innerHTML = `
  <div class="modal-content">
    <h2>Thank you for shopping with us!</h2>
    <p>Your order will be processed and delivered shortly. We at Kenvorisa appreciate your business.</p>
    <button id="continue-shopping">Continue Shopping</button>
  </div>
`;
document.body.appendChild(modal);

// Add Footer
const footer = document.createElement("footer");
footer.innerHTML = `<p>© 2024 Kenvorisa AB. All rights reserved.</p>`;
document.body.appendChild(footer);

// Handle Modal Behavior
const completeOrderButton = document.getElementById("complete-order");
const confirmationModal = document.getElementById("confirmation-modal");
const continueShoppingButton = document.getElementById("continue-shopping");

completeOrderButton.addEventListener("click", () => {
  confirmationModal.classList.remove("hidden");
});

continueShoppingButton.addEventListener("click", () => {
  confirmationModal.classList.add("hidden");
});