import { Reveal, SectionHeading } from "./Reveal";
import { vibeCodedProjects } from "@/content/data";
import { GithubIcon } from "./icons/GithubIcon";
import { ExternalLink, Sparkles } from "lucide-react";

export function VibeCoded() {
  return (
    <section id="vibe-coded" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Vibe-coded"
        title="Built fast, with AI in the loop."
        lede="Quick builds made with AI-assisted ('vibe') coding — prototyped for speed rather than production polish."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {vibeCodedProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06}>
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
                <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-faint)]">
                  <Sparkles size={11} className="text-[var(--signal)]" />
                  Vibe-coded
                </span>
                <GithubIcon size={15} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
