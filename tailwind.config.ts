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
        // Apple-inspired neutral palette
        primary: {
          50: "#fafafa",
          100: "#f5f5f7",
          200: "#e8e8ed",
          300: "#d2d2d7",
          400: "#b0b0b8",
          500: "#86868b",
          600: "#6e6e73",
          700: "#515154",
          800: "#3a3a3c",
          900: "#1d1d1f",
          950: "#000000",
        },
        // Apple blue accent
        accent: {
          400: "#0071e3",
          500: "#0066cc",
          600: "#004f99",
        },
        // Subtle gray for cards
        surface: {
          light: "#fbfbfd",
          DEFAULT: "#f5f5f7",
          dark: "#e8e8ed",
        },
        // Semantic colors (Apple style)
        success: "#30d158",
        warning: "#ff9f0a",
        error: "#ff3b30",
        info: "#0071e3",
      },
      fontFamily: {
        heading: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Segoe UI", "Roboto", "sans-serif"],
        body: ["-apple-system", "BlinkMacSystemFont", "SF Pro Text", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        "xl": "18px",
        "2xl": "24px",
      },
      boxShadow: {
        "soft": "0 2px 16px rgba(0, 0, 0, 0.08)",
        "medium": "0 4px 24px rgba(0, 0, 0, 0.12)",
        "large": "0 8px 32px rgba(0, 0, 0, 0.16)",
        "glow": "0 0 20px rgba(0, 113, 227, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 113, 227, 0.4)",
        "depth-1": "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        "depth-2": "0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.1)",
        "depth-3": "0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      },
      letterSpacing: {
        "tight": "-0.01em",
        "tighter": "-0.02em",
        "wider": "0.01em",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "float": "float 6s ease-in-out infinite",
        "breath": "breath 4s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        breath: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      transitionTimingFunction: {
        "apple": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "apple-in": "cubic-bezier(0.42, 0, 1, 1)",
        "apple-out": "cubic-bezier(0, 0, 0.58, 1)",
        "apple-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      },
      backgroundImage: {
        "gradient-mesh": "radial-gradient(at 0% 0%, rgba(0, 113, 227, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 113, 227, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 113, 227, 0.06) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 113, 227, 0.08) 0px, transparent 50%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

