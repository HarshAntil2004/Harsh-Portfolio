import { Nav } from "@/components/Nav";
import { SoftwarePath, SoftwareLearning } from "@/components/SoftwarePath";
import { VibeCoded } from "@/components/VibeCoded";
import { Experience } from "@/components/Experience";
import { softwareInternships, softwareSimulations } from "@/content/data";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#internship", label: "Experience" },
  { href: "#vibe-coded", label: "Vibe-coded" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
  { href: "/data", label: "Data path →" },
];

export default function SoftwareRoute() {
  return (
    <>
      <ScrollProgress />
      <Nav links={links} />
      <main>
        <SoftwarePath />
        <Experience items={[...softwareInternships, ...softwareSimulations]} id="internship" eyebrow="Experience" title="Internship and job simulation." lede="Building real systems end to end, from data model to tests." />
        <VibeCoded />
        <SoftwareLearning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
