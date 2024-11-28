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

export function getProducts() {
  try {
    const products = localStorage.getItem("products");
    return JSON.parse(products)
  } catch (error) {
    console.error("There are no products in local storage", error);
  }
}
