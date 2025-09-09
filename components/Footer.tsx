import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-base-midnight lg:bg-base-dark text-neutral-white pt-[8rem] lg:pt-0">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/scifi-enyoares1.png')] md:bg-[url('/scifi-aresrobot.png')] bg-cover bg-center opacity-[15%] bg-fixed md:bg-scroll lg:hidden" />
      <div className="flex justify-center items-center">
        <div className="relative z-10 pb-[8rem] lg:pt-[3rem] px-[1rem] sm:px-[3rem] flex flex-col justify-center items-center text-center lg:items-start lg:text-start lg:w-1/2 gap-[4rem]">
          {/* Branding */}
          <div>
            <h2 className="text-[1.8rem] font-[200] font-michroma tracking-wide text-neon-magenta italic mb-4">
              SandBOP
            </h2>
            <p className="text-[1rem] text-neutral-gray leading-relaxed">
              A personal sandbox for collecting{" "}
              <span className="text-neon-cyan">sci-fi</span>,{" "}
              <span className="text-neon-cyan">mythology</span>, and{" "}
              <span className="text-neon-cyan">pop culture</span> inspired
              artworks. Built for fun, not fame.
            </p>
          </div>

          {/* Credits / Meta */}
          <div className="">
            <h3 className="text-[1.5rem] font-[400] mb-[1rem] text-punch-blue">
              Meta
            </h3>
            <ul className="space-y-2 text-[1rem]">
              <li>Built with Next.js + TailwindCSS</li>
              <li>Data stored in Supabase/Firebase</li>
              <li>
                <span className="text-neutral-gray">
                  Designed by a bored human, assisted by AI
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:w-1/2 lg:flex lg:justify-end lg:items-start">
          <Image
            src="/misc-white-bully.png"
            height={400}
            width={400}
            alt="white pit bull"
            className="w-full"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-neutral-white/30 py-[4rem] px-[4rem] flex flex-col md:flex-row justify-center  md:justify-between items-center gap-4">
        <p className="text-xs text-neutral-gray">
          © {new Date().getFullYear()}{" "}
          <span className="font-michroma italic text-neon-magenta">
            SandBOP
          </span>
          . All rights reserved.
        </p>
        <p className="text-xs text-neutral-gray">
          Respectfully: <span className="text-neon-magenta">fuck off</span> and
          make something cool.
        </p>
      </div>

      {/* Neon accent line */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-violet" /> */}
    </footer>
  );
}
