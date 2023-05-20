function calcularValorTotal(preco, quantidade) {
  if (preco < 0 || quantidade < 0) {
    throw new Error('Preço e quantidade devem ser maiores que zero');
  }
  return preco * quantidade;
}

module.exports = calcularValorTotal;