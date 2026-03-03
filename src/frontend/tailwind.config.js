import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Cabinet Grotesk", "system-ui", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
        heading: ["Mona Sans", "system-ui", "sans-serif"],
      },
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        /* Custom semantic tokens */
        navy: {
          deep: "oklch(0.08 0.02 265)",
          mid: "oklch(0.12 0.015 255)",
          surface: "oklch(0.15 0.018 255)",
          border: "oklch(0.22 0.025 255)",
        },
        cyan: {
          DEFAULT: "oklch(0.78 0.16 200)",
          dim: "oklch(0.65 0.14 200)",
          bright: "oklch(0.88 0.12 195)",
        },
        banking: {
          bg: "#f0f4ff",
          primary: "#1e3a8a",
          accent: "#2563eb",
          light: "#eff6ff",
        },
        gambling: {
          bg: "#0f0a1a",
          primary: "#7c3aed",
          accent: "#f59e0b",
          surface: "#1a0f2e",
        },
        content: {
          bg: "#0a0a0a",
          primary: "#e50914",
          accent: "#f5c518",
          surface: "#141414",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        card: "0 4px 24px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.2)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
        glow: "0 0 20px oklch(0.78 0.16 200 / 0.35), 0 0 40px oklch(0.78 0.16 200 / 0.15)",
        "glow-sm": "0 0 10px oklch(0.78 0.16 200 / 0.3)",
        inner: "inset 0 1px 2px rgba(0,0,0,0.3)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "cyan-gradient": "linear-gradient(135deg, oklch(0.78 0.16 200), oklch(0.65 0.14 200))",
        "card-gradient": "linear-gradient(180deg, oklch(0.17 0.02 255), oklch(0.13 0.018 255))",
        "hero-gradient": "linear-gradient(135deg, oklch(0.10 0.03 265) 0%, oklch(0.14 0.025 240) 100%)",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
