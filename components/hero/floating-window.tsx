"use client";

import type { ReactNode, RefObject } from "react";
import { motion, useDragControls, useReducedMotion } from "framer-motion";
import { GripVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingWindowProps = {
  title: string;
  meta?: string;
  children: ReactNode;
  className?: string;
  constraintsRef: RefObject<HTMLElement | null>;
  canDrag: boolean;
  rotation?: number;
  delay?: number;
  onClose: () => void;
};

export function FloatingWindow({
  title,
  meta,
  children,
  className,
  constraintsRef,
  canDrag,
  rotation = 0,
  delay = 0,
  onClose,
}: FloatingWindowProps) {
  const controls = useDragControls();
  const reducedMotion = useReducedMotion();

  return (
    <motion.aside
      aria-label={`${title} window`}
      drag={canDrag}
      dragControls={controls}
      dragListener={false}
      dragConstraints={constraintsRef}
      dragMomentum={false}
      dragElastic={0.08}
      whileDrag={{ scale: 1.018, zIndex: 40 }}
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 18, scale: 0.97, rotate: rotation + 1 }
      }
      animate={{ opacity: 1, y: 0, scale: 1, rotate: rotation }}
      exit={{
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.18, ease: "easeOut" },
      }}
      transition={{
        duration: 0.7,
        delay: reducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
      style={{ zIndex: 20 }}
      className={cn(
        "group pointer-events-auto absolute w-[15.5rem] border border-line bg-ink-2/95 shadow-[0_1px_0_rgba(242,232,216,0.06)_inset,0_26px_60px_-22px_rgba(0,0,0,0.9)] backdrop-blur-[2px]",
        className,
      )}
    >
      <div className="flex items-stretch justify-between border-b border-line/80">
        <div
          onPointerDown={(event) => {
            if (!canDrag) return;
            event.preventDefault();
            controls.start(event);
          }}
          className={cn(
            "flex min-w-0 flex-1 select-none items-center gap-2 px-3 py-2",
            canDrag && "cursor-grab touch-none active:cursor-grabbing",
          )}
        >
          <GripVertical
            aria-hidden="true"
            className="size-3 shrink-0 text-tan"
            strokeWidth={1.5}
          />
          <span className="truncate font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2 pr-2">
          {meta ? (
            <span className="hidden font-mono text-[8px] tracking-[0.14em] text-tan sm:inline">
              {meta}
            </span>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${title} window`}
            className="flex size-6 items-center justify-center border border-transparent text-muted transition-colors hover:border-line hover:text-cream"
          >
            <X className="size-3" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div className="p-4">{children}</div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 right-2 font-mono text-[8px] uppercase tracking-[0.16em] text-tan opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        {canDrag ? "drag" : ""}
      </span>
    </motion.aside>
  );
}
