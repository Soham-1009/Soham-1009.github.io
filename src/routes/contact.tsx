import type * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/portfolio";

const title = "Contact · Soham Deshpande";
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
    detail: profile.email,
    href: `mailto:${profile.email}`,
  },
  { label: "Phone", detail: "+91 99230 99779", href: "tel:+919923099779" },
  { label: "LinkedIn", detail: "Connect with me", href: profile.linkedin },
  { label: "GitHub", detail: "See my code", href: profile.github },
  { label: "Resume", detail: "Download the PDF", href: profile.resume },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12 space-y-20">
      <section>
        <SectionHeading
          title="Let's talk."
          description="Open to internships and full-time software development roles in AI/ML, data science, and product engineering."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, i) => {
            const isExternal =
              !channel.href.startsWith("mailto:") && !channel.href.startsWith("tel:");
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                className="group rounded-xl bg-surface/50 p-6 transition-colors hover:bg-surface sm:p-8"
              >
                <h3 className="text-xl font-semibold transition-colors group-hover:text-signal">
                  {channel.label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{channel.detail}</p>
                <span className="rule-link mt-6 inline-block text-[13px] font-medium text-signal">
                  Open channel →
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section>
        <div className="grid gap-6 sm:grid-cols-2">
          <div data-reveal className="rounded-xl bg-surface/50 p-6 sm:p-8">
            <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
            <p className="mt-2 text-2xl font-semibold">{profile.location}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Available for on-site roles in Nagpur and remote work elsewhere.
            </p>
          </div>
          <div
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            className="rounded-xl bg-surface/50 p-6 sm:p-8"
          >
            <h3 className="text-sm font-medium text-muted-foreground">Response time</h3>
            <p className="mt-2 text-2xl font-semibold">Within a day or two</p>
            <p className="mt-2 text-sm text-muted-foreground">
              LinkedIn and email are the fastest ways to reach me for role enquiries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
