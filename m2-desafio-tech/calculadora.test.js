const calcularValorTotal = require('./calculadora')

describe('calcularValorTotal', () => {
  test('deve calcular corretamente o valor total', () => {
    const preco = 10;
    const quantidade = 5;
    const resultado = calcularValorTotal(preco, quantidade);
    expect(resultado).toBe(50);
  });

  test('deve retornar zero quando o preço for zero', () => {
    const preco = 0;
    const quantidade = 5;
    const resultado = calcularValorTotal(preco, quantidade);
    expect(resultado).toBe(0);
  });

  test('deve retornar zero quando a quantidade for zero', () => {
    const preco = 10;
    const quantidade = 0;
    const resultado = calcularValorTotal(preco, quantidade);
    expect(resultado).toBe(0);
  });

  test('deve lançar um erro quando o preço for negativo', () => {
    const preco = -10;
    const quantidade = 5;
    expect(() => {
      calcularValorTotal(preco, quantidade);
    }).toThrow('Preço e quantidade devem ser maiores que zero');
  });

  test('deve lançar um erro quando a quantidade for negativa', () => {
    const preco = 10;
    const quantidade = -5;
    expect(() => {
      calcularValorTotal(preco, quantidade);
    }).toThrow('Preço e quantidade devem ser maiores que zero');
  });
});