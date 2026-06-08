import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    number: "01",
    title: "Cloud Resume Platform",
    subtitle: "the one you're looking at",
    description: "Built this portfolio on containerised infrastructure with a proper CI/CD pipeline. Partly to show it off, partly because I wanted to practice what I preach.",
    tech: ["Docker", "AWS", "GitHub Actions", "Next.js"],
  },
  {
    number: "02",
    title: "Kubernetes Home Lab",
    subtitle: "Raspberry Pi cluster on my desk",
    description: "Set up a self-hosted Kubernetes environment on Raspberry Pis to get real hands-on orchestration experience outside of managed services. It's loud and I love it.",
    tech: ["Kubernetes", "Linux", "Networking", "Helm"],
  },
  {
    number: "03",
    title: "AWS CI/CD Pipeline",
    subtitle: "zero downtime or bust",
    description: "Automated the full deployment lifecycle using GitHub Actions pushing to ECR, deploying to EC2 with zero-downtime rolling updates. Removed a lot of manual steps people were tired of doing.",
    tech: ["GitHub Actions", "ECR", "Docker", "EC2"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <ScrollReveal>
          <div className="flex items-center justify-between mb-14">
            <h2 className="font-black tracking-tight leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
              My <span className="kw-lime">Work.</span>
            </h2>
            <span className="hidden sm:block text-[11px] font-mono text-gray-700 uppercase tracking-widest">
              03 —
            </span>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <ScrollReveal key={project.number} delay={(Math.min(i, 2)) as 0 | 1 | 2 | 3}>
              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8 hover:border-[#bef264]/20 hover:bg-white/[0.03] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <span className="text-[11px] font-mono text-gray-700 shrink-0 sm:pt-1.5 group-hover:text-[#bef264] transition-colors duration-300">
                    {project.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-[12px] text-gray-600 italic">— {project.subtitle}</span>
                    </div>
                    <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-4 max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t}
                          className="text-[11px] px-2.5 py-1 rounded-md border border-white/[0.06] text-gray-600 font-mono group-hover:border-[#bef264]/20 group-hover:text-gray-400 transition-colors duration-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.07] text-gray-700 group-hover:border-[#bef264] group-hover:text-[#bef264] transition-all duration-300 shrink-0 mt-1 text-sm">
                    →
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
