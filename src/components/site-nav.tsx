import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const links = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-base font-semibold tracking-tight">Soham</span>
          <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            AI/ML
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-sm px-2.5 py-1.5 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground sm:px-3"
              activeProps={{ className: "text-signal" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden rounded-sm border border-signal/40 px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-signal uppercase transition-colors hover:bg-signal-soft sm:inline-block"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
