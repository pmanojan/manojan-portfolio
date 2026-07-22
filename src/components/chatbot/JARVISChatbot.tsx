import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePortfolioStore } from '../../store/usePortfolioStore'
import { JARVIS_FALLBACKS, JARVIS_QUICK_QUERIES } from '../../constants/chatbot.prompts'

type Msg = { role:'user'|'jarvis', content:string, time:string }

export const JARVISChatbot = () => {
  const { isJarvisOpen, setJarvisOpen } = usePortfolioStore()
  const [messages, setMessages] = useState<Msg[]>([
    { role:'jarvis', content: JARVIS_FALLBACKS.welcome, time: new Date().toLocaleTimeString() }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{ listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior:'smooth' }) }, [messages, typing])

  const getFallbackResponse = (text:string):string => {
    const low = text.toLowerCase()
    if(low.includes('skill')) return JARVIS_FALLBACKS.skills
    if(low.includes('experi') || low.includes('mission') || low.includes('work')) return JARVIS_FALLBACKS.experience
    if(low.includes('contact') || low.includes('email') || low.includes('phone')) return JARVIS_FALLBACKS.contact
    if(low.includes('cert') || low.includes('credly') || low.includes('ccna')) return JARVIS_FALLBACKS.certifications
    if(low.includes('service') || low.includes('offer')) return JARVIS_FALLBACKS.services
    if(low.includes('avail') || low.includes('hire') || low.includes('job')) return JARVIS_FALLBACKS.availability
    if(low.includes('where') || low.includes('location') || low.includes('colombo')) return JARVIS_FALLBACKS.location
    if(low.includes('rate') || low.includes('budget') || low.includes('price')) return JARVIS_FALLBACKS.rates
    return JARVIS_FALLBACKS.default
  }

  const send = (text?:string)=>{
    const t = text || input
    if(!t.trim()) return
    const userMsg: Msg = { role:'user', content:t, time: new Date().toLocaleTimeString() }
    setMessages(m=>[...m, userMsg])
    setInput('')
    setTyping(true)

    // simulate streaming typewriter
    setTimeout(()=>{
      const resp = getFallbackResponse(t)
      setTyping(false)
      const jarvisMsg: Msg = { role:'jarvis', content: resp, time: new Date().toLocaleTimeString() }
      setMessages(m=>[...m, jarvisMsg])
    }, 900)
  }

  if(!isJarvisOpen) return (
    <motion.button
      initial={{ scale:0 }}
      animate={{ scale:1 }}
      whileHover={{ scale:1.08 }}
      whileTap={{ scale:0.95 }}
      onClick={()=>setJarvisOpen(true)}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0A0A14] border border-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.5)] flex items-center justify-center group"
    >
      <div className="absolute inset-0 rounded-full border border-[#00D4FF] animate-ping opacity-30" />
      <span className="text-xl">🤖</span>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E23636] rounded-full animate-pulse border border-black" />
      <span className="absolute right-[60px] top-1/2 -translate-y-1/2 px-3 py-1 bg-black border border-white/10 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Ask J.A.R.V.I.S.</span>
    </motion.button>
  )

  return (
    <motion.div
      initial={{ opacity:0, y:50, scale:0.9 }}
      animate={{ opacity:1, y:0, scale:1 }}
      exit={{ opacity:0, y:50, scale:0.9 }}
      className="fixed bottom-6 right-6 z-50 w-[380px] md:w-[400px] h-[560px] bg-[#050510] border border-[#00D4FF]/30 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,212,255,0.2)] flex flex-col overflow-hidden"
      style={{ clipPath:"polygon(4% 0, 96% 0, 100% 4%, 100% 96%, 96% 100%, 4% 100%, 0 96%, 0 4%)" }}
    >
      {/* header */}
      <div className="relative bg-[#0A0A14] border-b border-[#00D4FF]/20 p-4 flex justify-between items-start">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#E23636]" />
        <div>
          <div className="font-bebas text-[18px] tracking-widest text-white flex items-center gap-2"><span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse shadow-[0_0_10px_#00D4FF]" />J.A.R.V.I.S.</div>
          <div className="font-mono text-[9px] text-white/40 tracking-widest">Just A Rather Very Intelligent System • Network Intelligence Division</div>
          <div className="flex items-center gap-2 mt-1"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /><span className="font-mono text-[10px] text-green-400 tracking-widest">ONLINE — READY TO BRIEF</span></div>
        </div>
        <div className="flex gap-2">
          <button onClick={()=>setJarvisOpen(false)} className="w-7 h-7 bg-white/5 border border-white/10 text-white/50 hover:text-white flex items-center justify-center">—</button>
          <button onClick={()=>setJarvisOpen(false)} className="w-7 h-7 bg-[#E23636]/10 border border-[#E23636]/20 text-[#E23636] hover:bg-[#E23636] hover:text-white flex items-center justify-center">✕</button>
        </div>
      </div>

      {/* messages */}
      <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050505] scanline">
        {messages.map((m,i)=>(
          <motion.div key={i} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} className={`flex ${m.role==='user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 font-exo text-[13px] leading-relaxed border ${m.role==='user' ? 'bg-[#E23636]/10 border-[#E23636]/30 text-white' : 'bg-[#00D4FF]/5 border-[#00D4FF]/20 text-white/80'}`} style={{ clipPath: m.role==='user' ? "polygon(6% 0, 100% 0, 100% 94%, 94% 100%, 0 100%, 0 6%)" : "polygon(0 0, 94% 0, 100% 6%, 100% 100%, 6% 100%, 0 94%)" }}>
              <div className="font-mono text-[9px] opacity-50 mb-1">{m.role==='user' ? 'OPERATIVE' : 'J.A.R.V.I.S.'} • {m.time}</div>
              {m.content}
            </div>
          </motion.div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-[#00D4FF]/5 border border-[#00D4FF]/20 p-3 flex gap-1">
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-bounce" style={{ animationDelay:'0.1s' }} />
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-bounce" style={{ animationDelay:'0.2s' }} />
            </div>
          </div>
        )}
      </div>

      {/* quick queries */}
      <div className="p-2 bg-[#0A0A14] border-t border-white/5 flex flex-wrap gap-1.5 max-h-[72px] overflow-y-auto">
        {JARVIS_QUICK_QUERIES.map(q=>(
          <button key={q.id} onClick={()=>send(q.trigger)} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-colors">{q.label}</button>
        ))}
      </div>

      {/* input */}
      <div className="p-3 bg-black border-t border-[#00D4FF]/10 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} placeholder="Type your question — clearance alpha..." className="flex-1 h-10 bg-[#0A0A14] border border-white/10 px-3 font-mono text-sm text-white placeholder:text-white/20 focus:border-[#00D4FF]/30 focus:outline-none" />
        <button onClick={()=>send()} className="w-10 h-10 bg-[#00D4FF] text-black font-bold hover:bg-[#00D4FF]/90 flex items-center justify-center">▶</button>
      </div>
    </motion.div>
  )
}
