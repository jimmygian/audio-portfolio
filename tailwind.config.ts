import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        monsterratRegular: ["var(--font-monsterrat-regular)"],
        monsterratItalic: ["var(--font-monsterrat-italic)"],
      },
      screens: {
        'landscape-sm': { 'raw': '(orientation: landscape) and (max-width: 1000px)' },
        'xs': '380px',
      }
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    }
  },
  variants: {
    extend: {
      backgroundColor: ['xs'], 
      textColor: ['xs'],
      fontSize: ['xs'],
      lineHeight: ['xs'],
      paddingEnd: ['xs'],
      // ... add other variants as needed
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
