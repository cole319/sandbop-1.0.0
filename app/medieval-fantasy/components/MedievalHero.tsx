import React from "react";
import Image from "next/image";

export default function MedievalHero() {
  return (
    <section className="h-[40rem] grid grid-cols-4 grid-rows-9">
      <div className="pt-[6rem] relative bg-gradient-to-tl from-blood-50 via-blood-500 to-ashred-900 col-start-1 col-end-5 row-start-1 row-end-9">
        <div className="z-10 leading-[8rem] absolute text-blood-50 text-[10rem] font-unifrak bottom-[4rem] left-[6rem]">
          <h1 className="tracking-widest text-shadow-lg text-shadow-black">
            Medieval
          </h1>
          <h1 className="tracking-widest text-shadow-lg text-shadow-black">
            Fantasy
          </h1>
        </div>
      </div>
      <div className="relative bg-gradient-to-br from-ashred-900 to-base-dark col-start-2 col-end-5 row-start-3 row-end-10 pt-[6rem] pr-[6rem]">
        <div className="h-full bg-transparent w-full pr-[1rem] pt-[1rem] flex justify-end items-end">
          <div className="z-50 w-[40%] absolute bg-gradient-to-r from-ashred-900 via-ashred-900/80 to-blood-900 py-[1rem] px-[1.5rem]">
            <h1 className="font-cinzel font-[700] [word-spacing:0.5rem] leading-[2rem]">
              This is the gallery of images exploring Medieval fantasies.
              Whether collected or generated with AI, it showcases all of them
            </h1>
          </div>
          <Image
            src="/medieval/ancient-warriors-ares2.png"
            fill
            alt="ares with weapons"
            className="absolute object-contain translate-x-[6rem] -translate-y-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}
