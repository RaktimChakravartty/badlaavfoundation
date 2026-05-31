# Project Memory

## Core
Badlaav Foundation nonprofit site. Vibe: editorial, premium, grounded, modern Indian. Tagline "Badlaav hum se hai".
Colors (CSS vars in styles.css): --ink #1B2951, --sky #2E8DD8, --teal #0DAFA4, --lime #8DC640, --saffron #E8A33D, --terra #D17456, --plum #6B4A7E, --cream #F7F3EB, --cream2 #FAF7F0, --stone #E5E0D5, --wg #6B6B66.
COLOUR RHYTHM (site-wide): cream-dominant (~70% cream/cream2 surfaces). Default bg --cream; cards/alternate sections --cream2. --ink ONLY for footer + at most one or two punctuating bands per page (pull-quote or final CTA). NEVER ink nav, NEVER ink hero, NEVER most sections. Gradient bar + single accent carry the energy on cream. ~20% ink, ~10% accent/gradient.
Nav is LIGHT: --cream bg (translucent on scroll), ink text, 1px --stone bottom border, "Support Us" = solid btn-lime. Hero is --cream2 with a real photo.
Fonts: Rajdhani (headings/logo/ब), IBM Plex Sans (body/buttons), IBM Plex Sans Devanagari (Hindi).
GradientBar (7-stop bar) goes after every hero. Logo = vertical "Badlaav / FOUNDATION" wordmark lockup (currentColor) in src/components/brand/Logo.tsx. The ब monogram (Monogram.tsx / favicon.svg) is favicon/app-icon ONLY. Never add a bird/mascot/second symbol.
IMAGES: real photos only for children/events (pull from old site badlaavfoundation.in URLs or uploads; NEVER AI-generate people). AI ok only for non-human textures/landscape. No real photo -> brand fallback block (PhotoPlaceholder, cream2/stone tone, "Photo · ..." label). PhotoPlaceholder accepts optional src for real images.
COPY: no em-dashes ever. Banned words: orphan, victim, underprivileged, disadvantaged, charity, handout, poor kids, beneficiary (public), saving children, giving back, FSFL.
Always "250+ children", "4 of 7 girls cleared the written examination", one child = one Skill Club. Use ONLY facts in the knowledge file.
All Donate buttons use KETTO_URL placeholder (src/lib/site.ts).

## Memories
- [Locked facts](mem://features/locked-facts) — programmes, people, proof points, certifications, tiers, contact
