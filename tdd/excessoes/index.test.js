const dividir = require('./index.js')
test('deve realizar a divisao corretamente', () => {
    expect(dividir(6,3)).toBe(2)
})

test('deve retornar um erro quando o divisor for 0', () =>{
    expect(()=>dividir(10, 0)).toThrow('Não é possivel por zero')
})