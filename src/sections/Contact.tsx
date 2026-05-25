import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 border-t border-white/10"
    >
      <Container>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-12 text-center space-y-8">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s build something impactful.
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Open to engineering opportunities, collaborations,
            and cloud infrastructure projects.
          </p>

          <div className="flex justify-center">
            <Button>
              Connect on GitHub
            </Button>
          </div>

        </div>

      </Container>
    </section>
  );
}
