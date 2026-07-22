export const MarvelFooter = () => {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,212,255,0.08),transparent_60%),radial-gradient(ellipse_at_top_right,rgba(226,54,54,0.06),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF30] to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-bebas text-4xl tracking-wider mb-4"><span className="text-[#E23636]">PM</span><span className="text-white/40">·</span><span className="text-[#00D4FF]">OPS</span></div>
            <p className="text-white/50 font-exo text-sm leading-relaxed max-w-[320px]">Architecting resilient networks & defending digital ecosystems. Your One-Stop Tech Solutions Partner from Colombo, LK.</p>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-mono">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-green-400 tracking-widest">AVAILABLE FOR MISSIONS</span>
              <span className="text-white/30">|</span>
              <span className="text-white/50">UTC+05:30</span>
            </div>
          </div>

          <div>
            <div className="font-barlow tracking-[0.2em] text-[11px] text-[#FFD700] mb-4">NAVIGATION — OPS</div>
            <div className="grid grid-cols-2 gap-2 text-sm font-barlow">
              {['HOME BASE','CLASSIFIED','OPERATIONS','MISSION LOG','ARSENAL','CREDENTIALS','CASE FILES','COMMAND'].map(l=>(
                <a key={l} href={`#${l.toLowerCase().split(' ')[0]}`} className="text-white/50 hover:text-[#00D4FF] transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-barlow tracking-[0.2em] text-[11px] text-[#FFD700] mb-4">COMMUNICATIONS</div>
            <div className="space-y-2 text-sm font-mono text-white/60">
              <div>📧 manojmanojan1392@gmail.com</div>
              <div>📞 +94 76 288 3931</div>
              <div className="flex gap-3 mt-4">
                {[
                  {l:'IN', h:'https://www.linkedin.com/in/pemarajmanojan'},
                  {l:'GH', h:'https://github.com/pmanojan'},
                  {l:'CR', h:'https://www.credly.com/users/pemaraj-manojan'},
                  {l:'UD', h:'https://www.udemy.com/user/pemaraj-manojan-4/'},
                ].map(s=>(
                  <a key={s.l} href={s.h} target="_blank" className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors">{s.l}</a>
                ))}
              </div>
              <div className="text-[10px] text-white/30 mt-3">Last Intel Update: May 2026</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-white/30">
          <div>© 2026 Pemaraj Manojan — All Operations Reserved</div>
          <div className="flex items-center gap-2">Engineered with <span className="text-[#E23636]">React.js</span> & ❤️ for Cybersecurity</div>
          <div className="px-3 py-1 bg-[#00D4FF]/5 border border-[#00D4FF]/20 text-[#00D4FF] tracking-widest">AUTHORIZED PERSONNEL ONLY</div>
        </div>
      </div>
    </footer>
  )
}
