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

  test("filter by category from array when some categories are invalid", () => {
    const array = [
      { category: "clothing" },
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
});
