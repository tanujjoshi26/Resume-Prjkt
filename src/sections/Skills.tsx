import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const skillCategories = [
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS", "Terraform", "NGINX", "Linux"],
  },
  {
    category: "DevOps & Automation",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Development",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <ScrollReveal>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
              // Technical Arsenal
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => (
            <ScrollReveal key={group.category}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 h-full">
                <h3 className="text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm text-gray-300 rounded-lg border border-white/[0.06] bg-white/[0.03] hover:border-blue-500/30 hover:text-white hover:bg-blue-500/[0.05] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
