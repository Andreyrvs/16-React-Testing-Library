import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from '../components/About';
import renderWithRouter from './RenderWithRouter';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  test('a página contem heading h2 com texto "About Pokédex"', () => {
    renderWithRouter(<About />);

    const headingH2 = screen.getByRole(
      'heading',
      { level: 2 },
      { name: 'About Pokédex.' },
    );
    expect(headingH2).toBeInTheDocument();
  });
});
