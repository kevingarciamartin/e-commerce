const { sortByTitle, sortByPrice } = require("../assets/js/utils/sort.js");

describe("testing sort functions", () => {
  describe("testing sort by title function", () => {
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

    test("sort by title from array should correctly sort titles with special characters, numbers, or spaces", () => {
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

    test("sort by title from array should handle objects that are missing the title property", () => {
      const array = [{ title: "Banana" }, { price: 2 }, { title: "Apple" }];
      const result = sortByTitle(array);
      expect(result).toEqual([
        { title: "Apple" },
        { title: "Banana" },
        { price: 2 },
      ]);
    });
  });

  describe("testing sort by price function", () => {
    test("sort by price from array", () => {
      const array = [{ price: 20 }, { price: 30 }, { price: 10 }];
      const result = sortByPrice(array);
      expect(result).toEqual([{ price: 10 }, { price: 20 }, { price: 30 }]);
    });

    test("sort by price from array should return an empty array if the input is an empty array", () => {
      const array = [];
      const result = sortByPrice(array);
      expect(result).toEqual([]);
    });

    test("sort by price from array should return the same array if it contains only one object", () => {
      const array = [{ price: 10 }];
      const result = sortByPrice(array);
      expect(result).toEqual([{ price: 10 }]);
    });

    test("sort by price from array should maintain the relative order of objects with identical prices", () => {
      const array = [{ price: 10 }, { price: 10 }];
      const result = sortByPrice(array);
      expect(result).toEqual([{ price: 10 }, { price: 10 }]);
    });

    test("sort by price from array should correctly sort objects with negative prices", () => {
      const array = [{ price: -5 }, { price: 10 }, { price: -3 }];
      const result = sortByPrice(array);
      expect(result).toEqual([{ price: -5 }, { price: -3 }, { price: 10 }]);
    });

    test("sort by price from array should handle different data types for prices (e.g., strings, numbers)", () => {
      const array = [
        { price: "10" },
        { price: 5 },
        { price: "20" },
        { price: 15 },
      ];
      const result = sortByPrice(array);
      expect(result).toEqual([
        { price: 5 },
        { price: "10" },
        { price: 15 },
        { price: "20" },
      ]);
    });

    test("sort by price from array should handle objects that are missing the price property", () => {
      const array = [{ title: "Banana" }, { price: 2 }, { price: 1 }];
      const result = sortByPrice(array);
      expect(result).toEqual([{ price: 1 }, { price: 2 }, { title: "Banana" } ]);
    });

    test("sort by price from array should handle non-numeric prices gracefully (e.g., null, undefined, NaN)", () => {
      const array = [
        { price: 10 },
        { price: null },
        { price: 5 },
        { price: undefined },
        { price: NaN },
      ];
      const result = sortByPrice(array);
      expect(result).toEqual([
        { price: 5 },
        { price: 10 },
        { price: null },
        { price: undefined },
        { price: NaN },
      ]);
    });
  });
});
