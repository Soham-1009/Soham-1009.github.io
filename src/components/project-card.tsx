import type * as React from "react";

import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${Math.min(index, 6) * 70}ms` } as React.CSSProperties}
      className="group relative border-t border-border px-2 py-8 transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-signal/40 hover:bg-foreground/[0.02] sm:py-10"
    >
      <div className="grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8">
        <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-signal sm:text-3xl">
              {project.title}
            </h3>
            {project.flagship ? (
              <span className="rounded-sm bg-signal-soft px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
                Flagship
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-base text-foreground/85">{project.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
            {project.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-border px-2 py-1 transition-colors duration-300 hover:border-signal/50 hover:text-foreground font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
          <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground tabular-nums">
            {project.year}
          </span>
          <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
            {project.category}
          </span>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="rule-link nudge inline-block font-mono text-[11px] tracking-[0.14em] text-signal uppercase"
          >
            Source →
          </a>
        </div>
      </div>
    </article>
  );
}
