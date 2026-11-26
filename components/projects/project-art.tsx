import { cn } from "@/lib/utils";
import type { ProjectArt as ProjectArtKind } from "@/data/projects";

const dotGrid = {
  backgroundImage:
    "radial-gradient(rgba(242,232,216,0.35) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

function OrderArt() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#211a13]">
      <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_78%_18%,rgba(214,197,167,0.18),transparent_62%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14]"
        style={dotGrid}
      />
      <p
        aria-hidden="true"
        className="absolute -left-[2%] bottom-[2%] font-display text-[clamp(3.5rem,9vw,7.5rem)] uppercase leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(214,197,167,0.17)]"
      >
        Order
      </p>

      <div className="absolute left-[47%] top-[9%] h-[80%] w-[36%] rotate-[4.5deg] bg-[#bfae8d]/35" />

      <div className="absolute left-[36%] top-[7%] w-[46%] -rotate-[2.4deg] bg-[#e7d9bd] px-[4.5%] py-[4%] text-ink shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
        <p className="text-center font-display text-[clamp(9px,1.5vw,15px)] uppercase tracking-[0.18em]">
          Teras / Kayumanis
        </p>
        <div className="my-[6%] border-t border-dashed border-ink/25" />
        <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-ink/45">
          <span>Table</span>
          <span>Order</span>
          <span>Cashier</span>
        </div>
        <div className="mt-[5%] space-y-[5%]">
          {[0, 1, 2, 3].map((line) => (
            <div key={line} className="flex items-center justify-between gap-4">
              <span className="h-[3px] w-[54%] bg-ink/15" />
              <span className="h-[3px] w-[18%] bg-ink/20" />
            </div>
          ))}
        </div>
        <div className="mt-[8%] flex items-baseline justify-between border-t border-dashed border-ink/25 pt-[5%]">
          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-ink/50">
            Total
          </span>
          <span className="font-display text-[clamp(14px,2.2vw,22px)] italic">
            —
          </span>
        </div>
        <div
          aria-hidden="true"
          className="mt-[7%] h-4 w-full opacity-70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#241e17 0 2px,transparent 2px 5px)",
          }}
        />
      </div>

      <div className="absolute bottom-[9%] right-[5%] border border-beige/20 bg-ink/75 px-3 py-2 backdrop-blur-sm">
        <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-beige/65">
          Menu → cashier
        </p>
        <p className="mt-1 font-display text-[clamp(11px,1.5vw,16px)] italic text-cream">
          one flow.
        </p>
      </div>

      <p className="absolute left-[5%] top-[7%] font-mono text-[7px] uppercase tracking-[0.2em] text-beige/45">
        01 — order system
      </p>
    </div>
  );
}

