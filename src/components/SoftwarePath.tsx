import { Reveal, SectionHeading } from "./Reveal";
import { GithubIcon } from "./icons/GithubIcon";
import { ExternalLink } from "lucide-react";
import { softwareProjects, softwareLearning } from "@/content/data";

export function SoftwarePath() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-8">
        <div className="mono-eyebrow">Software engineer path</div>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-7xl font-semibold text-[var(--text)]">Building things that work.</h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--text-dim)] leading-relaxed">
          I&apos;m Harsh, a Computer Science &amp; Engineering graduate building apps and websites. This page only shows work that is public on GitHub.
        </p>
      </section>
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Projects" title="Software I have built." lede="Real apps with code you can read." />
        <div className="grid gap-5 sm:grid-cols-2">
          {softwareProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06} className={p.featured ? "sm:col-span-2" : ""}>
              <div className={`flex h-full flex-col rounded-2xl border p-6 card-hover ${p.featured ? "border-[var(--signal)] bg-[var(--surface)]" : "border-[var(--border)] bg-[var(--surface)]/60"}`}>
                {p.featured && <span className="mb-3 self-start text-xs px-2.5 py-1 rounded-full bg-[var(--signal)] text-[var(--bg)] font-medium">Featured project</span>}
                <h3 className={`font-medium text-[var(--text)] ${p.featured ? "text-xl" : ""}`}>{p.name}</h3>
                <p className="mt-2 text-sm text-[var(--text-dim)] leading-relaxed">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-[var(--text-dim)] list-disc pl-5">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-dim)]">{s}</span>
                  ))}
                </div>
                <div className="mt-auto pt-5 flex items-center gap-4 text-sm">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[var(--text)] hover:text-[var(--signal)]"><GithubIcon size={15} /> Code</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[var(--text)] hover:text-[var(--signal)]"><ExternalLink size={15} /> Live</a>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function SoftwareLearning() {
  return (
    <section id="learning" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Learning in progress" title="What I am working on next." lede="Skills I am actively building, shown honestly." />
      <div className="grid gap-5 sm:grid-cols-2">
        {softwareLearning.map((l, i) => (
          <Reveal key={l.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-dashed border-[var(--signal-dim)] p-6">
              <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--signal-dim)] text-[var(--signal)]">Learning in progress</span>
              <h3 className="mt-4 font-medium text-[var(--text)]">{l.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-dim)] leading-relaxed">{l.body}</p>
              {l.github && <a href={l.github} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--text)] hover:text-[var(--signal)]"><GithubIcon size={15} /> Repo</a>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
