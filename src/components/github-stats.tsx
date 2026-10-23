import type * as React from "react";
import { profile } from "@/data/portfolio";

export function GitHubStats() {
  return (
    <div className="w-full">
      <div data-reveal className="w-full">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl lg:text-4xl">
          GitHub Stats
        </h2>
        <div className="mt-4 border-b border-border" />
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 sm:gap-8">
        {/* Top row: Stats overview and Most Used Languages side-by-side with equal height */}
        <div className="flex w-full flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Card 1: Soham Deshpande's GitHub Stats */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="flex items-center justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Soham-1009&show_icons=true&include_all_commits=true&theme=tokyonight&hide_border=true&rank_icon=github"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/github-stats/github-stats.svg";
              }}
              alt="Soham Deshpande's GitHub Stats"
              loading="lazy"
              className="h-auto max-h-[195px] w-full max-w-[467px] rounded-[4.5px] object-contain shadow-md sm:h-[195px] sm:w-auto"
            />
          </a>

          {/* Card 2: Most Used Languages (Compact layout, 8 languages, equal height to Card 1) */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            className="flex items-center justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Soham-1009&layout=compact&langs_count=8&theme=tokyonight&hide_border=true"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/github-stats/top-langs.svg";
              }}
              alt="Soham Deshpande's Most Used Languages"
              loading="lazy"
              className="h-auto max-h-[195px] w-full max-w-[467px] rounded-[4.5px] object-contain shadow-md sm:h-[195px] sm:w-auto"
            />
          </a>
        </div>

        {/* Bottom row: Streak Stats (Centered) */}
        <div className="flex w-full justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            className="flex items-center justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src="https://streak-stats.demolab.com?user=Soham-1009&theme=tokyonight&hide_border=true"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/github-stats/streak-stats.svg";
              }}
              alt="Soham Deshpande's GitHub Streak Stats"
              loading="lazy"
              className="h-auto max-h-[195px] w-full max-w-[495px] rounded-[4.5px] object-contain shadow-md sm:h-[195px] sm:w-auto"
            />
          </a>
        </div>

        {/* Contribution Activity Graph Link */}
        <div data-reveal className="mt-2 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-wide text-[#58a6ff] underline underline-offset-4 transition-colors duration-300 hover:text-[#79c0ff]"
          >
            GitHub contribution activity graph
          </a>
        </div>
      </div>
    </div>
  );
}
