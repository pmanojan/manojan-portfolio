import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePortfolioStore } from '../../store/usePortfolioStore'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { id: 'home', label: 'HOME BASE', num: '01' },
  { id: 'classified', label: 'CLASSIFIED', num: '02' },
  { id: 'operations', label: 'OPERATIONS', num: '03' },
  { id: 'missions', label: 'MISSION LOG', num: '04' },
  { id: 'arsenal', label: 'ARSENAL', num: '05' },
  { id: 'credentials', label: 'CREDENTIALS', num: '06' },
  { id: 'casefiles', label: 'CASE FILES', num: '07' },
  { id: 'command', label: 'COMMAND', num: '08' },
]

export const MarvelNavbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { activeSection, setActiveSection, isMenuOpen, setMenuOpen, scrollProgress, setJarvisOpen } = usePortfolioStore()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) setActiveSection(e.target.id) })
    }, { threshold: 0.3 })
    NAV_LINKS.forEach(l => {
      const el = document.getElementById(l.id)
      if(el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [setActiveSection])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-black/50">
        <motion.div className="h-full bg-gradient-to-r from-[#E23636] via-[#00D4FF] to-[#FFD700]" style={{ width: `${scrollProgress*100}%` }} />
      </div>

      <motion.nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-[20px] border-b border-[#00D4FF30] shadow-[0_0_30px_rgba(0,0,0,0.8)]' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
      >
        {scrolled && <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E23636] to-transparent opacity-60" />}

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={()=>scrollTo('home')}>
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0088cc] flex items-center justify-center font-bebas text-xl text-white shadow-[0_0_15px_rgba(0,212,255,0.5)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.8)] transition-all">
              <span className="animate-pulse">PM</span>
              <div className="absolute inset-0 rounded-full border border-[#00D4FF] animate-ping opacity-30" />
            </div>
            <div className="font-bebas text-2xl tracking-wider">
              <span className="text-[#E23636]">PM</span><span className="text-white/40">·</span><span className="text-[#00D4FF]">OPS</span>
            </div>
            <div className="hidden md:flex ml-2 px-2 py-0.5 bg-[#E23636]/10 border border-[#E23636]/30 rounded text-[9px] font-mono text-[#E23636] tracking-widest">
              CLEARANCE ALPHA
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={()=>scrollTo(link.id)}
                className={`relative px-3 py-2 font-barlow text-[13px] tracking-[0.12em] font-medium transition-colors flex items-center gap-1.5 group ${activeSection===link.id ? 'text-white' : 'text-[#C0C0C0] hover:text-[#00D4FF]'}`}
              >
                <span className={`text-[10px] ${activeSection===link.id ? 'text-[#FFD700]' : 'text-[#FFD700]/60 group-hover:text-[#FFD700]'}`}>[{link.num}]</span>
                {link.label}
                {activeSection===link.id && <motion.div layoutId="active" className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E23636] shadow-[0_0_10px_#E23636]" />}
                <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#00D4FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-60" />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={()=>{ const link=document.createElement('a'); link.href='#'; link.download='Pemaraj_Manojan_Resume.pdf'; alert('Dossier download — connect resume PDF'); }}
              className="hidden md:inline-flex h-9 px-4 items-center gap-2 border border-[#E23636]/60 text-[#E23636] font-barlow text-xs tracking-widest hover:bg-[#E23636] hover:text-white transition-all"
              style={{ clipPath: "polygon(6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%, 0 50%)" }}
            >
              ⬇ DOSSIER
            </button>
            <button
              onClick={()=>setJarvisOpen(true)}
              className="h-9 px-4 flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/50 text-[#00D4FF] font-barlow text-xs tracking-widest hover:bg-[#00D4FF] hover:text-black transition-all shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              style={{ clipPath: "polygon(6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%, 0 50%)" }}
            >
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse shadow-[0_0_10px_#00D4FF]" />
              JARVIS
            </button>

            <button className="lg:hidden w-10 h-10 flex items-center justify-center text-white border border-white/10 ml-2" onClick={()=>setMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col pt-24 px-6 lg:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(226,54,54,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(0,212,255,0.15),transparent_50%)]" />
            <div className="relative space-y-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i*0.05 }}
                  onClick={()=>scrollTo(link.id)}
                  className={`w-full text-left py-4 px-4 font-bebas text-2xl tracking-widest border-b border-white/5 flex justify-between items-center ${activeSection===link.id ? 'text-[#00D4FF] bg-white/[0.02]' : 'text-white/70'}`}
                >
                  <span className="flex items-center gap-4"><span className="text-[#FFD700] text-sm font-mono">[ {link.num} ]</span>{link.label}</span>
                  <span className="text-[#E23636]">→</span>
                </motion.button>
              ))}
            </div>
            <div className="mt-auto pb-10 flex gap-4">
              <a href="https://github.com/pmanojan" target="_blank" className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/60">GH</a>
              <a href="https://www.linkedin.com/in/pemarajmanojan" target="_blank" className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/60">IN</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
