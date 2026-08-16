import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    number: "01",
    title: "Cloud Resume Platform",
    subtitle: "this very site",
    description:
      "Containerised portfolio with a proper CI/CD pipeline — Docker on a Raspberry Pi, deployed via GitHub Actions, reverse-proxied through NGINX. Partly to showcase, partly to practise what I preach.",
    tech: ["Docker", "AWS", "GitHub Actions", "Next.js", "NGINX"],
    href: "#",
  },
  {
    number: "02",
    title: "Homelab Raspberry Pi Stack",
    subtitle: "always-on, always tinkering",
    description:
      "Self-hosted stack on a Raspberry Pi running behind a Tailscale mesh. Includes an AI chat interface, terminal access, a reverse proxy, and a Postgres database — all wired up with Docker Compose.",
    tech: ["Docker", "Tailscale", "NGINX", "Postgres", "Linux"],
    href: "#homelab",
  },
  {
    number: "03",
    title: "AWS CI/CD Pipeline",
    subtitle: "zero downtime or bust",
    description:
      "Automated the full deployment lifecycle with GitHub Actions pushing to ECR, deploying to EC2 with rolling zero-downtime updates. Removed a lot of manual steps nobody wanted to do.",
    tech: ["GitHub Actions", "ECR", "Docker", "EC2"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Projects</p>
              <h2 className="text-heading text-white/85">
                Selected work
              </h2>
            </div>
            <span className="hidden sm:block section-label">
              {projects.length} projects
            </span>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.number} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <a
                href={project.href}
                className="post-card group block rounded-2xl border border-white/[0.06] bg-white/[0.015] px-6 sm:px-8 py-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                  <span className="text-[11px] font-mono text-[#3a3a3a] shrink-0 sm:pt-1 group-hover:text-[#bef264] transition-colors duration-200">
                    {project.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-3">
                      <h3 className="text-[17px] font-semibold text-white/75 group-hover:text-white transition-colors duration-200 leading-snug">
                        {project.title}
                      </h3>
                      <span className="text-[12px] text-[#3a3a3a] italic">
                        — {project.subtitle}
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-[#525252] leading-relaxed mb-4 max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2.5 py-1 rounded border border-white/[0.06] text-[#3a3a3a] group-hover:border-[#bef264]/15 group-hover:text-[#525252] transition-colors duration-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full border border-white/[0.07] text-[#3a3a3a] group-hover:border-[#bef264]/40 group-hover:text-[#bef264] transition-all duration-200 shrink-0 mt-0.5 text-sm">
                    →
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
