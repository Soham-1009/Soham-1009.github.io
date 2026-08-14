import type * as React from "react";

import { createFileRoute, Link } from "@tanstack/react-router";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile, projects, skillGroups, stats } from "@/data/portfolio";

const title = "Soham Deshpande — AI & ML Developer";
const description =
  "MCA (AI & ML) student in Nagpur building generative AI pipelines, computer-vision systems, and full-stack software. Open to internships and engineering roles.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
          <p className="reveal inline-flex items-center gap-2 border border-border px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
            <span className="size-1.5 rounded-full bg-signal" />
            {profile.availability}
          </p>

          <h1 className="reveal mt-8 max-w-4xl text-5xl leading-[0.95] font-semibold text-balance sm:text-7xl lg:text-8xl">
            Building software
            <br />
            that <span className="text-signal">learns</span> from data.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <p className="reveal max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {profile.intro}
            </p>

            <dl className="reveal grid grid-cols-2 gap-x-6 gap-y-5 self-end border-t border-border pt-6">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  Role
                </dt>
                <dd className="mt-1 text-sm">{profile.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  Based in
                </dt>
                <dd className="mt-1 text-sm">{profile.location}</dd>
              </div>
              <div className="col-span-2">
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  Studying
                </dt>
                <dd className="mt-1 text-sm">
                  {profile.degree} · {profile.university}
                </dd>
              </div>
            </dl>
          </div>

          <div className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-signal px-6 py-3.5 font-mono text-[11px] tracking-[0.16em] text-primary-foreground uppercase transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_10px_30px_-12px_var(--signal)]"
            >
              View selected work →
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rule-link font-mono text-[11px] tracking-[0.16em] uppercase"
            >
              Download resume
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="px-5 py-8 transition-colors duration-500 hover:bg-foreground/[0.02] sm:px-8"
            >
              <p className="font-display text-3xl font-semibold text-signal tabular-nums sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Selected work"
            title="Three projects worth reading about."
            description="Applied machine learning, computer vision, and full-stack engineering — each built end to end."
          />

          <div className="mt-12">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <Link
            to="/projects"
            className="rule-link nudge mt-10 inline-block font-mono text-[11px] tracking-[0.16em] text-signal uppercase"
          >
            All projects →
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Toolkit"
            title="Technologies I reach for."
            description="Organized by the areas I use most across AI, software development, and data work."
          />

          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <div
                key={group.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                className="bg-background p-6 transition-colors duration-500 hover:bg-foreground/[0.03]"
              >
                <h3 className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
