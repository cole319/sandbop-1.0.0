import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden lg:bg-[url('/scifi-spaceboy.png')] lg:bg-fixed lg:bg-cover lg:bg-center">
      <Image
        src="/scifi-spaceboy-mobileS.png"
        alt="Scifi space boy with bike"
        width={732}
        height={2048}
        className="w-full h-auto lg:hidden"
        priority
      />

      {/* Overlay text */}
      <div className="absolute top-0 py-[6rem] sm:py-[6.5rem] z-10 lg:py-[8rem] text-center lg:text-start px-[1rem] sm:px-[2rem] lg:px-[4rem]">
        <p className="italic text-[0.8rem] sm:text-[1rem] pb-[1rem] sm:pb-[2rem]">
          enter the 37th chamber
        </p>
        <h1 className="text-[2rem] font-[400] sm:font-[300] md:font-[200] sm:text-[4rem] lg:text-[7.5rem] leading-[3rem] sm:leading-[5rem] lg:leading-[7rem]">
          Take Your{" "}
          <span className="text-punch-blue">
            <span className="md:hidden">MEDS</span>
            <span className="hidden md:inline-block">
              <span className="inline-block hover:-translate-y-[1rem] transition-transform duration-300 ease-in-out">
                M
              </span>
              <span className="inline-block hover:-translate-y-[1rem] transition-transform duration-300 ease-in-out">
                E
              </span>
              <span className="inline-block hover:-translate-y-[1rem] transition-transform duration-300 ease-in-out">
                D
              </span>
              <span className="inline-block hover:-translate-y-[1rem] transition-transform duration-300 ease-in-out">
                S
              </span>
            </span>
          </span>{" "}
          Daily <span className="lg:hidden">On Time</span>
        </h1>
        <h2 className="text-[1.2rem] sm:text-[1.8rem] lg:text-[2.5rem] py-[2rem] sm:py-[3rem] lg:pt-[4rem] lg:pb-[1.5rem]">
          This page does <span className="text-neon-magenta">NOT</span> serve
          any specific purpose
        </h2>
        <p className="text-[0.8rem] sm:text-[1rem] px-[2rem] lg:px-0 lg:w-1/2">
          Made this website cuz I was bored, no real motive. Not bothering with
          SEO, so its basically invisible. But in case you're here, fuck off
          (respectfully) and consider doing something more useful.
        </p>

        <button
          className="group relative mt-[3rem] overflow-hidden rounded-full px-[2rem] py-[0.7rem] bg-neutral-white text-base-dark hover:text-neutral-white text-[1.1rem] inline-flex items-center font-semibold transition ease-in-out duration-700 cursor-pointer"
          aria-label="water fill button"
        >
          <span className="relative z-10">Cut to the chase</span>

          <span
            aria-hidden
            className="absolute inset-0 z-0 -translate-x-full group-hover:translate-x-0
               transition-transform duration-700 ease-in-out
               bg-punch-blue"
          />
        </button>
      </div>
    </section>
  );
}
