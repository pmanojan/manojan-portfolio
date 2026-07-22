import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '../../constants/portfolio.data'
import { ArcReactorButton } from '../../components/ui/ArcReactorButton'
import { sendMissionRequest, initEmailJS } from '../../utils/emailService'

export const CommandCenter = () => {
  const [time, setTime] = useState(new Date())
  const [form, setForm] = useState({ name:'', email:'', subject:'Job Opportunity', budget:'$1K - $5K / LKR 300K - 1.5M', message:'' })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [copied, setCopied] = useState<string|null>(null)

  useEffect(()=>{
    const id = setInterval(()=> setTime(new Date()), 1000)
    initEmailJS()
    return ()=> clearInterval(id)
  }, [])

  const colomboTime = new Date().toLocaleTimeString('en-US', { timeZone:'Asia/Colombo', hour12:false })

  const copy = (text:string, id:string)=>{
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(()=>setCopied(null), 2000)
  }

  const submit = async (e: React.FormEvent)=>{
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res: any = await sendMissionRequest(form)
      if (res.mode === 'mailto' && res.mailtoUrl) {
        // Open mail client with pre-filled MCU dossier (service-id-only mode)
        window.location.href = res.mailtoUrl
        setStatus('success')
      } else {
        setStatus('success')
      }
      setForm({ name:'', email:'', subject:'Job Opportunity', budget:'$1K - $5K / LKR 300K - 1.5M', message:'' })
      setTimeout(()=> setStatus('idle'), 6000)
    } catch (err: any) {
      console.error(err)
      setStatus('error')
      setErrorMsg(err?.message || 'Transmission failed — service_h9ge2zn configured, public key missing (using mailto fallback)')
      setTimeout(()=> setStatus('idle'), 7000)
    }
  }

  return (
    <section id="command" className="relative bg-[#050505] py-20 md:py-28 overflow-hidden">
      {/* world map faint */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M150 100 Q200 80 250 100 T350 100' stroke='white' fill='none'/%3E%3C/svg%3E")` }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(226,54,54,0.10),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(0,212,255,0.08),transparent_50%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] font-mono text-[10px] tracking-[0.2em]"><span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" />COMMAND CENTER — ACTIVE & READY • OPERATOR ONLINE — {PERSONAL_INFO.contact.utcOffset}</div>
          <h2 className="font-bebas text-[52px] md:text-[72px] leading-none tracking-wide text-white mt-6">DISPATCH A <span className="text-[#E23636]">MISSION</span></h2>
          <p className="font-exo text-white/40 mt-2">Secure channel — response within 24H • Encrypted transmission</p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          {/* Left contact */}
          <div className="space-y-6">
            <div className="bg-[#0A0A14] border border-white/5 overflow-hidden">
              <div className="p-4 border-b border-white/5 flex justify-between items-center">
                <span className="font-barlow tracking-[0.2em] text-[11px] text-[#FFD700]">DIRECT CHANNELS</span>
                <span className="font-mono text-[10px] text-white/30">[ SECURED ]</span>
              </div>
              {[
                { icon:'📍', label:'COORDINATES', value:`${PERSONAL_INFO.location.city}, ${PERSONAL_INFO.location.region}, LK`, action:null },
                { icon:'📡', label:'SECURE EMAIL', value: PERSONAL_INFO.contact.email, id:'email', action:()=>copy(PERSONAL_INFO.contact.email,'email') },
                { icon:'📞', label:'COMM CHANNEL', value: PERSONAL_INFO.contact.phoneFormatted, id:'phone', action:()=>copy(PERSONAL_INFO.contact.phoneFormatted,'phone') },
                { icon:'💼', label:'LINKEDIN NETWORK', value:'/in/pemarajmanojan', action:()=>window.open(PERSONAL_INFO.social.linkedin,'_blank') },
                { icon:'💻', label:'GITHUB REPOSITORY', value:'/pmanojan', action:()=>window.open(PERSONAL_INFO.social.github,'_blank') },
              ].map((c)=>(
                <div key={c.label} className="p-4 border-b border-white/[0.03] flex justify-between items-center hover:bg-white/[0.02] transition-colors group">
                  <div className="flex gap-3">
                    <span>{c.icon}</span>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] text-white/30">{c.label}</div>
                      <div className="font-mono text-sm text-white/80 mt-0.5">{c.value}</div>
                    </div>
                  </div>
                  {c.action && <button onClick={c.action} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 hover:text-white hover:border-[#00D4FF]/30 transition-colors">{copied===c.id ? '✓ COPIED' : c.id ? 'COPY' : '↗ OPEN'}</button>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0A0A14] border border-white/5 p-4">
                <div className="font-mono text-[10px] text-[#00D4FF]">🕐 OPERATOR LOCAL TIME</div>
                <div className="font-mono text-xs text-white/50 mt-1">Asia/Colombo UTC+05:30</div>
                <div className="font-bebas text-2xl text-white tracking-widest mt-2">{colomboTime}</div>
                <div className="text-[10px] font-mono text-white/20 mt-1">{time.toLocaleDateString()}</div>
                <div className="mt-3 h-[1px] bg-gradient-to-r from-[#00D4FF]/50 to-transparent" />
              </div>
              <div className="bg-[#0A0A14] border border-white/5 p-4">
                <div className="font-mono text-[10px] text-[#FFD700]">AVAILABILITY MATRIX</div>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {[
                    {k:'Full-time', v:true},
                    {k:'Part-time', v:true},
                    {k:'Contract', v:true},
                    {k:'Remote', v:true},
                  ].map(a=>(
                    <div key={a.k} className="flex items-center gap-1.5 text-[11px] font-mono"><span className={`w-3 h-3 rounded-full flex items-center justify-center text-[8px] ${a.v ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-white/5'}`}>{a.v?'✓':''}</span><span className="text-white/60">{a.k}</span></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {[
                {l:'LI', url: PERSONAL_INFO.social.linkedin},
                {l:'GH', url: PERSONAL_INFO.social.github},
                {l:'CR', url: PERSONAL_INFO.social.credly},
                {l:'UD', url: PERSONAL_INFO.social.udemy},
              ].map(s=>(
                <a key={s.l} href={s.url} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-white/50 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors" style={{ clipPath:"polygon(30% 0, 70% 0, 100% 50%, 70% 100%, 30% 100%, 0 50%)" }}>{s.l}</a>
              ))}
              <div className="ml-auto font-mono text-[10px] text-white/20 flex items-center">Beacon: Colombo [6.9271,79.8612] • pulsing</div>
            </div>

            {/* pulsing map dot */}
            <div className="relative h-20 bg-black border border-white/5 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(226,54,54,0.15),transparent_60%)]" />
              <div className="relative">
                <div className="w-3 h-3 bg-[#E23636] rounded-full shadow-[0_0_15px_#E23636] animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-[#E23636] rounded-full animate-ping opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#E23636]/30 to-transparent" />
              </div>
              <div className="absolute bottom-1 left-2 font-mono text-[8px] text-white/20">COLOMBO BEACON • ACTIVE • LINE SECURED TO GLOBAL NODES</div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-[#0A0A14] border border-[#00D4FF]/10 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E23636] via-[#00D4FF] to-[#FFD700]" />
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#00D4FF] mb-6">SHIELD DISPATCH FORM — CLASSIFIED • FILL TO TRANSMIT</div>

            <form onSubmit={submit} className="space-y-5">
              {[
                { label:'AGENT IDENTIFICATION', name:'name', type:'text', placeholder:'Your full name / designation', required:true },
                { label:'SECURE COMM CHANNEL', name:'email', type:'email', placeholder:'your.email@organization.com', required:true },
              ].map(field=>(
                <div key={field.name} className="relative">
                  <label className="font-barlow tracking-[0.15em] text-[11px] text-[#FFD700] mb-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    required={field.required}
                    value={(form as any)[field.name]}
                    onChange={e=>setForm(f=>({...f, [field.name]:e.target.value}))}
                    placeholder={field.placeholder}
                    className="w-full h-11 bg-black/60 border border-white/10 px-4 font-mono text-sm text-white placeholder:text-white/20 focus:border-[#00D4FF]/50 focus:outline-none transition-colors"
                  />
                </div>
              ))}

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-barlow tracking-[0.15em] text-[11px] text-[#FFD700] mb-2 block">MISSION CLASSIFICATION</label>
                  <select value={form.subject} onChange={e=>setForm(f=>({...f, subject:e.target.value}))} className="w-full h-11 bg-black/60 border border-white/10 px-4 font-mono text-sm text-white focus:border-[#00D4FF]/50 focus:outline-none">
                    {["Job Opportunity","Service Inquiry","Collaboration","Consulting","Education","Other"].map(o=><option key={o} className="bg-black">{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-barlow tracking-[0.15em] text-[11px] text-[#FFD700] mb-2 block">OPERATION BUDGET — DUAL CURRENCY (LKR & $)</label>
                  <select value={form.budget} onChange={e=>setForm(f=>({...f, budget:e.target.value}))} className="w-full h-11 bg-black/60 border border-white/10 px-4 font-mono text-sm text-white focus:border-[#00D4FF]/50 focus:outline-none">
                    {[
                      "< $500 / < LKR 150,000",
                      "$500 - $1K / LKR 150K - 300K",
                      "$1K - $5K / LKR 300K - 1.5M",
                      "$5K+ / LKR 1.5M+",
                      "LKR 50K - 100K / $150 - $300",
                      "LKR 100K - 250K / $300 - $750",
                      "Let's Discuss — LKR / $ Flexible"
                    ].map(o=><option key={o} className="bg-black">{o}</option>)}
                  </select>
                  <div className="font-mono text-[9px] text-white/30 mt-1">Supports both LKR (Sri Lankan) and USD — select range that fits your op</div>
                </div>
              </div>

              <div>
                <label className="font-barlow tracking-[0.15em] text-[11px] text-[#FFD700] mb-2 block">MISSION BRIEFING</label>
                <textarea value={form.message} onChange={e=>setForm(f=>({...f, message:e.target.value}))} required rows={5} placeholder="Detail your operation, timeline, and objectives..." className="w-full bg-black/60 border border-white/10 p-4 font-mono text-sm text-white placeholder:text-white/20 focus:border-[#00D4FF]/50 focus:outline-none resize-none" />
              </div>

              {/* honeypot */}
              <input type="text" name="company" className="hidden" />

              <ArcReactorButton type="submit" variant="primary" size="lg" className="w-full" disabled={status==='sending'}>
                {status==='idle' && '⚡ TRANSMIT MISSION REQUEST'}
                {status==='sending' && '◉ TRANSMITTING via service_h9ge2zn...'}
                {status==='success' && '✓ MISSION RECEIVED — DISPATCHED'}
                {status==='error' && '⚠️ TRANSMISSION FAILED — RETRY'}
              </ArcReactorButton>

              {status==='success' && <div className="p-3 bg-green-500/10 border border-green-500/20 font-mono text-xs text-green-400 text-center">✓ Transmission logged — EmailJS Service: service_h9ge2zn (ID-only mode) — Mail client opened with pre-filled dossier. You will receive via manojmanojan1392@gmail.com. Operator will respond within 24H.</div>}
              {status==='error' && <div className="p-3 bg-red-500/10 border border-red-500/20 font-mono text-xs text-red-400 text-center">⚠️ {errorMsg}</div>}
              <div className="font-mono text-[9px] text-white/20 text-center mt-2">EmailJS Service: service_h9ge2zn • Mode: Service-ID-Only • No Public Key Required • Mailto Fallback Active • SHIELD secured</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
