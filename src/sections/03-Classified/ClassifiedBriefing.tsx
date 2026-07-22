import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { PERSONAL_INFO } from '../../constants/portfolio.data'
import { HolographicPanel } from '../../components/ui/HolographicPanel'
import { ClassifiedStamp } from '../../components/ui/ClassifiedStamp'
import { useEffect, useRef } from 'react'

export const ClassifiedBriefing = () => {
  // 3D tilt with mouse
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useSpring(x, { stiffness: 80, damping: 20 })
  const mouseY = useSpring(y, { stiffness: 80, damping: 20 })
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      x.set((e.clientX - rect.left) / rect.width - 0.5)
      y.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    el.addEventListener('mousemove', handle)
    el.addEventListener('mouseleave', () => { x.set(0); y.set(0) })
    return () => { el.removeEventListener('mousemove', handle) }
  }, [x, y])

  return (
    <section id="classified" className="relative bg-[#080810] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(123,0,255,0.12),transparent_50%)]" />
      <ClassifiedStamp text="TOP SECRET" angle={-8} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#00D4FF] mb-2">// SECTION 02 — OPERATIVE DOSSIER • 3D HOLO-PROJECTION</div>
          <h2 className="font-bebas text-[52px] md:text-[72px] leading-none tracking-wide text-white">CLASSIFIED <span className="text-[#E23636]">BRIEFING</span></h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-[#E23636] to-transparent mt-4" />
          <div className="mt-4 p-3 bg-[#00D4FF]/5 border border-[#00D4FF]/20 font-mono text-[10px] text-[#00D4FF]/80 max-w-[720px]">✅ 3D HOLO-PROJECTION ACTIVE • Non-editable • Tilt your cursor over the photo — real 3D depth with Stark reactor frame • Image: <span className="text-white">public/assets/profile.jpeg</span></div>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          {/* Left Profile — 3D */}
          <div className="space-y-6">
            <HolographicPanel accent="#00D4FF" glow className="p-6 overflow-visible">
              {/* 3D Container */}
              <div ref={ref} className="relative mx-auto w-[300px] h-[300px] mb-2" style={{ perspective: 1200 }}>
                <motion.div
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" } as any}
                  className="relative w-full h-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Depth shadow layers - creates extrusion */}
                  <div className="absolute inset-0 rounded-full bg-[#00D4FF]/20 blur-[25px] -z-20" style={{ transform: "translateZ(-80px)" } as any} />
                  <div className="absolute inset-[12px] rounded-full bg-[#050505] -z-10" style={{ transform: "translateZ(-40px)" } as any} />
                  <div className="absolute inset-[8px] rounded-full border border-[#00D4FF]/10 -z-10" style={{ transform: "translateZ(-20px)" } as any} />

                  {/* Outer holographic rings - with 3D depth */}
                  <div className="absolute inset-0 rounded-full border border-[#00D4FF]/25" style={{ transform: "translateZ(5px)" } as any} />
                  <motion.div className="absolute inset-[6px] rounded-full border border-dashed border-[#00D4FF]/40" style={{ transform: "translateZ(10px)" } as any} animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
                  <div className="absolute inset-[16px] rounded-full border border-[#FFD700]/15" style={{ transform: "translateZ(15px)" } as any} />

                  {/* Main 3D Circle - Stark Reactor Frame with depth */}
                  <div 
                    className="absolute inset-[22px] rounded-full overflow-hidden border-[3px] border-[#00D4FF]/60 bg-[#0A0A14]"
                    style={{ 
                      transform: "translateZ(50px)",
                      boxShadow: "0 25px 60px rgba(0,212,255,0.4), 0 0 0 1px rgba(0,212,255,0.2), inset 0 0 40px rgba(0,212,255,0.2), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 8px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.8)"
                    } as any}
                  >
                    <img 
                      src="https://github.com/pmanojan/manojan-portfolio/blob/main/public/assets/profile.jpeg" 
                      alt="Pemaraj Manojan — IT Administrator Jaffna" 
                      className="w-full h-full object-cover rounded-full"
                      style={{ filter: "contrast(1.1) saturate(1.15)" }}
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://github.com/pmanojan/manojan-portfolio/blob/main/public/assets/profile.jpeg" }}
                    />
                    {/* 3D lighting overlays */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-transparent to-transparent pointer-events-none mix-blend-overlay" style={{ transform: "translateZ(10px)" } as any} />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00D4FF]/25 via-transparent to-[#FFD700]/10 pointer-events-none" />
                    <div className="absolute inset-0 rounded-full scanline opacity-[0.08] pointer-events-none" />
                    {/* Beveled edge inner shadow for 3D extrusion */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_12px_rgba(255,255,255,0.3),inset_0_-4px_12px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(0,212,255,0.3)] pointer-events-none" />
                    {/* Top highlight for 3D popped effect */}
                    <div className="absolute top-[8%] left-[15%] right-[15%] h-[18%] bg-gradient-to-b from-white/30 to-transparent rounded-[50%] blur-[1px] pointer-events-none opacity-60" />
                  </div>

                  {/* Floating ALPHA badge in 3D */}
                  <div 
                    className="absolute top-3 right-6 px-3 py-1 bg-[#E23636] text-[9px] font-mono text-white z-[60] rounded-full shadow-[0_8px_20px_rgba(226,54,54,0.5),0_0_0_1px_rgba(255,255,255,0.2)] border border-white/20"
                    style={{ transform: "translateZ(80px)" } as any}
                  >
                    ALPHA • 3D
                  </div>

                  {/* Reactor energy dots with depth */}
                  <div className="absolute top-1/2 -left-2 w-3 h-3 bg-[#00D4FF] rounded-full shadow-[0_0_12px_#00D4FF,0_4px_12px_rgba(0,0,0,0.6)] z-[50]" style={{ transform: "translateZ(35px)" } as any} />
                  <div className="absolute top-1/2 -right-2 w-3 h-3 bg-[#E23636] rounded-full shadow-[0_0_12px_#E23636,0_4px_12px_rgba(0,0,0,0.6)] z-[50]" style={{ transform: "translateZ(35px)" } as any} />
                  <div className="absolute -bottom-2 left-1/2 w-3 h-3 bg-[#FFD700] rounded-full shadow-[0_0_12px_#FFD700,0_4px_12px_rgba(0,0,0,0.6)] z-[50]" style={{ transform: "translateZ(35px) translateX(-50%)" } as any} />

                  {/* Conic sweep - enhanced 3D */}
                  <motion.div 
                    className="absolute inset-[22px] rounded-full opacity-50 z-[40] pointer-events-none" 
                    style={{ 
                      background: "conic-gradient(from 0deg, transparent 0deg, rgba(0,212,255,0.6) 20deg, transparent 45deg)",
                      transform: "translateZ(55px)"
                    } as any} 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                  />

                  {/* Bottom platform shadow for floating 3D effect */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black/60 blur-[12px] rounded-[50%] -z-30" style={{ transform: "translateZ(-60px) translateX(-50%) rotateX(90deg)" } as any} />
                </motion.div>

                {/* Holo grid projection underneath */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 opacity-30 pointer-events-none" style={{ perspective: 400 }}>
                  <div className="w-full h-full bg-[linear-gradient(rgba(0,212,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.15)_1px,transparent_1px)] bg-[size:12px_12px] rounded-[50%] blur-[0.5px]" style={{ transform: "rotateX(75deg)" }} />
                </div>
              </div>

              <div className="text-center mt-2">
                <div className="font-barlow tracking-[0.2em] text-[11px] text-[#00D4FF]">HOLO-PROJECTION MK VII • 3D DEPTH ACTIVE</div>
                <div className="font-mono text-[9px] text-white/30 mt-1">Move cursor over photo • Perspective: 1200px • Non-editable • Circle frame</div>
              </div>

              <div className="mt-6 font-mono text-[11px] leading-relaxed space-y-2 text-white/70 bg-black/40 p-4 border border-white/5">
                {[
                  ["CODENAME", PERSONAL_INFO.codename],
                  ["DESIGNATION", "NET.ENG.LVL.3"],
                  ["CLEARANCE", "CYBER-ALPHA"],
                  ["LOCATION", "COLOMBO.LK + JAFFNA"],
                  ["TIMEZONE", PERSONAL_INFO.contact.utcOffset],
                  ["STATUS", "████ ACTIVE"],
                  ["VISUAL", "3D HOLO • MK VII"],
                  ["AVATAR", "profile.jpeg • VERIFIED ✓"],
                ].map(([k,v],i)=>(
                  <motion.div key={k} initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.06 }} className="flex justify-between"><span className="text-[#FFD700]/60">{k}:</span><span className={`${v?.includes('VERIFIED') || v?.includes('3D') ? 'text-[#00FFD1]' : 'text-[#00D4FF]'}`}>{v}</span></motion.div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {PERSONAL_INFO.languages.map(l=>(
                  <div key={l.name} className="text-center">
                    <div className="relative w-20 h-20 mx-auto">
                      <svg className="w-full h-full -rotate-90"><circle cx="40" cy="40" r="36" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none"/><motion.circle cx="40" cy="40" r="36" stroke={l.name==='Tamil' ? '#E23636' : '#00D4FF'} strokeWidth="4" fill="none" strokeLinecap="round" initial={{ pathLength:0 }} whileInView={{ pathLength:l.proficiency/100 }} viewport={{ once:true }} transition={{ duration:1.2 }} style={{ filter:`drop-shadow(0 0 6px ${l.name==='Tamil' ? '#E23636' : '#00D4FF'})` }} /></svg>
                      <span className="absolute inset-0 flex items-center justify-center font-bebas text-xl text-white">{l.proficiency}%</span>
                    </div>
                    <div className="font-barlow text-xs text-white mt-2 tracking-widest">{l.name.toUpperCase()}</div>
                    <div className="font-mono text-[9px] text-white/40">{l.level}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="font-barlow text-[11px] tracking-[0.2em] text-[#FFD700] mb-3">🎯 CURRENT OBJECTIVES — JAFFNA ONLY</div>
                <div className="grid grid-cols-2 gap-2">
                  {PERSONAL_INFO.currentFocus.map(o=>(
                    <div key={o} className="px-2 py-1.5 bg-[#7B00FF10] border border-[#7B00FF30] text-[10px] font-mono text-[#7B00FF] flex items-center gap-1"><span className="w-3 h-3 rounded-full border border-[#7B00FF] flex items-center justify-center text-[7px]">◎</span>{o}</div>
                  ))}
                </div>
              </div>
            </HolographicPanel>
          </div>

          {/* Right Terminal */}
          <div className="space-y-6">
            <HolographicPanel accent="#7B00FF" className="p-6 md:p-8">
              <div className="font-mono text-[10px] text-[#00FFD1] mb-4 flex items-center gap-2"><span className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse" />STARK INDUSTRIES — HOLO-TERMINAL v3.4 • AGENT BIO • 3D PROJECTOR ACTIVE</div>
              <div className="space-y-4 font-exo text-[15px] leading-relaxed text-white/80">
                <p><span className="text-[#00D4FF] font-mono text-xs">▶ AGENT PEMARAJ MANOJAN — 3D HOLO-DOSSIER</span><br/>Network & IT Administrator with hands-on experience managing enterprise infrastructure and delivering cutting-edge tech solutions. Currently operating from <span className="text-[#FFD700]">BCAS Jaffna Campus Only</span> (Assistant Lecturer role Jaffna exclusively) and Colombo District base, Sri Lanka.</p>
                <p>With a BSc (Hons) in Network Technology & Cybersecurity from Lincoln University College and active role as IT Administrator at BCAS Campus Jaffna, I architect resilient LAN/WAN infrastructures that scale.</p>
                <p>My arsenal combines <span className="text-[#FFD700]">Cisco routing mastery (88% Expert)</span>, <span className="text-[#E23636]">FortiGate defense protocols (82% Advanced)</span>, and <span className="text-[#00D4FF]">Python development (88%)</span> + <span className="text-[#61DAFB]">React.js (68% Growing)</span>.</p>
                <p className="font-mono text-[11px] text-[#FFD700] bg-[#FFD7000A] border-l-2 border-[#FFD700] pl-3 py-2">3D VISUAL NOTE: Profile image now renders as Stark holographic projection — not flat. Uses perspective 1200px + preserve-3d + translateZ depth layers + mouse tilt tracking. Non-editable locked asset at public/assets/profile.jpeg • 3D pop with beveled extrusion & dynamic lighting.</p>
              </div>
            </HolographicPanel>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon:"🌐", t:"NETWORK ADMIN", d:"LAN/WAN • VLAN • OSPF/EIGRP", color:"#00D4FF", skills:["Cisco","VLAN","VPN","Monitoring"], lvl:"88% Expert" },
                { icon:"🛡️", t:"CYBER OPS", d:"FortiGate • ACL • Threat Intel", color:"#E23636", skills:["FortiGate","Defense","ACL","IDS"], lvl:"82% Adv." },
                { icon:"⚙️", t:"SYSTEMS", d:"Win Server • Linux • AD • DNS", color:"#7B00FF", skills:["AD","DNS","GPO","Linux"], lvl:"90% Expert" },
                { icon:"🤖", t:"AUTOMATION & DEV", d:"Python • React • Netmiko", color:"#FFD700", skills:["Python","React","PowerShell","JS"], lvl:"76% Avg" },
              ].map((c,i)=>(
                <motion.div key={c.t} initial={{ opacity:0, y:20, rotateX:-20 }} whileInView={{ opacity:1, y:0, rotateX:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }} whileHover={{ y:-4, boxShadow:`0 0 30px ${c.color}30` }} className="group relative bg-[#0A0A14] border p-5 overflow-hidden cursor-pointer" style={{ borderColor:`${c.color}20` }}>
                  <div className="absolute top-0 left-0 w-full h-[2px] opacity-60 group-hover:opacity-100 transition-opacity" style={{ background:c.color }} />
                  <div className="flex items-start justify-between mb-3"><span className="text-2xl">{c.icon}</span><span className="text-[10px] font-mono px-2 py-1 border" style={{ borderColor:`${c.color}40`, color:c.color }}>{c.lvl}</span></div>
                  <div className="font-bebas text-lg tracking-widest text-white">{c.t}</div>
                  <div className="font-mono text-[10px] text-white/50 mt-1">{c.d}</div>
                  <div className="flex flex-wrap gap-1 mt-3">{c.skills.map(s=><span key={s} className="text-[9px] font-mono px-1.5 py-0.5 bg-white/5 text-white/60">{s}</span>)}</div>
                </motion.div>
              ))}
            </div>

            <div className="relative overflow-hidden bg-black border border-white/5 py-3">
              <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: ["0%","-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
                {[...PERSONAL_INFO.interests, ...PERSONAL_INFO.interests].map((it,i)=>(
                  <span key={i} className="inline-flex items-center gap-2 font-barlow tracking-[0.15em] text-xs text-white/60">[{it.label.toUpperCase()}] <span className="text-[#00D4FF]/40">•</span></span>
                ))}
              </motion.div>
              <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
