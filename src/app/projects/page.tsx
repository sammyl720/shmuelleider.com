import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Shmuel Leider.",
};

type Project = {
  title: string;
  description: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "(Add your first project)",
    description:
      "Replace this placeholder with something you’ve shipped: what it does, why it exists, and what you built.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <h2 className="font-medium">{p.title}</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.description}</p>
            {p.href ? (
              <a
                className="mt-3 inline-block text-sm text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
                href={p.href}
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
