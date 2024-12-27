const caesarCipher = require("./caesar");
const caesar = require("./caesar");

test("Shift 'hello' 3 spaces", () => {
  expect(caesarCipher("hello", 5)).toBe("khoor");
});
