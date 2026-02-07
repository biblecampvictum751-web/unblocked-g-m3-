
import React from 'react';
import GameCard from './GameCard.js';

const GameGrid = ({ games, onSelectGame, favorites, onToggleFavorite }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
      {games.map((game, idx) => (
        <div 
          key={game.id} 
          className="animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both"
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          <GameCard 
            game={game} 
            isFavorite={favorites.includes(game.id)}
            onToggleFavorite={(e) => onToggleFavorite(game.id, e)}
            onClick={() => onSelectGame(game)} 
          />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
