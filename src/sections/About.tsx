import Container from "@/components/Container";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 border-t border-white/10"
    >
      <Container>

        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Engineering modern cloud infrastructure with scalable systems.
            </h2>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">

            <p>
              I am a Cloud & DevOps enthusiast with a strong focus on AWS,
              automation, infrastructure engineering, and modern deployment workflows.
            </p>

            <p>
              My current focus is building production-grade projects while deep diving
              into cloud-native technologies, containerization, CI/CD, and scalable architectures.
            </p>

            <p>
              Outside engineering, I enjoy exploring emerging technologies
              and continuously improving system design knowledge.
            </p>

          </div>
        </div>

      </Container>
    </section>
  );
}
