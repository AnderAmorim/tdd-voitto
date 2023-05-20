const dividir = require('./index');

describe('Testes da aplicação', () => {
  it('Deve realizar a divisão corretamente', () => {
    expect(dividir(6, 3)).toBe(2); 
  });

  it('Deve lançar uma exceção ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Não é possível dividir por zero!'); 
  });
});