const { somar, nomeCompleto, verificaSeEPar } = require(".")

test('Testando a soma de dois números', () => {
    expect(somar(2,3)).toBe(5)
})

test('Verifica se o sobrenome está presente no retorno', () => {
    const nome = 'Anderson';
    const sobrenome = 'Amorim';
    const resultado = nomeCompleto(nome, sobrenome);
  
    expect(resultado).toMatch(sobrenome);
})

test('Verifica se um número é par', ()=>{
    expect(verificaSeEPar(4)).toBe(true)
    expect(verificaSeEPar(5)).toBe(false)
})