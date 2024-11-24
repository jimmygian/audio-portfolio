import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import Navbar from "@/app/_components/navbar";

// FONTS
const geistSans = localFont({
  src: "./_utils/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./_utils/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
          className={`relative h-screen flex justify-center text-center ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main className={`w-full`}>{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
