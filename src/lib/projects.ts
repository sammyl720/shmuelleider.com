export type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Frame / Work",
    type: "AI product system",
    description:
      "An end-to-end cinematic production studio that turns a brief into scripts, storyboards, generated scenes, rendered video, and platform-ready packages—with persistent jobs and careful recovery built in.",
    stack: ["TypeScript", "OpenAI", "SQLite", "FFmpeg"],
    repo: "https://github.com/sammyl720/automate-cinema",
    featured: true,
  },
  {
    number: "02",
    title: "Journal",
    type: "Full-stack application",
    description:
      "A focused writing space with Markdown editing, image attachments, voice notes, secure persistence, and a foundation for semantic search and AI-assisted reflection.",
    stack: ["Next.js", "Supabase", "TypeScript", "AI search"],
    repo: "https://github.com/sammyl720/Journal",
    live: "https://journal-liard-nine.vercel.app",
    featured: true,
  },
  {
    number: "03",
    title: "Troy Organic Cleaners",
    type: "Client platform + CMS",
    description:
      "A production website paired with a secure content-management system for services, hours, and announcements. The architecture keeps the public experience fast while protecting administrative data with row-level security.",
    stack: ["React", "Supabase", "PostgreSQL", "Playwright"],
    repo: "https://github.com/sammyl720/troyorganiccleaners",
    featured: true,
  },
  {
    number: "04",
    title: "AI Agents",
    type: "Open-source TypeScript library",
    description:
      "A package for creating specialized AI agents, equipping them with tools, and coordinating their work through an observable orchestrator.",
    stack: ["TypeScript", "OpenAI", "Node.js", "npm"],
    repo: "https://github.com/sammyl720/ai-agents",
    featured: true,
  },
  {
    number: "05",
    title: "Image Generator MCP",
    type: "Developer tool",
    description:
      "An open-source Model Context Protocol server that gives compatible AI clients a straightforward image-generation tool backed by OpenAI.",
    stack: ["MCP", "OpenAI", "TypeScript", "Node.js"],
    repo: "https://github.com/sammyl720/image-generator-mcp-server",
    featured: true,
  },
  {
    number: "06",
    title: "AI URL Query",
    type: "Retrieval library",
    description:
      "A TypeScript toolkit that extracts a webpage, segments and embeds its content, then answers natural-language questions using the most relevant passages.",
    stack: ["TypeScript", "Embeddings", "Vector search", "OpenAI"],
    repo: "https://github.com/sammyl720/ai-url-query",
    featured: true,
  },
  {
    number: "07",
    title: "FocalStorage",
    type: "Browser utility",
    description:
      "A small localStorage wrapper with automatic JSON handling, expiring values, and an intentionally compact API.",
    stack: ["TypeScript", "Web APIs", "npm"],
    repo: "https://github.com/sammyl720/focal-storage",
  },
  {
    number: "08",
    title: "Axum Todo",
    type: "Rust web application",
    description:
      "A compact task application built with Axum and SQLite, including migrations and Docker support.",
    stack: ["Rust", "Axum", "SQLite", "Docker"],
    repo: "https://github.com/sammyl720/axum_todo_app",
  },
  {
    number: "09",
    title: "Simple MCP",
    type: "Protocol reference",
    description:
      "A minimal stateless HTTP implementation of an MCP server, designed to make the protocol easy to understand and extend.",
    stack: ["TypeScript", "MCP", "Express", "Docker"],
    repo: "https://github.com/sammyl720/simple-mcp",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
