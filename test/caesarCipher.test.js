const caesarCipher = require("../src/caesarCipher");

test("basic shift", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wrap from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation remains unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("negative shift", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("large shift (greater than 26)", () => {
  expect(caesarCipher("abc", 29)).toBe("def"); // 29 % 26 = 3
});
