import React from "react";
import MedievalNavbar from "./components/MedievalNavbar";
import MedievalFooter from "./components/MedievalFooter";
import MedievalGallery from "./components/MedievalGallery";
import MedievalHero from "./components/MedievalHero";
import MedievalIntro from "./components/MedievalIntro";

export default function MedievalFantasyHome() {
  return (
    <section className="bg-base-midnight min-h-screen">
      <MedievalNavbar />
      <div id="medieval-hero">
        <MedievalHero />
      </div>
      <div id="medieval-intro">
        <MedievalIntro />
      </div>
      <div id="medieval-gallery">
        <MedievalGallery />
      </div>
      <MedievalFooter />
    </section>
  );
}
