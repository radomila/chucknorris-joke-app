import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function OverlayBackground({ children }: Props) {
  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 pointer-events-none flex justify-center items-center">
      {children}
    </div>
  );
}