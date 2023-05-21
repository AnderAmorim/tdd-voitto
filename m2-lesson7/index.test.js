

const dadosUsuario = require('./index');

describe('Testes da aplicação', () => {
  test('Deve retornar a concatenação de duas strings', () => {
    const resultado = dadosUsuario('Anderson', 'Amorim', 23);
    expect(resultado).toBe('Meu nome é Anderson Amorim e eu tenho 23 anos');
  });
});