import { Link } from "@tanstack/react-router";
import { profile, projects } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-32 pb-16 pt-24 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* 4 clean columns */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-12 text-sm">
          <div>
            <p className="font-medium text-foreground">Navigation</p>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-foreground">
                  Index
                </Link>
              </li>
              <li>
                <Link to="/projects" className="transition-colors hover:text-foreground">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-foreground">Selected Work</p>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              {projects.slice(0, 3).map((project) => (
                <li key={project.slug}>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/projects" className="transition-colors hover:text-foreground">
                  All {projects.length} Projects →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-foreground">Connect</p>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-signal"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-signal"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-signal"
                >
                  Direct Email
                </a>
              </li>
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-signal"
                >
                  Resume PDF
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-foreground">Visual Archive</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-muted-foreground leading-relaxed">
              <li>
                <a
                  href="https://commons.wikimedia.org/wiki/File:Satellite_image_of_France_in_August_2002.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-foreground"
                >
                  MODIS France (NASA/GSFC)
                </a>
              </li>
              <li>
                <a
                  href="https://images.nasa.gov/details/GSFC_20170802_m12602_Dellingr_deploymentphotoseq"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-foreground"
                >
                  NASA Dellingr CubeSat (GSFC)
                </a>
              </li>
              <li>
                <a
                  href="https://commons.wikimedia.org/wiki/File:Committee_on_Earth_Observation_Satellites_(CEOS)_-_Fleet_-_2026_(SVS5621).jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-foreground"
                >
                  CEOS Fleet 2026 (NASA SVS)
                </a>
              </li>
              <li>
                <a
                  href="https://commons.wikimedia.org/wiki/File:Convolutional_neural_network,_maxpooling.png"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-foreground"
                >
                  CNN MaxPooling (CC BY 4.0)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Space before wordmark */}
        <div className="mt-20 pt-8">
          {/* Full-width SVG wordmark */}
          <div className="w-full select-none opacity-20 hover:opacity-30 transition-opacity">
            <svg
              viewBox="0 0 1100 100"
              className="w-full h-auto text-foreground fill-current"
              aria-hidden="true"
            >
              <text
                x="50%"
                y="75%"
                textAnchor="middle"
                fontSize="92"
                fontWeight="800"
                letterSpacing="0.06em"
              >
                SOHAM DESHPANDE
              </text>
            </svg>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[13px] text-muted-foreground">
            <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
            <p>Designed under the Dark Room archetype · Engineered with TanStack Start &amp; Vite</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
