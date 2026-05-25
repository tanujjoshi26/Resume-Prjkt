"use client";

import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="animate-slide-down mt-4 sm:mt-5 flex items-center justify-between rounded-full border border-white/[0.06] bg-black/60 backdrop-blur-xl px-6 sm:px-8 py-3">
          {/* Logo */}
          <a href="#" className="font-bold text-base tracking-tight text-white">
            TJ<span className="text-blue-400">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-[13px] text-gray-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.05]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden mt-2 rounded-2xl border border-white/[0.06] bg-black/90 backdrop-blur-xl overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 border-transparent"}`}>
          <div className="flex flex-col p-3 gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
