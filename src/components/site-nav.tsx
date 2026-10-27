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
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-signal">
            {profile.name}
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className={`rounded-md px-2.5 sm:px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground ${
                link.to === "/" ? "hidden sm:inline-block" : ""
              }`}
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden rounded-md bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent sm:inline-block"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
