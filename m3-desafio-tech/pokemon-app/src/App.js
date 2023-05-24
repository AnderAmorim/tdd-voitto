import React, { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await window.fetch(
        `http://localhost:5000/api/pokemon/${search}`
      );
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Pokémon Search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;