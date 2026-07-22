import { create } from 'zustand'

interface PortfolioState {
  activeSection: string
  isMenuOpen: boolean
  isJarvisOpen: boolean
  scrollProgress: number
  preloaderDone: boolean
  setActiveSection: (s: string) => void
  setMenuOpen: (v: boolean) => void
  setJarvisOpen: (v: boolean) => void
  setScrollProgress: (v: number) => void
  setPreloaderDone: (v: boolean) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeSection: 'home',
  isMenuOpen: false,
  isJarvisOpen: false,
  scrollProgress: 0,
  preloaderDone: false,
  setActiveSection: (s) => set({ activeSection: s }),
  setMenuOpen: (v) => set({ isMenuOpen: v }),
  setJarvisOpen: (v) => set({ isJarvisOpen: v }),
  setScrollProgress: (v) => set({ scrollProgress: v }),
  setPreloaderDone: (v) => set({ preloaderDone: v }),
}))
