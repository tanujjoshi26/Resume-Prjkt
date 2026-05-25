import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
