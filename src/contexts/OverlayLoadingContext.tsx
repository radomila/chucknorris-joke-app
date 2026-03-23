import { createContext, type FC, type ReactNode, useState } from 'react';
import { OverlayLoadingWrapper } from '../components/ui/OverlayLoading/OverlayLoadingWrapper';


export interface OverlayLoadingContextType {
  showOverlay: () => void;
  hideOverlay: () => void;
  isLoading: boolean;
}

export const OverlayLoadingContext = createContext<OverlayLoadingContextType | undefined>(undefined);

interface OverlayLoadingProviderType {
  children: ReactNode;
}

export const OverlayLoadingProvider: FC<OverlayLoadingProviderType> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const showOverlay = () => setLoading(true);

  const hideOverlay = () => setLoading(false);

  return (
    <OverlayLoadingContext.Provider value={{ showOverlay, hideOverlay, isLoading: loading }}>
      {loading && <OverlayLoadingWrapper />}
      {children}
    </OverlayLoadingContext.Provider>
  );
};