const enderecoCompleto = require('./index.js')
test('Verifica o funcionamento do endereco completo', () =>{
    const result = enderecoCompleto('Juiz de Fora', 'MG')
    expect(result).toBe(`Eu moro em Juiz de Fora - MG`)
})