const filterCategory = (array, category) =>
  array.filter((item) => item.category === category);

module.exports = { filterCategory };
