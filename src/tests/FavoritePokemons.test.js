import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './RenderWithRouter';

describe('Testa se tem ou não Pokemons favoritos', () => {
  test(`se é exibido na tela a msg "No favorite pokemon found",
  se não tiver pokemon favorito`, () => {
    renderWithRouter(<FavoritePokemons />);

    const notFoundMsg = screen.getByText(/No favorite pokemon found/i);
    expect(notFoundMsg).toBeInTheDocument();
  });
});
