const { aplicarDesconto } = require('./desconto');

describe('aplicarDesconto', () => {
  test('deve retornar o valor descontado corretamente', () => {
    const valor = 100;
    const desconto = 20;
    const valorDescontado = aplicarDesconto(valor, desconto);
    expect(valorDescontado).toBe(80);
  });

  test('deve retornar 0 se o desconto for maior que o valor', () => {
    const valor = 50;
    const desconto = 100;
    const valorDescontado = aplicarDesconto(valor, desconto);
    expect(valorDescontado).toBe(0);
  });
});