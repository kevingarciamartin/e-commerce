const { filterCategory } = require("../assets/js/utils/filter.js");

describe("testing filter functions", () => {
  test("filter by category from array", () => {
    const array = [
      { category: "clothing" },
      { category: "electronics" },
      { category: "clothing" },
      { category: "food" },
    ];
    const category = "clothing";
    const result = filterCategory(array, category);
    expect(result).toEqual([
      { category: "clothing" },
      { category: "clothing" },
    ]);
  });

  test("filter by category from array should ignore non-string values", () => {
    const array = [
      { category: "clothing" },
      { category: 1 },
      { category: null },
      { category: "clothing" },
      { category: undefined },
    ];
    const category = "clothing";
    const result = filterCategory(array, category);
    expect(result).toEqual([
      { category: "clothing" },
      { category: "clothing" },
    ]);
  });

  test("filter by category from array should return empty array when category is not found", () => {
    const array = [
      { category: "electronics" },
      { category: "food" },
      { category: "sport" },
      { category: "gardening" },
    ];
    const category = "clothing";
    const result = filterCategory(array, category);
    expect(result).toEqual([]);
  });

  test("filter by category from array should be case insensitive", () => {
    const array = [
      { category: "clothing" },
      { category: "electronics" },
      { category: "clothing" },
      { category: "food" },
    ];
    const category = "Clothing";
    const result = filterCategory(array, category);
    expect(result).toEqual([
      { category: "clothing" },
      { category: "clothing" },
    ]);
  });
});
