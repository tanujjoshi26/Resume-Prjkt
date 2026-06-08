import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] text-gray-500 font-mono">
              <span className="text-[#bef264]">↓</span> Why Choose Me
            </span>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <ScrollReveal>
            <h2 className="font-black leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              My Extensive
              <br />
              <span className="kw-lime">List of Skills.</span>
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm">
              I got into cloud engineering because I wanted to understand
              what happens <em className="text-gray-400 not-italic">after</em> you push code.
              Turns out — a lot. And most of it can be automated.
            </p>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={1}>
            <div className="space-y-5 text-[15px] text-gray-500 leading-[1.85]">
              <p>
                I focus on building production-grade infrastructure while deep diving
                into cloud-native technologies, containerization, CI/CD, and
                scalable architectures.
              </p>
              <p>
                My approach is automation-first — leveraging Terraform, Docker, and
                GitHub Actions to create reliable, repeatable systems.
              </p>
              <div className="pt-3 pl-4 border-l-2 border-[#bef264]/30">
                <p className="text-[12px] font-mono text-gray-700 uppercase tracking-wider mb-1">Currently</p>
                <p className="text-[14px] text-gray-600">
                  Exploring cloud-native observability and distributed systems design.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
