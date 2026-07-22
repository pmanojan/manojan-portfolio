import { motion } from 'framer-motion'

export const ArcReactorDisplay = () => {
  return (
    <div className="relative w-[380px] h-[380px] md:w-[520px] md:h-[520px] flex items-center justify-center">
      {/* outer rings */}
      <motion.div className="absolute w-[90%] h-[90%] rounded-full border border-[#00D4FF20]" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#00D4FF] rounded-full shadow-[0_0_10px_#00D4FF] -translate-x-1/2 -translate-y-1" />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#E23636] rounded-full shadow-[0_0_10px_#E23636] -translate-x-1/2 translate-y-1" />
      </motion.div>
      <motion.div className="absolute w-[78%] h-[78%] rounded-full border border-dashed border-[#00D4FF15]" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute w-[66%] h-[66%] rounded-full border border-[#FFD70020]" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
        <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-[#FFD700] rounded-full shadow-[0_0_8px_#FFD700] translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* main reactor core */}
      <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full bg-[radial-gradient(circle,#00D4FF20,rgba(0,212,255,0.05)_30%,transparent_70%)] border border-[#00D4FF30] flex items-center justify-center shadow-[0_0_80px_rgba(0,212,255,0.25),inset_0_0_40px_rgba(0,212,255,0.15)] backdrop-blur-sm overflow-hidden">
        {/* triangle pattern */}
        <div className="absolute inset-6 rounded-full border border-[#00D4FF20]" />
        <div className="absolute inset-12 rounded-full border border-[#00D4FF10]" />
        
        {/* center core */}
        <div className="relative w-[140px] h-[140px] rounded-full bg-[#00141a] border-2 border-[#00D4FF] shadow-[0_0_40px_rgba(0,212,255,0.8),inset_0_0_20px_rgba(0,212,255,0.5)] flex items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0 bg-[conic-gradient(from_0deg,#00D4FF,transparent_60deg,#00D4FF_120deg,transparent_180deg,#00D4FF_240deg,transparent_300deg)] opacity-40" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
          <div className="relative font-bebas text-5xl text-white tracking-widest" style={{ textShadow: "0 0 20px #00D4FF" }}>PM</div>
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_60%)]" />
        </div>

        {/* energy particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00D4FF] rounded-full shadow-[0_0_6px_#00D4FF]"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: [0, Math.cos((i * 60 * Math.PI) / 180) * 140],
              y: [0, Math.sin((i * 60 * Math.PI) / 180) * 140],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeOut" }}
          />
        ))}

        {/* sweeping line */}
        <motion.div className="absolute inset-0 rounded-full opacity-30" style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(0,212,255,0.4) 20deg, transparent 40deg)" }} animate={{ rotate: 360 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
      </div>

      {/* floating HUD panels */}
      {[
        { t: "CCNA STATUS", v: "CERTIFIED ✓", top: "5%", left: "5%" },
        { t: "EXPERIENCE", v: "3 YRS ACTIVE", top: "8%", right: "2%" },
        { t: "CLEARANCE", v: "FORTIGATE OP", bottom: "12%", left: "0%" },
        { t: "MISSIONS", v: "15+ PROJECTS", bottom: "5%", right: "5%" },
      ].map((p,i)=>(
        <motion.div key={i} className="absolute bg-[#0A0A14]/80 backdrop-blur border border-[#00D4FF20] px-3 py-2 min-w-[120px]" style={{ top: p.top as any, left: p.left as any, right: p.right as any, bottom: p.bottom as any }} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.2+i*0.2 }} whileHover={{ scale:1.05 }}>
          <div className="text-[8px] font-mono text-[#00D4FF] tracking-widest">{p.t}</div>
          <div className="text-[11px] font-barlow text-white tracking-wider">{p.v}</div>
          <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-[#00D4FF]" />
          <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-[#00D4FF]" />
          <motion.div className="absolute top-0 left-0 h-[1px] bg-[#00D4FF]" initial={{ width:0 }} animate={{ width:"100%" }} transition={{ delay:1.5+i*0.2, duration:1 }} />
        </motion.div>
      ))}

      {/* glow under */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-20 bg-[#00D4FF]/10 blur-[30px] rounded-full pointer-events-none" />
    </div>
  )
}
