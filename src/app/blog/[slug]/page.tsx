import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Minimal renderer: treat MDX content as plain text for now.
  // Next step is to render the MDX properly (components, code blocks, etc.).
  // Keeping this intentionally simple until we pick typography components.

  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>{post.frontmatter.title}</h1>
      <p className="text-sm text-zinc-500">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
      <pre className="whitespace-pre-wrap rounded-xl bg-zinc-50 p-4 text-sm dark:bg-zinc-950">
        {post.content}
      </pre>
    </article>
  );
}
