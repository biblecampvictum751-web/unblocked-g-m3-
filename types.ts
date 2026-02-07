
export enum Category {
  Action = 'Action',
  Puzzle = 'Puzzle',
  Sports = 'Sports',
  Casual = 'Casual',
  Retro = 'Retro',
  Strategy = 'Strategy',
  Racing = 'Racing'
}

export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  iframeUrl: string;
  category: Category;
  description: string;
  featured?: boolean;
}

export type ViewState = 'grid' | 'play';
