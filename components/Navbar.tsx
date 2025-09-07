import React from "react";

export default function Navbar() {
  return (
    <section className="z-50 bg-base-dark/70 fixed w-full flex justify-center items-center gap-[1rem]">
      <div className="w-full h-[0.2px] bg-neutral-white"></div>
      <h1 className="font-michroma text-[1.2rem] italic text-center py-[1rem] font-medium sm:font-bold sm:text-[1.8rem] lg:text-[2rem] lg:font-[800] text-neon-magenta">
        SandBOP
      </h1>
      <div className="w-full h-[0.2px] bg-neutral-white"></div>
    </section>
  );
}
