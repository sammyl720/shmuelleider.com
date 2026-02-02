# shmuelleider-com

Personal website for **Shmuel (Shmuli) Leider**.

Built as a modern, minimal Next.js web app (App Router) with TypeScript + Tailwind.

## Quickstart

Requirements:
- Node.js (LTS recommended)

Install deps:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` – local dev server
- `npm run build` – production build
- `npm run start` – run production server
- `npm run lint` – lint

## Configuration

Optional environment variables:

- `NEXT_PUBLIC_SITE_URL` (recommended for sitemap/metadata)
  - Example: `https://www.shmuelleider.com`

Create a `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import into Vercel
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel env vars
4. Deploy

## Repo standards

- Default branch: `main`
- Feature branches: `feature/<short-name>`
- Keep copy and claims accurate; substance over hype.
