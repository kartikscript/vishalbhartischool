import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:{
          DEFAULT:'#6f2349',
          100:'#bf9dae',
          200:'#9f6d86',
          300:'#7f3c5d',
          400:'#5f0b35',
          500:'#560a30',
          600:'#4c092a',
          700:"#430825"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
