import { createContext, type ReactNode } from 'react';
import { usePersistedData } from '../hooks/usePersistedData.ts';
import type { Joke } from '../types/joke.ts';

interface Props {
  children: ReactNode;
}

interface FavouriteJokesContextType {
  favouriteJokes: Joke[] | null;
  handleAddToFavourites: (item: Joke) => void;
  handleClearFavourites: () => void;
}

export const FavouriteJokesContext = createContext<FavouriteJokesContextType | null>(null);

export const FavouriteJokesProvider = ({ children }: Props) => {
  const [favouriteJokes, setFavouriteJokes] = usePersistedData<Joke[]>({
    key: 'favouriteJokesItems',
    initialValue: [],
  });

  const handleAddToFavourites = (item: Joke) => {
    setFavouriteJokes((prev) => {
      const existingIndex = prev.findIndex((joke) => joke.id === item.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated.splice(existingIndex, 1);
        updated.push(item);
        return updated;
      }

      const next = [...prev, item];
      if (next.length > 10) {
        next.shift();
      }
      return next;
    });
  };

  const handleClearFavourites = () => {
    setFavouriteJokes([]);
  };

  return (
    <FavouriteJokesContext.Provider
      value={{ favouriteJokes, handleAddToFavourites, handleClearFavourites }}
    >
      {children}
    </FavouriteJokesContext.Provider>
  );
};