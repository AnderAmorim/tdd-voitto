function calcularValorTotal(preco, quantidade) {
    if (preco <= 0 || quantidade <= 0) {
      return 0
    }
    return preco * quantidade;
  }
  
  module.exports = calcularValorTotal;