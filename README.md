# Jeslin James — Portfolio

A personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. The project is designed to deploy to Vercel without a database or custom backend.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the site.

## Phase 1 status

The current phase includes the responsive hero, pastel light/dark theme, typography, and your portrait at `public/me.jpeg`. To replace the portrait, put an image in `public` and update the image path in `src/app/page.tsx`. To add your resume, copy its PDF into the `public` folder and name it `resume.pdf`; the hero's Resume link will then serve it at `/resume.pdf`.

## Project screenshots

The Code Review Assistant gallery uses `public/project1a.png` through `project1c.png`. The AI Resume Screening Assistant gallery uses `public/project2a.png` through `project2d.png`. Galleries scroll sideways on desktop and mobile and show styled placeholders for any missing screenshots. Project details for the resume screener are marked as coming soon until provided.

## Deploy to Vercel

Push the project to GitHub, import the repository in [Vercel](https://vercel.com/new), and deploy with the default Next.js settings. No environment variables are needed for the current phase.
