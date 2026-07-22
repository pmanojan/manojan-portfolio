import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    confidence: "HIGH",
    stars: 5,
    text: "Manojan's network infrastructure work at BCAS Jaffna was exceptional. He redesigned our entire LAN with proper VLAN segmentation, implemented FortiGate policies that actually stopped daily intrusion attempts, and documented everything so well even interns can troubleshoot. Rare combination of deep technical + teaching ability — true asset to IT Administration and Support.",
    source: "Campus Administration",
    dept: "IT Administration and IT Support department",
    date: "2026-02-15",
    verified: "SHIELD STAMP — BCAS Jaffna ops confirmed — JAFFNA ONLY"
  },
  {
    confidence: "VERY HIGH",
    stars: 5,
    text: "During his stint at Hutch Core Networks, Pemaraj quickly grasped telco-grade NOC operations. He assisted in network expansion documentation and produced SOPs still referenced by the team. Proactive, detail-oriented, and asks the right questions — exactly what you want in a network engineer.",
    source: "Senior Network Engineer",
    dept: "Hutch Sri Lanka — Core Networks",
    date: "2024-10-12",
    verified: "TELCO CLEARANCE — HUTCH SL verified"
  },
  {
    confidence: "HIGH",
    stars: 5,
    text: "As a student under Assistant Lecturer Manojan at BCAS Jaffna Campus, the Cisco labs were the first time I actually understood OSPF vs EIGRP practically, not just theory. His Python automation demo — bulk config backup for 20 routers in 2 minutes — blew my mind. He mentors without gatekeeping. Best IT lecturer we had at Jaffna.",
    source: "Final Year Student — Assistant Lecturer's Class",
    dept: "IT Department",
    date: "2025-12-20",
    verified: "ACADEMIC INTEL — BCAS Jaffna IT Department — Student cohort 2025"
  }
]

export const IntelReports = () => {
  const [idx, setIdx] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=> setIdx(i=> (i+1)%TESTIMONIALS.length), 5000)
    return ()=> clearInterval(id)
  }, [])

  return (
    <section className="relative bg-[#080810] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,255,209,0.08),transparent_60%)]" />
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#00FFD1]">SECTION 08 — FIELD INTELLIGENCE • VERIFIED SOURCES</div>
          <h2 className="font-bebas text-[48px] md:text-[64px] leading-none tracking-wide text-white mt-3">FIELD INTELLIGENCE <span className="text-[#00FFD1]">REPORTS</span></h2>
          <div className="font-exo text-white/40 text-sm mt-2">Sourced from verified operatives • Confidence levels audited</div>
        </div>

        <div className="relative bg-[#0A0A14] border border-white/5 p-8 md:p-10 overflow-hidden min-h-[360px]">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FFD1]/30 to-transparent" />
          <div className="absolute top-1 left-2 text-[10px] font-mono text-white/20">SHIELD INTELLIGENCE DIVISION • FILE ACCESS — CLASSIFIED</div>

          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:0.5 }} className="mt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-[#FFD700]">{"★★★★★".slice(0, TESTIMONIALS[idx].stars)}</div>
                <span className="px-2 py-1 bg-[#00FFD1]/10 border border-[#00FFD1]/20 text-[#00FFD1] text-[10px] font-mono tracking-widest">CONFIDENCE LEVEL: {TESTIMONIALS[idx].confidence}</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              </div>

              <div className="font-exo text-[18px] md:text-[20px] leading-relaxed text-white/80 italic">"{TESTIMONIALS[idx].text}"</div>

              <div className="mt-8 pt-6 border-t border-white/5 grid md:grid-cols-3 gap-4 font-mono text-[11px]">
                <div><span className="text-white/30">SOURCE:</span><span className="text-white ml-2">{TESTIMONIALS[idx].source}</span></div>
                <div><span className="text-white/30">DEPT:</span><span className="text-[#00D4FF] ml-2">{TESTIMONIALS[idx].dept}</span></div>
                <div><span className="text-white/30">DATE:</span><span className="text-white/50 ml-2">[REDACTED FOR SECURITY]</span></div>
              </div>

              <div className="mt-6 flex justify-between items-center bg-black/40 border border-white/5 p-3">
                <span className="font-mono text-[10px] text-white/40">VERIFIED BY:</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#FFD700] px-3 py-1 bg-[#FFD700]/5 border border-[#FFD700]/20">▓▓ {TESTIMONIALS[idx].verified} ✓</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {TESTIMONIALS.map((_,i)=>(
              <button key={i} onClick={()=>setIdx(i)} className={`transition-all ${i===idx ? 'w-10 h-2 bg-[#00FFD1] shadow-[0_0_10px_#00FFD1]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} style={{ clipPath: i===idx ? "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)" : "" }} />
            ))}
          </div>

          <button onClick={()=>setIdx(i=> (i-1+TESTIMONIALS.length)%TESTIMONIALS.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 border border-white/10 text-white/40 hover:text-white hover:border-white/20">‹</button>
          <button onClick={()=>setIdx(i=> (i+1)%TESTIMONIALS.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 border border-white/10 text-white/40 hover:text-white hover:border-white/20">›</button>
        </div>
      </div>
    </section>
  )
}
