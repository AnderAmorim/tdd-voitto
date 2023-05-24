import React, { useState } from 'react';

const App = () => {
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
      <p>Valor: {valor}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default App;