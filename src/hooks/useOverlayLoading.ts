import { OverlayLoadingContext, type OverlayLoadingContextType } from '../contexts/OverlayLoadingContext.tsx';
import { useContext } from 'react';

export const useOverlayLoading = (): OverlayLoadingContextType => {
  const context = useContext(OverlayLoadingContext);
  if (!context) {
    throw new Error('useOverlayLoading must be used within an OverlayLoadingProvider');
  }
  return context;
};