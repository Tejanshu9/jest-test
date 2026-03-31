const capitalize = require("../src/capitalize");

test("prince changes to Prince", () => {
  expect(capitalize("prince")).toBe("Prince");
});

test("empty string returns empty string", () => {
  expect(capitalize("")).toBe("");
});
