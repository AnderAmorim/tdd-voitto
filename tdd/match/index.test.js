test('verifica a ocorrencia de uma string', ()=>{
    const regex = /^hello/i 
    const str = 'Hello, world'
    expect(str).toMatch(regex)
})

test('verifica se um valor existe do array', () =>{
    const array = [1 ,2 ,3 ,4 ,5]
    const value = 3
    expect(array).toContain(value)
})

test('verifica se uma propriedade existe dentro de um objeto', ()=>{
    const obj = {
        name: "Anderson",
        years: 24
    }
    expect(obj).toHaveProperty('name')
})