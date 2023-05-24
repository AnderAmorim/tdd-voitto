const calcularValorTotal = require('./index.js');

describe('Testes da função calcularValorTotal', () => {
  test('Deve calcular corretamente o valor total da compra', () => {
    const preco = 10;
    const quantidade = 5;
    const resultado = calcularValorTotal(preco, quantidade);
    expect(resultado).toBe(50);
  });

  test('Deve retornar 0 se o preço for zero', () => {
    const preco = 0;
    const quantidade = 5;
    const resultado = calcularValorTotal(preco, quantidade);
    expect(resultado).toBe(0);
  });
})