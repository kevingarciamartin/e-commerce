const { sortByTitle } = require("../assets/js/utils/sort.js");

describe("testing sort functions", () => {
  test("sort by title from array", () => {
    const array = [
      { title: "banana" },
      { title: "orange" },
      { title: "apple" },
    ];
    const result = sortByTitle(array);
    expect(result).toEqual([
      { title: "apple" },
      { title: "banana" },
      { title: "orange" },
    ]);
  });

  test("sort by title from array should return an empty array if the input is an empty array", () => {
    const array = [];
    const result = sortByTitle(array);
    expect(result).toEqual([]);
  });

  test("sort by title from array should return the same array if it contains only one object", () => {
    const array = [{ title: "banana" }];
    const result = sortByTitle(array);
    expect(result).toEqual([{ title: "banana" }]);
  });

  test("sort by title from array should maintain the relative order of objects with identical titles", () => {
    const array = [{ title: "banana" }, { title: "banana" }];
    const result = sortByTitle(array);
    expect(result).toEqual([{ title: "banana" }, { title: "banana" }]);
  });

  test("sort by title from array should handle case sensitivity", () => {
    const array = [
      { title: "Banana" },
      { title: "orange" },
      { title: "apple" },
    ];
    const result = sortByTitle(array);
    expect(result).toEqual([
      { title: "apple" },
      { title: "Banana" },
      { title: "orange" },
    ]);
  });

  test("sort by title from array should should correctly sort titles with special characters, numbers, or spaces", () => {
    const array = [
      { title: "Zebra" },
      { title: "apple" },
      { title: "Cherry" },
      { title: "1Apple" },
      { title: " apple" },
    ];
    const result = sortByTitle(array);
    expect(result).toEqual([
      { title: " apple" },
      { title: "1Apple" },
      { title: "apple" },
      { title: "Cherry" },
      { title: "Zebra" },
    ]);
  });

  test("sort by title from array should should handle objects that are missing the title property", () => {
    const array = [{ title: "Banana" }, { price: 2 }, { title: "Apple" }];
    const result = sortByTitle(array);
    expect(result).toEqual([
      { title: "Apple" },
      { title: "Banana" },
      { price: 2 },
    ]);
  });
});
