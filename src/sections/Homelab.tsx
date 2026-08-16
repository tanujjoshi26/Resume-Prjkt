import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Vertical connector line ─────────────────────────────── */
function VLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-px h-6 bg-white/[0.1]" />
    </div>
  );
}

/* ── Horizontal fork (splits one line into two) ─────────── */
function HFork() {
  return (
    <div className="flex justify-center">
      <div className="relative w-[60%] h-6">
        {/* vertical stem from top */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-white/[0.1]" />
        {/* horizontal bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.1]" />
        {/* left drop */}
        <div className="absolute bottom-0 left-0 w-px h-3 bg-white/[0.1]" style={{ bottom: "-12px" }} />
        {/* right drop */}
        <div className="absolute bottom-0 right-0 w-px h-3 bg-white/[0.1]" style={{ bottom: "-12px" }} />
      </div>
    </div>
  );
}

const services = [
  { label: "AWS", role: "Cloud infra & storage" },
  { label: "GitHub Actions", role: "CI/CD pipelines" },
  { label: "Tailscale", role: "Mesh VPN" },
  { label: "NGINX", role: "Reverse proxy" },
  { label: "Docker", role: "Container runtime" },
  { label: "Postgres", role: "Primary database" },
];

export default function Homelab() {
  return (
    <section id="homelab" className="py-20 sm:py-28 border-t border-white/[0.05]">
      <Container>
        <ScrollReveal>
          <p className="section-label mb-3">Homelab</p>
          <h2 className="text-heading text-white/85 mb-4">
            My home infrastructure
          </h2>
          <p className="text-[14px] text-[#525252] max-w-xl leading-relaxed mb-14">
            A self-hosted stack running on a Raspberry Pi behind a Tailscale
            mesh. All containers managed with Docker Compose, exposed through
            NGINX.
          </p>
        </ScrollReveal>

        {/* ── Diagram ───────────────────────────────────────── */}
        <ScrollReveal delay={1}>
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 sm:p-10 overflow-x-auto">
            <div className="min-w-[480px]">

              {/* Top — Tailscale VPN */}
              <div className="flex justify-center mb-0">
                <div className="rounded-xl border border-[#6366f1]/40 bg-[#6366f1]/10 px-6 py-2.5 text-center">
                  <p className="text-[13px] font-semibold text-[#a5b4fc]">
                    Tailscale mesh (VPN)
                  </p>
                </div>
              </div>

              <VLine />

              {/* Raspberry Pi host box */}
              <div className="rounded-2xl border border-white/[0.1] bg-white/[0.025] p-5">
                <p className="text-[11px] font-mono text-[#737373] uppercase tracking-widest mb-5">
                  Raspberry Pi (host)
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  {/* Docker bridge */}
                  <div className="rounded-xl border border-[#3b82f6]/[0.35] bg-[#3b82f6]/10 p-4">
                    <p className="text-[12px] font-semibold text-[#93c5fd] mb-3">
                      Docker — bridge network
                    </p>
                    <ul className="space-y-1.5">
                      <li className="text-[12px] font-mono text-[#60a5fa]">
                        open-webui{" "}
                        <span className="text-[#3a3a3a]">:3069 → 8080</span>
                      </li>
                    </ul>
                  </div>

                  {/* Docker host */}
                  <div className="rounded-xl border border-[#d97706]/[0.35] bg-[#d97706]/10 p-4">
                    <p className="text-[12px] font-semibold text-[#fcd34d] mb-3">
                      Docker — host network
                    </p>
                    <ul className="space-y-1.5">
                      <li className="text-[12px] font-mono text-[#fbbf24]">
                        nexterm{" "}
                        <span className="text-[#3a3a3a]">(host ports)</span>
                      </li>
                      <li className="text-[12px] font-mono text-[#fbbf24]">
                        portfolio - next.js{" "}
                        <span className="text-[#3a3a3a]">:3000</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Host services */}
                <div className="rounded-xl border border-[#10b981]/30 bg-[#10b981]/[0.08] p-4">
                  <p className="text-[12px] font-semibold text-[#6ee7b7] mb-3">
                    Host services (non-Docker)
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {[
                      "nginx reverse proxy :80",
                      "postgres :5432 (localhost only)",
                      "sshd :22",
                      "unidentified node process :7800 / :6989",
                    ].map((s) => (
                      <li key={s} className="text-[12px] font-mono text-[#34d399]">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom fork — splits to Internet + Home LAN */}
              <HFork />

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="flex justify-center">
                  <div className="rounded-xl border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-center">
                    <p className="text-[12px] font-semibold text-[#a3a3a3]">Internet</p>
                    <p className="text-[10px] font-mono text-[#3a3a3a] mt-0.5">via NGINX :80</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="rounded-xl border border-[#6366f1]/30 bg-[#6366f1]/[0.08] px-5 py-2.5 text-center">
                    <p className="text-[12px] font-semibold text-[#a5b4fc]">Home LAN</p>
                    <p className="text-[10px] font-mono text-[#3a3a3a] mt-0.5">local network</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* ── Services grid ─────────────────────────────────── */}
        <ScrollReveal delay={2}>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-4 flex items-center gap-4 hover:border-[#bef264]/15 hover:bg-white/[0.025] transition-all duration-200"
              >
                <div className="w-1 h-8 rounded-full bg-[#bef264]/30 shrink-0" />
                <div>
                  <p className="text-[13px] font-semibold text-white/70">{s.label}</p>
                  <p className="text-[11px] text-[#525252] mt-0.5">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
