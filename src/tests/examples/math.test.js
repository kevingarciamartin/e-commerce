const {
  sum,
  subtract,
  multiply,
  divide,
} = require("../../assets/js/testExamples/math");

describe("testing math functions", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds -2 + 1 to equal -1", () => {
    expect(sum(1, -2)).toBe(-1);
  });

  test("subtract two positive numbers", () => {
    expect(subtract(2, 1)).toBe(1);
  });

  test("subtract one positive number with a negative number", () => {
    expect(subtract(2, -1)).toBe(3);
  });

  test("subtract two negative numbers", () => {
    expect(subtract(-2, -1)).toBe(-1);
  });

  test("throw error when the first subtract value is not a number", () => {
    expect(() => subtract("string", 1)).toThrow(
      "The first value has to be number"
    );
    expect(() => subtract(null, 1)).toThrow("The first value has to be number");
    expect(() => subtract(undefined, 1)).toThrow(
      "The first value has to be number"
    );
  });

  test("throw error when the second subtract value is not a number", () => {
    expect(() => subtract(1, "string")).toThrow(
      "The second value has to be number"
    );
    expect(() => subtract(1, null)).toThrow(
      "The second value has to be number"
    );
    expect(() => subtract(1, undefined)).toThrow(
      "The second value has to be number"
    );
  });

  test("multiply two positive numbers", () => {
    expect(multiply(1, 2)).toBe(2);
  });

  test("multiply one positive number with a negative number", () => {
    expect(multiply(1, -2)).toBe(-2);
  });

  test("multiply two negative numbers", () => {
    expect(multiply(-1, -2)).toBe(2);
  });

  test("throw error when the first multiply value is not a number", () => {
    expect(() => multiply("string", 1)).toThrow(
      "The first value has to be number"
    );
    expect(() => multiply(null, 1)).toThrow("The first value has to be number");
    expect(() => multiply(undefined, 1)).toThrow(
      "The first value has to be number"
    );
  });

  test("throw error when the second multiply value is not a number", () => {
    expect(() => multiply(1, "string")).toThrow(
      "The second value has to be number"
    );
    expect(() => multiply(1, null)).toThrow(
      "The second value has to be number"
    );
    expect(() => multiply(1, undefined)).toThrow(
      "The second value has to be number"
    );
  });

  test("divide 10 / 2 to equal 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throw an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
