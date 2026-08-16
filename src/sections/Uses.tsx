import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  {
    name: "Cloud & Infrastructure",
    items: [
      { name: "AWS (EC2, ECR, S3, IAM)", note: "primary cloud platform" },
      { name: "Terraform", note: "infrastructure as code" },
      { name: "NGINX", note: "reverse proxy" },
      { name: "Linux (Ubuntu, Raspberry Pi OS)", note: "everywhere" },
    ],
  },
  {
    name: "DevOps & Automation",
    items: [
      { name: "Docker & Docker Compose", note: "container runtime" },
      { name: "Kubernetes / K3s", note: "orchestration" },
      { name: "GitHub Actions", note: "CI/CD pipelines" },
      { name: "Tailscale", note: "mesh VPN" },
    ],
  },
  {
    name: "Homelab Hardware",
    items: [
      { name: "Raspberry Pi 4B", note: "primary home server" },
      { name: "Home LAN", note: "local network" },
      { name: "Tailscale mesh", note: "remote access" },
    ],
  },
  {
    name: "Development",
    items: [
      { name: "VS Code / Kiro", note: "editor" },
      { name: "Next.js + TypeScript", note: "frontend" },
      { name: "Node.js", note: "backend scripts" },
      { name: "Postgres", note: "primary database" },
    ],
  },
  {
    name: "Self-hosted Services",
    items: [
      { name: "Open WebUI + Ollama", note: "local AI chat" },
      { name: "Nexterm", note: "web terminal" },
      { name: "Portainer (optional)", note: "container management" },
    ],
  },
  {
    name: "Monitoring & Ops",
    items: [
      { name: "GitHub Actions logs", note: "deployment visibility" },
      { name: "NGINX access logs", note: "traffic monitoring" },
      { name: "SSH", note: "remote management" },
    ],
  },
];

export default function Uses() {
  return (
    <section id="uses" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <ScrollReveal>
          <p className="section-label mb-3">Uses</p>
          <h2 className="text-heading text-white/85 mb-4">
            What I use
          </h2>
          <p className="text-[14px] text-[#525252] max-w-lg leading-relaxed mb-12">
            The tools, hardware, and software I use to build, deploy, and run
            things day-to-day.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 h-full hover:border-[#bef264]/15 hover:bg-white/[0.025] transition-all duration-200 group">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#3a3a3a] group-hover:text-[#525252] transition-colors mb-4">
                  {cat.name}
                </p>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-medium text-white/65 group-hover:text-white/75 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-[#3a3a3a]">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
