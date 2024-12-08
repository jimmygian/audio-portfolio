import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
// import Navbar from "@/app/_components/navbar";

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
  src: [{
    path: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
    weight: "100 200 300 400 500 600 700 800 900",
  }],
  variable: "--font-monsterrat-regular"
});

const monsterratItalic = localFont({
  src: [{
    path: "../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
    weight: "100 200 300 400 500 600 700 800 900",
  }],
  variable: "--font-monsterrat-italic"
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
      <html lang="en">
        <body
          className={`
            relative 
            h-screen 
            flex 
            justify-center 
            text-center 
            antialiased
            // FONTS //
            ${monsterratRegular.variable} 
            ${monsterratItalic.variable} 
            ${geistSans.variable} 
            ${geistMono.variable} 
            `}
        >
          {/* <Navbar /> */}
          <main className={`w-full`}>{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
