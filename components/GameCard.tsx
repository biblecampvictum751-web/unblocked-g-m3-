
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, isFavorite, onToggleFavorite, onClick }) => {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className="w-full flex flex-col bg-slate-900 border border-slate-800/50 rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] hover:-translate-y-2 text-left"
      >
        <div className="aspect-[4/3] w-full overflow-hidden relative">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          
          {/* Featured Badge */}
          {game.featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-indigo-600 text-[10px] font-black px-2.5 py-1 rounded-lg text-white uppercase tracking-widest shadow-lg">
                Featured
              </span>
            </div>
          )}

          {/* Play Icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
              <svg className="w-8 h-8 ml-1 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              {game.category}
            </span>
          </div>
          <h3 className="font-bold text-lg text-slate-100 mb-1 group-hover:text-indigo-400 transition-colors line-clamp-1 leading-tight">
            {game.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {game.description}
          </p>
        </div>
      </button>

      {/* Favorite Button - Separate from main button action */}
      <button
        onClick={onToggleFavorite}
        className={`absolute top-3 right-3 p-2.5 rounded-xl border backdrop-blur-md transition-all duration-300 z-10 ${
          isFavorite 
            ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' 
            : 'bg-black/20 border-white/10 text-white/50 hover:text-white hover:bg-black/40 opacity-0 group-hover:opacity-100'
        }`}
      >
        <svg 
          className={`w-5 h-5 ${isFavorite ? 'fill-current' : 'fill-none'}`} 
          stroke="currentColor" 
          strokeWidth={2} 
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      </button>
    </div>
  );
};

export default GameCard;
