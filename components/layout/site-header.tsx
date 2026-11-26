"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { personal } from "@/data/personal";

const navItems = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experiments", label: "Experiments" },
  { id: "contact", label: "Contact" },
];

function getBandungTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: personal.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("--:--");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => setTime(getBandungTime());
    updateTime();
    const timer = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = menuPanelRef.current;
    const getFocusable = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const focusTimer = window.setTimeout(() => {
      getFocusable()[0]?.focus();
    }, 80);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    desktopQuery.addEventListener("change", onDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onDesktop);
      window.clearTimeout(focusTimer);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-line/70 bg-ink/80 supports-[backdrop-filter]:backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="section-shell flex h-16 items-center justify-between gap-4 lg:h-20">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Wirya Dinata Mulia — back to top"
          >
            <span className="flex size-9 items-center justify-center border border-line bg-ink-2/80 font-display text-base italic text-beige transition-colors duration-300 group-hover:border-beige/40">
              {personal.initials}
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-cream">
                {personal.name}
              </span>
              <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-tan">
                The Creative Playground
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                className={cn(
                  "group relative font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
                  active === item.id
                    ? "text-cream"
                    : "text-muted hover:text-cream",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-beige transition-transform duration-300",
                    active === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <span className="pulse-dot size-1.5 rounded-full bg-beige" />
              <span className="mono-label hidden whitespace-nowrap min-[1400px]:inline">
                {personal.status}
              </span>
              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-line min-[1400px]:block"
              />
              <span className="whitespace-nowrap font-mono text-[10px] tracking-[0.16em] text-muted">
                BDG {time}
              </span>
            </div>

            <a
              href="#contact"
              className="group hidden shrink-0 items-center gap-2 whitespace-nowrap border border-line px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:border-beige/50 hover:bg-surface/60 min-[1400px]:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight
                className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.6}
              />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex min-h-11 items-center gap-2 border border-line px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cream transition-colors hover:border-beige/50 hover:bg-surface/60 lg:hidden"
            >
              <Menu className="size-3.5" strokeWidth={1.6} />
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[80] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-ink" />
            <div
              id="mobile-menu"
              ref={menuPanelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="relative flex h-svh flex-col overflow-y-auto px-5 pb-8 pt-5 sm:px-8"
            >
              <div className="flex items-center justify-between">
                <a
                  href="#top"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3"
                  aria-label="Back to top"
                >
                  <span className="flex size-9 items-center justify-center border border-line bg-ink-2 font-display text-base italic text-beige">
                    {personal.initials}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-tan">
                    The Creative Playground
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  aria-label="Close menu"
                  className="inline-flex size-11 items-center justify-center border border-line text-cream transition-colors hover:border-beige/50 hover:bg-surface"
                >
                  <X className="size-4" strokeWidth={1.5} />
                </button>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="mt-10 flex flex-col border-t border-line sm:mt-14"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.06 + index * 0.055,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-4 sm:py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-tan">
                        0{index}
                      </span>
                      <span
                        className={cn(
                          "font-display text-[clamp(2.6rem,11vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-cream",
                          item.label === "Experiments" && "italic",
                        )}
                      >
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-tan transition-colors group-hover:text-beige"
                      strokeWidth={1.4}
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <div className="flex flex-col gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="link-line w-fit text-sm text-cream"
                  >
                    {personal.email}
                  </a>
                  <a
                    href={personal.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-line w-fit text-sm text-muted"
                  >
                    Instagram / {personal.instagramHandle}
                  </a>
                  {personal.githubUrl ? (
                    <a
                      href={personal.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-line w-fit text-sm text-muted"
                    >
                      GitHub / WiryaL96
                    </a>
                  ) : null}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="mono-label">{personal.location}</span>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                    BDG {time}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
