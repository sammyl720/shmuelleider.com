import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes from Shmuel Leider on building software and learning in public.",
  alternates: { canonical: "/blog" },
};

export default function NotesPage() {
  return (
    <section className="notes-empty">
      <p className="mono-label">Notes / Field journal</p>
      <h1>The source code is the working record.</h1>
      <p>
        Longer notes are still taking shape. In the meantime, the repositories show the questions,
        tradeoffs, and iterations more honestly than a polished post could.
      </p>
      <a className="button button-primary" href="https://github.com/sammyl720" target="_blank" rel="noreferrer">
        Read the work on GitHub ↗
      </a>
    </section>
  );
}
