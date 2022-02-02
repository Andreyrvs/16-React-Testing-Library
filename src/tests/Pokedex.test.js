import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  fail('Incompleto');
  test('Se página contém um heading h2 com o texto Encountered pokémons.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const tagH2 = screen.getByRole(
      'heading', { level: 2, name: /encountered pokémons/i },
    );

    expect(tagH2).toBeInTheDocument();
  });
  test('Se é exibido o próximo Pokémon da lista quando o botão Próximo pokémon é clicado',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/');

      const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
      expect(btnNextPokemon).toBeInTheDocument();
      userEvent.click(btnNextPokemon);
    });
});