function CinemaArt() {
  const holes = {
    backgroundImage:
      "repeating-linear-gradient(to bottom, rgba(214,197,167,0.3) 0 5px, transparent 5px 16px)",
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#12100e]">
      <div className="absolute inset-0 bg-[radial-gradient(100%_90%_at_18%_0%,rgba(180,85,63,0.22),transparent_60%)]" />
      <div className="absolute -right-[8%] top-[6%] size-[38%] rounded-full bg-[radial-gradient(circle,rgba(214,197,167,0.2),transparent_68%)] blur-xl" />

      <div className="absolute left-[7%] top-[-8%] h-[116%] w-[26%] -rotate-[7deg] border-x border-beige/10 bg-[#0a0908] px-[6%] py-[7%] shadow-[20px_0_60px_rgba(0,0,0,0.45)]">
        <div aria-hidden="true" className="absolute inset-y-0 left-1 w-1" style={holes} />
        <div aria-hidden="true" className="absolute inset-y-0 right-1 w-1" style={holes} />

        <div className="flex h-full flex-col gap-[3%]">
          {[0, 1, 2].map((frame) => (
            <div
              key={frame}
              className="relative flex-1 overflow-hidden border border-beige/10 bg-[#171310]"
            >
              {frame === 0 ? (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_38%,rgba(180,85,63,0.65),transparent_58%)]" />
                  <div className="absolute left-[18%] top-[26%] size-[38%] rounded-full border border-beige/30" />
                  <div className="absolute bottom-[16%] left-[18%] h-px w-[64%] bg-beige/20" />
                </>
              ) : null}
              {frame === 1 ? (
                <div className="absolute inset-0 flex flex-col justify-center gap-[6%] px-[18%]">
                  <span className="h-px w-full bg-beige/25" />
                  <span className="h-px w-[72%] bg-beige/18" />
                  <span className="h-px w-[88%] bg-beige/12" />
                </div>
              ) : null}
              {frame === 2 ? (
                <>
                  <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(214,197,167,0.12),transparent_60%)]" />
                  <div className="absolute left-[24%] top-[20%] size-[52%] rounded-t-full border border-beige/20" />
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-[7%] top-[16%] max-w-[52%] text-right">
        <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-beige/45">
          screening_room / 02
        </p>
        <p className="mt-3 font-display text-[clamp(1.6rem,3.2vw,3rem)] italic leading-[0.95] text-beige">
          Now showing,
          <br />
          on repeat.
        </p>
      </div>

      <div className="absolute bottom-[13%] right-[6%] w-[46%] rotate-[-2deg] border border-beige/20 bg-[#1b1613]/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-dashed border-beige/20 pb-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-beige/60">
            Schedule. Seats. Screen.
          </span>
          <span className="font-mono text-[7px] text-beige/35">—</span>
        </div>
        <p className="mt-2 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-cream/80">
          Movie data
          <span className="text-beige/60">Admin</span>
        </p>
        <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-muted/60">
          Booking records / showtime / seats
        </p>
      </div>

      <p className="absolute bottom-[5%] left-[6%] font-mono text-[7px] uppercase tracking-[0.2em] text-beige/40">
        02 — management system
      </p>
    </div>
  );
}

function ReportArt() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#272017]">
      <div className="absolute inset-0 bg-[radial-gradient(85%_70%_at_78%_12%,rgba(214,197,167,0.16),transparent_60%)]" />
      <p
        aria-hidden="true"
        className="absolute -right-[2%] bottom-[2%] font-display text-[clamp(3rem,8vw,6.5rem)] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(214,197,167,0.12)]"
      >
        Report
      </p>

      <div className="absolute left-[11%] top-[9%] h-[82%] w-[58%] rotate-[1.8deg] bg-[#e4d6ba] p-[4%] text-ink shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
        <div
          aria-hidden="true"
          className="absolute left-[3%] top-[18%] flex flex-col gap-3"
        >
          {[0, 1, 2].map((hole) => (
            <span
              key={hole}
              className="block size-2 rounded-full border border-ink/15 bg-[#272017]/60"
            />
          ))}
        </div>

        <div className="pl-[4%]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-ink/45">
                SMK Negeri 1 Cimahi
              </p>
              <p className="mt-1 font-display text-[clamp(1rem,2.2vw,2rem)] uppercase leading-none tracking-[-0.02em]">
                Reportex
              </p>
            </div>
            <span className="flex size-6 items-center justify-center rounded-full border border-ink/20">
              <span className="size-1.5 rounded-full bg-ink/40" />
            </span>
          </div>

          <div className="my-[5%] border-t border-ink/15" />

          <div className="space-y-[5%]">
            {[
              ["Subject", "52%"],
              ["Reporter", "68%"],
              ["Details", "88%"],
            ].map(([label, width]) => (
              <div key={label}>
                <p className="font-mono text-[6px] uppercase tracking-[0.16em] text-ink/45">
                  {label}
                </p>
                <div className="mt-1 h-px w-full bg-ink/12" />
                <span
                  className="mt-1 block h-[3px] bg-ink/20"
                  style={{ width }}
                />
              </div>
            ))}
          </div>

          <div className="mt-[6%] space-y-[3%]">
            {[0, 1, 2, 3].map((line) => (
              <span
                key={line}
                className="block h-px bg-ink/12"
                style={{ width: line === 3 ? "64%" : "100%" }}
              />
            ))}
          </div>

          <div className="absolute bottom-[9%] right-[8%] flex size-[28%] rotate-[-13deg] flex-col items-center justify-center rounded-full border-[1.5px] border-terracotta/70 text-center font-mono text-[clamp(5px,0.95vw,9px)] uppercase leading-[1.4] tracking-[0.14em] text-terracotta/80">
            <span>Received</span>
            <span>Reportex</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[10%] right-[4%] w-[38%] rotate-[3deg] border border-line bg-ink/85 p-3 backdrop-blur-sm">
        <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-beige/45">
          complaint_log / school
        </p>
        <p className="mt-1.5 font-display text-[clamp(11px,1.7vw,17px)] italic leading-tight text-cream">
          Heard, logged, handled.
        </p>
      </div>

      <p className="absolute left-[5%] top-[6%] font-mono text-[7px] uppercase tracking-[0.2em] text-beige/45">
        03 — reporting app
      </p>
    </div>
  );
}

