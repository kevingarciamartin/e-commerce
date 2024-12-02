const sortByTitle = (array) => {
  return array.sort((a, b) => {
    const titleA = a.title ? a.title.toLowerCase() : null;
    const titleB = b.title ? b.title.toLowerCase() : null;

    if (titleA === null && titleB === null) return 0;
    if (titleA === null) return 1;
    if (titleB === null) return -1;
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;

    return 0;
  });
};

const sortByPrice = (array) => {
  return array.sort((a, b) => {
    const priceA = getPriceAsNumber(a.price);
    const priceB = getPriceAsNumber(b.price);

    return priceA - priceB;
  });
};

const reverseArray = (array) => array.slice().reverse();

// Helper function to convert price to a number or Infinity for invalid values
const getPriceAsNumber = (price) => {
  if (typeof price === "number" && !isNaN(price)) {
    return price;
  }
  if (typeof price === "string" && !isNaN(parseFloat(price))) {
    return parseFloat(price);
  }
  return Infinity;
};

module.exports = { sortByTitle, sortByPrice, reverseArray };
