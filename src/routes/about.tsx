import type * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";
import { certifications, profile, timeline } from "@/data/portfolio";

const title = "About · Soham Deshpande";
const description =
  "MCA (AI & ML) student at Ramdeobaba University, Nagpur. Background, education timeline, and verified Google Cloud, Coursera, and NVIDIA certifications.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12 space-y-24">
      <section>
        <SectionHeading title="A developer focused on practical AI." />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div
            data-reveal
            className="space-y-5 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg"
          >
            <p>
              I am an MCA student specializing in Artificial Intelligence and Machine Learning, based
              in {profile.location}.
            </p>
            <p>
              I build practical AI systems, full-stack applications, computer-vision pipelines, and
              data-driven tools, with a focus on turning ideas into working software rather than
              stopping at a notebook.
            </p>
            <p>
              My current work spans generative AI, satellite image processing, NLP, and modern
              developer tooling. I am looking for opportunities where I can contribute to real products
              while continuing to grow as an engineer.
            </p>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="self-start rounded-xl bg-surface p-6 sm:p-8"
          >
            <h3 className="text-base font-semibold text-foreground">Snapshot</h3>
            <dl className="mt-5 space-y-4">
              {[
                ["Role", profile.role],
                ["Degree", profile.degree],
                ["University", profile.university],
                ["Location", profile.location],
              ].map(([label, value]) => (
                <div key={label} className="pb-2">
                  <dt className="text-[13px] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <SectionHeading title="Education and Journey" />

        <div className="mt-8 grid gap-4">
          {timeline.map((entry, i) => (
            <div
              key={entry.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="rounded-xl bg-surface/50 p-6 transition-colors hover:bg-surface sm:p-8"
            >
              <span className="text-[13px] font-medium text-signal">
                {entry.period}
              </span>
              <h3 className="mt-1 text-xl font-semibold text-foreground">{entry.title}</h3>
              <p className="mt-1 text-sm font-medium text-foreground/90">{entry.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <SectionHeading
          title="Verified achievements."
          description="Professional certifications from Google Cloud, Coursera, and NVIDIA."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <a
              key={cert.title}
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
              className="group block rounded-xl bg-surface/50 p-6 transition-colors hover:bg-surface sm:p-8"
            >
              <div className="overflow-hidden rounded-lg bg-background/50">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate issued by ${cert.issuer}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-4 text-[13px] text-muted-foreground">
                {cert.issuer} · {cert.date}
              </p>
              <h3 className="mt-2 text-base font-semibold text-pretty transition-colors group-hover:text-signal">
                {cert.title}
              </h3>
              <span className="rule-link mt-3 inline-block text-[13px] font-medium text-signal">
                View credential document →
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
