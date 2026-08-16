import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
          {/* Left — label + headline */}
          <ScrollReveal>
            <p className="section-label mb-5">About</p>
            <h2 className="text-heading text-white/85 mb-6">
              Building things that{" "}
              <span className="kw-lime">actually run</span>{" "}
              in production.
            </h2>
            <div className="flex flex-wrap gap-2 mt-8">
              {["Ahmedabad, India", "Cloud Engineer", "Self-hoster"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/[0.07] text-[#525252]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — bio paragraphs */}
          <ScrollReveal delay={1}>
            <div className="space-y-5 text-[15px] text-[#737373] leading-[1.85]">
              <p>
                I got into cloud engineering because I wanted to understand
                what happens <em className="text-[#a3a3a3] not-italic">after</em> you
                push code. Turns out — a lot. And most of it can be automated.
              </p>
              <p>
                My focus is production-grade infrastructure: Terraform for
                provisioning, Docker and Kubernetes for workloads, GitHub Actions
                for CI/CD. I care about making deployments boring — repeatable,
                observable, and easy to roll back.
              </p>
              <p>
                Outside of work I run a homelab on a Raspberry Pi with a Tailscale
                mesh, self-host my own services, and occasionally write about what
                I&apos;m tinkering with.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[13px] text-[#bef264] hover:text-white transition-colors duration-200 font-mono"
                >
                  → Get in touch
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
