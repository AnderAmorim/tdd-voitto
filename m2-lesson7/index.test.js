

const minhaAplicacao = require('./index');

describe('Testes da aplicação', () => {
  test('Deve retornar a concatenação de duas strings', () => {
    const resultado = minhaAplicacao('Olá, ', 'mundo');
    expect(resultado).toBe('Olá, mundo');
  });

  test('Deve tratar corretamente strings vazias', () => {
    const resultado = minhaAplicacao('', '');
    expect(resultado).toBe('');
  });
});