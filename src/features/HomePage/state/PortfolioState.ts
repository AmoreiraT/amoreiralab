import { create } from 'zustand';

interface PortfolioState {
  zoomLevel: number;
  setZoomLevel: (newZoomLevel: number) => void;
}

export const useZoomLevelStore = create<PortfolioState>(
  (set: (partial: Partial<PortfolioState>) => void) => ({
    zoomLevel: 0,
    setZoomLevel: (newZoomLevel: number) => set({ zoomLevel: newZoomLevel }),
  })
);
