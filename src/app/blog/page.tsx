import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on building software.",
};

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        Coming soon. The plan: practical posts—real problems, real solutions, no fluff.
      </p>
    </div>
  );
}
