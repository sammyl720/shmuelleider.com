import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Shmuel Leider.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        I’m Shmuel (Shmuli) Leider, a software developer in Brooklyn, New York. I like building clean,
        maintainable systems and shipping work that’s actually useful.
      </p>
      <p className="text-zinc-700 dark:text-zinc-300">
        This site is intentionally minimal: clear writing, real projects, and no hype.
      </p>
    </div>
  );
}
