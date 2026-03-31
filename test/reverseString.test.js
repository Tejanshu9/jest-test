const capitalize = require("../src/reverseString");

test("prince changes to ecnirp", () => {
  expect(capitalize("prince")).toBe("ecnirp");
});

test("empty string returns empty string", () => {
  expect(capitalize("")).toBe("");
});
