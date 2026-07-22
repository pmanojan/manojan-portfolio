import { motion } from 'framer-motion'
import { SERVICES_DATA } from '../../constants/services.data'
import { ArcReactorButton } from '../../components/ui/ArcReactorButton'

export const AvengersAssemble = () => {
  return (
    <section id="operations" className="relative bg-[#050505] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,212,255,0.08),transparent_60%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/20 text-[10px] font-mono tracking-[0.2em] text-[#FFD700]">AVENGERS FACILITY — COMMAND CENTER • ACCESS GRANTED • NOW 7 MISSIONS (INC. ATS RESUME + REACT)</div>
          <h2 className="font-bebas text-[52px] md:text-[80px] leading-[0.9] tracking-wide text-white mt-6">CHOOSE YOUR <span className="text-[#E23636]">MISSION</span></h2>
          <p className="font-exo text-white/50 mt-3 max-w-xl mx-auto">Deploy the right specialist for your operation. Each mission classified, verified, and field-tested. Now including Frontend React Entry Level.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {SERVICES_DATA.filter(s=>!s.featured).map((svc, i)=>(
            <motion.div
              key={svc.id}
              initial={{ opacity:0, y:40, clipPath:"inset(0 0 100% 0)" }}
              whileInView={{ opacity:1, y:0, clipPath:"inset(0 0 0% 0)" }}
              viewport={{ once:true }}
              transition={{ delay:i*0.08, duration:0.7, ease:[0.16,1,0.3,1] }}
              whileHover={{ y:-6 }}
              className="group relative bg-[#0A0A14] border border-white/5 p-6 overflow-hidden hover:border-white/10 transition-all flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: svc.accent }} />
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 rounded flex items-center justify-center text-xl border" style={{ borderColor:`${svc.accent}30`, background:`${svc.accent}10`, boxShadow:`0 0 20px ${svc.accent}20` }}>{svc.icon}</div>
                <div className="font-mono text-[10px] px-2 py-1 bg-black border border-white/10 text-white/40">MISSION {svc.number}</div>
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] mb-1" style={{ color:svc.accent }}>{svc.hero}</div>
              <h3 className="font-bebas text-[21px] leading-tight tracking-wide text-white">{svc.title.toUpperCase()}</h3>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent my-4" />
              <p className="font-exo text-[13px] leading-relaxed text-white/60 flex-1">{svc.description}</p>
              
              {(svc as any).pricing && (
                <div className="mt-4 p-3 bg-black/70 border border-[#61DAFB]/20 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#61DAFB] rounded-full animate-pulse" />
                    <span className="font-barlow tracking-[0.15em] text-[10px] text-[#61DAFB]">ENTRY-LEVEL PRICING — LKR & $</span>
                    <span className="ml-auto px-1.5 py-0.5 bg-[#FFD700]/10 text-[#FFD700] text-[8px] font-mono">STARTER</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="bg-[#61DAFB]/5 border border-[#61DAFB]/20 p-2 text-center">
                      <div className="font-mono text-[9px] text-white/30">USD</div>
                      <div className="font-bebas text-[16px] text-[#61DAFB]">{(svc as any).pricing.usd}</div>
                    </div>
                    <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 p-2 text-center">
                      <div className="font-mono text-[9px] text-white/30">LKR</div>
                      <div className="font-bebas text-[16px] text-[#FFD700]">{(svc as any).pricing.lkr}</div>
                    </div>
                  </div>
                  <div className="font-mono text-[8px] text-white/40 text-center">{(svc as any).pricing.note}</div>
                </div>
              )}

              <div className="mt-4 space-y-1.5 min-h-[54px]">
                {svc.deliverables.slice(0, svc.id==="06" ? 2 : 3).map((d:any)=>(
                  <div key={d} className="flex items-center gap-2 text-[11px] font-mono text-white/50"><span style={{ color:svc.accent }}>✓</span>{d}</div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mt-4">
                {svc.tags.map((t:any)=><span key={t} className="px-2 py-0.5 bg-white/[0.04] border border-white/5 text-[9px] font-mono text-white/40">{t}</span>)}
              </div>
              <button onClick={()=>document.getElementById('command')?.scrollIntoView({behavior:'smooth'})} className="mt-5 w-full h-9 bg-white/[0.03] border border-white/5 font-barlow text-[11px] tracking-[0.2em] text-white/70 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2">DEPLOY NOW <span className="text-[#E23636]">→</span></button>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
            </motion.div>
          ))}
        </div>

        {/* Featured */}
        {SERVICES_DATA.filter(s=>s.featured).map(svc=>(
          <motion.div
            key={svc.id}
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            className="relative bg-[#0A0A14] border border-[#E23636]/30 p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage:`repeating-linear-gradient(45deg, ${svc.accent} 0 1px, transparent 1px 20px)` }} />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E23636] via-[#FFD700] to-[#00D4FF]" />
            </div>
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1 bg-[#E23636] text-white text-[10px] font-mono tracking-widest animate-pulse">⭐ PRIMARY DIRECTIVE • FLAGSHIP MISSION</div>

            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded bg-[#E23636]/15 border border-[#E23636]/30 flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(226,54,54,0.3)]">{svc.icon}</div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[#E23636]">{svc.hero}</div>
                    <h3 className="font-bebas text-[30px] md:text-[40px] leading-none text-white tracking-wide">{svc.title.toUpperCase()}</h3>
                  </div>
                </div>
                <p className="font-exo text-white/70 leading-relaxed max-w-[680px]">{svc.description}</p>
                <div className="grid sm:grid-cols-2 gap-2 mt-6">
                  {svc.deliverables.map((d:any)=>(
                    <div key={d} className="flex items-center gap-2 text-sm text-white/60 font-mono"><span className="w-4 h-4 rounded-full bg-[#E23636]/20 border border-[#E23636]/30 flex items-center justify-center text-[10px] text-[#E23636]">✓</span>{d}</div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="font-mono text-[10px] tracking-[0.2em] text-[#FFD700]">TECHNOLOGIES DEPLOYED</div>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((t:any)=><span key={t} className="px-3 py-1.5 bg-[#E23636]/10 border border-[#E23636]/20 text-[11px] font-mono text-[#E23636]">{t}</span>)}
                </div>
                <ArcReactorButton variant="primary" size="lg" className="w-full mt-4" onClick={()=>document.getElementById('command')?.scrollIntoView({behavior:'smooth'})}>⚡ INITIATE FLAGSHIP MISSION →</ArcReactorButton>
                <div className="text-[10px] font-mono text-white/30 text-center">Field success rate: 100% • 50+ clients secured</div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="mt-8 relative overflow-hidden bg-gradient-to-r from-[#E23636]/20 via-[#E23636]/10 to-[#050505] border border-[#E23636]/20 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bebas text-2xl tracking-widest text-white">NEED A CUSTOM OPERATION? NOW WITH LKR & $ PRICING</div>
            <div className="font-exo text-sm text-white/60">No mission is too complex. Entry-level React from LKR 25K / $75 — Enterprise networking flagship.</div>
          </div>
          <ArcReactorButton variant="primary" size="md" onClick={()=>document.getElementById('command')?.scrollIntoView({behavior:'smooth'})}>INITIATE CONTACT →</ArcReactorButton>
        </div>
      </div>
    </section>
  )
}
