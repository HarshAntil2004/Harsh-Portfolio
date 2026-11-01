import { Nav } from "@/components/Nav";
import { SoftwarePath, SoftwareLearning } from "@/components/SoftwarePath";
import { VibeCoded } from "@/components/VibeCoded";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const links = [
  { href: "#projects", label: "Projects" },
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
        <VibeCoded />
        <SoftwareLearning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
