function somar(a, b) {
    return a + b;
  }
  
  function nomeCompleto(nome, sobrenome) {
    return nome + ` ` + sobrenome;
  }
  
  function verificarPar(numero) {
    return numero % 2 === 0;
  }
  
  module.exports = {
    somar,
    nomeCompleto,
    verificarPar,
  };