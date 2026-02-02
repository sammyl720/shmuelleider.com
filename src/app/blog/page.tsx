import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on building software.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-zinc-700 dark:text-zinc-300">
          No posts yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {posts.map((p) => (
            <li key={p.slug} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
              <Link href={`/blog/${p.slug}`} className="font-medium hover:underline underline-offset-4">
                {p.frontmatter.title}
              </Link>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.frontmatter.summary}</p>
              <p className="mt-3 text-xs text-zinc-500">{new Date(p.frontmatter.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
