"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MoonStar,
  RotateCcw,
  Sun,
} from "lucide-react";
import { personal } from "@/data/personal";
import { FloatingWindow } from "@/components/hero/floating-window";

type WindowId = "about" | "currently" | "status";

const PORTRAIT_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABMNDhEODBMRDxEVFBMXHTAfHRoaHToqLCMwRT1JR0Q9Q0FMVm1dTFFoUkFDX4JgaHF1e3x7SlyGkIV3j214e3b/2wBDARQVFR0ZHTgfHzh2T0NPdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnb/wAARCAAgABgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDQQAdqfkYqBZ07Nn6A1mtrUi3ezyMwltoPO6sUaM0pd3mZDNtC5wO9FH2hYm8yUbVX3zRTQFKW+ihjLsTgDj3rHeWWcNdKEBU5C54PPTFO1reLiPI/d7flA6Z71m73XcFbaG6gU4x0uJvU1bvVBd2IBCiQkZX0oqlp81tHOVu4tyNwGH8B9feina2wr3P/2Q==";

const EASE = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  className,
  delay,
  reducedMotion,
}: {
  children: ReactNode;
  className?: string;
  delay: number;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.85,
        delay: reducedMotion ? 0 : delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [time, setTime] = useState("--:--");
  const [canDrag, setCanDrag] = useState(false);
  const [closed, setClosed] = useState<Record<WindowId, boolean>>({
    about: false,
    currently: false,
    status: false,
  });
  const [layoutKey, setLayoutKey] = useState(0);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });
  const glowX = useTransform(smoothX, (value) => value * -1.7);
  const glowY = useTransform(smoothY, (value) => value * -1.2);

  const closedCount = Object.values(closed).filter(Boolean).length;
  const windowDelay = layoutKey === 0 ? 1.45 : 0;

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine)",
    );
    const update = () => setCanDrag(finePointer.matches);
    update();
    finePointer.addEventListener("change", update);
    return () => finePointer.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: personal.timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );

    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const handleMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      pointerX.set(x * 16);
      pointerY.set(y * 12);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [pointerX, pointerY, reducedMotion]);

  const closeWindow = (id: WindowId) =>
    setClosed((current) => ({ ...current, [id]: true }));

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;

    try {
      localStorage.setItem("playground-theme", next);
    } catch {
      // Theme persistence is a progressive enhancement.
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "light" ? "#f2e8d8" : "#171512");
  };

  const tidyRoom = () => {
    setClosed({ about: false, currently: false, status: false });
    setLayoutKey((key) => key + 1);
  };

  return (
    <section
      ref={heroRef}
      id="top"
      aria-label="Welcome to my playground"
      className="relative flex min-h-svh flex-col overflow-hidden pb-2 pt-24 lg:pt-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="hero-glow absolute right-[2%] top-[8%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(214,197,167,0.16),rgba(117,102,83,0.09)_42%,transparent_70%)] blur-3xl transition-opacity duration-1000"
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/35 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />
      </div>

      <div className="section-shell relative z-10 flex flex-1 flex-col">
        <div className="grid flex-1 content-center gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8">
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <Reveal delay={0.95} reducedMotion={reducedMotion}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="mono-label">Portfolio / Vol. 01</span>
                <span aria-hidden="true" className="h-3 w-px bg-line" />
                <span className="mono-label">{personal.locationShort}</span>
                <span className="flex items-center gap-2">
                  <span className="pulse-dot size-1.5 rounded-full bg-beige" />
                  <span className="mono-label text-beige">
                    {personal.status}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={1.05} reducedMotion={reducedMotion}>
              <h1
                aria-label="Welcome to my playground."
                className="mt-7 font-display text-[clamp(3rem,10vw,9.5rem)] uppercase leading-[0.83] tracking-[-0.045em] text-cream"
              >
                <span className="block">Welcome</span>
                <span className="block pl-[7%]">to my</span>
                <span className="relative block normal-case italic leading-[0.87] tracking-[-0.05em] text-beige">
                  playground.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 420 18"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-[0.1em] w-[92%] text-beige/35 sm:-bottom-2"
                  >
                    <path
                      d="M4 12C96 5 244 5 416 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>
          </div>

          <Reveal
            delay={1.2}
            reducedMotion={reducedMotion}
            className="relative lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center"
          >
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="relative mx-auto w-[min(19rem,78vw)] sm:w-[21rem] lg:w-full lg:max-w-[23rem] xl:max-w-[24.5rem]"
            >
              <motion.div
                aria-hidden="true"
                style={{ x: glowX, y: glowY }}
                className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[33rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 sm:h-[38rem] sm:w-[30rem]"
              >
                <div className="absolute inset-0 rounded-t-full border border-beige/10" />
                <div className="absolute inset-8 rounded-t-full border border-beige/[0.06]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(214,197,167,0.2),transparent_62%)] blur-2xl" />
              </motion.div>

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 translate-x-3 translate-y-4 border border-beige/10"
                />

                <div className="palette-dark group relative rotate-[-1.2deg] transition-transform duration-700 ease-out hover:rotate-0">
                  <div className="photo-shadow relative bg-[#ddcfb4] p-3 pb-12">
                    <span
                      aria-hidden="true"
                      className="absolute -top-2.5 left-8 h-5 w-16 rotate-[-3deg] bg-cream/40 backdrop-blur-[1px]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -top-2 right-10 h-5 w-14 rotate-[2deg] bg-cream/30 backdrop-blur-[1px]"
                    />

                    <div className="relative aspect-[3/4] overflow-hidden bg-ink-2">
                      <Image
                        src="/images/wirya-portrait.jpg"
                        alt="Wirya Dinata Mulia taking a mirror selfie in a black jacket."
                        fill
                        priority
                        quality={85}
                        placeholder="blur"
                        blurDataURL={PORTRAIT_BLUR}
                        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 21rem, 24rem"
                        className="object-cover [filter:saturate(0.82)_contrast(1.04)_brightness(0.9)_sepia(0.1)]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.4)]"
                      />
                    </div>

                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/75">
                      <span>Self portrait / 001</span>
                      <span className="flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-terracotta/80" />
                        Mirror selfie
                      </span>
                    </div>
                  </div>

                  <div className="group/lights absolute -right-4 -top-4 z-20">
                    <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.18em] text-beige/70 opacity-0 transition-opacity duration-300 group-hover/lights:opacity-100">
                      <span className="theme-label-light">Light mode</span>
                      <span className="theme-label-dark">Dark mode</span>
                    </span>
                    <button
                      type="button"
                      onClick={toggleTheme}
                      aria-label="Switch color theme"
                      title="Switch color theme"
                      className="flex size-10 items-center justify-center rounded-full border border-beige/30 bg-ink/85 text-beige shadow-[0_8px_24px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-colors duration-300 hover:border-beige/60 hover:bg-ink"
                    >
                      <Sun
                        aria-hidden="true"
                        className="theme-icon-sun size-4"
                        strokeWidth={1.5}
                      />
                      <MoonStar
                        aria-hidden="true"
                        className="theme-icon-moon size-4"
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>

                  <div
                    aria-hidden="true"
                    className="photo-shadow absolute -bottom-8 -left-5 hidden w-48 rotate-[-4deg] bg-[#d9cbb2] p-3.5 sm:block"
                  >
                    <span className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 rotate-2 bg-cream/40" />
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink/50">
                      A note to self
                    </p>
                    <p className="mt-1.5 font-display text-[17px] italic leading-snug text-ink/85">
                      The person behind the screen.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2">
            <Reveal delay={1.3} reducedMotion={reducedMotion}>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="size-1.5 rotate-45 bg-beige/80"
                />
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream">
                  {personal.name}
                </p>
              </div>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                {personal.intro}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 border border-line bg-surface/30 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:border-beige/40 hover:bg-surface/70"
                >
                  Explore the work
                  <ArrowDown
                    className="size-3 transition-transform duration-300 group-hover:translate-y-0.5"
                    strokeWidth={1.6}
                  />
                </a>
                <a
                  href="#contact"
                  className="link-line inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-beige"
                >
                  Say hello
                  <ArrowUpRight className="size-3" strokeWidth={1.6} />
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:hidden">
                <div className="border border-line bg-ink-2/60 p-4">
                  <div className="flex items-center justify-between border-b border-line/70 pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                      currently_exploring
                    </span>
                    <span className="font-mono text-[8px] text-tan">02</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {personal.currentFocus.map((item) => (
                      <span
                        key={item}
                        className="border border-line/80 px-2 py-1 font-mono text-[10px] text-cream/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border border-line bg-ink-2/60 p-4">
                  <div className="flex items-center justify-between border-b border-line/70 pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                      system_status
                    </span>
                    <span className="font-mono text-[8px] text-tan">03</span>
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-sm text-cream">
                    <span className="pulse-dot size-1.5 rounded-full bg-beige" />
                    {personal.status}
                  </p>
                  <p className="mt-2 font-mono text-[10px] text-muted">
                    {personal.locationShort} / {time} WIB
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={1.4} reducedMotion={reducedMotion} className="relative z-30">
          <div className="mt-8 flex flex-col gap-4 border-t border-line/60 py-5 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-cream"
            >
              <span className="flex size-8 items-center justify-center rounded-full border border-line transition-colors group-hover:border-beige/40">
                <ArrowDown
                  className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  strokeWidth={1.5}
                />
              </span>
              <span className="mono-label group-hover:text-cream">
                Scroll to wander
              </span>
            </a>

            <div className="hidden items-center gap-5 lg:flex">
              <span className="mono-label text-tan">
                Drag the windows. Nothing breaks.
              </span>
              <button
                type="button"
                onClick={tidyRoom}
                className="group inline-flex items-center gap-2 border border-line px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-beige/40 hover:text-cream"
              >
                <RotateCcw
                  className="size-3 transition-transform duration-500 group-hover:-rotate-90"
                  strokeWidth={1.6}
                />
                Tidy the room
                {closedCount > 0 ? ` (${closedCount})` : ""}
              </button>
            </div>

            <span className="mono-label hidden sm:block">
              The Playground / Vol. 01
            </span>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        <AnimatePresence>
          {!closed.currently && (
            <FloatingWindow
              key={`currently-${layoutKey}`}
              title="currently_exploring"
              meta="02"
              rotation={1.4}
              delay={windowDelay}
              canDrag={canDrag}
              constraintsRef={heroRef}
              onClose={() => closeWindow("currently")}
              className="right-[1.5%] top-[20%]"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-tan">
                On the desk
              </p>
              <ul className="mt-3 space-y-2">
                {personal.currentFocus.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-3 border-b border-line/60 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-[13px] text-cream">{item}</span>
                    <span className="font-mono text-[8px] text-tan">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] leading-relaxed text-muted">
                No roadmap. Just curiosity with a deadline.
              </p>
            </FloatingWindow>
          )}

          {!closed.status && (
            <FloatingWindow
              key={`status-${layoutKey}`}
              title="system_status"
              meta="03"
              rotation={-0.8}
              delay={windowDelay + 0.1}
              canDrag={canDrag}
              constraintsRef={heroRef}
              onClose={() => closeWindow("status")}
              className="bottom-[16%] right-[4%] hidden w-[15rem] xl:block"
            >
              <ul className="space-y-2.5">
                <li className="flex items-center justify-between gap-3 border-b border-line/60 pb-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-tan">
                    Local time
                  </span>
                  <span className="font-mono text-[10px] tabular-nums text-cream">
                    {time} WIB
                  </span>
                </li>
                <li className="flex items-center justify-between gap-3 border-b border-line/60 pb-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-tan">
                    Base
                  </span>
                  <span className="font-mono text-[10px] text-cream">
                    {personal.location}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-3 border-b border-line/60 pb-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-tan">
                    Status
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-cream">
                    <span className="pulse-dot size-1 rounded-full bg-beige" />
                    Open
                  </span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-tan">
                    Signal
                  </span>
                  <span className="font-mono text-[10px] text-cream">
                    Curious
                  </span>
                </li>
              </ul>
            </FloatingWindow>
          )}

          {!closed.about && (
            <FloatingWindow
              key={`about-${layoutKey}`}
              title="about_me.txt"
              meta="01"
              rotation={-1.6}
              delay={windowDelay + 0.2}
              canDrag={canDrag}
              constraintsRef={heroRef}
              onClose={() => closeWindow("about")}
              className="left-[42%] top-[58%] hidden xl:block"
            >
              <p className="font-display text-[1.3rem] leading-[1.15] text-cream">
                A student from Bandung who likes making things for the web.
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-muted">
                Curious about systems, interfaces, and why some buttons just
                feel right.
              </p>
              <a
                href="#about"
                className="group mt-4 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-beige transition-colors hover:text-cream"
              >
                The longer version
                <ArrowUpRight
                  className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.6}
                />
              </a>
            </FloatingWindow>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
