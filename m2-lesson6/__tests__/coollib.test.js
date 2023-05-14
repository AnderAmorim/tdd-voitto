//index.test.js
const coollib = require('../mylibs/coollib');

jest.mock('../mylibs/coollib');

test('Encontrar o arquivo', () => {
    const result = coollib.findTestTxt();
    expect(result).toBeTruthy();
})

test('Não é possível encontrar o arquivo e lança um erro quando isso ocorre', () => {
    const mockReaddirSync = jest.spyOn(fs, 'readdirSync');
    mockReaddirSync.mockImplementation(() => {
      throw new Error('Unable to read directory');
    });

    expect(() => coollib.findTestTxt()).toThrow('Unable to read directory');
    mockReaddirSync.mockRestore();
});