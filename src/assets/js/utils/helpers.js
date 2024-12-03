// Calculates the time delay until the next midnight
export function getDelayUntilNextMidnight() {
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return nextMidnight - now;
}

export function resetMain() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="content-container"></div>
  `;
}

// TODO: delete after. Cart example
export const exampleCart = [
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    },
    // quantity in user's card
    "quantity": 10,
    "exclude": false, 
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 130
    },
    // quantity in user's card
    "quantity": 10,
    "exclude": false, 
  },
]

// Local strorage of items in the cart, incl save and load 
export const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const loadCartFromStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};


// function for calculating total in the cart
export const calculateTotal = (cart) => {
  return cart.reduce((total, item) => {
    if (!item.exclude) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);
};
