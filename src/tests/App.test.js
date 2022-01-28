import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  test('O 1° link possui o texto "Home" e se redeniza a página inicial no URL "/"',
    () => {
      const { history } = renderWithRouter(<App />);
      const linkHome = screen.getByRole('link', { name: 'Home' });
      expect(linkHome).toBeInTheDocument();

      userEvent.click(linkHome);
      const { pathname } = history.location;
      expect(pathname).toBe('/');
    });
});
