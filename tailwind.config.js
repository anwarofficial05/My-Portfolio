/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: "#060913",
          surface: "#0a0f24",
          elevated: "#0f1738",
          card: "rgba(13, 20, 44, 0.6)",
          cardHover: "rgba(22, 33, 72, 0.75)",
          glass: "rgba(10, 15, 36, 0.7)",
          border: "rgba(255, 255, 255, 0.08)",
          borderMedium: "rgba(255, 255, 255, 0.15)",
        },
        brand: {
          purple: "#a855f7",
          violet: "#8b5cf6",
          indigo: "#6366f1",
          cyan: "#38bdf8",
          blue: "#3b82f6",
          emerald: "#10b981",
          amber: "#f59e0b",
          pink: "#ec4899",
        }
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'glow-purple': '0 0 35px rgba(168, 85, 247, 0.25)',
        'glow-cyan': '0 0 35px rgba(56, 189, 248, 0.25)',
        'glow-emerald': '0 0 35px rgba(16, 185, 129, 0.25)',
        'glow-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
