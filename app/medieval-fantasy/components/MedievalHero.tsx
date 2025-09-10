import React from "react";
import Image from "next/image";

export default function MedievalHero() {
  return (
    <section className="h-[55rem] lg:h-[45rem] grid grid-cols-4 grid-rows-9 overflow-hidden">
      <div className="hidden lg:block pt-[6rem] relative bg-gradient-to-tl from-blood-50 via-blood-500 to-ashred-900 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-9">
        <div className="z-10 leading-[8rem] absolute text-blood-50 text-[10rem] font-unifrak bottom-[4rem] left-[6rem]">
          <p className="font-cinzel font-[400] text-[4rem] text-blood-50/80">
            Enter The Ancient Dirt
          </p>
          <h1 className="tracking-widest text-shadow-lg text-shadow-base-dark">
            Medieval
          </h1>
          <h1 className="tracking-widest text-shadow-lg text-shadow-base-dark">
            fantasy
          </h1>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-ashred-900 to-base-dark col-start-1 col-end-5 row-start-1 row-end-10 lg:col-start-2 lg:col-end-5 lg:row-start-3 lg:row-end-10 lg:pt-[6rem] lg:pr-[6rem]">
        <div className="h-full bg-transparent w-full lg:pr-[1rem] lg:pt-[1rem] flex justify-end items-end">
          <div className="z-50 w-[80%] lg:w-[40%] absolute bg-gradient-to-r from-ashred-900 via-ashred-900/80 to-blood-900 py-[1rem] px-[1.5rem] translate-y-[0rem] lg:-translate-y-0 translate-x-[1rem] lg:translate-x-[2rem]">
            <h1 className="font-cinzel text-[0.9rem] font-[700] [word-spacing:0.5rem] leading-[1.5rem] lg:leading-[2rem] text-start lg:text-start lg:text-shadow-neutral-white">
              This is the gallery of images exploring Medieval fantasies.
              Whether collected or generated with AI, it showcases all of them
            </h1>
          </div>
          <div className="lg:hidden absolute top-[7rem] left-[1rem]">
            <p className="font-cinzel font-[400] text-[2rem] text-blood-50/80 text-center">
              Enter the Ancient Dirt
            </p>
          </div>
          <div className="absolute py-[2rem] px-[1rem] bg-base-dark/50 bottom-[8rem] left-0 z-[70] font-unifrak text-[4.5rem] lg:hidden min-w-[80%] leading-[4rem] -translate-y-[5rem]">
            <h1 className="tracking-widest text-shadow-lg text-shadow-base-dark">
              Medieval
            </h1>
            <h1 className="tracking-widest text-shadow-lg text-shadow-base-dark">
              fantasy
            </h1>
          </div>
          <Image
            src="/medieval/ancient-warriors-ares2.png"
            fill
            alt="ares with weapons"
            className="absolute object-contain lg:translate-x-[6rem] -translate-y-[4rem] lg:-translate-y-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}
