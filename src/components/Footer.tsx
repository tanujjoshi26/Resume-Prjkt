import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.04]">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 font-mono">
          <p>© {new Date().getFullYear()} Tanuj Joshi. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
