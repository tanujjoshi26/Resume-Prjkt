import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      <Container>
        <div className="relative z-10 max-w-5xl">
          {/* Status badge */}
          <div className="animate-fade-in-up delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/[0.05] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-status-pulse" />
            <span className="text-xs text-green-400 font-medium uppercase tracking-wider">
              Available for work
            </span>
          </div>

          {/* Name - large editorial style */}
          <h1 className="animate-fade-in-up delay-2 text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tighter mb-6">
            <span className="text-white">TANUJ</span>
            <br />
            <span className="gradient-text">JOSHI</span>
          </h1>

          {/* Role line */}
          <div className="animate-fade-in-up delay-3 flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-blue-500/60" />
            <p className="text-sm sm:text-base text-gray-400 font-mono">
              Cloud &amp; DevOps Engineer
            </p>
          </div>

          {/* Description */}
          <p className="animate-fade-in-up delay-4 max-w-lg text-base sm:text-lg text-gray-500 leading-relaxed mb-10">
            I build scalable cloud infrastructure and modern applications
            focused on automation, reliability, and clean engineering workflows.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-5 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button variant="secondary" href="#contact">
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up delay-8 absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-bounce-slow" />
        </div>
      </Container>
    </section>
  );
}
