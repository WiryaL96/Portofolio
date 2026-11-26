import { personal } from "@/data/personal";
import { RevealInView } from "@/components/ui/reveal-in-view";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const profileRows = [
    { label: "Name", value: personal.name },
    { label: "Based", value: personal.location },
    { label: "Studying", value: "SMK Negeri 1 Cimahi" },
    { label: "Focus", value: "Software & application development" },
    { label: "Currently", value: personal.currentFocus.join(" · ") },
    { label: "Status", value: personal.status, live: true },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-line/70 py-24 sm:py-28 lg:py-36"
    >
      <div className="section-shell">
        <RevealInView>
          <SectionHeading
            id="about-heading"
            index="01"
            label="About"
            title={
              <>
                The person
                <br />
                <span className="normal-case italic text-beige">
                  behind the screen.
                </span>
              </>
            }
            description="A short introduction, the schools I've passed through, and the things that keep me curious."
          />
        </RevealInView>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <RevealInView>
                <p className="max-w-md font-display text-[clamp(1.8rem,3.2vw,2.7rem)] leading-[1.14] tracking-[-0.015em] text-cream">
                  &ldquo;{personal.aboutStatement}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-10 bg-beige/40" />
                  <p className="mono-label">Wirya / Bandung</p>
                </div>
              </RevealInView>

              <RevealInView delay={0.1}>
                <div className="mt-10 border border-line bg-ink-2/70">
                  <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                      profile.txt
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.14em] text-tan">
                      01 / 01
                    </span>
                  </div>
                  <dl className="px-5 py-4">
                    {profileRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-start justify-between gap-6 border-b border-line/60 py-2.5 last:border-0 last:pb-0"
                      >
                        <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-tan">
                          {row.label}
                        </dt>
                        <dd className="max-w-[65%] text-right font-mono text-[10px] leading-relaxed text-cream">
                          {row.live ? (
                            <span className="inline-flex items-center gap-1.5">
                              <span className="pulse-dot size-1 rounded-full bg-beige" />
                              {row.value}
                            </span>
                          ) : (
                            row.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </RevealInView>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <RevealInView>
              <div className="max-w-xl">
                <p className="text-[15px] leading-[1.8] text-cream/90 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:italic first-letter:leading-[0.75] first-letter:text-beige">
                  {personal.aboutParagraphs[0]}
                </p>
                <p className="mt-5 text-sm leading-[1.8] text-muted">
                  {personal.aboutParagraphs[1]}
                </p>
              </div>
            </RevealInView>

            <RevealInView delay={0.08} className="mt-14">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="mono-label">Education / a short timeline</h3>
                <span className="font-mono text-[9px] text-tan">
                  {String(personal.education.length).padStart(2, "0")} stops
                </span>
              </div>
              <ol className="mt-5 border-t border-line">
                {personal.education.map((entry) => (
                  <li
                    key={entry.school}
                    className="grid grid-cols-[7rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr_auto]"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-tan">
                      {entry.period}
                    </span>
                    <span className="flex flex-wrap items-center gap-2 font-display text-xl leading-snug text-cream sm:text-[1.35rem]">
                      {entry.school}
                      {entry.current ? (
                        <span className="bg-beige px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-ink">
                          Now
                        </span>
                      ) : null}
                    </span>
                    <span className="mono-label col-start-2 sm:col-start-auto">
                      {entry.level}
                    </span>
                  </li>
                ))}
              </ol>
            </RevealInView>

            <RevealInView delay={0.1} className="mt-14">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="mono-label">
                  Field notes / what keeps me curious
                </h3>
                <span className="font-mono text-[9px] text-tan">
                  {String(personal.interests.length).padStart(2, "0")} entries
                </span>
              </div>
              <ul className="mt-5 grid gap-x-10 sm:grid-cols-2">
                {personal.interests.map((interest, index) => (
                  <li
                    key={interest.label}
                    className="group border-t border-line py-4"
                  >
                    <div className="flex gap-4">
                      <span className="pt-0.5 font-mono text-[9px] text-tan transition-colors group-hover:text-beige">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-sm text-cream transition-colors group-hover:text-beige">
                          {interest.label}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {interest.note}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealInView>

            <RevealInView delay={0.12} className="mt-14">
              <div className="relative border border-line bg-surface/35 p-6 sm:rotate-[-0.7deg]">
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-2 font-display text-6xl leading-none text-beige/10"
                >
                  &rdquo;
                </span>
                <p className="mono-label">A working principle</p>
                <p className="mt-3 max-w-md font-display text-2xl italic leading-snug text-beige">
                  Make it work. Then make it feel inevitable.
                </p>
              </div>
            </RevealInView>
          </div>
        </div>
      </div>
    </section>
  );
}
