import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../../constants/projects.data'

export const OperationsLog = () => {
  const [filter, setFilter] = useState('all')
  const [revealed, setRevealed] = useState<string|null>(null)

  const filtered = filter==='all' ? PROJECTS_DATA : PROJECTS_DATA.filter(p=>p.category===filter)

  return (
    <section id="casefiles" className="relative bg-[#050505] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-[0.03]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-[#E23636]">// SECTION 07 — CLASSIFIED OPERATIONS ARCHIVE</div>
            <h2 className="font-bebas text-[52px] md:text-[72px] leading-none tracking-wide text-white mt-2">CLASSIFIED <span className="text-[#FFD700]">OPERATIONS</span></h2>
            <div className="font-mono text-xs text-white/40 mt-2">Mission files — success rate: 100% • clearance required</div>
          </div>
          <div className="flex flex-wrap gap-2 h-fit">
            {PROJECT_CATEGORIES.map(cat=>(
              <button key={cat.id} onClick={()=>setFilter(cat.id)} className={`px-4 py-2 font-barlow text-[11px] tracking-[0.15em] border transition-all ${filter===cat.id ? 'bg-[#E23636] text-white border-[#E23636] shadow-[0_0_15px_rgba(226,54,54,0.3)]' : 'bg-white/[0.03] text-white/50 border-white/10 hover:border-white/20 hover:text-white/80'}`}>{cat.label}</button>
            ))}
          </div>
        </div>

        {/* Featured */}
        <AnimatePresence mode="popLayout">
          {filtered.filter(p=>p.featured).map(proj=>(
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:20 }}
              className="relative mb-6 bg-[#0A0A14] border border-[#00D4FF]/20 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#7B00FF]" />
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
                <div className="relative bg-black p-6 font-mono text-[11px] leading-relaxed text-white/60 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-[#0A0A14] border-b border-white/5 flex items-center gap-2 px-3 text-[9px]"><span className="w-2 h-2 bg-red-500 rounded-full" /><span className="w-2 h-2 bg-yellow-500 rounded-full" /><span className="w-2 h-2 bg-green-500 rounded-full" /><span className="ml-4 text-white/40">code_preview — Python • {proj.operationCode}</span></div>
                  <pre className="pt-8 whitespace-pre-wrap break-words"><code className="text-[#00D4FF]">{proj.codePreview}</code></pre>
                  <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,212,255,0.02)_2px,rgba(0,212,255,0.02)_4px)]" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-[#E23636] text-white text-[10px] font-mono tracking-widest">OPERATION: {proj.operationCode}</span>
                    <span className="px-2 py-1 bg-black border border-white/10 text-white/40 text-[10px] font-mono">CLASSIFICATION: {proj.classification}</span>
                    <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono">STATUS: ✓ {proj.status}</span>
                  </div>
                  <h3 className="font-bebas text-[32px] leading-none tracking-wide text-white">{proj.title.toUpperCase()}</h3>
                  <div className="font-rajdhani font-semibold text-[#00D4FF] mt-1">{proj.subtitle}</div>
                  <p className="font-exo text-sm leading-relaxed text-white/60 mt-4">{proj.description}</p>
                  <p className="font-mono text-[11px] text-white/30 mt-2">{proj.longDescription}</p>
                  <div className="mt-5">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[#FFD700] mb-2">TECHNOLOGIES DEPLOYED</div>
                    <div className="flex flex-wrap gap-2">{proj.technologies.map(t=><span key={t} className="px-2 py-1 bg-white/5 border border-white/5 text-[10px] font-mono text-white/60">[{t}]</span>)}</div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={proj.githubUrl} target="_blank" className="px-4 py-2 bg-white text-black font-barlow text-xs tracking-widest hover:bg-white/90 transition-colors">GITHUB FILES ↗</a>
                    <button className="px-4 py-2 border border-white/10 text-white/60 font-barlow text-xs tracking-widest hover:border-white/20 hover:text-white transition-colors">DOCS ↗</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="grid md:grid-cols-2 gap-5">
          <AnimatePresence>
            {filtered.filter(p=>!p.featured).map((proj,i)=>(
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity:0, scale:0.9 }}
                animate={{ opacity:1, scale:1 }}
                exit={{ opacity:0, scale:0.9 }}
                transition={{ delay:i*0.05 }}
                whileHover={{ y:-4 }}
                onMouseEnter={()=>setRevealed(proj.id)}
                onMouseLeave={()=>setRevealed(null)}
                className="group relative bg-[#0A0A14] border border-white/5 p-6 overflow-hidden hover:border-white/15 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] px-2 py-1 bg-black border border-white/10 text-white/40">OPERATION #{proj.operationCode.split('-')[1]}</span>
                  <span className="font-mono text-[9px] text-[#FFD700]/60 tracking-widest">{proj.classification}</span>
                </div>

                <div className="relative">
                  <div className={`font-bebas text-[22px] leading-tight tracking-wide text-white transition-all duration-500 ${revealed===proj.id ? '' : 'blur-[6px] select-none'}`}>{proj.title.toUpperCase()}</div>
                  {revealed!==proj.id && <div className="absolute inset-0 flex items-center"><div className="w-full h-3 bg-black" /><div className="absolute left-0 right-0 text-center font-mono text-[10px] text-white/20 tracking-[0.3em]">[ HOVER TO DECLASSIFY ]</div></div>}
                </div>

                <div className="mt-3 relative min-h-[48px]">
                  <div className={`font-exo text-[13px] leading-relaxed text-white/60 transition-all duration-700 ${revealed===proj.id ? 'clip-path-none' : ''}`} style={{ clipPath: revealed===proj.id ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }}>{proj.description}</div>
                  {revealed!==proj.id && <div className="absolute inset-0 bg-[#0A0A14] flex items-center"><div className="w-full h-8 bg-black relative overflow-hidden"><div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] animate-[scan_1.5s_linear_infinite]" /></div></div>}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0,4).map(t=><span key={t} className="px-2 py-1 bg-white/[0.04] border border-white/5 text-[9px] font-mono text-white/50">[{t}]</span>)}
                </div>

                <button className="mt-5 w-full h-8 bg-white/[0.03] border border-white/5 font-barlow text-[11px] tracking-[0.2em] text-white/60 group-hover:text-white group-hover:border-[#00D4FF]/30 transition-all">OPEN FILE →</button>

                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
