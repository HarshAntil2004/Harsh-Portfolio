import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { SideProjects } from "@/components/SideProjects";
import { Credentials } from "@/components/Credentials";
// import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function DataPath() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <SideProjects />
        <Experience />
        <Skills />
        <Credentials />
        {/* <Testimonials /> */}
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
