import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      <div className="absolute top-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl"></div>

      <Container>
        <div className="space-y-8 relative z-10">

          <div className="space-y-4">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
              Cloud & DevOps Engineer
            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-none">
              Tanuj
              <br />
              Joshi
            </h1>
          </div>

          <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
            I build scalable cloud infrastructure and modern applications
            focused on automation, reliability, and clean engineering workflows.
          </p>

          <div className="flex gap-4 pt-4">
            <Button>
              View Projects
            </Button>

            <Button variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
