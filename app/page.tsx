import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feed from "@/components/Feed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="font-opensans min-h-screen text-neutral-white">
      <div className="">
        <Navbar />
        <Hero />
      </div>
      <Feed />
      <Footer />
    </section>
  );
}
