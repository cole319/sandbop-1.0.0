import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MedievalGallery from "./components/MedievalGallery";
import MedievalHero from "./components/MedievalHero";
import MedievalIntro from "./components/MedievalIntro";

export default function MedievalFantasyHome() {
  return (
    <section>
      <Navbar />
      <div id="medieval-hero" className="">
        <MedievalHero />
      </div>
      <div id="medieval-intro">
        <MedievalIntro />
      </div>
      <div id="medieval-gallery">
        <MedievalGallery />
      </div>
      <Footer />
    </section>
  );
}
