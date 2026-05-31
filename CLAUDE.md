# CLAUDE.md — Badlaav Foundation website

Project context for continuing this build. Read this file, then `mem/index.md` and `mem/features/locked-facts.md`, before making any change.

## What this is
Marketing and donation site for Badlaav Foundation, a nonprofit working inside government Child Care Institutions in Dehradun since 2019. Stack: TanStack Start, React 19, Vite, Tailwind v4, shadcn/ui, Supabase. Package manager is bun (there is a `bun.lock`). Run with `bun install` then `bun dev`. All routes live in `src/routes`. Shared components live in `src/components` (layout, media, brand, home, forms, ui).

## Source of truth
`mem/index.md` holds the brand and colour rules. `mem/features/locked-facts.md` holds all programmes, people, proof points, certifications, tiers, and contact details. Use ONLY facts from these files. Do not invent acronyms, ratios, dates, names, or statistics. If something needed is not there, leave a clearly marked `[TO CONFIRM]` placeholder instead of guessing.

## Hard guardrails (never break these)
- No em-dashes anywhere, in copy or comments. Banned words: orphan, victim, underprivileged, disadvantaged, charity, handout, poor kids, beneficiary (public-facing), saving children, giving back, FSFL.
- Images of children or any people must be real photographs, sourced from Pawan or the old site badlaavfoundation.in. Never AI-generate or use stock photos of people. AI imagery is allowed only for non-human textures and landscapes (the three existing brand images are fine).
- Every Donate button uses the `KETTO_URL` constant in `src/lib/site.ts`. It is a placeholder until the live Ketto campaign link is supplied. Never hardcode ketto.org's homepage.
- Bank and certificate numbers are marked verify before publish. Do not present them as confirmed.
- Cream-dominant palette. Ink is for the footer and at most one or two punctuating bands per page. Never an ink nav, never an ink hero. Lime is the single action accent.
- Reuse the existing components and design tokens in `src/styles.css`. Keep padding, radius, and font sizes consistent across every page. Do not reinvent patterns that already exist.

## Open item to flag, do not resolve alone
Several specifics in `locked-facts.md` are precise factual claims (the CHAMP acronym expansion and 1:6 ratio, AISSEE 2024-25, the home names Baniyawala and Kaulagarh and their counts). These must be confirmed by Pawan, who owns the content, before publish. If asked to publish or finalise, remind the user of this.

## Remaining work (continue here, one chunk at a time, do not do all at once)
Already done by the previous tool, verify each still holds:
- Motion-gradient hover on CTAs (solid buttons flow through the spectrum; outline buttons have an animated gradient border).
- Photo caption rule removed and caption text shrunk.
- Footer: smaller wordmark; filled lime social icons moved to the right, inline with the Join button; Hindi tagline in the display font.
- WhatsApp button is a floating rounded-square.

Still to build:
1. Hero redesign. Stronger and less generic than the current treatment. Real photograph or typographic, on cream, no silhouette, no blue block.
2. Distinct but consistent inner-page headers. Each page header (PageHero) should feel a little different from the body while staying templatised and consistent across pages.
3. Programme pages upgrade. Icons on the eight Skill Clubs and on the results; an Express Interest CTA with a gradient glow and an image beside it; an image to the left of the fifth point. Right images for each model element.
4. Stories as chapters. Treat the stories as a narrative chapter sequence, not flat cards. Be creative within the evidence-led, non-sentimental tone.
5. Wire imagery everywhere it is missing. Place the three brand images and any real photos into pages that still show PhotoPlaceholder, especially the Meenakshi Cultural Minister moment. Keep placeholders only where no real photo exists yet.
6. Fix any scroll-reveal that leaves content clipped or empty. Default state must be fully visible; animation only enhances. Respect prefers-reduced-motion.
7. Full mobile sweep at 360, 768, and 1440. No glitches, no overflow, consistent spacing.
8. Final consistency pass across all pages: padding, side padding, radius, and font sizes tokenised and uniform.

## Quality bar
Mobile-first and responsive at 360 / 768 / 1440. WCAG AA contrast, visible keyboard focus, alt text on every image, lazy-loaded images. Reduced-motion fallbacks for all animation. Per-page SEO meta and OpenGraph. No console errors.

## Note for Antigravity
If using Google Antigravity instead of Claude Code, copy this file to `AGENTS.md` in the project root so the agent reads it.
