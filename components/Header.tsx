import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, searchQuery, setSearchQuery }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between gap-4">
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 transition-transform active:scale-95 shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
          aria-label="NovaArcade Home"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase hidden sm:block">
            Nova<span className="text-indigo-500">Arcade</span>
          </span>
        </button>

        <div className="flex-grow max-w-xl relative group">
          <label htmlFor="search-games" className="sr-only">Search Games</label>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-500 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            id="search-games"
            type="text"
            placeholder="Search for a game..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600 text-slate-200"
          />
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button 
            className="hidden md:flex bg-slate-900 border border-slate-800 hover:bg-slate-800 p-2 rounded-lg transition-colors text-slate-400 hover:text-rose-500"
            aria-label="View Favorites"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
            <img src="https://picsum.photos/id/64/32/32" alt="User Profile" loading="lazy" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;