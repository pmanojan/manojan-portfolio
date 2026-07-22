import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const ArcReactorButton = ({ children, variant='primary', size='md', className, onClick, type='button', disabled }: Props) => {
  const base = "relative inline-flex items-center justify-center font-rajdhani font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 group"
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  }
  const variants = {
    primary: "bg-[#E23636] text-white border border-[#E23636] hover:bg-[#ff4040] hover:shadow-[0_0_20px_rgba(226,54,54,0.6)]",
    ghost: "bg-transparent text-[#00D4FF] border border-[#00D4FF] hover:bg-[#00D4FF15] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]",
    gold: "bg-[#FFD700] text-black border border-[#FFD700] hover:bg-[#FFEA00] hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, sizes[size], variants[variant], "clip-path-hex", className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={{ clipPath: "polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%)" }}
    >
      <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-white/10 to-transparent transition-transform duration-300" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="absolute -inset-[1px] border border-white/20 animate-pulse" style={{ clipPath: "polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%)" }} />
      </span>
    </motion.button>
  )
}
