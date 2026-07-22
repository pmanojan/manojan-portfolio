import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MarvelNavbar } from './components/layout/MarvelNavbar'
import { MarvelFooter } from './components/layout/MarvelFooter'
import { CopyrightBadge } from './components/layout/CopyrightBadge'
import { MarvelIntro } from './sections/01-Preloader/MarvelIntro'
import { HeroSection } from './sections/02-Hero/HeroSection'
import { ClassifiedBriefing } from './sections/03-Classified/ClassifiedBriefing'
import { AvengersAssemble } from './sections/04-Avengers/AvengersAssemble'
import { MissionTimeline } from './sections/05-Missions/MissionTimeline'
import { TechArsenal } from './sections/06-Arsenal/TechArsenal'
import { SHIELDCredentials } from './sections/07-Credentials/SHIELDCredentials'
import { OperationsLog } from './sections/08-Operations/OperationsLog'
import { IntelReports } from './sections/09-Intel/IntelReports'
import { CommandCenter } from './sections/10-Command/CommandCenter'
import { JARVISChatbot } from './components/chatbot/JARVISChatbot'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)
  const [konami, setKonami] = useState(false)
  useScrollProgress()

  useEffect(()=>{
    const seq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"]
    let idx=0
    const handler = (e: KeyboardEvent)=>{
      if(e.key===seq[idx]){ idx++; if(idx===seq.length){ setKonami(true); setTimeout(()=>setKonami(false), 4000); idx=0 } } else idx=0
    }
    window.addEventListener('keydown', handler)
    return ()=> window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E23636] selection:text-white">
      <AnimatePresence mode="wait">
        {!preloaderDone && <MarvelIntro onDone={()=>setPreloaderDone(true)} key="preloader" />}
      </AnimatePresence>

      {preloaderDone && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8 }}>
          <MarvelNavbar />
          <main>
            <HeroSection />
            <ClassifiedBriefing />
            <AvengersAssemble />
            <MissionTimeline />
            <TechArsenal />
            <SHIELDCredentials />
            <OperationsLog />
            <IntelReports />
            <CommandCenter />
          </main>
          <MarvelFooter />
          <JARVISChatbot />
          <CopyrightBadge />

          {/* easter egg */}
          <AnimatePresence>
            {konami && (
              <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:1.2 }} className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="font-bebas text-6xl md:text-8xl text-[#FFD700] tracking-widest animate-pulse">AVENGERS PROTOCOL</div>
                  <div className="font-bebas text-3xl md:text-5xl text-[#E23636] mt-2">ACTIVATED</div>
                  <div className="font-mono text-[#00D4FF] mt-4 tracking-[0.3em]">AUTHORIZED PERSONNEL • STARK • ROGERS • ROMANOFF</div>
                  <div className="mt-8 text-5xl">⚡🛡️✨🌐🎖️</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* back to top */}
          <BackToTop />
        </motion.div>
      )}
    </div>
  )
}

function BackToTop(){
  const [show,setShow]=useState(false)
  useEffect(()=>{
    const onScroll=()=> setShow(window.scrollY>800)
    window.addEventListener('scroll', onScroll)
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <AnimatePresence>
      {show && (
        <motion.button initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:20 }} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-6 left-6 z-40 w-10 h-10 bg-[#0A0A14] border border-[#00D4FF]/30 text-[#00D4FF] flex items-center justify-center hover:bg-[#00D4FF]/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all">
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default App
