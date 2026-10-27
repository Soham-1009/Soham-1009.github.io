import { createFileRoute } from "@tanstack/react-router";

import { GitHubStats } from "@/components/github-stats";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile, projects, stats } from "@/data/portfolio";

const title = "Work · Soham Deshpande";
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
  const repoCount = stats.find((s) => s.label.includes("repositories"))?.value ?? "12";

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12 space-y-24">
      <section>
        <SectionHeading
          title="Projects, from problem to shipped system."
          description="A focused set of work spanning applied machine learning, generative AI, computer vision, and full-stack development."
        />

        <div className="mt-10 grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section>
        <GitHubStats />
      </section>

      <section>
        <div
          data-reveal
          className="rounded-xl bg-surface p-8 sm:p-10"
        >
          <h3 className="text-xl font-semibold">More on GitHub</h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {repoCount} public repositories covering AI models, experiments, research implementations, and tooling.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rule-link mt-6 inline-block text-sm font-medium text-signal"
          >
            Browse full profile on GitHub →
          </a>
        </div>
      </section>
    </div>
  );
}
