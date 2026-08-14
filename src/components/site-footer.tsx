import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Currently</p>
            <p className="mt-3 max-w-sm font-display text-xl leading-snug">
              Open to AI/ML and software engineering roles.
            </p>
            <Link
              to="/contact"
              className="rule-link mt-4 inline-block font-mono text-xs tracking-[0.14em] text-signal uppercase"
            >
              Get in touch
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rule-link font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rule-link font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rule-link font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
            {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
