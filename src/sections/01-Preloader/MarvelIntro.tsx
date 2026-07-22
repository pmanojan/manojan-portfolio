import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const MarvelIntro = ({ onDone }: { onDone: () => void }) => {
  const [stage, setStage] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(()=>setStage(1), 400),
      setTimeout(()=>setStage(2), 1800),
      setTimeout(()=>setStage(3), 3600),
      setTimeout(()=>{ setStage(4); setTimeout(onDone, 1200) }, 5600),
    ]
    const prog = setInterval(()=> setProgress(p=> p>=100 ? 100 : p+ (Math.random()*12)), 180)
    return ()=>{ timers.forEach(clearTimeout); clearInterval(prog) }
  }, [onDone])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
      className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* bg effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.15),transparent_60%)]" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#E23636]/30 to-transparent animate-pulse" />
        <div className="absolute inset-0 circuit-bg opacity-20" />
      </div>

      <div className="relative w-full max-w-3xl px-10 text-center">
        <AnimatePresence mode="wait">
          {stage===0 && (
            <motion.div key="s0" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0, scale:0.8 }} className="font-mono text-[#00D4FF] text-xs tracking-[0.3em]">
              INITIALIZING SHIELD NETDIV PROTOCOLS...
            </motion.div>
          )}
          {stage===1 && (
            <motion.div key="s1" className="space-y-8">
              <motion.div
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000, scale:0.8, opacity:0 }}
                animate={{ strokeDashoffset:0, scale:1, opacity:1 }}
                transition={{ duration:1.2, ease:"easeInOut" }}
                className="mx-auto w-28 h-28 relative"
              >
                {/* SHIELD eagle simplified */}
                <div className="absolute inset-0 rounded-full border border-[#00D4FF]/50 flex items-center justify-center bg-[#00D4FF]/5 shadow-[0_0_40px_rgba(0,212,255,0.4)]">
                  <span className="text-4xl">🦅</span>
                </div>
                <div className="absolute -inset-3 rounded-full border border-dashed border-[#00D4FF]/20 animate-spin-slow" />
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#E23636] shadow-[0_0_10px_#E23636] animate-pulse" />
              </motion.div>
              <div>
                <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} className="font-bebas text-2xl tracking-[0.4em] text-white">S.H.I.E.L.D. NETWORK DIVISION</motion.div>
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }} className="font-mono text-[10px] tracking-widest text-[#FFD700] mt-2">SECURITY CLEARANCE LEVEL: ALPHA — EYES ONLY</motion.div>
              </div>
            </motion.div>
          )}
          {stage===2 && (
            <motion.div key="s2" className="space-y-6" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
              <div className="inline-block border border-[#E23636] px-6 py-2 font-bebas text-2xl tracking-widest text-[#E23636] rotate-[-6deg] shadow-[0_0_20px_rgba(226,54,54,0.3)]">CLASSIFIED</div>
              <div className="font-mono text-left max-w-md mx-auto space-y-3 text-sm bg-black/60 border border-white/5 p-6 backdrop-blur">
                {[
                  ["████████ → ", "PEMARAJ MANOJAN"],
                  ["████████ → ", "NETWORK ENGINEER"],
                  ["████████ → ", "CYBERSECURITY SPECIALIST"],
                  ["████████ → ", "COLOMBO [ LK ] • ACTIVE"],
                ].map(([r,v],i)=>(
                  <motion.div key={i} initial={{ x:-20, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ delay:i*0.3 }} className="flex gap-2">
                    <span className="text-white/20">{r}</span><span className="text-[#00D4FF]">{v}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#00D4FF] shadow-[0_0_40px_#00D4FF] animate-pulse flex items-center justify-center"><div className="w-3 h-3 bg-white rounded-full animate-ping" /></div>
              </div>
            </motion.div>
          )}
          {stage===3 && (
            <motion.div key="s3" className="space-y-6" initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}>
              <div className="flex justify-center gap-3">
                {[...Array(3)].map((_,i)=>(
                  <div key={i} className="w-20 h-20 rounded-full border-2 border-[#00D4FF]/30 flex items-center justify-center animate-spin-slow" style={{ animationDirection: i%2===0?'normal':'reverse', animationDuration:`${4+i}s` }}>
                    <div className="w-12 h-12 rounded-full border border-[#00D4FF]/50" />
                  </div>
                ))}
              </div>
              <div className="font-mono text-[11px] text-left max-w-md mx-auto space-y-2 bg-[#0A0A14] p-4 border border-[#00D4FF]/20">
                <div className="flex justify-between"><span>[██████░░░░] LOADING NETWORK STACK</span><span className="text-[#00D4FF]">{Math.min(60, progress)}%</span></div>
                <div className="flex justify-between"><span>[████████░░] MOUNTING CYBER PROTOCOLS</span><span className="text-[#FFD700]">{Math.min(80, progress)}%</span></div>
                <div className="flex justify-between"><span>[██████████] OPERATOR AUTHENTICATED</span><span className="text-[#00FFD1]">100%</span></div>
                <div className="h-[2px] bg-white/10 mt-3 overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-[#E23636] to-[#00D4FF]" style={{ width: `${progress}%` }} transition={{ type:"spring" }} />
                </div>
              </div>
              <div className="font-bebas text-3xl tracking-widest text-white">WELCOME BACK, AGENT.</div>
            </motion.div>
          )}
          {stage===4 && (
            <motion.div key="s4" className="relative flex flex-col items-center" initial={{ scale:0.5, opacity:0 }} animate={{ scale:1, opacity:1 }}>
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 animate-spin blur-[2px]" style={{ clipPath:"circle()" }} />
                <div className="absolute inset-2 rounded-full bg-[#050505] flex items-center justify-center">
                  <span className="font-bebas text-5xl text-white tracking-widest">PM</span>
                </div>
                {[...Array(12)].map((_,i)=>(
                  <motion.div key={i} className="absolute w-[2px] h-8 bg-gradient-to-t from-orange-400 to-transparent" style={{ left:"50%", top:"-4px", transformOrigin:"50% 104px", rotate:`${i*30}deg` }} initial={{ opacity:0, scaleY:0 }} animate={{ opacity:1, scaleY:1 }} transition={{ delay:i*0.04 }} />
                ))}
              </div>
              <div className="mt-6 font-mono text-[#FFD700] text-xs tracking-[0.4em]">PORTAL SECURED — ENTERING OPERATIONS</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/20 tracking-[0.3em]">STARK INDUSTRIES • SHIELD CLEARANCE SYSTEM v4.7.1</div>
    </motion.div>
  )
}
