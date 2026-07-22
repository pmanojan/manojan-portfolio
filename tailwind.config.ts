import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marvel: {
          red: "#E23636",
          blue: "#00D4FF",
          gold: "#FFD700",
          silver: "#C0C0C0",
          black: "#050505",
          cosmic: "#0A0A14",
          purple: "#7B00FF",
          teal: "#00FFD1",
        }
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin-reverse 6s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' }
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF' },
          '100%': { textShadow: '0 0 20px #00D4FF, 0 0 40px #00D4FF, 0 0 60px #00D4FF' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      }
    },
  },
  plugins: [],
} satisfies Config
