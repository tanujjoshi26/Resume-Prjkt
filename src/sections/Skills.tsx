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
          <div className="flex items-center justify-between mb-14">
            <h2 className="font-black tracking-tight leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
              Technical <span className="kw">Arsenal.</span>
            </h2>
            <span className="hidden sm:block text-[11px] font-mono text-gray-700 uppercase tracking-widest">
              02 —
            </span>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((group, i) => (
            <ScrollReveal key={group.category} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7 h-full hover:border-[#bef264]/20 hover:bg-white/[0.03] transition-all duration-300 group">
                <h3 className="text-[11px] font-mono text-gray-600 uppercase tracking-[0.2em] mb-1">
                  {group.category}
                </h3>
                <p className="text-[12px] text-gray-700 italic mb-5">{group.note}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill}
                      className="px-3 py-1.5 text-[13px] text-gray-400 border border-white/[0.06] rounded-lg hover:border-[#bef264]/30 hover:text-[#bef264] hover:bg-[#bef264]/[0.05] transition-all duration-300 cursor-default">
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
