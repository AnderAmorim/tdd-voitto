const coollib = require("../mylibs/__mocks__/coollib")

test('Verifica de existencia de arquivo txt', () =>{
    const result = coollib.findTestTxt()
    expect(result).toBeTruthy()
})