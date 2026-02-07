
import React, { useState } from 'react';

const GamePlayer = ({ game, onBack, isFavorite, onToggleFavorite }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe) {
      if (!isFullscreen) {
        if (iframe.requestFullscreen) iframe.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 font-bold transition-all group px-4 py-2 bg-slate-900/50 hover:bg-slate-900 rounded-2xl border border-slate-800"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Arcade Lobby
        </button>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleFavorite}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold border transition-all ${
              isFavorite 
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-500' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <svg className={`w-5 h-5 ${isFavorite ? 'fill-current' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            {isFavorite ? 'Favorited' : 'Add to Favorites'}
          </button>
          
          <button 
            onClick={toggleFullscreen}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Play Fullscreen
          </button>
        </div>
      </div>

      <div className="relative aspect-video w-full bg-slate-950 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
        <iframe
          id="game-iframe"
          src={game.iframeUrl}
          title={game.title}
          className="w-full h-full border-none"
          allowFullScreen
          loading="eager"
        />
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      </div>

      <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4">
             <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full rounded-[2rem] border border-slate-700/50 shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-indigo-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                {game.category}
              </span>
              <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-4 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-widest">
                Online
              </span>
              <div className="flex items-center gap-1 ml-auto">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{game.title}</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl">
              {game.description} Immerse yourself in the action without any downloads or complicated setups. This unblocked version features all standard game mechanics and high-performance playback.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: 'Platform', val: 'Web Browser' },
                { label: 'Technology', val: 'HTML5 / Canvas' },
                { label: 'Added', val: 'Recently' },
                { label: 'Player Mode', val: 'Single Player' }
              ].map(stat => (
                <div key={stat.label} className="p-6 bg-slate-900/50 rounded-3xl border border-slate-800/50">
                  <span className="block text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</span>
                  <span className="text-lg font-bold text-slate-200">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
