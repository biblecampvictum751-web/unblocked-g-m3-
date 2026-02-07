import React, { useState, useMemo, useEffect } from 'react';
import { GAMES_DATA } from './data/games';
import Header from './components/Header';
import GameGrid from './components/GameGrid';
import FilterBar from './components/FilterBar';
import GamePlayer from './components/GamePlayer';
import Footer from './components/Footer';
import { Game } from './types';

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewState, setViewState] = useState<'grid' | 'play'>('grid');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nova_arcade_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.warn('LocalStorage is not available:', err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nova_arcade_favorites', JSON.stringify(favorites));
    } catch (err) {
      console.warn('Failed to save favorites:', err);
    }
  }, [favorites]);

  const toggleFavorite = (gameId: string, e?: React.MouseEvent | React.TouchEvent) => {
    if (e && typeof e.stopPropagation === 'function') {
      e.stopPropagation();
    }
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId) 
        : [...prev, gameId]
    );
  };

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = 
        selectedCategory === 'All' 
        ? true 
        : selectedCategory === 'Favorites' 
          ? favorites.includes(game.id)
          : game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, favorites]);

  const featuredGames = useMemo(() => {
    return GAMES_DATA.filter(game => game.featured);
  }, []);

  const handleSelectGame = (game: Game) => {
    setSelectedGame(game);
    setViewState('play');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setSelectedGame(null);
    setViewState('grid');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Header 
        onHomeClick={handleBackToGrid}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main id="main-content" className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        {viewState === 'grid' ? (
          <div className="space-y-12 animate-in fade-in duration-700">
            {searchQuery === '' && selectedCategory === 'All' && (
              <section className="relative overflow-hidden rounded-[2rem] bg-indigo-600 p-8 md:p-16">
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-indigo-500/30 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-indigo-100 text-sm font-semibold mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Now streaming {GAMES_DATA.length} premium titles
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                    Your Personal <span className="text-indigo-200">Cloud Arcade</span>
                  </h1>
                  <p className="text-xl text-indigo-600 bg-white inline-block px-4 py-1 rounded-lg font-bold mb-8 transform -rotate-1">
                    100% UNBLOCKED & FREE
                  </p>
                  <p className="text-lg text-indigo-100 mb-8 opacity-90 max-w-lg">
                    No restrictions, no accounts, just pure gaming bliss. Play your favorites anytime, anywhere.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => {
                        const firstFeatured = featuredGames[0];
                        if(firstFeatured) handleSelectGame(firstFeatured);
                      }}
                      className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-xl hover:scale-105 active:scale-95"
                    >
                      Play Featured
                    </button>
                    <button 
                      onClick={() => setSelectedCategory('Favorites')}
                      className="bg-indigo-700/50 backdrop-blur text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all border border-white/10 hover:scale-105 active:scale-95"
                    >
                      My Favorites
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-400/20 via-transparent to-transparent"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-40"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-30"></div>
              </section>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-900 pb-8">
              <h2 className="text-3xl font-black flex items-center gap-3">
                <span className="w-1.5 h-10 bg-indigo-500 rounded-full" aria-hidden="true"></span>
                {selectedCategory === 'All' ? 'All Games' : selectedCategory === 'Favorites' ? 'My Library' : `${selectedCategory}`}
              </h2>
              <FilterBar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
              />
            </div>

            {filteredGames.length > 0 ? (
              <GameGrid 
                games={filteredGames} 
                onSelectGame={handleSelectGame}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-32 text-slate-400 bg-slate-900/20 rounded-[2rem] border border-dashed border-slate-800">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-slate-300">Nothing here yet!</p>
                <p className="text-slate-500 mt-2">Try searching for something else or clearing filters.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-8 bg-slate-800 text-white px-6 py-2 rounded-xl hover:bg-slate-700 transition-colors font-semibold"
                >
                  Show All Games
                </button>
              </div>
            )}
          </div>
        ) : (
          selectedGame && (
            <GamePlayer 
              game={selectedGame} 
              onBack={handleBackToGrid}
              isFavorite={favorites.includes(selectedGame.id)}
              onToggleFavorite={() => toggleFavorite(selectedGame.id)}
            />
          )
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;