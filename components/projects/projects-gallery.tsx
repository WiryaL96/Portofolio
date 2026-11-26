"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";
import { projects, type Project } from "@/data/projects";
import { ProjectArt } from "@/components/projects/project-art";
import { ProjectModal } from "@/components/projects/project-modal";
import { cn } from "@/lib/utils";

const cardLayout = [
  "lg:col-span-7 lg:col-start-1 lg:row-start-1",
  "lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-24",
  "lg:col-span-5 lg:col-start-1 lg:row-start-2",
  "lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:mt-24",
  "lg:col-span-7 lg:col-start-1 lg:row-start-3",
  "lg:col-span-5 lg:col-start-8 lg:row-start-3 lg:mt-24",
];

const artAspect = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[16/10]",
  "aspect-[4/3]",
  "aspect-[4/5]",
];

export function ProjectsGallery() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="mt-16 grid gap-y-16 lg:mt-24 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-24">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            id={`project-${project.slug}`}
            className={cn("group relative", cardLayout[index])}
          >
            <a
              href={`#project-${project.slug}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                event.preventDefault();
                setSelected(project);
              }}
              className="project-card block"
            >
              <div
                className={cn(
                  "relative overflow-hidden border border-line bg-ink-2 transition-colors duration-500 group-hover:border-beige/30",
                  artAspect[index],
                )}
              >
                {project.image ? (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    quality={88}
                    sizes="(max-width: 1023px) 92vw, 56vw"
                    style={{ objectPosition: project.image.position }}
                    className="project-art object-cover [filter:saturate(0.88)_contrast(1.04)_brightness(0.86)_sepia(0.1)]"
                  />
                ) : (
                  <ProjectArt kind={project.art} className="project-art" />
                )}
                <div
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-0",
                    project.image
                      ? "bg-gradient-to-t from-black/65 via-black/10 to-black/20"
                      : "bg-gradient-to-t from-ink/35 via-transparent to-transparent",
                  )}
                />
                {project.image ? (
                  <span className="palette-dark absolute bottom-3 left-3 inline-flex items-center gap-2 border border-beige/20 bg-ink/60 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-beige backdrop-blur-sm">
                    <span className="size-1 rounded-full bg-beige/80" />
                    Teras Kayumanis / Bandung
                  </span>
                ) : null}
                <span className="palette-dark absolute right-3 top-3 hidden items-center gap-1.5 border border-beige/20 bg-ink/60 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-beige backdrop-blur-sm sm:inline-flex">
                  Case study
                  <ArrowUpRight className="size-3" strokeWidth={1.6} />
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-tan">
                    {project.index} / {project.category}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-tan">
                    {project.image ? "Site photograph" : "Preview study"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.05] tracking-[-0.02em] text-cream transition-colors duration-300 group-hover:text-beige">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-beige">
                  Open case study
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-beige/50 transition-all duration-300 group-hover:w-10"
                  />
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />

      <div className="mt-20 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          Most previews above are illustrated studies; the Teras Kayumanis view
          is a photograph of the real place. Source for several builds lives on
          GitHub — ask if you want a walkthrough.
        </p>
        <a
          href={personal.githubUrl || `mailto:${personal.email}`}
          {...(personal.githubUrl
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
          className="group inline-flex w-fit shrink-0 items-center gap-2 border border-line px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-cream transition-colors hover:border-beige/50 hover:bg-surface/60"
        >
          {personal.githubUrl ? "Browse GitHub" : "Ask for the code"}
          <ArrowUpRight
            className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.6}
          />
        </a>
      </div>
    </>
  );
}
