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
        background: "#111111",
        
      },
    },
    fontSize: {
      'sm': ['1.4rem', '1.4'],
      'md': ['1.6rem', '1.4'],
      'lg': ['1.8rem', '1.4'],
      'xl': ['2rem', '1.2'],
      '2xl': ['2.4rem', '1.2'],
      '3xl': ['2.8rem', '1.2'],
      '4xl': ['3.2rem', '1.2'],
      '5xl': ['4rem', '1.1'],
      '6xl': ['4.8rem', '1.1'],
      '7xl': ['5.6rem', '1.1'],
      '8xl': ['6.4rem', '1.1'],
      '9xl': ['7.2rem', '1.1'],
    },
  },
  plugins: [],
} satisfies Config;
