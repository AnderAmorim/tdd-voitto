function concatenaEndereco(cidade, estado) {
  return `${cidade} - ${estado}`;
}

function enderecoCompleto(cidade, estado) {
  const enderecoFinal = concatenaEndereco(cidade, estado);
  const fraseApresentacao = `Eu moro em ${enderecoFinal}`
  return fraseApresentacao;
}

module.exports = enderecoCompleto;