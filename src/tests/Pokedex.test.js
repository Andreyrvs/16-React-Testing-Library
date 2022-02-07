import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
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
      const nextPokemonCharmander = screen.getByText(/Charmander/i);
      expect(nextPokemonCharmander).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonCaterpie = screen.getByText(/Caterpie/i);
      expect(nextPokemonCaterpie).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonEkans = screen.getByText(/Ekans/i);
      expect(nextPokemonEkans).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonAlakazam = screen.getByText(/Alakazam/i);
      expect(nextPokemonAlakazam).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonMew = screen.getByText(/Mew/i);
      expect(nextPokemonMew).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonRapidash = screen.getByText(/Rapidash/i);
      expect(nextPokemonRapidash).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonSnorlax = screen.getByText(/Snorlax/i);
      expect(nextPokemonSnorlax).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonDragonair = screen.getByText(/Dragonair/i);
      expect(nextPokemonDragonair).toBeInTheDocument();

      userEvent.click(btnNextPokemon);
      const nextPokemonPikachu = screen.getByText(/Pikachu/i);
      expect(nextPokemonPikachu).toBeInTheDocument();
    });

  test('Se é mostrado apenas um Pokémon por vez.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const pokemon = screen.getAllByTestId(/pokemon-name/);

    expect(pokemon).toHaveLength(1);
  });

  test('Se a Pokédex tem os botões de filtro.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const BTN_FILTER_QTY = 7;
    const btnOfFilter = screen.getAllByTestId(/pokemon-type-button/);
    expect(btnOfFilter).toHaveLength(BTN_FILTER_QTY);

    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeVisible();

    const btnElectric = screen.getByRole('button', { name: /electric/i });
    expect(btnElectric).toBeInTheDocument();

    const btnFire = screen.getByRole('button', { name: /fire/i });
    expect(btnFire).toBeInTheDocument();

    const btnBug = screen.getByRole('button', { name: /Bug/i });
    expect(btnBug).toBeInTheDocument();

    const btnPoison = screen.getByRole('button', { name: /Poison/i });
    expect(btnPoison).toBeInTheDocument();

    const btnPsychic = screen.getByRole('button', { name: /Psychic/i });
    expect(btnPsychic).toBeInTheDocument();

    const btnNormal = screen.getByRole('button', { name: /Normal/i });
    expect(btnNormal).toBeInTheDocument();

    const btnDragon = screen.getByRole('button', { name: /Dragon/i });
    expect(btnDragon).toBeInTheDocument();

    // userEvent.click(btnFire);
    // const typePokemon = screen.getByText(/fire/i);
    // expect(typePokemon).toBeInTheDocument();
  });
  test('Se a Pokédex contém um botão para resetar o filtro', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const btnAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnAll);

    expect(btnAll);

    const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(btnNextPokemon).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonCharmander = screen.getByText(/Charmander/i);
    expect(nextPokemonCharmander).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonCaterpie = screen.getByText(/Caterpie/i);
    expect(nextPokemonCaterpie).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonEkans = screen.getByText(/Ekans/i);
    expect(nextPokemonEkans).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonAlakazam = screen.getByText(/Alakazam/i);
    expect(nextPokemonAlakazam).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonMew = screen.getByText(/Mew/i);
    expect(nextPokemonMew).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonRapidash = screen.getByText(/Rapidash/i);
    expect(nextPokemonRapidash).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonSnorlax = screen.getByText(/Snorlax/i);
    expect(nextPokemonSnorlax).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonDragonair = screen.getByText(/Dragonair/i);
    expect(nextPokemonDragonair).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
    const nextPokemonPikachu = screen.getByText(/Pikachu/i);
    expect(nextPokemonPikachu).toBeInTheDocument();
  });
});
