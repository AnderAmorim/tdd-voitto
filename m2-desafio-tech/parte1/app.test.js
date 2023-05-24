const dividirNumeros = require("./app");

describe("dividirNumeros", () => {
  test("divisão bem-sucedida", () => {
    expect(dividirNumeros(10, 2)).toBe(5);
    expect(dividirNumeros(-20, 4)).toBe(-5);
    expect(dividirNumeros(0, 5)).toBe(0);
  });

  test("divisão por zero", () => {
    expect(() => dividirNumeros(10, 0)).toThrow("Divisão por zero não é permitida!");
    expect(() => dividirNumeros(0, 0)).toThrow("Divisão por zero não é permitida!");
  });
});