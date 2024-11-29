const filterEvenNumbers = require("../../assets/js/testExamples/array");

describe("testing array functions", () => {
  test("filter even numbers from array", () => {
    const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([2, 4, 6]);
  });

  test("returns empty array when no even numbers", () => {
    const result = filterEvenNumbers([1, 3, 5, 7]);
    expect(result).toEqual([]);
  });

  test("ignores non-numeric values", () => {
    const result = filterEvenNumbers([2, "hello", 4, null, undefined]);
    expect(result).toEqual([2, 4]);
  });

  test("handles nagative numbers correctly", () => {
    const result = filterEvenNumbers([-2, -3, -4, -5]);
    expect(result).toEqual([-2, -4]);
  });
});
