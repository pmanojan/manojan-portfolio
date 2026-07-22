import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILL_CATEGORIES, SKILLS_DATA, TECH_STACK, ALL_SKILLS } from '../../constants/skills.data'

function getLevelLabel(level: number) {
  if (level >= 90) return { label: "EXPERT", desc: "Daily driver • Can architect & teach", color: "#00FFD1" }
  if (level >= 80) return { label: "ADVANCED", desc: "Production deployments • Certified", color: "#00D4FF" }
  if (level >= 70) return { label: "PROFICIENT", desc: "Independent projects • Troubleshooting", color: "#FFD700" }
  if (level >= 60) return { label: "INTERMEDIATE", desc: "Growing • Hands-on labs & projects", color: "#E23636" }
  return { label: "FUNDAMENTAL", desc: "Learning • Foundations", color: "#7B00FF" }
}

export const TechArsenal = () => {
  const [activeCat, setActiveCat] = useState('all')
  const [flipped, setFlipped] = useState<string|null>(null)

  const skillsToShow = activeCat==='all' ? ALL_SKILLS : (SKILLS_DATA as any)[activeCat] || []

  return (
    <section id="arsenal" className="relative bg-[#050505] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(123,0,255,0.10),transparent_60%)]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#FFD700]">// SECTION 05 — STARK INDUSTRIES ARSENAL</div>
          <div className="flex flex-wrap items-baseline gap-4 mt-2">
            <h2 className="font-bebas text-[52px] md:text-[72px] leading-none tracking-wide text-white">STARK <span className="text-[#00D4FF]">ARSENAL</span></h2>
            <span className="font-barlow tracking-[0.2em] text-xs text-white/40">WEAPONS & TECHNOLOGIES DEPLOYED</span>
          </div>
          {/* Explanation of percentages */}
          <div className="mt-6 grid md:grid-cols-[1.2fr_0.8fr] gap-4">
            <div className="bg-[#0A0A14] border border-[#00D4FF]/20 p-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] text-sm">?</div>
              <div className="flex-1">
                <div className="font-barlow tracking-[0.15em] text-[11px] text-[#00D4FF]">WHAT DO THE PERCENTAGES MEAN?</div>
                <div className="font-mono text-[11px] leading-relaxed text-white/60 mt-1">
                  Self-assessed <span className="text-white">proficiency score</span> — not exam marks. Calculated from: <span className="text-[#FFD700]">years hands-on (40%)</span> + <span className="text-[#00D4FF]">production deployments (30%)</span> + <span className="text-[#E23636]">certifications {'&'} teaching ability (30%)</span>. Hover/flip any weapon to see breakdown. 100% = could deploy under fire, at 3am, without Google.
                </div>
                <div className="flex flex-wrap gap-2 mt-3 font-mono text-[9px]">
                  <span className="px-2 py-1 bg-[#00FFD1]/10 border border-[#00FFD1]/20 text-[#00FFD1]">90-100% EXPERT</span>
                  <span className="px-2 py-1 bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF]">80-89% ADVANCED</span>
                  <span className="px-2 py-1 bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700]">70-79% PROFICIENT</span>
                  <span className="px-2 py-1 bg-[#E23636]/10 border border-[#E23636]/20 text-[#E23636]">60-69% INTERMEDIATE (GROWING)</span>
                </div>
              </div>
            </div>
            <div className="bg-black/60 border border-white/5 p-4 font-mono text-[10px] text-white/40">
              <div className="text-[#FFD700] tracking-widest mb-2">⚙️ HOW IT'S AUDITED</div>
              <div>• 88% Cisco = 3+ yrs, 50+ devices configured, CCNA certified, can teach OSPF</div>
              <div>• 92% DNS = Daily use since 2022, AD integrated, troubleshooting blind</div>
              <div>• 68% React = Portfolio built in React, 1+ yr, still expanding patterns</div>
              <div className="text-white/20 mt-2">Transparency {' > '} Inflated numbers. Recruiter-friendly.</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr_220px] gap-8">
          {/* Tabs */}
          <div className="space-y-2 h-fit lg:sticky lg:top-24">
            {SKILL_CATEGORIES.map(cat=>{
              const active = activeCat===cat.id
              return (
                <button
                  key={cat.id}
                  onClick={()=>setActiveCat(cat.id)}
                  className={`relative w-full text-left px-4 py-3 border font-barlow tracking-widest text-xs flex items-center justify-between transition-all ${active ? 'bg-[#E23636]/10 border-[#E23636]/50 text-white shadow-[0_0_15px_rgba(226,54,54,0.2)]' : 'bg-white/[0.02] border-white/5 text-white/50 hover:text-white/80 hover:border-white/10'}`}
                >
                  <span className="flex items-center gap-2"><span>{cat.icon}</span>{cat.label}</span>
                  <span className={`px-1.5 py-0.5 text-[10px] font-mono ${active ? 'bg-[#E23636] text-white' : 'bg-white/5'}`}>{cat.count}</span>
                </button>
              )
            })}
            <div className="mt-6 p-4 bg-[#0A0A14] border border-white/5">
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#FFD700] mb-3">⚙️ SYSTEM READOUT</div>
              <div className="font-mono text-[11px] text-white/50 space-y-1">
                <div className="flex justify-between"><span>WEAPONS:</span><span className="text-[#00D4FF]">{ALL_SKILLS.length}</span></div>
                <div className="flex justify-between"><span>AVG PROF:</span><span className="text-[#FFD700]">80%</span></div>
                <div className="flex justify-between"><span>STATUS:</span><span className="text-green-400">OPERATIONAL</span></div>
              </div>
            </div>
          </div>

          {/* Hex Grid */}
          <div>
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {skillsToShow.map((skill:any, i:number)=>{
                  const lvl = getLevelLabel(skill.level)
                  return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity:0, scale:0.8, rotateY:-90 }}
                    animate={{ opacity:1, scale:1, rotateY:0 }}
                    exit={{ opacity:0, scale:0.8 }}
                    transition={{ delay:i*0.03, duration:0.5 }}
                    className="relative group"
                    style={{ perspective: 1000 }}
                    onMouseEnter={()=>setFlipped(skill.name)}
                    onMouseLeave={()=>setFlipped(null)}
                  >
                    <div className={`relative h-[190px] transition-transform duration-700 preserve-3d ${flipped===skill.name ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle:'preserve-3d' }}>
                      {/* front - improved */}
                      <div className="absolute inset-0 backface-hidden bg-[#0A0A14] border p-4 flex flex-col text-center overflow-hidden" style={{ borderColor:`${skill.color}30` }}>
                        <div className="flex justify-between items-start mb-1">
                          <div className="w-8 h-8 rounded bg-white/5 border flex items-center justify-center text-[12px]" style={{ borderColor:`${skill.color}30` }}>{skill.category==='Networking'?'🌐':skill.category==='Cybersecurity'?'🛡️':skill.category==='Programming'?'💻':'⚙️'}</div>
                          <span className="px-1.5 py-0.5 text-[8px] font-mono tracking-widest border" style={{ borderColor: lvl.color+'40', color: lvl.color, background: lvl.color+'12' }}>{lvl.label}</span>
                        </div>
                        <div className="font-barlow text-[11px] tracking-[0.12em] leading-tight text-white mt-2 min-h-[28px]">{skill.name.toUpperCase()}</div>
                        
                        <div className="mt-auto">
                          <div className="flex justify-between items-center font-mono text-[9px] text-white/30 mb-1"><span>PROFICIENCY</span><span style={{ color: lvl.color }}>{skill.level}%</span></div>
                          <div className="w-full h-1.5 bg-white/5 overflow-hidden rounded-full">
                            <motion.div initial={{ width:0 }} whileInView={{ width:`${skill.level}%` }} viewport={{ once:true }} transition={{ duration:1, delay:0.3 }} className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${skill.color}, ${lvl.color})`, boxShadow:`0 0 10px ${skill.color}` }} />
                          </div>
                          <div className="font-mono text-[8px] text-white/30 mt-1.5 truncate">{lvl.desc}</div>
                        </div>

                        {skill.growing && <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#FFD700]/20 text-[#FFD700] text-[8px] font-mono animate-pulse">GROWING • LEARNING</div>}
                      </div>
                      {/* back - detailed breakdown */}
                      <div className="absolute inset-0 backface-hidden bg-[#0A0A14] border flex flex-col items-center justify-center p-4 [transform:rotateY(180deg)]" style={{ borderColor:`${skill.color}50` }}>
                        <div className="relative w-20 h-20 mb-2">
                          <svg className="w-full h-full -rotate-90"><circle cx="40" cy="40" r="36" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none"/><circle cx="40" cy="40" r="36" stroke={skill.color} strokeWidth="4" fill="none" strokeDasharray={`${2*Math.PI*36}`} strokeDashoffset={`${2*Math.PI*36*(1-skill.level/100)}`} strokeLinecap="round" style={{ filter:`drop-shadow(0 0 6px ${skill.color})` }} className="transition-all duration-1000" /></svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="font-bebas text-2xl text-white">{skill.level}%</span><span className="font-mono text-[8px] tracking-widest" style={{ color: lvl.color }}>{lvl.label}</span></div>
                        </div>
                        <div className="w-full space-y-1 font-mono text-[9px] bg-black/50 border border-white/5 p-2">
                          <div className="flex justify-between"><span className="text-white/30">YEARS</span><span className="text-white">{skill.years}</span></div>
                          <div className="flex justify-between"><span className="text-white/30">SCALE</span><span className="text-[#00D4FF]">{lvl.desc}</span></div>
                          <div className="flex justify-between"><span className="text-white/30">CAT</span><span className="text-white/60">{skill.category}</span></div>
                        </div>
                        <div className="font-mono text-[8px] text-white/20 mt-2 text-center">Flip back to see overview • Self-assessed</div>
                      </div>
                    </div>
                  </motion.div>
                )})}
              </AnimatePresence>
            </motion.div>

            {/* Radar */}
            <div className="mt-12 bg-[#0A0A14] border border-white/5 p-6">
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#FFD700] mb-6">SKILL MATRIX — HEX RADAR • AVG 80%</div>
              <div className="relative w-full max-w-[420px] mx-auto aspect-square">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[1,2,3,4].map(l=>(
                    <polygon key={l} points={Array.from({length:6},(_,i)=>{ const a=(Math.PI/3)*i - Math.PI/6; const r=(l*20); return `${100 + r*Math.cos(a)},${100 + r*Math.sin(a)}`}).join(' ')} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  ))}
                  {[0,1,2,3,4,5].map(i=>{ const a=(Math.PI/3)*i - Math.PI/6; return <line key={i} x1="100" y1="100" x2={100+80*Math.cos(a)} y2={100+80*Math.sin(a)} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />})}
                  <motion.polygon
                    initial={{ scale:0, opacity:0 }}
                    whileInView={{ scale:1, opacity:1 }}
                    viewport={{ once:true }}
                    transition={{ duration:1.2, ease:[0.16,1,0.3,1] }}
                    points={[90,78,78,90,75,82].map((v,i)=>{ const a=(Math.PI/3)*i - Math.PI/6; const r=(v/100)*80; return `${100 + r*Math.cos(a)},${100 + r*Math.sin(a)}`}).join(' ')}
                    fill="url(#radarGrad)" stroke="#00D4FF" strokeWidth="1.5" opacity={0.8}
                    style={{ transformOrigin:"100px 100px" }}
                  />
                  <defs><radialGradient id="radarGrad"><stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4"/><stop offset="100%" stopColor="#E23636" stopOpacity="0.1"/></radialGradient></defs>
                </svg>
                <div className="absolute inset-0 pointer-events-none">
                  {["NET 90","SEC 78","CODE 76","SYS 90","DSGN 70","LEAD 82"].map((label, i)=>{
                    const a=(Math.PI/3)*i - Math.PI/6; const r=94; const x=50 + (r*Math.cos(a))/2; const y=50 + (r*Math.sin(a))/2;
                    return <div key={i} className="absolute text-[8px] font-mono text-white/50" style={{ left:`${x}%`, top:`${y}%`, transform:"translate(-50%,-50%)" }}>{label}</div>
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Tech wall */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#00D4FF]">DEPLOYED TECHNOLOGIES — {TECH_STACK.length}</div>
            <div className="grid grid-cols-2 gap-2">
              {TECH_STACK.map(t=>(
                <motion.div key={t.name} whileHover={{ scale:1.03, y:-2 }} className="bg-[#0A0A14] border border-white/5 p-3 flex items-center gap-2 hover:border-[#00D4FF]/20 transition-colors group">
                  <span className="text-lg">{t.icon}</span>
                  <div className="overflow-hidden"><div className="font-barlow text-[11px] tracking-wide text-white/80 group-hover:text-white truncate">{t.name.toUpperCase()}</div><div className="font-mono text-[8px] text-white/30">{t.category}</div></div>
                </motion.div>
              ))}
            </div>
            <div className="p-3 bg-[#FFD700]/5 border border-[#FFD700]/10 font-mono text-[9px] text-[#FFD700]/70">
              💡 Percentages = self-assessed proficiency, not exam scores. Based on years, deployments, certs, and ability to teach others.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
