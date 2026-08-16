import Navbar from "@/components/Navbar";
import AuroraBackground from "@/components/AuroraBackground";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Writing from "@/sections/Writing";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Homelab from "@/sections/Homelab";
import Uses from "@/sections/Uses";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Writing />
        <Skills />
        <Projects />
        <Homelab />
        <Uses />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
