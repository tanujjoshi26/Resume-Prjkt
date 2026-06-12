import Container from "@/components/Container";
import TypingWord from "@/components/TypingWord";
import SplineScene from "@/components/SplineScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">

      {/* Sidebar social strip */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-40">
        <a href="https://github.com/tanujjoshi26" target="_blank" rel="noopener noreferrer"
          className="text-gray-700 hover:text-white transition-colors duration-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/tanuj-joshi-177035227/" target="_blank" rel="noopener noreferrer"
          className="text-gray-700 hover:text-white transition-colors duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="mailto:tanujjoshi9@gmail.com"
          className="text-gray-700 hover:text-white transition-colors duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
        <div className="w-px h-12 bg-white/[0.08]" />
        <span className="text-[9px] text-gray-700 font-mono tracking-widest uppercase"
          style={{ writingMode: "vertical-rl" }}>
          @tanujjoshi26
        </span>
      </div>

      <Container>
        {/* Two-column layout on large screens */}
        <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-0 items-start py-10 sm:py-16">

          {/* ── Left: text content ── */}
          <div className="max-w-2xl w-full">
            {/* Badge */}
            <div className="reveal-up d1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bef264]" />
              <span className="text-[11px] text-gray-400 font-mono tracking-wider">
                hi, I&apos;m tanuj —
              </span>
            </div>

            {/* Headline */}
            <div className="mb-8">
              <h1 className="reveal-up d2 font-black leading-[1.0] tracking-tight"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}>
                Your Trusted{" "}
                <span className="kw">Cloud</span>
              </h1>
              <h1 className="reveal-up d3 font-black leading-[1.0] tracking-tight"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}>
                &amp;{" "}
                <TypingWord />
              </h1>
              <h1 className="reveal-up d4 font-black leading-[1.0] tracking-tight text-white/80"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}>
                Engineer.
              </h1>
            </div>

            {/* Divider */}
            <div className="draw-line h-px w-full bg-white/[0.08] mb-8" />

            {/* Description + CTAs */}
            <div className="reveal-up d5">
              <p className="text-[15px] text-gray-500 leading-relaxed mb-7 max-w-sm">
                I spend most of my time making infrastructure less of a headache —
                automating the boring stuff, containerising the rest.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#bef264] text-black text-sm font-semibold hover:bg-lime-300 transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
                  <span>→</span> See my work
                </a>
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/[0.1] text-sm text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
                  Say hello
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Terminal animation ── */}
          <div className="reveal-up d6 hidden lg:flex items-start justify-end pt-6">
            <div style={{ width: "300px", height: "460px", flexShrink: 0 }}>
              <SplineScene />
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee strip */}
      <div className="reveal-up d7 border-t border-b border-white/[0.04] py-3 overflow-hidden marquee-wrap">
        <div className="marquee-track flex whitespace-nowrap select-none">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "Linux", "Next.js", "TypeScript", "NGINX", "Node.js"].map((item) => (
                <span key={item} className="flex items-center gap-8">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-gray-700 font-mono">{item}</span>
                  <span className="text-gray-800">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center py-6">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-700">scroll</span>
          <div className="w-px h-7 bg-gradient-to-b from-gray-700 to-transparent" />
        </div>
      </div>
    </section>
  );
}
