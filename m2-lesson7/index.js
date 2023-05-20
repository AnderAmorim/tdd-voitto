function metodoAuxiliar(string1, string2) {
    return string1 + string2;
  }
  
  function minhaAplicacao(string1, string2) {
    const resultado = metodoAuxiliar(string1, string2);
    // ... outras operações ...
    return resultado;
  }
  
  module.exports = minhaAplicacao;