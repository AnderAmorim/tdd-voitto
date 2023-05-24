const axios = require('axios')
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/pokemon/:search', async (req, res) => {
  const { search } = req.params;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Pokémon not found' });
  }
});

if (require.main === module) {
    app.listen(port);
    console.log('API funcionando!');
}

module.exports = app
