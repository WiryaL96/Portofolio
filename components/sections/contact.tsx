"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { personal } from "@/data/personal";
import { RevealInView } from "@/components/ui/reveal-in-view";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  const profileLinks = [
    ...(personal.githubUrl
      ? [{ href: personal.githubUrl, label: "GitHub", value: "WiryaL96" }]
      : []),
    ...(personal.linkedinUrl
      ? [{ href: personal.linkedinUrl, label: "LinkedIn", value: "Profile" }]
      : []),
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-line/70 py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[8%] hidden h-[32rem] w-[23rem] lg:block"
      >
        <div className="absolute inset-0 rounded-t-full border border-beige/10" />
        <div className="absolute inset-x-8 bottom-0 top-14 rounded-t-full border border-beige/[0.06] bg-[radial-gradient(circle_at_50%_70%,rgba(214,197,167,0.11),transparent_65%)]" />
        <div className="absolute inset-x-20 bottom-0 top-32 rounded-t-full bg-[radial-gradient(circle_at_50%_80%,rgba(214,197,167,0.12),transparent_70%)] blur-2xl" />
      </div>

      <div className="section-shell relative">
        <RevealInView>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-tan">
              05
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-line" />
            <span className="mono-label">Contact</span>
          </div>
        </RevealInView>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <RevealInView delay={0.05}>
              <h2
                id="contact-heading"
                className="max-w-[14ch] font-display text-[clamp(2.9rem,7vw,6.5rem)] uppercase leading-[0.88] tracking-[-0.04em] text-cream"
              >
                Have something{" "}
                <span className="normal-case italic text-beige">
                  interesting
                </span>{" "}
                in mind?
              </h2>
            </RevealInView>

            <RevealInView delay={0.12}>
              <p className="mt-7 max-w-md text-sm leading-relaxed text-muted">
                A project, a problem, a half-formed idea — I&apos;d like to hear
                it. No forms, no funnels. Just a direct line.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="group inline-flex items-center gap-2 border border-beige bg-beige px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-cream"
                >
                  Start a conversation
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                  />
                </a>
                <a
                  href={personal.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-beige"
                >
                  @{personal.instagramHandle}
                  <ArrowUpRight className="size-3" strokeWidth={1.6} />
                </a>
              </div>
            </RevealInView>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <RevealInView delay={0.16}>
              <div className="border border-line bg-ink-2/85 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    contact_card.txt
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-tan">
                    <span className="pulse-dot size-1 rounded-full bg-beige" />
                    Open
                  </span>
                </div>

                <div className="px-5 py-2">
                  <div className="border-b border-line/70 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                        Email
                      </p>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className={cn(
                          "inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] transition-colors",
                          copied
                            ? "border-beige/50 text-beige"
                            : "border-line text-muted hover:border-beige/40 hover:text-cream",
                        )}
                      >
                        {copied ? (
                          <Check className="size-2.5" strokeWidth={2} />
                        ) : (
                          <Copy className="size-2.5" strokeWidth={1.6} />
                        )}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="link-line mt-2 inline-block break-all text-sm text-cream"
                    >
                      {personal.email}
                    </a>
                    <span
                      role="status"
                      aria-live="polite"
                      className="sr-only"
                    >
                      {copied ? "Email address copied to clipboard" : ""}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-line/70 py-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                      Instagram
                    </p>
                    <a
                      href={personal.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-cream transition-colors hover:text-beige"
                    >
                      {personal.instagramHandle}
                      <ArrowUpRight
                        className="size-3 text-tan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.6}
                      />
                    </a>
                  </div>

                  {profileLinks.map((link) => (
                    <div
                      key={link.label}
                      className="flex items-center justify-between gap-4 border-b border-line/70 py-4"
                    >
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                        {link.label}
                      </p>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-cream transition-colors hover:text-beige"
                      >
                        {link.value}
                        <ArrowUpRight
                          className="size-3 text-tan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={1.6}
                        />
                      </a>
                    </div>
                  ))}

                  <div className="flex items-center justify-between gap-4 border-b border-line/70 py-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                      Based in
                    </p>
                    <p className="text-sm text-cream">{personal.location}</p>
                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                      Status
                    </p>
                    <p className="flex items-center gap-2 text-sm text-cream">
                      <span className="pulse-dot size-1.5 rounded-full bg-beige" />
                      {personal.status}
                    </p>
                  </div>
                </div>

                <div className="border-t border-line px-5 py-3">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                    {personal.availabilityNote}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
                <span>Direct line / no gatekeepers</span>
                <span>WIB</span>
              </div>
            </RevealInView>
          </div>
        </div>

        <RevealInView delay={0.2} className="mt-20">
          <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-display text-xl italic text-beige">
              The door is open.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-tan">
              <a
                href={personal.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-cream"
              >
                Instagram
              </a>
              {personal.githubUrl ? (
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  GitHub
                </a>
              ) : null}
              {personal.linkedinUrl ? (
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  LinkedIn
                </a>
              ) : null}
              <a
                href="#top"
                className="transition-colors hover:text-cream"
              >
                Back to the entrance ↑
              </a>
            </div>
          </div>
        </RevealInView>
      </div>
    </section>
  );
}
