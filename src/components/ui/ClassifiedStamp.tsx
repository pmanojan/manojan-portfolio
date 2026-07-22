import { motion } from 'framer-motion'

export const ClassifiedStamp = ({ text="CLASSIFIED", angle=-12, color="#E23636" }: { text?: string, angle?: number, color?: string }) => (
  <motion.div
    initial={{ scale: 3, opacity: 0, rotate: angle - 10 }}
    animate={{ scale: 1, opacity: 0.15, rotate: angle }}
    transition={{ type: "spring", damping: 12, stiffness: 100 }}
    className="absolute pointer-events-none select-none font-bebas text-6xl md:text-8xl tracking-widest border-4 px-8 py-2"
    style={{ borderColor: color, color, transform: `rotate(${angle}deg)` }}
  >
    {text}
  </motion.div>
)
