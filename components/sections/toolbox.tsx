import { skillCategories } from "@/data/skills";
import { RevealInView } from "@/components/ui/reveal-in-view";
import { SectionHeading } from "@/components/ui/section-heading";
import { ToolboxExplorer } from "@/components/skills/toolbox-explorer";

export function Toolbox() {
  const totalTools = skillCategories.reduce(
    (total, category) => total + category.items.length,
    0,
  );

  return (
    <section
      id="toolbox"
      aria-labelledby="toolbox-heading"
      className="relative border-t border-line/70 py-24 sm:py-28 lg:py-32"
    >
      <div className="section-shell">
        <RevealInView>
          <SectionHeading
            id="toolbox-heading"
            index="02"
            label="Toolbox"
            title={
              <>
                My{" "}
                <span className="normal-case italic text-beige">toolbox</span>
              </>
            }
            description={
              <p>
                The languages, frameworks, and tools I&apos;ve studied and used
                so far — {totalTools} of them, indexed. Open a drawer and take
                a look.
              </p>
            }
          />
        </RevealInView>

        <RevealInView delay={0.08} className="mt-14 lg:mt-20">
          <ToolboxExplorer />
        </RevealInView>
      </div>
    </section>
  );
}
