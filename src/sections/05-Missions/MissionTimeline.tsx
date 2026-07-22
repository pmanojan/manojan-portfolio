import { motion } from 'framer-motion'
import { EXPERIENCE_DATA } from '../../constants/experience.data'
import { HolographicPanel } from '../../components/ui/HolographicPanel'

export const MissionTimeline = () => {
  return (
    <section id="missions" className="relative bg-[#0A0A14] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-[0.04]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF20] to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-[#00D4FF]">// OPERATION 04 — MISSION HISTORY</div>
            <h2 className="font-bebas text-[52px] md:text-[72px] leading-none tracking-wide text-white mt-2">MISSION <span className="text-[#E23636]">LOG</span></h2>
          </div>
          <div className="font-mono text-[11px] text-white/40 bg-black/40 border border-white/5 px-4 py-2">
            <span className="text-[#FFD700]">STENCIL:</span> OPERATIVE HISTORY • 4 OPERATIONS • SCROLL TO EXPLORE →
          </div>
        </div>

        {/* Horizontal scroll container on desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 left-0 h-[1px] w-full bg-gradient-to-r from-[#E23636] via-[#00D4FF] to-[#FFD700] opacity-40 -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-6">
            {EXPERIENCE_DATA.map((exp, idx)=>(
              <motion.div
                key={exp.id}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: idx*0.12 }}
                className="relative"
              >
                {/* node */}
                <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-[#E23636] border-[#E23636] shadow-[0_0_20px_#E23636] animate-pulse' : 'bg-[#FFD700] border-[#FFD700] shadow-[0_0_10px_#FFD700]'}`} />
                </div>

                <HolographicPanel accent={exp.color} glow={exp.current} className={`p-6 mt-0 lg:mt-8 h-full ${exp.current ? 'border-[#E23636]/40' : ''}`}>
                  {exp.current && <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#E23636] text-white text-[9px] font-mono tracking-widest animate-pulse">ACTIVE MISSION</div>}
                  <div className="font-mono text-[11px] tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color: exp.color }}>
                    <span className="px-1.5 py-0.5 border" style={{ borderColor:`${exp.color}40` }}>MISSION {exp.missionNumber}</span>
                    <span className="text-white/30">{exp.clearanceCode}</span>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{exp.icon}</span>
                    <div>
                      <h3 className="font-bebas text-[20px] leading-tight tracking-wide text-white">{exp.title}</h3>
                      <div className="font-rajdhani font-semibold text-sm mt-1" style={{ color: exp.color }}>{exp.company}</div>
                      <div className="font-mono text-[10px] text-white/40 mt-1">📅 {exp.duration} • {exp.type} • 📍 {exp.location}</div>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-white/5 my-4" />
                  <div className="font-mono text-[9px] tracking-[0.2em] text-[#FFD700] mb-2">— MISSION OBJECTIVES —</div>
                  <ul className="space-y-2">
                    {exp.objectives.map((o,i)=>(
                      <li key={i} className="flex gap-2 text-[12px] leading-relaxed text-white/60 font-exo"><span className="text-[#00D4FF] mt-[2px]">▶</span><span>{o}</span></li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <div className="font-mono text-[9px] tracking-[0.2em] text-white/30 mb-2">— CLEARANCE CODES —</div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map(t=>(
                        <span key={t} className="px-2 py-1 bg-white/[0.04] border border-white/5 text-[9px] font-mono text-white/50">{t}</span>
                      ))}
                    </div>
                  </div>

                  {exp.current && (
                    <div className="mt-4 p-2 bg-[#E23636]/5 border border-[#E23636]/20 font-mono text-[10px] text-[#E23636] flex justify-between">
                      <span>LIVE MISSION TIMER</span><span>ACTIVE FOR: {exp.monthsActive}M • SINCE MAR 2026</span>
                    </div>
                  )}
                </HolographicPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
