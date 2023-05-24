import axios from 'axios';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('axios');

describe('Testes Unitários', () => {
  it('deve buscar e exibir um Pokémon ao clicar no botão de busca', async () => {
    const pokemonData = {
      name: 'bulbasaur',
      sprites: {
        front_default: 'bulbasaur.png',
      },
      abilities: [
        { ability: { name: 'ability1' } },
        { ability: { name: 'ability2' } },
      ],
    };

    axios.get.mockResolvedValueOnce({ data: pokemonData });

    render(<App />);

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: '1' } });

    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    await waitFor(() => screen.getByText('bulbasaur'));

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('ability1')).toBeInTheDocument();
    expect(screen.getByText('ability2')).toBeInTheDocument();
  });
});