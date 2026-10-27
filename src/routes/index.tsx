import type * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { GitHubStats } from "@/components/github-stats";
import { profile, projects } from "@/data/portfolio";

const title = "Soham Deshpande · AI & ML Developer";
const description =
  "MCA (AI & ML) postgraduate engineering machine learning models, computer vision systems, and full-stack software. Open to internships and full-time engineering roles.";

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
  const flagship = projects.find((p) => p.slug === "infranova-ai") ?? projects[0];
  const scamshield = projects.find((p) => p.slug === "scamshield-ai") ?? projects[1];
  const lstm = projects.find((p) => p.slug === "lstm-language-model") ?? projects[2];

  return (
    <div className="space-y-28 sm:space-y-36">
      {/* 1. HERO: card-over-dim-room */}
      <section className="relative min-h-[85svh] flex items-center justify-center overflow-hidden px-5 sm:px-8 lg:px-12 py-12">
        {/* Atmospheric video backdrop with poster fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/nasa-set-to-launch-shoebox-sized-satellite-poster.jpg"
            className="h-full w-full object-cover filter brightness-[0.38] contrast-[1.05]"
          >
            <source
              src="/assets/nasa-set-to-launch-shoebox-sized-satellite.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/55" />
        </div>

        {/* Centred programme card in surface tone */}
        <div className="taste-reveal taste-reveal-1 relative z-10 w-full max-w-3xl rounded-lg bg-surface p-8 sm:p-12 text-foreground transition-transform duration-300">
          {/* Card Top Edge: Name as title & explanation line (>=18px and >=6 words) */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-medium text-signal">
              Postgraduate Machine Learning Developer engineering computer vision and generative systems.
            </p>
          </div>

          {/* Facts list */}
          <div className="mt-6 space-y-2 text-sm text-foreground/90">
            <p className="font-medium text-foreground">{profile.degree}</p>
            <p className="text-muted-foreground">{profile.university} · {profile.location}</p>
            <p className="text-[13px] text-muted-foreground">Focusing on Computer Vision, Generative AI &amp; Full-Stack ML Systems</p>
          </div>

          {/* Supporting paragraph */}
          <p className="mt-6 text-base leading-relaxed text-foreground text-pretty sm:text-lg max-w-[65ch]">
            {profile.intro}
          </p>

          {/* Card Bottom Edge: Action button, secondary link, status */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-primary">
                Explore Projects →
              </Link>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Resume
              </a>
            </div>
            <span className="text-sm text-foreground/80 font-medium">
              {profile.availability}
            </span>
          </div>
        </div>
      </section>

      {/* 2. INTRO: intro-right-half-paragraph */}
      <section className="taste-reveal taste-reveal-2 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left columns (1-5): authentic photograph and caption note */}
          <div className="lg:col-span-5 space-y-4">
            <div className="overflow-hidden rounded-md bg-surface transition-transform duration-300 hover:scale-[1.01]">
              <img
                src="/assets/satellite-image-of-france-in-august-2002.jpg"
                alt="Multispectral satellite imagery of Earth captured by NASA MODIS"
                className="w-full h-auto object-cover filter contrast-[1.02]"
                loading="lazy"
              />
            </div>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              MODIS Terra satellite capture of Western Europe. Multispectral Earth observation data processed for cross-spectral synthetic translation benchmarks.
            </p>
          </div>

          {/* Right columns (7-12): punchy 3-word headline + statement paragraph */}
          <div className="lg:col-start-7 lg:col-span-6 space-y-6 pt-2">
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Applied Machine Learning
            </h2>
            <p className="text-lg leading-relaxed text-foreground/95 sm:text-xl max-w-[55ch]">
              Translating raw multispectral satellite bands into calibrated RGB rasters, training custom causal language models from scratch, and deploying explainable fraud detection engines in lightweight browser environments.
            </p>
            <div className="pt-2">
              <Link to="/about" className="rule-link text-sm font-medium text-foreground hover:text-signal">
                Read developer background and certifications →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORK: work-loose-scatter */}
      <section className="taste-reveal taste-reveal-3 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Work
          </h2>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {/* Project 1: InfraNova AI */}
          <article className="taste-reveal taste-reveal-4 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 overflow-hidden rounded-md bg-surface transition-transform duration-300 hover:scale-[1.01]">
              <img
                src="/assets/satellite-image-of-france-in-august-2002.jpg"
                alt="InfraNova AI: Thermal infrared to RGB satellite synthesis"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                {flagship.title}
                <span className="text-sm font-normal text-signal ml-3">Flagship 2026</span>
              </h3>
              <p className="text-base font-medium text-foreground/90">
                {flagship.tagline}
              </p>
              <p className="text-base leading-relaxed text-foreground/90 max-w-[60ch]">
                {flagship.summary}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {flagship.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-surface px-3 py-1.5 text-[13px] text-foreground font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-3">
                {flagship.demo && (
                  <a
                    href={flagship.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4 min-h-[40px]"
                  >
                    Live Demo ↗
                  </a>
                )}
                <a
                  href={flagship.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link text-sm font-medium text-foreground hover:text-signal"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 2: ScamShield AI */}
          <article className="taste-reveal taste-reveal-5 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                {scamshield.title}
                <span className="text-sm font-normal text-muted-foreground ml-3">AI / ML · 2026</span>
              </h3>
              <p className="text-base font-medium text-foreground/90">
                {scamshield.tagline}
              </p>
              <p className="text-base leading-relaxed text-foreground/90 max-w-[60ch]">
                {scamshield.summary}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {scamshield.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-surface px-3 py-1.5 text-[13px] text-foreground font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="pt-3">
                <a
                  href={scamshield.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link text-sm font-medium text-foreground hover:text-signal"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 overflow-hidden rounded-md bg-surface p-4 order-1 lg:order-2 transition-transform duration-300 hover:scale-[1.01]">
              <img
                src="/assets/convolutional-neural-network-maxpooling.png"
                alt="ScamShield AI Architecture and Feature Extraction"
                className="w-full h-auto object-contain filter invert opacity-90"
                loading="lazy"
              />
            </div>
          </article>

          {/* Project 3: LSTM Language Model */}
          <article className="taste-reveal taste-reveal-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                {lstm.title}
                <span className="text-sm font-normal text-muted-foreground ml-3">NLP · 2026</span>
              </h3>
              <p className="text-base font-medium text-foreground/90">
                {lstm.tagline}
              </p>
              <p className="text-base leading-relaxed text-foreground/90 max-w-[60ch]">
                {lstm.summary}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {lstm.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-surface px-3 py-1.5 text-[13px] text-foreground font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="pt-3">
                <a
                  href={lstm.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link text-sm font-medium text-foreground hover:text-signal"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface p-8 rounded-md space-y-4 transition-transform duration-300 hover:scale-[1.01]">
              <p className="text-[13px] font-medium text-signal">WikiText-103 · 2× NVIDIA Tesla T4 GPUs</p>
              <blockquote className="text-base text-foreground italic leading-relaxed max-w-[55ch]">
                "Real-time autoregressive text completion with custom vocabulary tokenization, temperature scaling, and nucleus (Top-P) sampling."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 pt-4 text-sm text-muted-foreground">
                <div>
                  <p className="text-foreground font-semibold text-base">26.75M</p>
                  <p className="text-[13px]">Parameters</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-base">30,000</p>
                  <p className="text-[13px]">Vocabulary</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-base">2-Layer</p>
                  <p className="text-[13px]">Causal LSTM</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Link at the bottom of the Work section */}
        <div className="pt-16 text-center">
          <Link to="/projects" className="btn-secondary">
            View all 5 projects in catalog →
          </Link>
        </div>
      </section>

      {/* 4. STATS: stats-figure-on-the-photographs-edge */}
      <section className="taste-reveal taste-reveal-7 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-lg bg-surface">
          <img
            src="/assets/committee-on-earth-observation-satellites-ceos-fleet.jpg"
            alt="Committee on Earth Observation Satellites Fleet - NASA Scientific Visualization Studio"
            className="w-full h-auto object-cover min-h-[380px] max-h-[520px] filter brightness-[0.45] contrast-[1.08]"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-background/60" />

          {/* Giant figure bottom-left and sentence right */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none">
                13.74 dB
              </p>
              <p className="mt-2 text-sm text-signal font-medium">PSNR Evaluation Benchmark</p>
            </div>
            <div className="max-w-md text-base text-foreground sm:text-right leading-relaxed">
              Peak signal-to-noise ratio achieved synthesizing RGB optical imagery from Landsat 9 thermal infrared bands across 1,259 test samples.
            </div>
          </div>
        </div>

        {/* Supporting figures below */}
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="bg-surface/50 p-6 rounded-md">
            <p className="text-3xl font-bold text-foreground">11.37M</p>
            <p className="mt-1 text-sm text-muted-foreground">Parameters in ResNet Generator</p>
          </div>
          <div className="bg-surface/50 p-6 rounded-md">
            <p className="text-3xl font-bold text-foreground">26.75M</p>
            <p className="mt-1 text-sm text-muted-foreground">Parameters in Causal LM</p>
          </div>
          <div className="bg-surface/50 p-6 rounded-md">
            <p className="text-3xl font-bold text-foreground">12</p>
            <p className="mt-1 text-sm text-muted-foreground">Open-Source Repositories</p>
          </div>
          <div className="bg-surface/50 p-6 rounded-md">
            <p className="text-3xl font-bold text-foreground">20+</p>
            <p className="mt-1 text-sm text-muted-foreground">Technologies &amp; Frameworks</p>
          </div>
        </div>
      </section>

      {/* 5. TELEMETRY: GitHub activity */}
      <section className="taste-reveal taste-reveal-8 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Engineering Telemetry
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Live GitHub commits, streak consistency, and language distribution across repositories.
          </p>
        </div>
        <GitHubStats />
      </section>

      {/* 6. CONTACT: contact-email-display */}
      <section className="taste-reveal taste-reveal-9 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="rounded-lg bg-surface p-8 sm:p-14 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/90">
                Available for machine learning engineering, computer vision research, and software development roles. Open to both remote teams and relocation.
              </p>
            </div>
            <span className="text-sm text-signal font-medium bg-surface-raised px-3 py-1.5 rounded">
              Active Availability
            </span>
          </div>

          {/* Email as giant display text */}
          <div className="py-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground hover:text-signal transition-colors break-all"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4 text-sm text-foreground/90">
            <p>{profile.location} · UTC+5:30</p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rule-link hover:text-signal"
              >
                GitHub Profile ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rule-link hover:text-signal"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="rule-link hover:text-signal"
              >
                Download Resume PDF ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
