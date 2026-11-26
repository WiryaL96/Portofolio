import { RevealInView } from "@/components/ui/reveal-in-view";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsGallery } from "@/components/projects/projects-gallery";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-line/70 py-24 sm:py-28 lg:py-36"
    >
      <div className="section-shell">
        <RevealInView>
          <SectionHeading
            id="projects-heading"
            index="03"
            label="Projects"
            title={
              <>
                Things I&apos;ve{" "}
                <span className="normal-case italic text-beige">built.</span>
              </>
            }
            description="Six systems, six different shapes. A restaurant flow, a cinema, a complaint desk, a running log, a hotel operation, and a small game world — each one started with a blank editor."
          />
        </RevealInView>

        <ProjectsGallery />
      </div>
    </section>
  );
}
