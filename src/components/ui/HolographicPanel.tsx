import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export const HolographicPanel = ({ children, className, accent="#00D4FF", glow=false }: { children: React.ReactNode, className?: string, accent?: string, glow?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative bg-[#0A0A14]/80 backdrop-blur-xl border overflow-hidden scanline",
        glow ? "shadow-[0_0_30px_rgba(0,212,255,0.15)]" : "",
        className
      )}
      style={{ 
        borderColor: `${accent}40`,
        boxShadow: glow ? `0 0 30px ${accent}20, inset 0 0 20px ${accent}05` : `inset 0 0 20px ${accent}05`
      }}
    >
      <div className="hud-corner tl" style={{ borderColor: accent }} />
      <div className="hud-corner tr" style={{ borderColor: accent }} />
      <div className="hud-corner bl" style={{ borderColor: accent }} />
      <div className="hud-corner br" style={{ borderColor: accent }} />
      <div className="absolute top-0 left-0 h-[1px] w-full opacity-60" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
      {children}
    </motion.div>
  )
}
