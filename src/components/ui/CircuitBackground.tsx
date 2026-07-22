export const CircuitBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 circuit-bg opacity-50" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
    {/* floating dots */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-[#00D4FF] rounded-full opacity-40 animate-pulse"
          style={{
            left: `${(i*17)%100}%`,
            top: `${(i*23)%100}%`,
            animationDelay: `${i*0.5}s`,
            boxShadow: "0 0 10px #00D4FF"
          }}
        />
      ))}
    </div>
  </div>
)
