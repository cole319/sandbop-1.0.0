import React from "react";
import { sectionsData } from "@/public/sections";
import SectionCard from "./SectionCard";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-[2rem] px-[1rem] md:px-[4rem] md:py-[10rem] lg:px-[6rem] lg:py-[6rem] bg-[url('/ancient-knight-on-horse-mobile.png')] lg:bg-[url('/ancient-knight-on-horse-ext.png')] min-h-screen bg-cover bg-no-repeat bg-center bg-fixed grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-stretch"
    >
      {sectionsData.map((data) => (
        <SectionCard
          key={data.id}
          heading={data.heading}
          subHeading={data.subHeading}
          desc={data.desc}
          image={data.image}
          link={data.link}
        />
      ))}
    </section>
  );
}
