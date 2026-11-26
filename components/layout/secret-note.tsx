"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

export function SecretNote() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Open a small secret note"
        className="group inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-tan transition-colors hover:text-muted"
      >
        <span
          aria-hidden="true"
          className="text-sm transition-transform duration-500 group-hover:rotate-45"
        >
          ✦
        </span>
        A small secret
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 18, rotate: 1.5 }
            }
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            aria-label="A small secret note"
            className="window-shadow fixed bottom-5 right-5 z-[85] w-[min(20rem,calc(100vw-2.5rem))] border border-line bg-ink-2 p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="mono-label">Found note / 001</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close secret note"
                className="flex size-6 items-center justify-center border border-transparent text-muted transition-colors hover:border-line hover:text-cream"
              >
                <X className="size-3.5" strokeWidth={1.6} />
              </button>
            </div>
            <div className="mt-3 flex gap-3">
              <div className="relative h-20 w-24 shrink-0 overflow-hidden border border-line">
                <Image
                  src="/images/experiments/cuking-study.jpg"
                  alt="The black cat from the experiments shelf."
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="text-sm leading-relaxed text-muted">
                You found the quiet corner. The cat says hi — and suggests you
                make something today.
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
