const sum = (a, b) => a + b;

const subtract = (a, b) => {
  if (typeof a !== "number")
    throw new Error("The first value has to be number");
  if (typeof b !== "number")
    throw new Error("The second value has to be number");

  return a - b;
};

const multiply = (a, b) => {
  if (typeof a !== "number")
    throw new Error("The first value has to be number");
  if (typeof b !== "number")
    throw new Error("The second value has to be number");

  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

module.exports = { sum, subtract, multiply, divide };
