import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Software developer / builder</h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          I build practical software: web apps, developer tools, and systems that make work smoother.
          Based in Brooklyn, NY.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
          >
            View projects
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-950"
          >
            About
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">Now</h2>
        <ul className="list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
          <li>Shipping small, useful tools</li>
          <li>Keeping this site minimal, fast, and honest</li>
        </ul>
      </section>
    </div>
  );
}
