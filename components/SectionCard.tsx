import React from "react";
import Image from "next/image";

interface SectionCardProps {
  heading: string;
  subHeading?: string;
  desc: string;
  image: string;
}

export default function SectionCard({
  heading,
  subHeading,
  desc,
  image,
}: SectionCardProps) {
  return (
    <section className="bg-base-dark/80 flex flex-col h-full pb-[2rem] z-10">
      <div className="w-full aspect-[4/3] relative">
        <Image
          src={image}
          fill
          alt="section cover image"
          className="p-[1rem]"
        />
      </div>
      <div className="p-[1rem] flex flex-col gap-[1rem] flex-1">
        <h1 className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.2rem] font-[200] text-neon-magenta font-michroma italic">
          {heading}
        </h1>
        <h2 className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] font-[400]">
          {subHeading}
        </h2>
        <p>{desc}</p>
      </div>
    </section>
  );
}
