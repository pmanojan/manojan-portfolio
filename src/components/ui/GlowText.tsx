export const GlowText = ({ children, color="blue", className="" }: { children: React.ReactNode, color?: "blue"|"red"|"gold", className?: string }) => {
  const map = {
    blue: "glow-blue text-[#00D4FF]",
    red: "glow-red text-[#E23636]",
    gold: "glow-gold text-[#FFD700]"
  }
  return <span className={`${map[color]} ${className}`}>{children}</span>
}
