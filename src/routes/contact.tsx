import type * as React from "react";

import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/portfolio";

const title = "Contact — Soham Deshpande";
const description =
  "Get in touch with Soham Deshpande about AI/ML internships, software engineering roles, or project collaboration in Nagpur and remote.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    detail: "soham.deshpande100904@gmail.com",
    href: "mailto:soham.deshpande100904@gmail.com",
  },
  { label: "Phone", detail: "+91 99230 99779", href: "tel:+919923099779" },
  { label: "LinkedIn", detail: "Connect with me", href: profile.linkedin },
  { label: "GitHub", detail: "See my code", href: profile.github },
  { label: "Resume", detail: "Download the PDF", href: profile.resume },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk."
        description="Open to internships and full-time software development roles in AI/ML, data science, and product engineering."
      />

      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
        {channels.map((channel, i) => (
          <a
            key={channel.label}
            href={channel.href}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            className="group bg-background p-8 transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-secondary"
          >
            <p className="font-display text-xl font-semibold transition-colors group-hover:text-signal">
              {channel.label}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{channel.detail}</p>
            <span className="mt-6 block font-mono transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 text-[11px] tracking-[0.16em] text-signal uppercase">
              Open →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <div data-reveal>
          <p className="eyebrow">Location</p>
          <p className="mt-3 font-display text-2xl">{profile.location}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Available for on-site roles in Nagpur and remote work elsewhere.
          </p>
        </div>
        <div data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
          <p className="eyebrow">Response time</p>
          <p className="mt-3 font-display text-2xl">Within a day or two</p>
          <p className="mt-2 text-sm text-muted-foreground">
            LinkedIn is the fastest way to reach me for role enquiries.
          </p>
        </div>
      </div>
    </div>
  );
}
