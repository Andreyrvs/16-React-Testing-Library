import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import About from '../components/About';
import renderWithRouter from './RenderWithRouter';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  test('a página contem heading h2 com texto "About Pokédex"', () => {
    renderWithRouter(<About />);

    const headingH2 = screen.getByRole(
      'heading',
      { level: 2,
        name: 'About Pokédex' },

    );
    expect(headingH2).toBeInTheDocument();
  });

  test('se a página contém dois parágrafos com texto sobre a Pokédex',
    () => {
      renderWithRouter(<About />);
      const firstParagraph = screen.getByText(
        /This application simulates a Pokédex,/i,
      );
      const secondParagraph = screen.getByText(
        /One can filter Pokémons by type, and see more details for each one of them/i,
      );
      expect(firstParagraph).toBeInTheDocument();
      expect(secondParagraph).toBeInTheDocument();
    });

  test('Se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);

    const tagImg = screen.getByAltText('Pokédex');
    const imgSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(tagImg).toHaveAttribute('src', imgSrc);
  });
});
