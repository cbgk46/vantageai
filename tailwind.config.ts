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
        // Primary - Deep Slate
        primary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Accent - Warm Coral/Peach
        accent: {
          400: "#f87171",
          500: "#fb923c",
          600: "#fbbf24",
        },
        // Secondary - Cool Teal
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        // Semantic
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      fontFamily: {
        heading: ["Raleway", "Outfit", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "xl": "12px",
      },
      boxShadow: {
        "soft": "0 4px 12px rgba(0, 0, 0, 0.1)",
        "medium": "0 8px 20px rgba(248, 113, 113, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