function TrackArt() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1a1410]">
      <div className="absolute inset-0 bg-[radial-gradient(95%_85%_at_18%_100%,rgba(180,85,63,0.3),transparent_62%)]" />
      <div className="absolute right-[10%] top-[10%] size-[34%] rounded-full bg-[radial-gradient(circle,rgba(180,85,63,0.5),transparent_66%)] blur-xl" />

      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <g fill="none" stroke="rgba(214,197,167,0.26)" strokeWidth="1">
          <path d="M-30 300C60 170 340 170 430 300" />
          <path d="M-50 312C50 152 350 152 450 312" />
          <path d="M-70 324C40 134 360 134 470 324" />
        </g>
        <path
          d="M-58 314C44 144 356 144 458 314"
          fill="none"
          stroke="rgba(180,85,63,0.34)"
          strokeWidth="24"
        />
        <g fill="rgba(214,197,167,0.4)" fontFamily="monospace" fontSize="6">
          <text x="66" y="242">1</text>
          <text x="120" y="212">2</text>
          <text x="180" y="198">3</text>
          <text x="242" y="206">4</text>
        </g>
      </svg>

      <div className="absolute right-[9%] top-[18%] aspect-square w-[21%] rounded-full border border-beige/25 bg-ink/25 backdrop-blur-[1px]">
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="absolute inset-[8%]"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="rgba(214,197,167,0.35)"
            strokeWidth="1"
            strokeDasharray="1 7"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="27"
            stroke="rgba(242,232,216,0.8)"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1="50"
            x2="64"
            y2="58"
            stroke="rgba(214,197,167,0.55)"
            strokeWidth="1"
          />
          <circle cx="50" cy="50" r="2" fill="rgba(242,232,216,0.8)" />
        </svg>
      </div>

      <div className="absolute bottom-[9%] left-[6%] max-w-[70%]">
        <p className="font-display text-[clamp(1.7rem,4vw,3.4rem)] uppercase leading-[0.9] tracking-[-0.03em] text-cream">
          STM<span className="text-beige">—</span>Larkam
        </p>
        <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.18em] text-beige/55">
          Every lap, on the record.
        </p>
      </div>

      <p className="absolute left-[5%] top-[7%] font-mono text-[7px] uppercase tracking-[0.2em] text-beige/45">
        04 — activity logging
      </p>

      <div className="absolute bottom-[8%] right-[5%] border border-beige/20 bg-ink/70 px-2.5 py-1.5 font-mono text-[6px] uppercase tracking-[0.16em] text-beige/55 backdrop-blur-sm">
        Running log / daily
      </div>
    </div>
  );
}

function HotelArt() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1c1611]">
      <div className="absolute inset-0 bg-[radial-gradient(85%_75%_at_20%_12%,rgba(214,197,167,0.18),transparent_62%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.1]"
        style={dotGrid}
      />
      <p
        aria-hidden="true"
        className="absolute -left-[1%] bottom-[1%] font-display text-[clamp(3.5rem,10vw,7.5rem)] uppercase leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(214,197,167,0.15)]"
      >
        Stay
      </p>

      <div className="absolute left-[8%] top-[14%] w-[43%] -rotate-[4deg] bg-[#e5d6ba] p-[4.5%] text-[#241e17] shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
        <div className="flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.16em] text-[#241e17]/55">
          <span>Keycard / 05</span>
          <span>Access</span>
        </div>
        <div className="mt-[9%] border-t border-[#241e17]/15" />
        <p className="mt-[8%] font-display text-[clamp(1rem,2.4vw,2rem)] uppercase leading-none">
          Room 05
        </p>
        <p className="mt-[4%] font-mono text-[6px] uppercase tracking-[0.15em] text-[#241e17]/45">
          Check-in 14:00 / late key
        </p>
        <div className="mt-[12%] flex items-end justify-between">
          <div className="space-y-1.5">
            {[12, 9, 14].map((width) => (
              <span
                key={width}
                className="block h-[3px] bg-[#241e17]/15"
                style={{ width }}
              />
            ))}
          </div>
          <span className="flex size-6 items-center justify-center rounded-full border border-[#241e17]/20">
            <span className="size-1.5 rounded-full bg-[#241e17]/40" />
          </span>
        </div>
        <div
          aria-hidden="true"
          className="mt-[10%] h-3 w-full opacity-70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#241e17 0 2px,transparent 2px 5px)",
          }}
        />
      </div>

      <div className="absolute right-[6%] top-[18%] w-[43%] rotate-[2deg] border border-beige/20 bg-[#1a1511]/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-dashed border-beige/20 pb-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-beige/60">
            Arrivals / today
          </span>
          <span className="font-mono text-[7px] text-beige/35">05</span>
        </div>
        {[
          ["Deluxe room", "03"],
          ["Suite", "01"],
          ["Checkout", "11:00"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-beige/10 py-2 font-mono text-[7px] uppercase tracking-[0.14em] last:border-0"
          >
            <span className="text-muted">{label}</span>
            <span className="text-cream/85">{value}</span>
          </div>
        ))}
        <p className="mt-2 font-mono text-[6px] uppercase tracking-[0.16em] text-beige/45">
          Rooms → booking → stay
        </p>
      </div>

      <div className="absolute bottom-[8%] right-[6%] border border-beige/20 bg-ink/70 px-3 py-2 backdrop-blur-sm">
        <p className="font-mono text-[6px] uppercase tracking-[0.16em] text-beige/55">
          Front desk
        </p>
        <p className="mt-1 font-display text-[clamp(11px,1.5vw,16px)] italic text-cream">
          Every key accounted for.
        </p>
      </div>

      <p className="absolute left-[5%] top-[5%] font-mono text-[7px] uppercase tracking-[0.2em] text-beige/45">
        05 — hotel operations
      </p>
    </div>
  );
}

