const calculator = require("../src/calculator");

test(" 1 plus 2 equals to 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test(" 10 multiplied by 2 equals to 20", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test(" 100 subtracted by 2 equals to 98", () => {
  expect(calculator.subtract(100, 2)).toBe(98);
});

test(" 12 divide 3 equals to 4", () => {
  expect(calculator.divide(12, 2)).toBe(6);
});

test(" 1 divide 0 equals to error", () => {
  expect(calculator.divide(1, 0)).toBe("Cannot divide by zero");
});
