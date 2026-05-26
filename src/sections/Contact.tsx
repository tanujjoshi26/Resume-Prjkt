import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tanujjoshi26",
    value: "tanujjoshi26",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanuj-joshi-177035227/",
    value: "tanuj-joshi",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+917226868969",
    value: "+91 72268 68969",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <ScrollReveal>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
              // Let&apos;s Connect
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        <div className="max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Let&apos;s build
              <br />
              <span className="gradient-text">the future.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-gray-500 text-base sm:text-lg mb-12 max-w-lg">
              Open for new opportunities and exciting cloud infrastructure
              challenges. Let&apos;s talk.
            </p>
          </ScrollReveal>

          {/* Contact links */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] text-gray-500 group-hover:text-blue-400 group-hover:bg-blue-500/[0.08] transition-all duration-300">
                    {link.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono text-gray-600 uppercase tracking-wider mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 truncate">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-gray-700 group-hover:text-gray-400 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
