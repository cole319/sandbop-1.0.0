import React from "react";
import Link from "next/link";

export default function ScifiNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[--color-base-dark]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-14 flex items-center justify-between">
          <Link href="/" className="text-neon-magenta font-semibold text-lg">
            SandBOP
          </Link>
          <div className="hidden md:flex gap-6 text-sm text-[--color-neutral-gray]">
            <Link href="/gothic" className="hover:text-neon-cyan">
              Gothic
            </Link>
            <Link href="/popart" className="hover:text-neon-cyan">
              PopArt
            </Link>
            <Link href="/medieval" className="hover:text-neon-cyan">
              Medieval
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
