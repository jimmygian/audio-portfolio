import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import ThemeSwitch from "./_components/themeSwitch";
import ThemeProvider from "./_components/themeProvider";

// FONTS
const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const monsterratRegular = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "100 200 300 400 500 600 700 800 900",
    },
  ],
  variable: "--font-monsterrat-regular",
});

const monsterratItalic = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
      weight: "100 200 300 400 500 600 700 800 900",
    },
  ],
  variable: "--font-monsterrat-italic",
});

// METADATA
export const metadata: Metadata = {
  title: "Dimitris | Audio Engineer",
  description: "Personal Portfolio",
};

// ------------------------- //

// ROOT LAYOUT JSX
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`
              relative
              // FONTS //
              ${monsterratRegular.variable} 
              ${monsterratItalic.variable} 
              ${geistSans.variable} 
              ${geistMono.variable} 
              `}
        >
          <ThemeProvider>
            <main className={`full-center`}>{children}</main>
            <ThemeSwitch />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
