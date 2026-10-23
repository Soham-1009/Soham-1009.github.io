import type * as React from "react";
import { profile } from "@/data/portfolio";

export function GitHubStats() {
  return (
    <div>
      <div data-reveal className="flex flex-col gap-2">
        <p className="eyebrow">Activity</p>
        <h2 className="text-3xl font-display font-semibold sm:text-4xl">GitHub Stats</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Real-time metrics tracking contributions, languages, and coding streaks across my
          repositories.
        </p>
      </div>
      <div className="mt-6 border-b border-border" />

      <div className="mt-12 flex flex-col items-center gap-8">
        {/* Top row: Stats overview and Most Used Languages */}
        <div className="grid w-full gap-6 md:grid-cols-2">
          {/* Card 1: Soham Deshpande's GitHub Stats */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group relative flex items-center justify-center overflow-hidden rounded-lg border border-border bg-[#151b23]/90 p-3 shadow-lg backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)]"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Soham-1009&show_icons=true&theme=tokyonight"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/github-stats/github-stats.svg";
              }}
              alt="Soham Deshpande's GitHub Stats"
              loading="lazy"
              className="h-auto w-full max-w-[495px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </a>

          {/* Card 2: Most Used Languages */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            className="group relative flex items-center justify-center overflow-hidden rounded-lg border border-border bg-[#151b23]/90 p-3 shadow-lg backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)]"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Soham-1009&layout=compact&theme=tokyonight"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/github-stats/top-langs.svg";
              }}
              alt="Soham Deshpande's Most Used Languages"
              loading="lazy"
              className="h-auto w-full max-w-[495px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </a>
        </div>

        {/* Bottom row: Streak Stats (Centered) */}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="group relative flex w-full max-w-xl items-center justify-center overflow-hidden rounded-lg border border-border bg-[#151b23]/90 p-3 shadow-lg backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)]"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Soham-1009&theme=tokyonight"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/github-stats/streak-stats.svg";
            }}
            alt="Soham Deshpande's GitHub Streak Stats"
            loading="lazy"
            className="h-auto w-full max-w-[495px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </a>

        {/* Contribution Activity Graph Link */}
        <div data-reveal className="mt-2 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider text-signal underline underline-offset-8 transition-colors duration-300 hover:text-foreground"
          >
            GitHub contribution activity graph
          </a>
        </div>
      </div>
    </div>
  );
}
