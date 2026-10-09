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

The first project gallery expects three PNG screenshots in `public`: `project1a.png`, `project1b.png`, and `project1c.png`. The gallery scrolls sideways on both desktop and mobile and shows styled placeholders until the screenshots are added. Its live demo links to the Code Review Assistant dashboard deployment.

## Deploy to Vercel

Push the project to GitHub, import the repository in [Vercel](https://vercel.com/new), and deploy with the default Next.js settings. No environment variables are needed for the current phase.
