"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cloud Resume Platform",
    description:
      "Production-ready portfolio platform deployed using containerized infrastructure and CI/CD pipelines.",
  },
  {
    title: "Kubernetes Home Lab",
    description:
      "Self-hosted Raspberry Pi Kubernetes environment for learning orchestration and scalable deployments.",
  },
  {
    title: "AWS CI/CD Pipeline",
    description:
      "Automated deployment workflow using GitHub Actions, ECR, Docker, and EC2.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 border-t border-white/10"
    >
      <Container>

        <SectionHeading
          eyebrow="Projects"
          title="Selected engineering projects and infrastructure systems."
        />

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              p-8
              space-y-6
              transition-all duration-300
              "
            >

              <div className="h-1 w-16 bg-blue-500 rounded-full"></div>

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}
