const fs = require('fs')

function findTestTxt(){
    const files = fs.readdirSync('./')
    console.log(files)
    return files.some(f => f === 'test.txt')
}

module.exports = {findTestTxt}