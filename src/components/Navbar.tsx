"use client";

import { useState, useEffect } from "react";
import Container from "./Container";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Writing",  href: "#writing" },
  { label: "Projects", href: "#projects" },
  { label: "Homelab",  href: "#homelab" },
  { label: "Uses",     href: "#uses" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <div
          className={`nav-enter mt-4 flex items-center justify-between px-5 sm:px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-black/50 border border-white/[0.07] backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-sm tracking-[0.15em] uppercase text-white/90 hover:text-white transition-colors"
          >
            TJ<span className="text-[#bef264]">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] font-medium text-[#525252] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="mailto:tanujjoshi9@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.09] text-[11px] tracking-wide text-[#a3a3a3] hover:text-black hover:bg-[#bef264] hover:border-[#bef264] transition-all duration-250"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] group-hover:bg-black transition-colors" />
            Contact
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-[1px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden mt-2 rounded-2xl border border-white/[0.06] bg-black/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0 border-transparent"
          }`}
        >
          <div className="flex flex-col p-3 gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-[11px] uppercase tracking-[0.14em] font-medium text-[#525252] hover:text-white rounded-xl transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="mx-4 mt-2 pt-3 border-t border-white/[0.06]">
              <a
                href="mailto:tanujjoshi9@gmail.com"
                onClick={() => setMobileOpen(false)}
                className="block text-[11px] uppercase tracking-[0.14em] font-medium text-[#bef264] py-2"
              >
                → Email me
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
