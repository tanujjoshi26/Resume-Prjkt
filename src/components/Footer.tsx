import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-7 border-t border-white/[0.05]">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-mono text-gray-700">
            © {new Date().getFullYear()} Tanuj Joshi — made with too much coffee
          </p>
          <p className="text-[11px] font-mono text-gray-800">Ahmedabad, India</p>
        </div>
      </Container>
    </footer>
  );
}
