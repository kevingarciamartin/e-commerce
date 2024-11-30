const filterCategory = (array, category) =>
  array.filter((item) => item.category === category.toLowerCase());

module.exports = { filterCategory };
