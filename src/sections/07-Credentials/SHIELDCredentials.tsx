import { motion } from 'framer-motion'
import { CERTIFICATIONS_DATA } from '../../constants/certifications.data'

export const SHIELDCredentials = () => {
  return (
    <section id="credentials" className="relative bg-[#080810] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,212,255,0.10),transparent_50%)]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-[#FFD700]">SECTION 06 — SHIELD CLEARANCE DATABASE</div>
            <h2 className="font-bebas text-[52px] md:text-[72px] leading-none tracking-wide text-white mt-2">CLEARANCE <span className="text-[#00D4FF]">CREDENTIALS</span></h2>
            <div className="font-mono text-xs text-white/40 mt-2">Verified by the highest authorities • 100% authenticated</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#FFD700]/20 flex items-center justify-center animate-spin-slow"><div className="w-8 h-8 rounded-full border border-[#FFD700]/40 flex items-center justify-center">🛡️</div></div>
            <div className="font-mono text-[10px] text-white/40 leading-tight"><div className="text-[#FFD700]">SHIELD EMBLEM</div><div>ROTATING VERIFICATION</div></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS_DATA.map((cert,i)=>(
            <motion.div
              key={cert.id}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:i*0.07 }}
              whileHover={{ y:-6 }}
              className="group relative bg-[#0A0A14] border border-white/5 overflow-hidden hover:border-white/15 transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"><div className="absolute inset-0 bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.08),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms]" /></div>

              <div className="relative p-[1px]" style={{ background:`linear-gradient(90deg, ${cert.color}00, ${cert.color}60, ${cert.color}00)` }}>
                <div className="bg-[#0A0A14] p-5">
                  <div className="flex justify-between items-start mb-5">
                    <div className="px-2 py-1 bg-black border border-white/10 font-mono text-[9px] text-white/40 tracking-widest">SHIELD CERTIFICATION DIVISION</div>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background:cert.color, boxShadow:`0 0 8px ${cert.color}` }} />
                  </div>

                  <div className="w-20 h-20 mx-auto relative mb-4">
                    <div className="absolute inset-0 rounded-full border border-dashed" style={{ borderColor:`${cert.color}30` }} />
                    <div className="absolute inset-2 rounded-full flex items-center justify-center bg-black border" style={{ borderColor:`${cert.color}40`, boxShadow:`0 0 20px ${cert.color}20` }}>
                      <span className="text-2xl">{cert.issuerLogo==='Cisco' ? '🌐' : cert.issuerLogo==='Fortinet' ? '🛡️' : cert.issuer==='PECB' ? '📜' : '💻'}</span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[8px] font-mono text-white whitespace-nowrap" style={{ background:cert.color }}>{cert.category}</div>
                  </div>

                  <h3 className="font-bebas text-[22px] leading-tight tracking-wide text-white text-center">{cert.name}</h3>
                  <div className="font-mono text-[10px] text-white/40 text-center mt-1 leading-tight min-h-[28px]">{cert.fullName}</div>

                  <div className="mt-4 space-y-2 font-mono text-[10px] bg-black/40 border border-white/5 p-3">
                    <div className="flex justify-between"><span className="text-white/30">ISSUING AUTHORITY</span><span style={{ color:cert.color }}>{cert.issuer.toUpperCase()}</span></div>
                    <div className="flex justify-between"><span className="text-white/30">CLEARANCE TYPE</span><span className="text-white">{cert.clearanceLevel}</span></div>
                    <div className="flex justify-between"><span className="text-white/30">VERIFICATION</span><span className="text-green-400">✓ CONFIRMED</span></div>
                    <div className="flex justify-between"><span className="text-white/30">DATE</span><span className="text-white/60">{cert.date}</span></div>
                  </div>

                  <a href={cert.verifyUrl} target="_blank" className="mt-4 w-full h-9 flex items-center justify-center gap-2 border font-barlow text-[11px] tracking-[0.15em] transition-all hover:text-white" style={{ borderColor:`${cert.color}60`, color:cert.color }}>
                    VERIFY CLEARANCE <span>↗</span>
                  </a>

                  <div className="mt-3 h-[2px] w-full" style={{ background:cert.color }} />
                  <div className="text-center font-mono text-[8px] tracking-[0.2em] text-white/20 mt-1">AUTHORIZED PERSONNEL ONLY</div>
                </div>
              </div>

              {/* hologram shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 p-4 bg-[#0A0A14] border border-white/5 font-mono text-[11px]">
          <div className="flex items-center gap-3"><span className="text-[#E23636]">●</span><span className="text-white">{CERTIFICATIONS_DATA.length} CERTIFICATIONS</span><span className="text-white/20">•</span><span className="text-white/60">3 ISSUERS • 100% VERIFIED</span></div>
          <div className="text-white/40">Cisco (4) • Fortinet (1) • PECB (1) • Udemy (1) • Cyber (1)</div>
          <div className="text-right text-[#FFD700] tracking-widest">SHIELD DATABASE — SYNCED ✓</div>
        </div>
      </div>
    </section>
  )
}
