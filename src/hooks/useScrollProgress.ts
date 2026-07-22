import { useEffect } from 'react'
import { usePortfolioStore } from '../store/usePortfolioStore'

export function useScrollProgress() {
  const setProgress = usePortfolioStore(s => s.setScrollProgress)
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? scrolled / height : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [setProgress])
}
