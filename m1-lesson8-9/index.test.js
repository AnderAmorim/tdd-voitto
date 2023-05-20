const somarUm = require('./index.js');

test('Teste somarUm', () => {
  expect(somarUm(5)).toBe(6);
  expect(somarUm(-3)).toBe(-2);
  expect(somarUm(0)).toBe(1);
});