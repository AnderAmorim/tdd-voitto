const supertest = require("supertest");
const app = require("../server");
describe('Testes de Integração', () => {

    it('deve retornar os dados corretos para um Pokémon existente', async () => {
        const response = await supertest(app).get('/api/pokemon/1')
        expect(response.status).toEqual(200)
        expect(response.body.name).toBe('bulbasaur');
    })
  
    it('deve retornar erro 404 para um Pokémon inexistente', async () => {
      const response = await supertest(app).get('/api/pokemon/9999');
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Pokémon not found');
    });
});