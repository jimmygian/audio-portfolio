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
        "landscape-sm": {
          raw: "(orientation: landscape) and (max-width: 1000px)",
        }, // max-width 1024px for tablet/phone landscape
      },
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
    },
  },
  plugins: [],
};
export default config;
