import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    number: "01",
    title: "Cloud Resume Platform",
    subtitle: "Portfolio Infrastructure",
    description:
      "Production-ready portfolio platform deployed using containerized infrastructure and CI/CD pipelines.",
    tech: ["Docker", "AWS", "GitHub Actions", "Next.js"],
  },
  {
    number: "02",
    title: "Kubernetes Home Lab",
    subtitle: "Container Orchestration",
    description:
      "Self-hosted Raspberry Pi Kubernetes environment for learning orchestration and scalable deployments.",
    tech: ["Kubernetes", "Linux", "Networking", "Helm"],
  },
  {
    number: "03",
    title: "AWS CI/CD Pipeline",
    subtitle: "Deployment Automation",
    description:
      "Automated deployment workflow using GitHub Actions, ECR, Docker, and EC2 for zero-downtime releases.",
    tech: ["GitHub Actions", "ECR", "Docker", "EC2"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <ScrollReveal>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
              // Projects
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {projects.map((project) => (
            <ScrollReveal key={project.number}>
              <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  {/* Number */}
                  <span className="text-xs font-mono text-gray-600 shrink-0 pt-1">
                    {project.number} //
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 font-mono">
                        {project.subtitle}
                      </span>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-[15px] mb-4 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md border border-white/[0.06] text-gray-500 bg-white/[0.02] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="hidden sm:block w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
