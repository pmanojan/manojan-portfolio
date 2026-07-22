import { motion } from 'framer-motion'
import { PERSONAL_INFO, TYPEWRITER_ROLES } from '../../constants/portfolio.data'
import { useTypewriter } from '../../hooks/useTypewriter'
import { ArcReactorButton } from '../../components/ui/ArcReactorButton'
import { CircuitBackground } from '../../components/ui/CircuitBackground'
import { ArcReactorDisplay } from './ArcReactorDisplay'
import { useState, useEffect } from 'react'

export const HeroSection = () => {
  const role = useTypewriter(TYPEWRITER_ROLES, 60, 2500)
  const [counts, setCounts] = useState([0,0,0,0])

  useEffect(()=>{
    const targets = PERSONAL_INFO.stats.map(s=>s.value)
    const timers = targets.map((t, idx)=>{
      let cur=0
      const step = Math.max(1, Math.floor(t/30))
      const id = setInterval(()=>{
        cur+=step
        if(cur>=t){ cur=t; clearInterval(id) }
        setCounts(prev=>{ const n=[...prev]; n[idx]=cur; return n })
      }, 40)
      return id
    })
    return ()=> timers.forEach(clearInterval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] pt-[72px]">
      <CircuitBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(0,212,255,0.12),transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(226,54,54,0.10),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(255,215,0,0.05),transparent_60%)]" />
      <div className="absolute top-[88px] left-6 bottom-6 w-[1px] hidden lg:block bg-gradient-to-b from-[#00D4FF]/20 via-white/5 to-transparent" />
      <div className="absolute top-[88px] left-6 right-6 h-[1px] hidden lg:block bg-gradient-to-r from-[#00D4FF]/20 to-transparent" />

      {/* HUD brackets */}
      <div className="absolute top-[90px] left-8 w-8 h-8 border border-[#00D4FF]/30 border-r-0 border-b-0 hidden lg:block" />
      <div className="absolute top-[90px] right-8 w-8 h-8 border border-[#00D4FF]/30 border-l-0 border-b-0 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border border-[#00D4FF]/30 border-r-0 border-t-0 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border border-[#00D4FF]/30 border-l-0 border-t-0 hidden lg:block" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-12 lg:py-0">
        {/* LEFT */}
        <motion.div initial={{ opacity:0, x:-50 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.9, ease:[0.16,1,0.3,1] }} className="space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E23636]/10 border border-[#FFD700]/20 rounded-full text-[10px] font-mono tracking-widest">
            <span className="w-2 h-2 bg-[#E23636] rounded-full animate-pulse shadow-[0_0_8px_#E23636]" />
            <span className="text-[#FFD700]">AGENT STATUS:</span><span className="text-white">ACTIVE & AVAILABLE</span>
          </div>

          <div className="font-mono text-[10px] tracking-[0.2em] text-[#00D4FF]">// OPERATIVE PROFILE — CLEARANCE ALPHA</div>

          <h1 className="font-bebas leading-[0.9] tracking-wide">
            <motion.span className="block text-[48px] md:text-[72px] lg:text-[96px] text-white" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ staggerChildren:0.05, delayChildren:0.3 }}>
              {PERSONAL_INFO.fullName.split('').map((ch,i)=>(
                <motion.span key={i} initial={{ y:40, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.4+i*0.04, type:'spring', damping:12 }} className="inline-block" style={{ textShadow:'0 0 20px rgba(226,54,54,0.4)' }}>{ch===' ' ? '\u00A0' : ch}</motion.span>
              ))}
            </motion.span>
          </h1>

          <div className="inline-flex flex-wrap gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/10 backdrop-blur">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00D4FF]">MAIN DOSSIER:</span>
            <span className="font-barlow text-[11px] tracking-[0.15em] text-white">{PERSONAL_INFO.jobTitle}</span>
            <span className="px-1.5 py-0.5 bg-[#61DAFB]/20 text-[#61DAFB] text-[8px] font-mono tracking-widest border border-[#61DAFB]/30">NEW • REACT ENTRY</span>
          </div>

          <div className="h-[40px] font-rajdhani font-semibold text-[22px] md:text-[28px] text-[#FFD700] flex items-center">
            {role}<span className="ml-1 w-[3px] h-[1.1em] bg-[#FFD700] animate-pulse inline-block" />
          </div>

          <p className="font-exo text-[17px] leading-relaxed text-[#C0C0C0] max-w-[560px]">{PERSONAL_INFO.description} <span className="text-[#00D4FF]">Mission tag:</span> {PERSONAL_INFO.tagline}</p>

          <div className="flex flex-wrap gap-2">
            {[
              ["⚡ CCNA", "#00D4FF"],
              ["🛡️ FortiGate", "#E23636"],
              ["🐍 Python", "#FFD700"],
              ["⚛️ React.js", "#61DAFB"],
              ["🐧 Linux", "#7B00FF"],
              ["🔐 CyberOps", "#00FFD1"],
            ].map(([label,color])=>(
              <motion.div key={label} whileHover={{ scale:1.05, rotateY:180 }} className="relative group px-3 py-1.5 bg-white/5 border text-[11px] font-barlow tracking-widest cursor-pointer" style={{ borderColor: `${color}40`, clipPath:"polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%)" }}>
                <span style={{ color }}>{label}</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent)] blur" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <ArcReactorButton variant="primary" size="lg" onClick={()=>document.getElementById('casefiles')?.scrollIntoView({behavior:'smooth'})}>⚡ VIEW CLASSIFIED PROJECTS</ArcReactorButton>
            <ArcReactorButton variant="ghost" size="lg" onClick={()=>document.getElementById('command')?.scrollIntoView({behavior:'smooth'})}>🛡️ DEPLOY TO CONTACT</ArcReactorButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/5 mt-2">
            {PERSONAL_INFO.stats.map((s,i)=>(
              <div key={i} className="relative bg-[#0A0A14]/60 border border-white/5 p-4 backdrop-blur">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#E23636] to-transparent opacity-60" />
                <div className="font-bebas text-3xl text-white tracking-wider">{counts[i]}{s.suffix}</div>
                <div className="font-barlow text-[10px] tracking-[0.15em] text-[#FFD700] mt-1">{s.label}</div>
                <div className="font-barlow text-[10px] tracking-[0.15em] text-white/40">{s.subLabel}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center lg:h-[720px]">
          <ArcReactorDisplay />
        </div>
      </div>

      {/* vertical social */}
      <div className="hidden lg:flex fixed left-2 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 bg-[#050505]/80 backdrop-blur border border-white/5 p-2">
        {[
          {l:'IN', url: PERSONAL_INFO.social.linkedin},
          {l:'GH', url: PERSONAL_INFO.social.github},
          {l:'CR', url: PERSONAL_INFO.social.credly},
          {l:'UD', url: PERSONAL_INFO.social.udemy},
          {l:'@', url: `mailto:${PERSONAL_INFO.contact.email}`},
        ].map(s=>(
          <a key={s.l} href={s.url} target="_blank" className="w-8 h-8 flex items-center justify-center text-[11px] font-mono text-white/50 border border-white/10 hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all" style={{ clipPath:"polygon(30% 0, 70% 0, 100% 50%, 70% 100%, 30% 100%, 0 50%)" }}>{s.l}</a>
        ))}
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#00D4FF]/30 mx-auto" />
      </div>
    </section>
  )
}
