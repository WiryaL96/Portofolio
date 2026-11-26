"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { personal } from "@/data/personal";
import { projectNote, type Project } from "@/data/projects";
import { ProjectArt } from "@/components/projects/project-art";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 80);

    const getFocusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      previousFocus?.focus();
    };
  }, [project, onClose]);

  if (!mounted) return null;

  const hasLinks = Boolean(project?.demoUrl || project?.repoUrl);
  const mailto = project
    ? `mailto:${personal.email}?subject=${encodeURIComponent(
        `Project walkthrough — ${project.title}`,
      )}`
    : `mailto:${personal.email}`;

  return createPortal(
    <AnimatePresence>
      {project ? (
        <motion.div
          key="project-modal"
          className="fixed inset-0 z-[90] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            aria-hidden="true"
            onClick={onClose}
            className="fixed inset-0 bg-ink/85 backdrop-blur-sm"
          />

          <div className="relative flex min-h-full items-start justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 32, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.99 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="window-shadow relative my-2 w-full max-w-3xl border border-line bg-ink-2 sm:my-8"
            >
              <div
                className={cn(
                  "palette-dark relative overflow-hidden border-b border-line",
                  project.image ||
                    project.art === "hotel" ||
                    project.art === "game"
                    ? "aspect-[4/3] sm:aspect-[16/10]"
                    : "aspect-[16/9] sm:aspect-[16/8]",
                )}
              >
                {project.image ? (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 768px"
                    style={{ objectPosition: project.image.position }}
                    className="object-cover [filter:saturate(0.9)_contrast(1.04)_brightness(0.88)_sepia(0.08)]"
                  />
                ) : (
                  <ProjectArt kind={project.art} />
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/20"
                />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close project details"
                  className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center border border-beige/25 bg-ink/80 text-cream backdrop-blur-sm transition-colors hover:border-beige/60 hover:bg-ink sm:size-9"
                >
                  <X className="size-4" strokeWidth={1.5} />
                </button>
                <p className="absolute bottom-3 left-4 font-mono text-[8px] uppercase tracking-[0.2em] text-beige/70">
                  Case study / {project.index}
                </p>
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-tan">
                  <span>{project.category}</span>
                  {project.context ? (
                    <>
                      <span aria-hidden="true" className="size-0.5 rounded-full bg-brown" />
                      <span>{project.context}</span>
                    </>
                  ) : null}
                </div>

                <h3
                  id="project-modal-title"
                  className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.03em] text-cream"
                >
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <dl className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
                  <div className="bg-ink-2 p-4">
                    <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                      Category
                    </dt>
                    <dd className="mt-2 text-[13px] text-cream">
                      {project.category}
                    </dd>
                  </div>
                  <div className="bg-ink-2 p-4">
                    <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                      Context
                    </dt>
                    <dd className="mt-2 text-[13px] text-cream">
                      {project.context ?? "Not documented yet"}
                    </dd>
                  </div>
                  <div className="bg-ink-2 p-4">
                    <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                      Stack
                    </dt>
                    <dd
                      className={cn(
                        "mt-2 text-[13px]",
                        project.stack.length > 0
                          ? "text-cream"
                          : "text-muted",
                      )}
                    >
                      {project.stack.length > 0
                        ? project.stack.join(" · ")
                        : "Being documented"}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 border-l border-beige/30 pl-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                    A note
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {projectNote}
                  </p>
                </div>

                {hasLinks ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-line px-3.5 py-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-cream transition-colors hover:border-beige/50 hover:bg-surface/60"
                      >
                        Live demo
                        <ArrowUpRight className="size-3" strokeWidth={1.6} />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-line px-3.5 py-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-cream transition-colors hover:border-beige/50 hover:bg-surface/60"
                      >
                        Repository
                        <ArrowUpRight className="size-3" strokeWidth={1.6} />
                      </a>
                    ) : null}
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[11px] leading-relaxed text-tan">
                    {hasLinks
                      ? "Open it, poke around, and tell me what breaks."
                      : "No public links yet. Happy to demo it on request."}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={mailto}
                      className="group inline-flex items-center gap-2 border border-beige/60 bg-beige px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-cream"
                    >
                      Ask for a walkthrough
                      <ArrowUpRight
                        className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.8}
                      />
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="border border-line px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-beige/40 hover:text-cream"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
