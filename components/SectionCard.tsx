import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SectionCardProps {
  heading: string;
  subHeading?: string;
  desc: string;
  image: string;
  link: string;
}

export default function SectionCard({
  heading,
  subHeading,
  desc,
  image,
  link,
}: SectionCardProps) {
  return (
    <section className="bg-base-dark/80 flex flex-col h-full pb-[2rem] z-10">
      <Link href={link}>
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={image}
            fill
            alt="section cover image"
            className="p-[1rem]"
          />
        </div>
      </Link>

      <div className="p-[1rem] flex flex-col gap-[1rem] flex-1">
        <Link href={link}>
          <h1 className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.2rem] font-[200] text-neon-magenta font-michroma italic hover:text-neon-cyan ease-in-out duration-500">
            {heading}
          </h1>
        </Link>

        <h2 className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] font-[400]">
          {subHeading}
        </h2>
        <p>{desc}</p>
      </div>
    </section>
  );
}
