# Portfolio — Alireza Sharifzadeh

Bilingual (Deutsch / English) portfolio website for a career-changer applying for
an **Ausbildung als Fachinformatiker für Daten- und Prozessanalyse**. Dark "data
dashboard" aesthetic, built with Next.js and Tailwind, with motion throughout.

**Live site:** _add your Vercel URL here after deploying_

## Features

- **Bilingual** — instant Deutsch ⇄ English toggle, German by default, choice remembered between visits
- **One-page flow** — Hero, Werdegang (journey), Erfahrung, Skills, Projekte, Zertifikate, Sprachen, Kontakt
- **Verifiable credentials** — every IBM/edX certificate links to its official verification page
- **CV download** — one-click Lebenslauf download from the hero
- **Motion** — scroll reveals, animated skill/score bars, and a glowing scroll-spy navigation
- **Accessible & responsive** — keyboard-navigable, respects reduced-motion, mobile-first

## Tech stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `app/globals.css`)
- **Motion** (Framer Motion) for animations
- **lucide-react** for icons
- Fonts: IBM Plex Sans + IBM Plex Mono (self-hosted via `next/font`)

## Running it locally

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

## Project structure

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
public/
  lebenslauf.pdf      # the downloadable CV
```

## Editing the content

All text lives in `data/*.ts` — each record carries both `de` and `en`, so the two
languages stay side by side and translations don't drift.

- **Add a certificate** → `data/certificates.ts`
- **Add / edit a project** → `data/projects.ts`
- **Name, email, LinkedIn, CV filename** → `data/personal.ts`
- **Replace the CV** → drop a new file at `public/lebenslauf.pdf` (keep the name lowercase)
- **Nav labels & buttons** → `lib/i18n/dictionaries.ts`

## Deploying

Imported into [Vercel](https://vercel.com) from this GitHub repo — it detects
Next.js automatically and needs no configuration. Every push to `main`
auto-rebuilds and redeploys the live site.

## To finish before sharing widely

- **Impressum address** — `app/impressum/page.tsx` has an `[Anschrift ergänzen]`
  placeholder; add a real postal address (German sites conventionally need an Impressum).
- **Project links** — the Projects section uses text case studies; add live/GitHub
  links in `data/projects.ts` once you have them.
