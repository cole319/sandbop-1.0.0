import Image from "next/image";
import Gallery from "./Gallery";

export default function Feed() {
  return (
    <section
      id="feed"
      className="px-[1rem] sm:px-[2rem] lg:px-[4rem] py-[10rem] md:pb-[18rem] bg-base-dark"
    >
      <div className="flex pb-[12rem]">
        <div className="hidden sm:flex flex-col justify-center pt-[1rem] pr-[1rem] lg:pr-[3rem] w-full lg:max-w-[40%] border-t-[0.2px] border-neutral-white">
          <Image
            src="/scifi-skulldog.png"
            height={450}
            width={600}
            alt="masked soldier with dog"
            className="w-full"
          />
        </div>
        <div className="p-[2rem] md:p-[3rem] lg:p-[4rem] w-full border-l-[0.2px] border-b-[0.2px] border-neutral-white">
          <h1 className="font-[300] text-[2rem] lg:text-[3.5rem]">
            This website is basically my{" "}
            <span className="text-neon-magenta">Pinterest Lite</span>
          </h1>
          <h2 className="mt-[1rem] text-[1.3rem] lg:text-[2rem]">
            It is my <span className="text-neon-cyan text-">sandbox</span> for
          </h2>
          <div className="text-[0.8rem] mt-[0.5rem] lg:text-[1.1rem] flex flex-col gap-[0.7rem]">
            {" "}
            <p> - AI Generated/Original/Downloaded images</p>
            <p> - My Web Design skill practice</p>
            <p> - And whatever the fuck I do 24x7</p>
          </div>
        </div>
      </div>
      <Gallery />
    </section>
  );
}
