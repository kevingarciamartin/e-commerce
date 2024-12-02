const {
  sortByTitle,
  sortByPrice,
  reverseArray,
} = require("../assets/js/utils/sort.js");

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
      expect(result).toEqual([{ price: 1 }, { price: 2 }, { title: "Banana" }]);
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

  describe("testing reverse array function", () => {
    test("reverse an array of numbers", () => {
      const array = [1, 2, 3, 4, 5];
      const result = reverseArray(array);
      expect(result).toEqual([5, 4, 3, 2, 1]);
    });
    test("reverse an array of strings", () => {
      const array = ["a", "b", "c"];
      const result = reverseArray(array);
      expect(result).toEqual(["c", "b", "a"]);
    });
    test("reverse an array of objects", () => {
      const array = [
        { title: "Product A", price: 10 },
        { title: "Product B", price: 20 },
        { title: "Product C", price: 30 },
      ];
      const result = reverseArray(array);
      expect(result).toEqual([
        { title: "Product C", price: 30 },
        { title: "Product B", price: 20 },
        { title: "Product A", price: 10 },
      ]);
    });
    test("reverse an array should return an empty array if the input is an empty array", () => {
      const array = [];
      const result = reverseArray(array);
      expect(result).toEqual([]);
    });
    test("reverse an array should return the same array if it contains only one element", () => {
      const array = [1];
      const result = reverseArray(array);
      expect(result).toEqual([1]);
    });
    test("reverse an array should handle arrays containing different data types such as numbers, strings, objects, etc.", () => {
      const array = [1, "two", { three: 3 }, [4]];
      const result = reverseArray(array);
      expect(result).toEqual([[4], { three: 3 }, "two", 1]);
    });
    test("reverse an array should correctly reverse arrays that contain nested arrays", () => {
      const array = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      const result = reverseArray(array);
      expect(result).toEqual([
        [5, 6],
        [3, 4],
        [1, 2],
      ]);
    });
  });
});
