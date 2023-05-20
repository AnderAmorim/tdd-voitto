import React, { useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(valor + 1);
  };

  const decrementar = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor: {valor}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;