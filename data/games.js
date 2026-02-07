
import { Category } from '../types.js';

export const GAMES_DATA = [
  {
    id: '2048',
    title: '2048',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://play2048.co/',
    category: Category.Puzzle,
    description: 'Join the numbers and get to the 2048 tile!',
    featured: true
  },
  {
    id: 'hextris',
    title: 'Hextris',
    thumbnail: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://hextris.io/',
    category: Category.Puzzle,
    description: 'A fast-paced puzzle game inspired by Tetris.',
    featured: true
  },
  {
    id: 'pacman',
    title: 'Pacman Classic',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://www.google.com/logos/2010/pacman10-i.html',
    category: Category.Retro,
    description: 'The legendary yellow dot-munching game.',
    featured: true
  },
  {
    id: 'sudoku',
    title: 'Daily Sudoku',
    thumbnail: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://www.sudokukingdom.com/sudoku-game.php',
    category: Category.Puzzle,
    description: 'Challenge your mind with daily Sudoku puzzles.',
    featured: false
  },
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://freeinvaders.org/',
    category: Category.Retro,
    description: 'Defend the Earth from waves of alien attackers.',
    featured: false
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    thumbnail: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://poki.com/en/g/crossy-road',
    category: Category.Casual,
    description: 'Why did the chicken cross the road? Find out!',
    featured: false
  },
  {
    id: 'subway-surfers',
    title: 'Subway Surfers',
    thumbnail: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://poki.com/en/g/subway-surfers',
    category: Category.Action,
    description: 'Dash as fast as you can through the subway tracks.',
    featured: true
  },
  {
    id: 'retro-racing',
    title: 'Retro Racing',
    thumbnail: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://poki.com/en/g/retro-highway',
    category: Category.Racing,
    description: 'High speed arcade motorcycle racing.',
    featured: false
  },
  {
    id: 'chess',
    title: 'Master Chess',
    thumbnail: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://www.chess.com/play/computer',
    category: Category.Strategy,
    description: 'Play against the computer in this classic strategy game.',
    featured: false
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    thumbnail: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?auto=format&fit=crop&q=80&w=400',
    iframeUrl: 'https://minesweeperonline.com/',
    category: Category.Puzzle,
    description: 'Avoid the mines and clear the grid.',
    featured: false
  }
];
