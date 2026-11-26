import { ArrowUpRight, ArrowUp } from "lucide-react";
import { personal } from "@/data/personal";
import { SecretNote } from "@/components/layout/secret-note";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experiments", label: "Experiments" },
  { href: "#contact", label: "Contact" },
];

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  const socials = [
    {
      href: personal.instagramUrl,
      label: `Instagram / ${personal.instagramHandle}`,
      external: true,
    },
    ...(personal.githubUrl
      ? [{ href: personal.githubUrl, label: "GitHub", external: true }]
      : []),
    ...(personal.linkedinUrl
      ? [{ href: personal.linkedinUrl, label: "LinkedIn", external: true }]
      : []),
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="section-shell relative z-10 pb-10 pt-14 sm:pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center border border-line bg-ink-2 font-display text-base italic text-beige">
                {personal.initials}
              </span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-cream">
                  {personal.name}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-tan">
                  The Creative Playground
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              A warm little corner of the internet, built by hand in Bandung.
              Make yourself at home.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="md:col-span-3">
            <p className="mono-label">Index</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-line w-fit text-sm text-cream/85 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="mono-label">Elsewhere</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="link-line w-fit break-all text-sm text-cream/85 transition-colors hover:text-cream"
                >
                  {personal.email}
                </a>
              </li>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="group inline-flex items-center gap-1.5 text-sm text-cream/85 transition-colors hover:text-cream"
                  >
                    {social.label}
                    <ArrowUpRight
                      className="size-3.5 text-tan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.6}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <SecretNote />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-5 text-[10px] font-mono uppercase tracking-[0.16em] text-tan sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COPYRIGHT_YEAR} {personal.name}
          </p>
          <p className="text-muted">Built with care. No template.</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-cream"
          >
            Back to top
            <ArrowUp
              className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth={1.6}
            />
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative overflow-hidden"
      >
        <p className="text-stroke -mb-[0.16em] whitespace-nowrap text-center font-display text-[21vw] leading-[0.72] tracking-[-0.045em]">
          PLAYGROUND
        </p>
      </div>
    </footer>
  );
}
