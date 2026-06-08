"use client";

import { useState, useEffect } from "react";
import Container from "./Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <div className={`nav-enter mt-4 flex items-center justify-between px-5 sm:px-7 py-3 rounded-full transition-all duration-500 ${
          scrolled ? "bg-black/40 border border-white/[0.06] backdrop-blur-md" : "bg-transparent border border-transparent"
        }`}>
          {/* Logo */}
          <a href="#" className="font-bold text-sm tracking-widest uppercase text-white">
            TJ<span className="text-[#bef264]">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="px-4 py-1.5 text-[12px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.04] hover-line">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] text-[12px] text-gray-300 hover:text-black hover:bg-[#bef264] hover:border-[#bef264] transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] group-hover:bg-black" />
            Hire Me
          </a>

          {/* Mobile */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-[5px] p-2" aria-label="menu">
            <span className={`block w-4 h-[1px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-4 h-[1px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-[1px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

        <div className={`md:hidden mt-2 rounded-2xl border border-white/[0.06] bg-black/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 border-transparent"}`}>
          <div className="flex flex-col p-3 gap-0.5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-xs uppercase tracking-widest text-gray-400 hover:text-white rounded-xl transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
