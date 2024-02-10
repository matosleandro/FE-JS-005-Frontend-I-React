import React, { useState } from 'react';
import gameForm from './gameForm';

const adminGames = () => {
  const [games, setGames] = useState([
    { id: 1, name: 'Game 1', category: 'Strategy' },
    // Adicionar outros jogos
  ]);

  const handleAddGame = (newGame) => {
    setGames([...games, { id: games.length + 1, ...newGame }]);
  };

  const handleEditGame = (editedGame) => {
    setGames(games.map((game) => (game.id === editedGame.id ? editedGame : game)));
  };

  return (
    <div>
      <h2>Admin Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} - {game.category}{' '}
            {/* Adicionar outros detalhes do jogo se necessário */}
          </li>
        ))}
      </ul>
      <h3>Add New Game</h3>
      <gameForm onSubmit={handleAddGame} />
      <h3>Edit Game</h3>
      {games.map((game) => (
        <div key={game.id}>
          <gameForm onSubmit={handleEditGame} initialValues={game} />
        </div>
      ))}
    </div>
  );
};

export default adminGames;