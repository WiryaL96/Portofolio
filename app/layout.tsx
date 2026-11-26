import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Grain } from "@/components/layout/grain";
import { Preloader } from "@/components/layout/preloader";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteDescription =
  "The personal playground of Wirya Dinata Mulia — developer, technology enthusiast, and builder of digital things in Bandung, Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Wirya Dinata Mulia — The Creative Playground",
    template: "%s — Wirya Dinata Mulia",
  },
  description: siteDescription,
  applicationName: "The Creative Playground",
  authors: [{ name: "Wirya Dinata Mulia" }],
  creator: "Wirya Dinata Mulia",
  keywords: [
    "Wirya Dinata Mulia",
    "portfolio",
    "developer",
    "web developer",
    "Bandung",
    "Next.js",
    "React",
    "TypeScript",
    "creative portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Creative Playground",
    title: "Wirya Dinata Mulia — The Creative Playground",
    description: siteDescription,
    images: [
      {
        url: "/images/og-playground.jpg",
        width: 1200,
        height: 630,
        alt: "Wirya Dinata Mulia — The Creative Playground. A warm, dark editorial composition with a mirror selfie in a floating photo window.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wirya Dinata Mulia — The Creative Playground",
    description: siteDescription,
    images: ["/images/og-playground.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#171512",
  colorScheme: "dark",
};

const themeScript = `(function(){try{var t=localStorage.getItem("playground-theme");var next=t==="light"?"light":"dark";document.documentElement.dataset.theme=next;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",next==="light"?"#f2e8d8":"#171512");}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-svh overflow-x-clip bg-ink text-cream antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Preloader />
        <div
          aria-hidden="true"
          className="page-atmosphere pointer-events-none fixed inset-0 -z-10"
        />
        <Grain />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
