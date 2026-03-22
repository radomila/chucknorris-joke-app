import { OverlayLoadingProvider } from './contexts/OverlayLoadingContext';
import { HomePage } from './pages/HomePage';

function App() {
  return <OverlayLoadingProvider><HomePage/></OverlayLoadingProvider>
}

export default App
