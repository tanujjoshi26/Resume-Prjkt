import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4">
          
          <h1 className="font-semibold text-lg">
            TJ
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
