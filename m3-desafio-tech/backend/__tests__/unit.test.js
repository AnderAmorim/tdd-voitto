
const axios = require('axios');
const supertest = require("supertest");
const app = require("../server");

describe('Testes Unitários', () => {
  it('deve retornar os dados corretos para um Pokémon existente', async () => {
    const mockResponse = {
      data: {
        name: 'bulbasaur',
        abilities: [{ ability: { name: 'ability1' } }, { ability: { name: 'ability2' } }],
      },
    };

    axios.get = jest.fn().mockResolvedValue(mockResponse);

    const response = await supertest(app).get('/api/pokemon/1');

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('bulbasaur');
  });

  it('deve retornar erro 404 para um Pokémon inexistente', async () => {
    const mockError = { response: { status: 404 } };

    axios.get = jest.fn().mockRejectedValue(mockError);

    const response = await supertest(app).get('/api/pokemon/9999');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Pokémon not found');
  });
});