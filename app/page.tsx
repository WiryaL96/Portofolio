import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experiments } from "@/components/sections/experiments";
import { Hero } from "@/components/hero/hero";
import { Marquee } from "@/components/sections/marquee";
import { Projects } from "@/components/sections/projects";
import { Toolbox } from "@/components/sections/toolbox";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Toolbox />
      <Projects />
      <Experiments />
      <Contact />
    </>
  );
}
