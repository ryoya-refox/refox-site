import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#1a0d2e",
        "bg-sky-top": "#3d1260",
        "bg-sky-mid": "#2a0d4a",
        "neon-cyan": "#00ffd2",
        "neon-magenta": "#ff2d78",
        "neon-purple": "#d070ff",
        "neon-amber": "#ffd200",
        "neon-green": "#a0ff00",
        "neon-lime": "#39ff14",
        "text-primary": "#f0eaff",
      },
      fontFamily: {
        zen: ["var(--font-zen)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        noto: ["var(--font-noto)", "sans-serif"],
      },
      animation: {
        scanline: "scanline 4s linear infinite",
        flicker: "flicker 8s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "border-pulse": "borderPulse 2s ease-in-out infinite",
        "card-scanline": "cardScanline 3s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "8%": { opacity: "0.85" },
          "9%": { opacity: "1" },
          "42%": { opacity: "1" },
          "43%": { opacity: "0.7" },
          "44%": { opacity: "1" },
          "68%": { opacity: "1" },
          "70%": { opacity: "0.6" },
          "72%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": {
            textShadow:
              "0 0 8px #00ffd2, 0 0 20px rgba(0,255,210,0.5), 0 0 40px rgba(0,255,210,0.2)",
          },
          "50%": {
            textShadow:
              "0 0 12px #00ffd2, 0 0 30px rgba(0,255,210,0.8), 0 0 60px rgba(0,255,210,0.4)",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        neonPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        borderPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        cardScanline: {
          "0%": { top: "-10%" },
          "100%": { top: "110%" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 70% 0%, rgba(255,45,120,0.18) 0%, transparent 50%), radial-gradient(ellipse at 20% 0%, rgba(160,80,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0,200,255,0.08) 0%, transparent 50%), linear-gradient(180deg, #3d1260 0%, #2a0d4a 40%, #1a0d2e 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
