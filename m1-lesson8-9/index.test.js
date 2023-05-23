const { somar, nomeCompleto, verificarPar } = require('./index.js');

// Teste para a função de soma
test('Soma dois números corretamente', () => {
  expect(somar(2, 3)).toBe(5);
});

// Teste para a função de concatenação
test('Verifica se o sobrenome existe no resultado da função nomeCompleto', () => {
  const nome = 'John';
  const sobrenome = 'Doe';
  const resultado = nomeCompleto(nome, sobrenome);

  expect(resultado).toMatch(sobrenome);
});

// Teste para verificar se um número é par
test('Verifica se um número é par corretamente', () => {
  expect(verificarPar(4)).toBe(true);
  expect(verificarPar(5)).toBe(false);
});