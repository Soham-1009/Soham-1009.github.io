import { createFileRoute } from "@tanstack/react-router";

import { GitHubStats } from "@/components/github-stats";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile, projects } from "@/data/portfolio";

const title = "Work — Soham Deshpande";
const description =
  "Generative AI satellite imagery, causal language modeling, fraud detection, and full-stack systems: projects built end to end by Soham Deshpande.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Work"
        title="Projects, from problem to shipped system."
        description="A focused set of work spanning applied machine learning, generative AI, computer vision, and full-stack development."
      />

      <div className="mt-14">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-24 border-t border-border pt-16">
        <GitHubStats />
      </div>

      <div
        data-reveal
        className="mt-16 border border-border p-8 transition-colors duration-500 hover:border-signal/40"
      >
        <p className="eyebrow">More on GitHub</p>
        <p className="mt-3 max-w-lg font-display text-2xl leading-snug">
          Twelve public repositories covering AI models, experiments, coursework, and tooling.
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rule-link nudge mt-5 inline-block font-mono text-[11px] tracking-[0.16em] text-signal uppercase"
        >
          Browse the profile →
        </a>
      </div>
    </div>
  );
}
