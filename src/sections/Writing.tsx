import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    title: "Zero-downtime deployments with GitHub Actions and EC2",
    description:
      "How I wired up a rolling-update pipeline that deploys Docker containers to EC2 without a single dropped request.",
    date: "Jul 2025",
    tags: ["GitHub Actions", "Docker", "EC2"],
  },
  {
    title: "Kubernetes on Raspberry Pi — a practical guide",
    description:
      "Setting up a bare-metal K3s cluster on Raspberry Pis, from flashing the OS to running real workloads with Helm.",
    date: "May 2025",
    tags: ["Kubernetes", "Linux", "Homelab"],
  },
  {
    title: "Why I containerise everything — even on a Pi",
    description:
      "The case for Docker even on single-board computers, and how I keep the whole stack reproducible with Compose.",
    date: "Mar 2025",
    tags: ["Docker", "DevOps"],
  },
  {
    title: "Terraform state management without blowing up prod",
    description:
      "Remote state, locking, workspaces, and the habits that keep infrastructure-as-code from becoming infrastructure-as-chaos.",
    date: "Jan 2025",
    tags: ["Terraform", "AWS"],
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Writing</p>
              <h2 className="text-heading text-white/85">
                Notes &amp; posts
              </h2>
            </div>
            <span className="hidden sm:block section-label">
              {posts.length} posts
            </span>
          </div>
        </ScrollReveal>

        <div className="space-y-1">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <article className="post-card group rounded-xl border border-white/[0.05] px-5 sm:px-7 py-5 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="text-[15px] font-semibold text-white/75 group-hover:text-white transition-colors duration-200 leading-snug">
                        {post.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-[#525252] leading-relaxed mb-3 max-w-prose">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/[0.06] text-[#3a3a3a] group-hover:border-[#bef264]/15 group-hover:text-[#525252] transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[11px] font-mono text-[#3a3a3a] whitespace-nowrap">
                      {post.date}
                    </span>
                    <span className="text-[#3a3a3a] group-hover:text-[#bef264] transition-colors duration-200 text-sm">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
