import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shmuel Leider",
    template: "%s · Shmuel Leider",
  },
  description: "Software developer and builder in Brooklyn, NY.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Shmuel Leider",
    description: "Software developer and builder in Brooklyn, NY.",
    url: "/",
  },
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-dvh bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
          <header className="border-b border-zinc-200/60 dark:border-zinc-800/60">
            <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-5">
              <Link href="/" className="font-medium tracking-tight">
                Shmuel Leider
              </Link>
              <nav className="flex items-center gap-4">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blog">Blog</NavLink>
              </nav>
            </div>
          </header>

          <main className="mx-auto w-full max-w-3xl px-6 py-10">{children}</main>

          <footer className="mx-auto w-full max-w-3xl px-6 py-10 text-sm text-zinc-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Shmuel Leider</p>
              <p className="flex gap-3">
                <a className="hover:text-zinc-950 dark:hover:text-zinc-50" href="https://github.com/sammyl720" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="hover:text-zinc-950 dark:hover:text-zinc-50" href="mailto:hello@shmuelleider.com">
                  Email
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
