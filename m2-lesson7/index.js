function concatenaNome(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

function dadosUsuario(nome, sobrenome, idade) {
  const nomeCompleto = concatenaNome(nome, sobrenome);
  const fraseApresentacao = `Meu nome é ${nomeCompleto} e eu tenho ${idade} anos`
  return fraseApresentacao;
}

module.exports = dadosUsuario;