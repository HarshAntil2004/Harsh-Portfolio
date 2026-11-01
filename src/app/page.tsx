import Link from "next/link";
import { IntroLoader } from "@/components/IntroLoader";
import { ThemeToggle } from "@/components/ThemeToggle";

const paths = [
  { href: "/data", eyebrow: "Path 01", title: "Data & Business Analyst", body: "Python, SQL, Tableau and Excel projects, job simulations and market research." },
  { href: "/software", eyebrow: "Path 02", title: "Software Engineer", body: "Apps and sites I have built, plus what I am learning right now." },
];

export default function Landing() {
  return (
    <>
      <IntroLoader />
      <div className="fixed top-4 right-6 z-50"><ThemeToggle /></div>
      <main className="mx-auto max-w-5xl px-6 min-h-screen flex flex-col justify-center py-24">
        <div className="mono-eyebrow">Portfolio</div>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl sm:text-8xl font-semibold text-[var(--text)]">Harsh.</h1>
        <p className="mt-5 max-w-xl text-lg text-[var(--text-dim)]">Pick a path to see the work that fits it.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {paths.map((p) => (
            <Link key={p.href} href={p.href} className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)]/60 p-8 card-hover">
              <div className="mono-eyebrow">{p.eyebrow}</div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--text)]">{p.title}</h2>
              <p className="mt-3 text-[var(--text-dim)] leading-relaxed">{p.body}</p>
              <span className="mt-6 inline-block text-sm text-[var(--signal)]">Explore →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
