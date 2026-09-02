import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tanujjoshi26",
    value: "github.com/tanujjoshi26",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanuj-joshi-177035227/",
    value: "linkedin.com/in/tanuj-joshi",
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
    value: "tanujjoshi9@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">
          {/* Left */}
          <ScrollReveal>
            <p className="section-label mb-5">Contact</p>
            <h2 className="text-heading text-white/85 mb-6">
              Let&apos;s build{" "}
              <span className="kw-lime">something</span>
            </h2>
            <p className="text-[14px] text-[#525252] leading-relaxed max-w-sm mb-5">
              Always happy to talk about cloud infrastructure, DevOps
              challenges, or a good engineering problem. No pitch decks needed.
            </p>
            <p className="text-[11px] font-mono text-[#3a3a3a]">
              Usually replies within a day.
            </p>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={1}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-1 divide-y divide-white/[0.04]">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between px-5 py-4 rounded-xl hover:bg-white/[0.03] transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#3a3a3a] group-hover:text-[#bef264] transition-colors duration-200">
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#3a3a3a] mb-0.5">
                        {link.label}
                      </p>
                      <p className="text-[13px] text-[#525252] group-hover:text-white transition-colors duration-200">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <span className="text-[#3a3a3a] group-hover:text-[#bef264] transition-colors duration-200 text-sm">
                    →
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
