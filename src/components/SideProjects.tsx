import { Reveal, SectionHeading } from "./Reveal";
import { sideProjects } from "@/content/data";
import { GithubIcon } from "./icons/GithubIcon";
import { ExternalLink } from "lucide-react";

export function SideProjects() {
  return (
    <section id="side-projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Side projects"
        title="Smaller builds & practice repos."
        lede="Quick, lower-stakes projects — practice repos and small utilities, not full case studies like the work above."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sideProjects.map((project) => (
          <Reveal key={project.name}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-6 card-hover"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium text-[var(--text)]">{project.name}</h3>
                  <ExternalLink
                    size={15}
                    className="shrink-0 text-[var(--text-faint)] group-hover:text-[var(--signal)] transition-colors"
                  />
                </div>
                <p className="mt-2 text-sm text-[var(--text-dim)] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-faint)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <GithubIcon size={15} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
