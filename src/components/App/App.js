import React from 'react';
import Game from '../Game';
import Header from '../Header';
import Pokedex from '../Pokedex';

// Helper functions for localStorage management
const getDiscoveredPokemon = () => {
  try {
    const stored = localStorage.getItem('discovered-pokemon');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn('Failed to read discovered Pokemon from localStorage:', error);
    return [];
  }
};

const saveDiscoveredPokemon = (discoveredList) => {
  try {
    localStorage.setItem('discovered-pokemon', JSON.stringify(discoveredList));
  } catch (error) {
    console.warn('Failed to save discovered Pokemon to localStorage:', error);
  }
};

function App() {
  const [gameKey, setGameKey] = React.useState(0);
  const [isPokedexOpen, setIsPokedexOpen] = React.useState(false);
  const [highlightPokemonId, setHighlightPokemonId] = React.useState(null);
  const [pokemonList, setPokemonList] = React.useState([]);
  const [discoveredPokemon, setDiscoveredPokemon] = React.useState(getDiscoveredPokemon());

  function handleReset() {
    setGameKey(prevKey => prevKey + 1);
  }

  function handleOpenPokedex(pokemonIdToHighlight = null) {
    setHighlightPokemonId(pokemonIdToHighlight);
    setIsPokedexOpen(true);
  }

  function handleClosePokedex() {
    setIsPokedexOpen(false);
    setHighlightPokemonId(null);
  }

  function handlePokemonDiscovered(pokemonId) {
    if (!discoveredPokemon.includes(pokemonId)) {
      const newDiscovered = [...discoveredPokemon, pokemonId];
      setDiscoveredPokemon(newDiscovered);
      saveDiscoveredPokemon(newDiscovered);
    }
  }

  function handlePokemonListLoaded(list) {
    setPokemonList(list);
  }

  return (
    <div className="wrapper">
      <Header 
        onReset={handleReset} 
        onOpenPokedex={handleOpenPokedex}
        discoveredCount={discoveredPokemon.length}
        totalCount={pokemonList.length}
      />

      <div className="game-wrapper">
        <Game 
          key={gameKey}
          onPokemonDiscovered={handlePokemonDiscovered}
          onPokemonListLoaded={handlePokemonListLoaded}
          onOpenPokedex={handleOpenPokedex}
        />
      </div>

      <Pokedex
        isOpen={isPokedexOpen}
        onClose={handleClosePokedex}
        pokemonList={pokemonList}
        discoveredPokemon={discoveredPokemon}
        highlightPokemonId={highlightPokemonId}
      />
    </div>
  );
}

export default App;
