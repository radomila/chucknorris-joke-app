import { FavouriteJokesProvider } from './contexts/FavouriteJokesContext';
import { OverlayLoadingProvider } from './contexts/OverlayLoadingContext';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <FavouriteJokesProvider>
      <OverlayLoadingProvider>
        <HomePage />
      </OverlayLoadingProvider>
    </FavouriteJokesProvider>
  );
}

export default App
