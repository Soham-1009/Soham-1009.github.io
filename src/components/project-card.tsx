import type * as React from "react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${Math.min(index, 6) * 70}ms` } as React.CSSProperties}
      className="group relative rounded-xl bg-surface/50 p-6 transition-colors duration-300 hover:bg-surface sm:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-8">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold transition-colors group-hover:text-signal sm:text-3xl">
              {project.title}
            </h3>
            {project.flagship ? (
              <span className="rounded-full bg-signal-soft px-3 py-1 text-[13px] font-medium text-signal">
                Flagship
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-base text-foreground/90">{project.tagline}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
            {project.summary}
          </p>

          {project.slug === "infranova-ai" && (
            <div className="mt-6 max-w-xl overflow-hidden rounded-lg bg-background/60">
              <img
                src="/assets/satellite-image-of-france-in-august-2002.jpg"
                alt="Satellite Earth observation raster imagery"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <p className="p-3 text-[13px] text-muted-foreground">
                Domain data: Multi-band satellite Earth observation imagery for cross-spectral synthesis
              </p>
            </div>
          )}

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-background/80 px-2.5 py-1 text-[13px] font-normal text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-4 lg:flex-col lg:items-end lg:gap-3">
          <span className="text-sm font-medium text-muted-foreground tabular-nums">
            {project.year}
          </span>
          <span className="text-[13px] text-muted-foreground">
            {project.category}
          </span>
          <div className="flex items-center gap-4 lg:mt-2 lg:flex-col lg:items-end lg:gap-2">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rule-link inline-block text-sm font-medium text-signal"
                onClick={(event) => event.stopPropagation()}
              >
                Live demo →
              </a>
            ) : null}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rule-link inline-block text-sm font-medium text-foreground transition-colors hover:text-signal"
              onClick={(event) => event.stopPropagation()}
            >
              Source code →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
