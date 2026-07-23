import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { PERSONAL_INFO } from '../../constants/portfolio.data'
import { ClassifiedStamp } from '../../components/ui/ClassifiedStamp'
import { useEffect, useRef } from 'react'

export const ClassifiedBriefing = () => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useSpring(x, { stiffness: 80, damping: 20 })
  const mouseY = useSpring(y, { stiffness: 80, damping: 20 })
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8])

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
    <section id="classified" className="relative bg-[#080810] py-16 md:py-24 w-full flex justify-center overflow-x-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10 pointer-events-none" />
      <ClassifiedStamp text="TOP SECRET" angle={-8} />

      {/* WIDE CENTERED — Fixed thin */}
      <div className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center z-10">
        
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center mb-10">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#00D4FF] mb-3 break-words">// SECTION 02 — OPERATIVE DOSSIER • 3D HOLO-PROJECTION • CENTERED</div>
          <h2 className="font-bebas text-[46px] sm:text-[56px] md:text-[72px] leading-[0.9] tracking-wide text-white break-words">CLASSIFIED <span className="text-[#E23636]">BRIEFING</span></h2>
          <div className="h-[2px] w-40 bg-gradient-to-r from-[#E23636] to-[#00D4FF] mt-4 mx-auto" />
        </div>

        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-8 lg:gap-10 items-start justify-center place-items-center lg:place-items-start">
          
          {/* LEFT — OLD SIZE MAINTAINED (260-300) */}
          <div className="w-full max-w-[480px] mx-auto flex flex-col items-center space-y-5">
            <div className="relative w-full bg-[#0A0A14]/90 backdrop-blur border border-[#00D4FF]/20 p-6 flex flex-col items-center overflow-visible">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />

              {/* OLD SIZE: 260-300px — NOT INCREASED — Animated Avatar */}
              <div ref={ref} className="relative w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] max-w-[80vw] max-h-[80vw] mx-auto" style={{ perspective: 800 }}>
                <motion.div
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" } as any}
                  className="relative w-full h-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.04 }}
                >
                  {/* Subtle pulse rings — Stark blue, not WhatsApp green */}
                  <motion.div className="absolute inset-[-6px] rounded-full border border-[#00D4FF]/20" animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.8, repeat: Infinity }} />
                  <motion.div className="absolute inset-[-12px] rounded-full border border-[#00D4FF]/10" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.4 }} />

                  <div className="absolute inset-0 rounded-full bg-[#00D4FF]/15 blur-[18px] -z-10" style={{ transform: "translateZ(-25px)" } as any} />
                  <div className="absolute inset-0 rounded-full border border-[#00D4FF]/20" style={{ transform: "translateZ(5px)" } as any} />
                  <motion.div className="absolute inset-[6px] rounded-full border border-dashed border-[#00D4FF]/30" style={{ transform: "translateZ(10px)" } as any} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                  
                  {/* Circle frame — OLD SIZE — Animated */}
                  <div className="absolute inset-[18px] rounded-full overflow-hidden border-2 border-[#00D4FF]/50 bg-[#0A0A14] shadow-[0_10px_25px_rgba(0,212,255,0.3)]" style={{ transform: "translateZ(20px)" } as any}>
                    <motion.img 
                      src="/assets/profile.jpeg" 
                      alt="Pemaraj Manojan"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/assets/profile.jpg" }}
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
                  </div>

                  {/* Online pulse dot — Blue, not green, no WhatsApp mention */}
                  <div className="absolute bottom-2 right-2 z-20">
                    <div className="relative w-5 h-5">
                      <motion.div className="absolute inset-0 rounded-full bg-[#00D4FF]" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
                      <div className="relative w-5 h-5 rounded-full bg-[#00D4FF] border-2 border-[#0A0A14] shadow-[0_0_10px_#00D4FF]" />
                    </div>
                  </div>

                  <div className="absolute top-1 right-3 px-2 py-0.5 bg-[#E23636] text-[8px] font-mono text-white rounded-full z-10 border border-white/20" style={{ transform: "translateZ(30px)" } as any}>ALPHA • 3D</div>
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-center text-center mt-3">
                <div className="font-barlow tracking-[0.15em] text-[11px] text-[#00D4FF] break-words">HOLO-PROJECTION MK VII • 3D DEPTH • ANIMATED</div>
                <div className="font-mono text-[8px] text-white/30 mt-1 break-all">Circle • /assets/profile.jpeg • 300px old size • Animated avatar</div>
              </div>

              <div className="mt-4 w-full font-mono text-[10px] leading-relaxed space-y-1.5 text-white/70 bg-black/40 p-3 border border-white/5">
                {[
                  ["CODENAME", "OPERATOR PM"],
                  ["DESIGNATION", "NET.ENG.LVL.3"],
                  ["CLEARANCE", "CYBER-ALPHA"],
                  ["LOCATION", "JAFFNA ONLY"],
                  ["TIMEZONE", "UTC+05:30"],
                  ["STATUS", "ACTIVE • VISIBLE"],
                  ["VISUAL", "3D HOLO • OLD SIZE"],
                  ["AVATAR", "profile.jpeg • ANIMATED"],
                ].map(([k,v])=>(
                  <div key={k} className="flex justify-between gap-2 w-full"><span className="text-[#FFD700]/60 shrink-0">{k}:</span><span className="text-[#00FFD1] text-right break-all">{v}</span></div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 w-full">
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16"><svg className="w-full h-full -rotate-90"><circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none"/><circle cx="32" cy="32" r="28" stroke="#E23636" strokeWidth="3" fill="none" strokeDasharray={`${2*Math.PI*28} ${2*Math.PI*28}`} strokeLinecap="round" /></svg><span className="absolute inset-0 flex items-center justify-center font-bebas text-lg text-white">100%</span></div>
                  <div className="font-barlow text-[9px] text-white mt-1 tracking-widest">TAMIL</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16"><svg className="w-full h-full -rotate-90"><circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none"/><circle cx="32" cy="32" r="28" stroke="#00D4FF" strokeWidth="3" fill="none" strokeDasharray={`${2*Math.PI*28*0.6} ${2*Math.PI*28}`} strokeLinecap="round" /></svg><span className="absolute inset-0 flex items-center justify-center font-bebas text-lg text-white">60%</span></div>
                  <div className="font-barlow text-[9px] text-white mt-1 tracking-widest">ENGLISH</div>
                </div>
              </div>

              <div className="mt-4 w-full">
                <div className="font-barlow text-[10px] tracking-[0.15em] text-[#FFD700] mb-2 text-center">🎯 CURRENT OBJECTIVES — JAFFNA ONLY</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {["Penetration Testing","OSCP Preparation","Cloud Security","Red Teaming"].map(o=>(
                    <div key={o} className="px-2 py-1.5 bg-[#7B00FF10] border border-[#7B00FF30] text-[9px] font-mono text-[#7B00FF] flex items-center justify-center gap-1 text-center break-words"><span>◎</span>{o}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — WIDE, CENTERED, VISIBLE */}
          <div className="w-full max-w-[900px] mx-auto lg:mx-0 flex flex-col items-center space-y-4 overflow-x-hidden">
            
            <div className="relative w-full bg-[#0A0A14]/90 backdrop-blur border border-[#7B00FF]/20 p-4 sm:p-6 md:p-7 flex flex-col items-center text-center sm:text-left sm:items-start">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#7B00FF] via-[#00D4FF] to-transparent" />
              <div className="font-mono text-[9px] sm:text-[10px] text-[#00FFD1] mb-3 flex items-center gap-2 justify-center sm:justify-start w-full break-words"><span className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse shrink-0" />STARK INDUSTRIES — HOLO-TERMINAL v3.4 • AGENT BIO • ANIMATED AVATAR • WIDE</div>
              
              <div className="space-y-3 font-exo text-[14px] sm:text-[15px] leading-relaxed text-white/85 w-full break-words text-center sm:text-left">
                <p><span className="text-[#00D4FF] font-mono text-xs font-bold">▶ AGENT PEMARAJ MANOJAN — 3D HOLO-DOSSIER</span><br/>Network & IT Administrator with hands-on experience managing enterprise infrastructure and delivering cutting-edge tech solutions. Currently operating from <span className="text-[#FFD700] font-bold">BCAS Jaffna Campus Only</span> (Assistant Lecturer role Jaffna exclusively) and Colombo District base, Sri Lanka.</p>
                <p>With a BSc (Hons) in Network Technology & Cybersecurity from Lincoln University College and active role as IT Administrator at BCAS Campus Jaffna, I architect resilient LAN/WAN infrastructures that scale.</p>
                <p>My arsenal combines <span className="text-[#FFD700]">Cisco routing mastery (88% Expert)</span>, <span className="text-[#E23636]">FortiGate defense protocols (82% Advanced)</span>, and <span className="text-[#00D4FF]">Python development (88%)</span> + <span className="text-[#61DAFB]">React.js — Entry Level (68% Growing)</span>.</p>
                <div className="font-mono text-[10px] text-[#00D4FF] bg-[#00D4FF0A] border-l-2 border-[#00D4FF] pl-3 py-2 text-left break-words">✅ OLD SIZE MAINTAINED: Avatar kept at 260-300px (not increased to 360px). Animation: subtle breathing scale 1→1.04, hover 1.04, blue pulse rings, online dot — no WhatsApp mention. Wide layout fixed thin issue (1500px max).</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-full place-items-center">
              {[
                { icon:"🌐", t:"NETWORK ADMIN", d:"LAN/WAN • VLAN • OSPF/EIGRP", color:"#00D4FF", skills:["Cisco","VLAN","VPN","Monitoring"], lvl:"88% Expert" },
                { icon:"🛡️", t:"CYBER OPS", d:"FortiGate • ACL • Threat Intel", color:"#E23636", skills:["FortiGate","Defense","ACL","IDS"], lvl:"82% Adv." },
                { icon:"⚙️", t:"SYSTEMS", d:"Win Server • Linux • AD • DNS", color:"#7B00FF", skills:["AD","DNS","GPO","Linux"], lvl:"90% Expert" },
                { icon:"🤖", t:"AUTOMATION & DEV", d:"Python • React • Netmiko", color:"#FFD700", skills:["Python","React","PowerShell","JS"], lvl:"76% Avg" },
              ].map((c)=>(
                <div key={c.t} className="group relative bg-[#0A0A14] border p-4 w-full max-w-[420px] min-w-0 flex flex-col items-center text-center sm:items-start sm:text-left" style={{ borderColor:`${c.color}30` }}>
                  <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background:c.color }} />
                  <div className="flex items-center justify-between w-full gap-2 mb-2"><span className="text-xl">{c.icon}</span><span className="text-[9px] font-mono px-2 py-1 border" style={{ borderColor:`${c.color}40`, color:c.color }}>{c.lvl}</span></div>
                  <div className="font-bebas text-[16px] tracking-widest text-white break-words w-full">{c.t}</div>
                  <div className="font-mono text-[9px] text-white/60 mt-1 break-words w-full">{c.d}</div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1 mt-2 w-full">
                    {c.skills.map(s=><span key={s} className="text-[8px] font-mono px-1.5 py-0.5 bg-white/5 text-white/70 border border-white/5">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative bg-black border border-[#00D4FF]/20 py-2.5 w-full max-w-full overflow-hidden flex justify-center">
              <motion.div className="flex gap-4 whitespace-nowrap" animate={{ x: ["0%","-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} style={{ width: "max-content" }}>
                {["BUG BOUNTY","CYBER BLOGS","CTF CHALLENGES","FITNESS","OPEN SOURCE","TECH PODCASTS"].map((label,j)=>(
                  <span key={j} className="inline-flex items-center gap-1.5 font-barlow tracking-[0.12em] text-[10px] text-[#00FFD1] shrink-0">[{label}]<span className="text-white/20">•</span></span>
                ))}
                {["BUG BOUNTY","CYBER BLOGS","CTF CHALLENGES","FITNESS","OPEN SOURCE","TECH PODCASTS"].map((label,j)=>(
                  <span key={`dup-${j}`} className="inline-flex items-center gap-1.5 font-barlow tracking-[0.12em] text-[10px] text-[#00FFD1] shrink-0">[{label}]<span className="text-white/20">•</span></span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
