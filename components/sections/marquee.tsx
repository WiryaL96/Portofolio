const words = [
  "Developer",
  "Technology enthusiast",
  "Problem solver",
  "Application builder",
  "Digital experiences",
  "Still learning",
];

export function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="relative z-10 overflow-hidden py-4"
    >
      <div className="-ml-[3vw] w-[106vw] -rotate-[1.1deg] border-y border-ink/15 bg-beige py-2.5 text-ink">
        <div className="marquee overflow-hidden">
          <div className="marquee-track items-center">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center"
                aria-hidden={group === 1}
              >
                {words.map((word) => (
                  <span
                    key={`${group}-${word}`}
                    className="flex shrink-0 items-center gap-7 px-7 font-mono text-[10px] uppercase tracking-[0.22em]"
                  >
                    {word}
                    <span className="font-display text-lg italic leading-none text-ink/45">
                      ✳
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
