import { OverlayBackground } from './OverlayBackground.tsx';
import OverlaySpinner from './OverlaySpinner.tsx';

export function OverlayLoadingWrapper() {
  return (
    <OverlayBackground>
      <OverlaySpinner />
      <span className="sr-only">Loading...</span>
    </OverlayBackground>
  );
}