module.exports = function dividir(a, b) {
    if(b === 0){
        throw new Error('Não é possivel por zero')
    }
    return a/b;
}