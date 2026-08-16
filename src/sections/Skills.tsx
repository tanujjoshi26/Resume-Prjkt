import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const skillCategories = [
  {
    category: "Cloud & Infrastructure",
    note: "where I spend most of my time",
    skills: ["AWS", "Terraform", "NGINX", "Linux"],
  },
  {
    category: "DevOps & Automation",
    note: "the stuff that makes shipping pleasant",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Development",
    note: "enough to build and not break things",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Skills</p>
              <h2 className="text-heading text-white/85">
                Technical stack
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((group, i) => (
            <ScrollReveal key={group.category} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 h-full hover:border-[#bef264]/15 hover:bg-white/[0.025] transition-all duration-200 group">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#3a3a3a] group-hover:text-[#525252] transition-colors mb-1">
                  {group.category}
                </p>
                <p className="text-[12px] text-[#3a3a3a] italic mb-5">{group.note}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-[12px] text-[#737373] border border-white/[0.06] rounded-lg hover:border-[#bef264]/25 hover:text-[#bef264] hover:bg-[#bef264]/[0.04] transition-all duration-200 cursor-default"
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
