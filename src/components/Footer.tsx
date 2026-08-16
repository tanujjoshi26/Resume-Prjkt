import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-white/[0.04]">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-mono text-[#2a2a2a]">
            © {year} Tanuj Joshi
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/tanujjoshi26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-[#2a2a2a] hover:text-[#525252] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tanuj-joshi-177035227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-[#2a2a2a] hover:text-[#525252] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tanujjoshi9@gmail.com"
              className="text-[11px] font-mono text-[#2a2a2a] hover:text-[#525252] transition-colors"
            >
              Email
            </a>
          </div>
          <p className="text-[11px] font-mono text-[#2a2a2a]">Ahmedabad, India</p>
        </div>
      </Container>
    </footer>
  );
}
