"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
// import { motion } from "motion/react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
        className={`
          w-full
          fixed
          top-0
          z-50
          text-center
          transition-all duration-300
          `}
      >
        <div
          className={`
            flex
            justify-between
            items-center
            mx-7
            my-2
          `}
        >
          {/* LEFT SIDE */}
          <div className={`w-[30%] max-w-[30rem] flex gap-2 justify-between`}>
            <Link href="/home">Home</Link>
            <Link href="/audio-post">Work</Link>
          </div>

          {/* LOGO - MIDDLE */}
          <div
            className={`
              w-[30%] max-w-[10rem] flex gap-2 justify-center text-xl 
              transition-opacity duration-500
              ${isScrolled ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <Link href="/home" className="self-center">
              DIMITRIS GIANNOULIS
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className={`w-[30%] max-w-[30rem] flex gap-2 justify-between`}>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </nav>
  );
}
