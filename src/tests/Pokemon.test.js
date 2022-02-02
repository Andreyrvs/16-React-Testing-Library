import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  fail('incompleto');
  describe('Teste Se é renderizado um card com as informações de determinado pokémon.',
    () => {
      test('O nome correto do Pokémon deve ser mostrado na tela', () => {
        renderWithRouter(<App />);
        const pokemonName = screen.getByText(/pikachu/i);
        expect(pokemonName).toBeInTheDocument();
      });
      test('O tipo correto do pokémon deve ser mostrado na tela.', () => {
        renderWithRouter(<App />);

        const pokemonType = screen.getByTestId('pokemon-type');
        expect(pokemonType).toBeInTheDocument();
      });
      test('should first', () => {
        renderWithRouter(<App />);
        const pokemonAverage = screen.getByTestId('pokemon-weight');
        expect(pokemonAverage).toHaveValue('6.0');
      });
    });
});
