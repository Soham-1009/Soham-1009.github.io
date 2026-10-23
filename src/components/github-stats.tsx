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

      <div className="mt-10 flex flex-col items-center gap-8">
        {/* Top row: Stats overview and Most Used Languages */}
        <div className="grid w-full gap-6 md:grid-cols-2 md:items-start">
          {/* Card 1: Soham Deshpande's GitHub Stats */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="flex justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Soham-1009&show_icons=true&theme=tokyonight&rank_icon=github&include_all_commits=true"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/github-stats/github-stats.svg";
              }}
              alt="Soham Deshpande's GitHub Stats"
              loading="lazy"
              className="h-auto w-full max-w-[495px] rounded-[4.5px] object-contain shadow-md"
            />
          </a>

          {/* Card 2: Most Used Languages */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            className="flex justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Soham-1009&layout=compact&theme=tokyonight&langs_count=8"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/github-stats/top-langs.svg";
              }}
              alt="Soham Deshpande's Most Used Languages"
              loading="lazy"
              className="h-auto w-full max-w-[495px] rounded-[4.5px] object-contain shadow-md"
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
            className="flex justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Soham-1009&theme=tokyonight"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/github-stats/streak-stats.svg";
              }}
              alt="Soham Deshpande's GitHub Streak Stats"
              loading="lazy"
              className="h-auto w-full max-w-[495px] rounded-[4.5px] object-contain shadow-md"
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
