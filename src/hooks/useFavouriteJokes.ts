import { useContext } from 'react';
import { FavouriteJokesContext } from '../contexts/FavouriteJokesContext.tsx';

export function useFavouriteJokes() {
  const context = useContext(FavouriteJokesContext);

  if (!context) {
    throw new Error('useFavouriteJokes must be used within a FavouriteJokesProvider');
  }

  return context;
}