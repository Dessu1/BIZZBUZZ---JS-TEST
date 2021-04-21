const fizzbuzz = require("./bizzbuzz");

describe("fizzbuzz", () => {
  test("deberia pintar 1 cuanto reciba un 1", () => {
    const expected = 1;
    const resut = fizzbuzz(1);
    expect(expected).toBe(resut);
  });

  test("deberia pintar fizz cuando reciba un multiplo de 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  });

  test("deberia pintar fizz cuando reciba un multiplo de 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  });

  test("deberia pintar fizz cuando reciba un multiplo de 3 y 5", () => {
    const expected = "bizzbuzz";
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });

  test('deberia puntar error cuando reciba un argumento diferente a number', () => {
    const expected = 'Error: El valor ingresado debe ser un numero';
    const result = fizzbuzz("5");
    expect(expected).toBe(result);
  })
});
