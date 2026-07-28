import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { SideProjects } from "@/components/SideProjects";
import { VibeCoded } from "@/components/VibeCoded";
import { Credentials } from "@/components/Credentials";
// import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { IntroLoader } from "@/components/IntroLoader";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <SideProjects />
        <VibeCoded />
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
