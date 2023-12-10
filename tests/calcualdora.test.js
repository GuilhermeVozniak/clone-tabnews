const calculadora = require("../models/calculadora.js");

test("Calculadora test", calbackFuntion);

function calbackFuntion() {
  expect(calculadora.somar(2, 3)).toBe(5);
  expect(calculadora.somar(5, 3)).toBe(8);
  expect(calculadora.somar(2, "banana")).toBe("Error");
}
