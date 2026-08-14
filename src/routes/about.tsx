import type * as React from "react";

import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";
import { certifications, profile, timeline } from "@/data/portfolio";

const title = "About — Soham Deshpande";
const description =
  "MCA (AI & ML) student at Ramdeobaba University, Nagpur. Background, education timeline, and verified Google Cloud and Coursera certifications.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="About" title="A developer focused on practical AI." />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div
          data-reveal
          className="space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          <p>
            I'm an MCA student specializing in Artificial Intelligence and Machine Learning, based
            in {profile.location}.
          </p>
          <p>
            I build practical AI systems, full-stack applications, computer-vision pipelines, and
            data-driven tools — with a focus on turning ideas into working software rather than
            stopping at a notebook.
          </p>
          <p>
            My current work spans generative AI, satellite image processing, NLP, and modern
            developer tooling. I'm looking for opportunities where I can contribute to real products
            while continuing to grow as an engineer.
          </p>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="self-start border border-border p-6 transition-colors duration-500 hover:border-signal/40"
        >
          <p className="eyebrow">Snapshot</p>
          <dl className="mt-5 space-y-4">
            {[
              ["Role", profile.role],
              ["Degree", profile.degree],
              ["University", profile.university],
              ["Location", profile.location],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-24">
        <SectionHeading eyebrow="Path" title="How I got here." />

        <ol className="mt-10 border-l border-border">
          {timeline.map((entry, i) => (
            <li
              key={entry.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group relative py-6 pl-8"
            >
              <span className="absolute top-8 -left-[4.5px] size-2 rounded-full bg-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150" />
              <p className="font-mono text-[10px] tracking-[0.16em] text-signal uppercase">
                {entry.period}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">{entry.title}</h3>
              <p className="mt-1 text-sm text-foreground/80">{entry.org}</p>
              <p className="mt-1 text-sm text-muted-foreground">{entry.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Certifications */}
      <div className="mt-24">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified achievements."
          description="Professional certifications from Google Cloud and Coursera."
        />

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <a
              key={cert.title}
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
              className="group block bg-background p-6 transition-colors duration-500 hover:bg-foreground/[0.03]"
            >
              <img
                src={cert.image}
                alt={`${cert.title} certificate issued by ${cert.issuer}`}
                loading="lazy"
                className="mb-5 aspect-[4/3] w-full border border-border object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
              />
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                {cert.issuer} · {cert.date}
              </p>
              <h3 className="mt-3 text-base leading-snug font-medium text-pretty transition-colors group-hover:text-signal">
                {cert.title}
              </h3>
              <span className="mt-3 inline-block font-mono text-[10px] tracking-[0.14em] text-signal uppercase">
                View certificate →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
