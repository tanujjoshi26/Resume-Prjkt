import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const skills = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Linux",
  "GitHub Actions",
  "Terraform",
  "NGINX",
  "CI/CD",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
];

export default function Skills() {
  return (
    <section className="py-32 border-t border-white/10">
      <Container>

        <SectionHeading
          eyebrow="Skills"
          title="Technologies and tools I use to build scalable systems."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              px-6 py-8
              text-center
              hover:border-blue-500/40
              hover:bg-white/10
              transition-all duration-300
              hover:-translate-y-2
              "
            >
              <p className="font-medium">
                {skill}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
