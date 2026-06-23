import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8edf5",
          100: "#c5d0e6",
          200: "#9fb0d5",
          300: "#7890c4",
          400: "#5a77b8",
          500: "#3c5eac",
          600: "#2d4a8a",
          700: "#1e3468",
          800: "#122047",
          900: "#0a1628",
          950: "#060d1a",
        },
        cyber: {
          50: "#e0f9ff",
          100: "#b3f0ff",
          200: "#80e6ff",
          300: "#4ddcff",
          400: "#26d4ff",
          500: "#00ccff",
          600: "#00a3cc",
          700: "#007a99",
          800: "#005266",
          900: "#002933",
        },
        accent: {
          50: "#e8f4fd",
          100: "#c5e3fa",
          200: "#9fd0f7",
          300: "#74bcf3",
          400: "#52acf0",
          500: "#2f9ced",
          600: "#1a7ec4",
          700: "#0f609a",
          800: "#084371",
          900: "#032748",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radar-gradient":
          "radial-gradient(ellipse at center, rgba(0, 204, 255, 0.08) 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(135deg, #060d1a 0%, #0a1628 40%, #0f2040 70%, #0a1628 100%)",
        "section-gradient":
          "linear-gradient(180deg, #0a1628 0%, #0d1e38 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "cyber-sm": "0 2px 8px rgba(0, 204, 255, 0.15)",
        "cyber-md": "0 4px 20px rgba(0, 204, 255, 0.2)",
        "cyber-lg": "0 8px 40px rgba(0, 204, 255, 0.25)",
        "navy-sm": "0 2px 8px rgba(6, 13, 26, 0.4)",
        "navy-md": "0 4px 20px rgba(6, 13, 26, 0.5)",
        "navy-lg": "0 8px 40px rgba(6, 13, 26, 0.6)",
        card: "0 4px 24px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;