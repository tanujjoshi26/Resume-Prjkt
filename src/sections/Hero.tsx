import Container from "@/components/Container";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/tanujjoshi26",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanuj-joshi-177035227/",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:tanujjoshi9@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">
      <Container>
        <div className="max-w-2xl">
          {/* Name */}
          <h1 className="reveal-up d2 text-display text-white/90 mb-5">
            Tanuj Joshi
          </h1>

          {/* One-liner */}
          <p className="reveal-up d3 text-[1.05rem] text-[#737373] leading-[1.75] mb-8 max-w-lg">
            Cloud &amp; DevOps engineer. I spend my time making infrastructure
            less painful — automating the boring parts, containerising the rest,
            and writing about what I learn along the way.
          </p>

          {/* Currently doing */}
          <div className="reveal-up d4 pl-4 border-l border-[#bef264]/25 mb-10">
            <p className="text-[11px] font-mono text-[#3a3a3a] uppercase tracking-widest mb-1">
              Currently
            </p>
            <p className="text-[14px] text-[#525252]">
              Exploring cloud-native observability, BGP routing, and self-hosting
              everything I can on my homelab.
            </p>
          </div>

          {/* Social links */}
          <div className="reveal-up d5 flex flex-wrap items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-[13px] text-[#525252] hover:text-white transition-colors duration-200 group"
              >
                <span className="group-hover:text-[#bef264] transition-colors duration-200">
                  {s.icon}
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Marquee strip */}
      <div className="reveal-up d7 mt-16 border-t border-b border-white/[0.04] py-3 overflow-hidden marquee-wrap">
        <div className="marquee-track flex whitespace-nowrap select-none">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {[
                "AWS", "Docker", "Kubernetes", "Terraform",
                "CI/CD", "GitHub Actions", "Linux", "Next.js",
                "TypeScript", "NGINX", "Node.js", "NixOS",
              ].map((item) => (
                <span key={item} className="flex items-center gap-8">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#2a2a2a] font-mono">
                    {item}
                  </span>
                  <span className="text-[#222]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pt-8">
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#2a2a2a]">scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-[#2a2a2a] to-transparent" />
        </div>
      </div>
    </section>
  );
}
