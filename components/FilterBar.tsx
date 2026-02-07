import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['All', 'Favorites', ...Object.values(Category)];

  return (
    <nav className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth" aria-label="Game categories">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          aria-current={selectedCategory === cat ? 'page' : undefined}
          className={`px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
            selectedCategory === cat
              ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20'
              : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
          }`}
        >
          {cat === 'Favorites' && (
            <svg 
              className={`w-4 h-4 transition-colors ${selectedCategory === 'Favorites' ? 'fill-white' : 'fill-slate-500'}`} 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {cat}
        </button>
      ))}
    </nav>
  );
};

export default FilterBar;