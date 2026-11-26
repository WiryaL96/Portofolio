"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { skillCategories, toolboxNote } from "@/data/skills";
import { cn } from "@/lib/utils";

export function ToolboxExplorer() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const reducedMotion = useReducedMotion();

  const activeIndex = skillCategories.findIndex(
    (category) => category.id === activeId,
  );
  const active = skillCategories[activeIndex] ?? skillCategories[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-4">
        <div className="border-t border-line">
          {skillCategories.map((category, index) => {
            const isActive = category.id === activeId;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                aria-pressed={isActive}
                className={cn(
                  "group flex w-full items-center gap-4 border-b border-line px-1 py-4 text-left transition-colors duration-300",
                  isActive
                    ? "text-beige"
                    : "text-cream/65 hover:text-cream",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[9px] tracking-[0.12em] transition-colors",
                    isActive ? "text-beige" : "text-tan",
                  )}
                >
                  0{index + 1}
                </span>
                <span className="flex-1 font-display text-[1.45rem] leading-none tracking-[-0.01em] sm:text-[1.6rem]">
                  {category.label}
                </span>
                <span className="font-mono text-[9px] text-tan">
                  {String(category.items.length).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "size-1.5 rotate-45 border transition-all duration-300",
                    isActive
                      ? "border-beige bg-beige"
                      : "border-brown/70 bg-transparent group-hover:border-beige/60",
                  )}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-8 border border-line/60 bg-ink-2/40 p-4">
          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
            A note on this shelf
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {toolboxNote}
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <div className="relative overflow-hidden border border-line bg-ink-2/70">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[radial-gradient(circle,rgba(214,197,167,0.08),transparent_65%)]"
          />
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-beige/70"
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                specimen_drawer / {active.label.toLowerCase()}
              </span>
            </div>
            <span className="font-mono text-[9px] tracking-[0.14em] text-tan">
              {String(activeIndex + 1).padStart(2, "0")} / 06
            </span>
          </div>

          <div className="relative flex min-h-[23rem] flex-col p-5 sm:min-h-[25rem] sm:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={
                  reducedMotion ? false : { opacity: 0, y: 12 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -8,
                  transition: { duration: 0.16 },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-1 flex-col"
              >
                <p className="max-w-md font-display text-[1.7rem] leading-[1.2] tracking-[-0.015em] text-beige sm:text-[2rem]">
                  {active.blurb}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {active.items.map((item, index) => (
                    <li key={item}>
                      <motion.span
                        initial={
                          reducedMotion
                            ? false
                            : { opacity: 0, y: 8 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: reducedMotion ? 0 : index * 0.035,
                          ease: "easeOut",
                        }}
                        className="tag"
                      >
                        <span className="font-mono text-[8px] text-tan">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </motion.span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                      Category
                    </p>
                    <p className="mt-1 text-sm text-cream">{active.label}</p>
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                    {String(active.items.length).padStart(2, "0")} tools
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-3 font-mono text-[8px] uppercase tracking-[0.16em] text-tan"
          >
            Index / 02
          </div>
        </div>
      </div>
    </div>
  );
}
