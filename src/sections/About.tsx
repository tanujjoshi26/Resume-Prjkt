import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <ScrollReveal>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
              // Summary
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - big statement */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-6">
                Cloud &amp; DevOps Engineer with a strong focus on{" "}
                <span className="gradient-text">
                  scalable infrastructure
                </span>{" "}
                and modern deployment workflows.
              </h2>
            </ScrollReveal>
          </div>

          {/* Right - details */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="space-y-5 text-gray-400 leading-relaxed text-[15px]">
                <p>
                  I focus on building production-grade projects while deep diving
                  into cloud-native technologies, containerization, CI/CD, and
                  scalable architectures.
                </p>
                <p>
                  My approach is automation-first — leveraging tools like
                  Terraform, Docker, and GitHub Actions to create reliable,
                  repeatable infrastructure.
                </p>
                <p>
                  Outside engineering, I enjoy exploring emerging technologies
                  and continuously improving system design knowledge.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
