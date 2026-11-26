import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  experimentSlotCopy,
  experiments,
} from "@/data/experiments";
import { RevealInView } from "@/components/ui/reveal-in-view";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experiments() {
  const artwork = experiments[0];
  const playground = experiments[1];

  return (
    <section
      id="experiments"
      aria-labelledby="experiments-heading"
      className="relative overflow-hidden border-t border-line/70 py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(214,197,167,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,197,167,0.05)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="section-shell relative">
        <RevealInView>
          <SectionHeading
            id="experiments-heading"
            index="04"
            label="Experiments"
            title={
              <>
                Beyond the{" "}
                <span className="normal-case italic text-beige">code.</span>
              </>
            }
            description="A digital sketchbook: visual notes, half-finished ideas, and things made without a deadline. Less polished than the projects — and better for it."
          />
        </RevealInView>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <RevealInView>
              <article className="group">
                <div className="photo-shadow relative rotate-[-1.2deg] border border-line bg-ink-2 p-3 transition-transform duration-700 ease-out group-hover:rotate-0">
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 left-10 z-10 h-5 w-20 rotate-[-3deg] bg-beige/30 backdrop-blur-[1px]"
                  />
                  <div className="palette-dark relative aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={artwork.image ?? "/images/experiments/cuking-study.jpg"}
                      alt={artwork.alt ?? ""}
                      fill
                      sizes="(max-width: 1024px) 92vw, 58vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
                    />
                    <span className="absolute left-3 top-3 border border-beige/20 bg-ink/60 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-beige/80 backdrop-blur-sm">
                      Visual archive / 01
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-4">
                    <div>
                      <h3 className="font-display text-2xl italic leading-none text-cream">
                        {artwork.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {artwork.caption}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                      {artwork.type}
                    </span>
                  </div>
                </div>
                <p className="mt-5 max-w-md text-xs leading-relaxed text-muted">
                  {artwork.note}
                </p>
              </article>
            </RevealInView>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            <RevealInView delay={0.08}>
              <article className="relative border border-line bg-surface/35 p-6 lg:mt-16">
                <span
                  aria-hidden="true"
                  className="absolute -top-2 left-6 size-4 rounded-full border border-beige/30 bg-ink shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                />
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-tan">
                  Ongoing experiment / 02
                </p>
                <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.02em] text-cream">
                  {playground.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {playground.note}
                </p>
                <a
                  href={playground.href}
                  className="group mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-beige transition-colors hover:text-cream"
                >
                  {playground.hrefLabel}
                  <ArrowUpRight
                    className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.6}
                  />
                </a>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-tan">
                  <span className="flex items-center gap-1.5">
                    <span className="pulse-dot size-1 rounded-full bg-beige" />
                    Live
                  </span>
                  <span>You are here</span>
                </div>
              </article>
            </RevealInView>

            <RevealInView delay={0.14}>
              <article className="border border-dashed border-line/80 p-6">
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-tan">
                  {experimentSlotCopy.label} / 03
                </p>
                <h3 className="mt-3 font-display text-xl italic leading-snug text-beige">
                  {experimentSlotCopy.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {experimentSlotCopy.note}
                </p>
                <div aria-hidden="true" className="mt-5 space-y-3 opacity-60">
                  {[100, 86, 94, 62].map((width, index) => (
                    <span
                      key={index}
                      className="block h-px bg-line"
                      style={{ width: `${width}%` }}
                    />
                  ))}
                </div>
              </article>
            </RevealInView>

            <RevealInView delay={0.18}>
              <p className="max-w-xs text-xs leading-relaxed text-tan">
                The shelf is meant to grow. Check back when the next idea
                escapes.
              </p>
            </RevealInView>
          </div>
        </div>
      </div>
    </section>
  );
}