function GameArt() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#19120e]">
      <div className="absolute inset-0 bg-[radial-gradient(85%_65%_at_80%_15%,rgba(180,85,63,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_18%_90%,rgba(214,197,167,0.12),transparent_68%)]" />
      <p
        aria-hidden="true"
        className="absolute -right-[4%] bottom-[2%] font-display text-[clamp(3.4rem,10vw,7rem)] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(214,197,167,0.12)]"
      >
        Idol
      </p>

      <div className="absolute inset-x-[8%] top-[8%] flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-beige/45">
        <span>SupoNet / 06</span>
        <span>Wave 06 / 06</span>
      </div>

      <p className="absolute inset-x-[8%] top-[15%] font-display text-[clamp(2.3rem,5.4vw,4rem)] uppercase leading-[0.82] tracking-[-0.03em] text-cream">
        Save
        <br />
        Ur <span className="normal-case italic text-beige">Idol.</span>
      </p>

      <div className="absolute left-[8%] top-[45%] flex aspect-square h-[31%] items-center justify-center rounded-full border border-beige/20">
        <div className="relative flex size-[78%] items-center justify-center rounded-full border border-beige/15 bg-[radial-gradient(circle_at_50%_40%,rgba(180,85,63,0.28),transparent_66%)]">
          <div className="absolute inset-[18%] rounded-full border border-beige/20" />
          <span className="font-display text-[clamp(1.6rem,4vw,2.8rem)] italic leading-none text-beige">
            06
          </span>
        </div>
      </div>

      <div className="absolute right-[8%] top-[47%] w-[38%] rotate-[2deg] border border-beige/20 bg-[#1b1613]/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        <p className="font-mono text-[6px] uppercase tracking-[0.16em] text-beige/55">
          The Last Message
        </p>
        <p className="mt-1 font-display text-[clamp(12px,1.8vw,18px)] italic leading-tight text-cream">
          Five chapters. Five endings.
        </p>
        <div aria-hidden="true" className="mt-3 space-y-1.5 opacity-60">
          {[100, 72, 88].map((width, index) => (
            <span
              key={index}
              className="block h-px bg-line"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-[8%] bottom-[11%]">
        <div className="flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.16em] text-beige/55">
          <span>One run</span>
          <span>Six waves</span>
        </div>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: 6 }, (_, index) => (
            <span
              key={index}
              className={cn(
                "h-1 flex-1",
                index < 5 ? "bg-terracotta/70" : "bg-beige/20",
              )}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export function ProjectArt({
  kind,
  className,
}: {
  kind: ProjectArtKind;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "palette-dark relative h-full w-full overflow-hidden bg-ink-2",
        className,
      )}
    >
      {kind === "order" ? <OrderArt /> : null}
      {kind === "cinema" ? <CinemaArt /> : null}
      {kind === "report" ? <ReportArt /> : null}
      {kind === "track" ? <TrackArt /> : null}
      {kind === "hotel" ? <HotelArt /> : null}
      {kind === "game" ? <GameArt /> : null}
      <div
        aria-hidden="true"
        className="surface-noise pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}
