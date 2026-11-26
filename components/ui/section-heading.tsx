import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  id,
  index,
  label,
  title,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6",
        className,
      )}
    >
      <div className="lg:col-span-7">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-tan">
            {index}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          <span className="mono-label">{label}</span>
        </div>
        <h2
          id={id}
          className={cn(
            "mt-6 font-display text-[clamp(2.8rem,6.4vw,6rem)] uppercase leading-[0.9] tracking-[-0.035em] text-cream",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </div>

      {description ? (
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="max-w-sm text-sm leading-relaxed text-muted">
            {description}
          </div>
        </div>
      ) : null}
    </div>
  );
}
