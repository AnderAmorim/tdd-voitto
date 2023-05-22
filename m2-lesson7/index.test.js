

const enderecoCompleto = require('./index');

describe('Testes da aplicação', () => {
  test('Deve retornar a concatenação de duas strings', () => {
    const resultado = enderecoCompleto('Juiz de Fora', 'MG');
    expect(resultado).toBe(`Eu moro em Juiz de Fora - MG`);
  });
});