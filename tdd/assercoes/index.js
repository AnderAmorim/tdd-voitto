function somar(numero1, numero2){
    return numero1+numero2
}

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}


function verificaSeEPar(numero){
    return numero % 2 === 0
}

module.exports = {
    somar,
    nomeCompleto,
    verificaSeEPar
}