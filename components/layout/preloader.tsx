"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { personal } from "@/data/personal";

export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (reducedMotion) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = performance.now();
    const duration = 820;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setCount(Math.round(progress * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timer = setTimeout(() => setOpen(false), 260);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      if (timer) clearTimeout(timer);
    };
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading the playground"
          className="preloader fixed inset-0 z-[100] flex flex-col bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="section-shell flex h-full flex-col py-5 sm:py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center border border-line font-display text-sm italic text-beige">
                  {personal.initials}
                </span>
                <span className="mono-label">The Creative Playground</span>
              </div>
              <span className="mono-label hidden sm:block">
                {personal.locationShort}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mono-label"
              >
                Warming up the lights
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-5 font-display text-[clamp(4rem,12vw,10rem)] italic leading-[0.82] tracking-[-0.03em] text-cream"
              >
                come in.
              </motion.p>
            </div>

            <div className="flex items-end justify-between gap-8">
              <div className="flex-1">
                <div className="h-px w-full bg-line">
                  <div
                    className="h-px bg-beige transition-[width] duration-150 ease-linear"
                    style={{ width: `${count}%` }}
                  />
                </div>
                <p className="mono-label mt-3">A small world by Wirya</p>
              </div>
              <p className="font-mono text-4xl tabular-nums text-beige sm:text-5xl">
                {String(count).padStart(3, "0")}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
