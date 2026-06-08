import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tanujjoshi26",
    value: "github.com/tanujjoshi26",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanuj-joshi-177035227/",
    value: "linkedin.com/in/tanuj-joshi",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
  },
  {
    label: "Email",
    href: "mailto:tanujjoshi9@gmail.com",
    value: "tanujjoshi9@gmail.com",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    label: "Phone",
    href: "tel:+917226868969",
    value: "+91 72268 68969",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] text-gray-500 font-mono mb-8 block w-fit">
              <span className="text-[#bef264]">→</span> Let&apos;s build together
            </span>
            <h2 className="font-black tracking-tight leading-[1.0] mb-6"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}>
              IF YOU&apos;VE GOT
              <br />
              SOMETHING{" "}
              <span className="kw-lime">COOL</span>
              <br />
              TO BUILD —
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm mb-4">
              I&apos;m always up for a conversation about cloud infrastructure,
              DevOps challenges, or just a good engineering problem.
              No pitch decks required.
            </p>
            <p className="text-[12px] text-gray-700 font-mono">Usually responds within a day.</p>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={1}>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 divide-y divide-white/[0.04]">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-4 first:pt-0 last:pb-0 hover:pl-2 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-700 group-hover:text-[#bef264] transition-colors duration-300">
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-gray-700 mb-0.5">{link.label}</p>
                      <p className="text-[14px] text-gray-400 group-hover:text-white transition-colors duration-300">{link.value}</p>
                    </div>
                  </div>
                  <span className="text-gray-800 group-hover:text-[#bef264] transition-colors duration-300 text-lg">→</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
