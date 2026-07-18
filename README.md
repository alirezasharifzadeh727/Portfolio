# Portfolio — Alireza Sharifzadeh

A bilingual (Deutsch / English) portfolio website for a career-changer applying
for an **Ausbildung als Fachinformatiker für Daten- und Prozessanalyse**.
Dark "data dashboard" aesthetic, built with Next.js and Tailwind, with motion
throughout.

## Tech stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `app/globals.css`)
- **Motion** (Framer Motion) for animations
- **lucide-react** for icons
- Fonts: IBM Plex Sans + IBM Plex Mono (self-hosted via `next/font`)

## Running it

```bash
npm install       # first time only
npm run dev       # start dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint      # ESLint
```

## How it's organized

```
app/
  layout.tsx          # fonts, metadata, providers, pre-hydration language script
  page.tsx            # assembles the one-page site
  globals.css         # theme tokens (colors, fonts, keyframes)
  impressum/page.tsx  # legal notice (German)
components/
  layout/             # Navbar, LanguageToggle, Footer
  sections/           # Hero, Journey, Experience, Skills, Projects, Certificates, Languages, Contact
  ui/                 # reusable primitives (cards, badges, bars, timeline, monogram…)
data/                 # all content lives here as bilingual { de, en } objects
lib/
  i18n/               # LanguageContext + UI-string dictionaries
  utils.ts            # cn() className helper
  motion-variants.ts  # shared animation variants
```

**To change any text or add certificates/projects**, edit the files in `data/`.
Each record carries both `de` and `en` so translations stay side by side.

## Before publishing — things to fill in

- **Impressum address** — `app/impressum/page.tsx` shows a `[Anschrift ergänzen]`
  placeholder. Add a real postal address if you publish this publicly (German
  sites conventionally need an Impressum).
- **CV download** — no Lebenslauf PDF is wired up yet. Drop a PDF in `public/`
  and add a download button if you want one.
- **Project links** — the Projects section uses text case studies. Add live/
  GitHub links in `data/projects.ts` once you have them.

## Deploying

Push to GitHub and import the repo into [Vercel](https://vercel.com) — it detects
Next.js automatically and needs no configuration.
