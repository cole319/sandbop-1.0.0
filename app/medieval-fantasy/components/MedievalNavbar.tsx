"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust 100px to match the height of your hero
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 fixed top-0 w-full flex justify-center items-center gap-[1rem] transition-all duration-500 ${
        isScrolled ? "bg-base-dark/90 h-[3rem]" : "bg-base-dark/90 h-[5rem]"
      }`}
    >
      <div className="w-full h-[0.2px] bg-neutral-white"></div>

      <h1
        className={`font-unifrak italic text-center transition-all duration-500 text-stone-50 ${
          isScrolled
            ? "text-[1rem] sm:text-[1.3rem] font-medium"
            : "text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-bold"
        }`}
      >
        SandBOP
      </h1>

      <div className="w-full h-[0.2px] bg-neutral-white"></div>
    </nav>
  );
}
