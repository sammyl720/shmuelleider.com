import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shmuelleider.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shmuel Leider — Software Developer & Builder",
    template: "%s — Shmuel Leider",
  },
  description:
    "The work of Shmuel Leider, a full-stack developer building thoughtful products, AI tools, and durable software systems in Brooklyn, New York.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Shmuel Leider — Software Developer & Builder",
    description: "Thoughtful products, AI tools, and durable software systems.",
    url: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f0e9",
};

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "Profile" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="brand" aria-label="Shmuel Leider, home">
              <span className="brand-mark">SL</span>
              <span className="brand-copy">Shmuel Leider</span>
            </Link>
            <nav className="site-nav" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <a href="mailto:hello@shmuelleider.com">Contact</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <p>Shmuel Leider <span>·</span> Brooklyn, NY</p>
            <div>
              <a href="mailto:hello@shmuelleider.com">Email</a>
              <a href="https://github.com/sammyl720" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
            <p className="footer-note">Built with care, not a template.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
