# Features Research: Handcraft / Crochet Catalog Vitrine

> Research date: 2026-11-04  
> Context: Sea Salt Artesanato — static single-page catalog, WhatsApp-first sales, mobile audience, HTML/CSS/JS vanilla stack.

---

## Table Stakes (Must-Have)

These are non-negotiable features that any artisan catalog website needs to function and convert.

### Hero Section

- **Full-width visual** — lifestyle photo showing finished pieces or hands working; warm, high-resolution image that communicates handmade quality instantly
- **Brand name + short tagline** — readable within 2 seconds on a phone screen; tagline should communicate the craft and the warmth (e.g., "Peças de crochê feitas à mão, com amor")
- **Primary CTA in hero** — either "Ver Peças" (scrolls to gallery) or a WhatsApp button for custom orders; must be visible above the fold on mobile without scrolling
- **Overlay or strong typography contrast** — text over images must meet WCAG AA (4.5:1 for body, 3:1 for large headings); never rely on a photo alone to hold contrast — use a semi-transparent dark/light scrim

### Product Card Anatomy

Each card must contain, in order:
1. **Product photo** — square or portrait aspect ratio (`aspect-ratio: 1/1` recommended for uniformity); `object-fit: cover`; `loading="lazy"`; descriptive `alt` text (not just the filename)
2. **Product name** — `<h3>` or `<h2>` depending on hierarchy; short, clear (1–4 words)
3. **Short description** — 1–2 lines max; material, intended use, or standout feature
4. **Price / pricing label** — "Consulte valores" with strong contrast; never hide or omit this element entirely as it creates confusion
5. **WhatsApp CTA button** — "Pedir pelo WhatsApp" with product name in pre-filled message; must be visually distinct (filled button, minimum 48×48px tap target on mobile)

### WhatsApp CTA Pattern

- **Floating button (sitewide):** Fixed position bottom-right, `z-index` above content; 56–64px diameter circle with WhatsApp green `#25D366` background + white icon; tooltip "Falar no WhatsApp" on hover/focus; generic pre-filled message: `https://wa.me/5512997817407?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Sea%20Salt%20Artesanato%20e%20quero%20saber%20mais%20%F0%9F%98%8A`
- **Per-product button:** Each card has its own `wa.me` link with product-specific text, e.g.: `https://wa.me/5512997817407?text=Ol%C3%A1!%20Tenho%20interesse%20na%20pe%C3%A7a%20%22Bolsa%20Vermelha%22.%20Pode%20me%20informar%20os%20valores%3F`
- **wa.me URL rules:** International format, no `+`, no spaces, no dashes — `5512997817407`; text must be URL-encoded (spaces → `%20`, emoji supported)
- **Never block mobile CTA with floating button** — the floating button must not overlap the per-product "Pedir" button when user is at the bottom of a card

### "Sobre a Artesã" / About Section

- **Real photo of the artisan** — ideally working (hands crocheting, yarn visible), not a formal portrait; builds "real person" trust and differentiates from mass-produced goods
- **First name + conversational tone** — write as if speaking directly to the customer; "Olá! Sou Graziele…"
- **Origin story hook** — brief: how the craft started, how long she's been practicing
- **Process transparency** — mention materials used, that pieces are made-to-order or handmade one-by-one; justifies the "Consulte valores" approach
- **CTA at bottom** — link back to the gallery: "Ver as peças"

### Contact Section

- **WhatsApp number** — displayed as human-readable `+55 12 99781-7407`, clickable `wa.me` link
- **Instagram handle** — `@_sea_salt_artesanato`, linked to `https://instagram.com/_sea_salt_artesanato`
- **Email** — `monteiro.graziele@gmail.com`, linked with `mailto:`
- **City** — Ribeirão Preto – SP (builds local trust; also helps with local search)
- **All contact info repeated in footer** — many users scroll to the bottom to find contact details

### Mobile-First Grid Layout

```css
/* Gallery grid — sea salt pattern */
.gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 col mobile */
  gap: 12px;
  padding: 12px;
}

@media (min-width: 640px) {
  .gallery {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* 3 col tablet+ */
    gap: 20px;
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* stay 3 col desktop — artisan feel, not grid-heavy */
    gap: 24px;
  }
}
```

- Note: 7 products at 2-col mobile yields 4 rows (last row has 1 card); center the orphaned card with `justify-items: center` or use `grid-column: span 2` on the last item with `max-width: 50%`

### Accessibility Basics

- **Alt text** — every `<img>` must have descriptive alt text, e.g. `alt="Bolsa de crochê vermelha com alça de couro sintético"` — not `alt="bolsa-vermelha.jpg"`
- **Color contrast** — WCAG AA minimum: 4.5:1 for body text, 3:1 for large headings; test the project palette:
  - Bege (#f5efe6) background + dark text (#2b2b2b): ✅ passes comfortably
  - Terracota (#c47b55) buttons + white text: verify — may need darker terracotta shade for small text
  - Verde-sálvia (#7a9e7e) on bege: check carefully — muted greens can be low contrast
- **Tap target size** — all interactive elements (buttons, links) minimum 48×48px physical hit area; use padding if the visual size is smaller
- **Focus styles** — never remove `outline`; provide custom `:focus-visible` ring (e.g., 2px solid #2b2b2b)
- **Semantic HTML** — use `<header>`, `<main>`, `<section>`, `<footer>`, `<article>` for each product card, `<h1>` only once (brand name in hero)
- **`lang="pt-BR"`** on `<html>` — required for screen readers to use correct Brazilian Portuguese pronunciation

### SEO Basics

- `<title>Sea Salt Artesanato | Crochê Feito à Mão — Ribeirão Preto</title>`
- `<meta name="description" content="Peças de crochê feitas à mão pela artesã Graziele. Bolsas, roupas e acessórios exclusivos. Encomende pelo WhatsApp.">`
- `<meta property="og:image">` pointing to the hero image (for WhatsApp/Instagram link previews — very important for the target audience)
- `<meta property="og:title">` and `<meta property="og:description">`

---

## Differentiators (Nice-to-Have)

These separate a memorable artisan site from a generic catalog. Prioritize by effort vs. impact.

### High-Impact / Low-Effort

- **Product image hover effect** — subtle scale `transform: scale(1.03)` on hover; communicates interactivity without JS
- **"Feito à mão" badge** — small stamp/label overlaid on card or below product name; reinforces the handmade value proposition on every card
- **Smooth scroll behavior** — `scroll-behavior: smooth` in CSS; navigation anchors feel polished
- **Section dividers with texture** — SVG wave or torn-paper divider between hero → gallery → about; reinforces artisan aesthetic without images
- **Color palette as CSS custom properties** — `--bege`, `--terracota`, `--sage` etc.; makes theming consistent and easy to adjust

### Medium-Impact / Medium-Effort

- **Sticky WhatsApp number in header** — a small persistent bar or the floating button visible at all times; conversion lifeline for mobile users who decide mid-scroll
- **"Como funciona" / How it works** — 3-step icon section: "Escolha sua peça → Fale no WhatsApp → Receba em casa"; removes friction by setting expectations for first-time buyers unfamiliar with custom-order model
- **Testimonials / Depoimentos** — 2–3 short client quotes with names; even without star ratings, real words dramatically increase trust for first-time visitors; can be static text
- **Made-to-order disclaimer** — clear statement near the gallery: "Todas as peças são feitas sob encomenda. Consulte disponibilidade e prazos pelo WhatsApp." Sets expectations and reduces misunderstandings

### Lower-Impact / Higher-Effort

- **Category filter tabs** — if product count grows; unnecessary for 7 products but useful at 15+
- **Lightbox on product image** — allows zooming into stitch detail; important for crochet where texture is a selling point; can be done with ~20 lines of vanilla JS
- **Instagram static link section** — a simple "Me siga no Instagram" banner with 3–6 static screenshot images linking to the profile; DO NOT use a live-feed embed widget (see Anti-features)

---

## Anti-Features (Avoid)

These are common mistakes that hurt conversion, trust, or performance for this type of site.

### UX / Conversion Killers

- ❌ **Vague or poetic navigation labels** — "Meu cantinho", "Com carinho", "Criações" — users are task-oriented; use plain labels: "Peças", "Sobre", "Contato"
- ❌ **Wall-of-text product descriptions** — artisan backstory is valuable, but not at the expense of scannable specs; on a WhatsApp-CTA model, descriptions should be short and trigger desire, not inform exhaustively
- ❌ **Hiding price entirely with no CTA** — "Consulte valores" is correct, but it must be paired with an immediately visible WhatsApp button; a bare "Consulte valores" with no action link frustrates mobile users
- ❌ **Blurry or dark product photos** — no amount of CSS can fix a bad source photo; textures and stitch definition are the main reason a crochet buyer chooses a piece; ensure natural window lighting before converting to WebP
- ❌ **Floating WhatsApp button covering bottom-of-card CTA** — on mobile, if the per-product button aligns with the floating button's corner, users can't tap the product CTA; test at 375px width
- ❌ **Autoplay background music or video** — common in "artisan" templates; kills load speed, startles mobile users, and is inaccessible

### Performance / Technical

- ❌ **Live Instagram feed embed widget** (Elfsight, Common Ninja, etc.) — adds ~100–300KB of third-party JS, free tier has monthly view caps that break the feed mid-month, adds layout shift (CLS), and introduces an external point of failure; for a 7-product static site, the risk/complexity is not worth it → use a static "follow us" link instead
- ❌ **Google Fonts `@import` in CSS** — use `<link>` in `<head>` with `rel="preconnect"` to `fonts.googleapis.com` and `fonts.gstatic.com` instead; avoids render-blocking and reduces LCP
- ❌ **Uncompressed JPEG product images** — originals must be converted to WebP (target ≤ 150KB per image at 800px width); lazy loading alone doesn't fix a 2MB source file
- ❌ **Missing `lang` attribute on `<html>`** — screen readers default to wrong language; also affects Google's understanding of content locale

### Trust Destroyers

- ❌ **No visible contact information above the fold or in nav** — first-time visitors scanning on mobile need to see at minimum the WhatsApp number within the first scroll; hiding all contact info in a bottom section loses impatient users
- ❌ **Broken or placeholder images** — a card with a missing image (`alt` text visible) destroys credibility instantly; ensure all 7 images are confirmed before launch
- ❌ **Informal/unprofessional error states** — if JS fails, all cards should still display with HTML fallback; never show a raw `undefined` or empty `<div>`

---

## UX Patterns

### Page Flow (Single Page)

```
[Header: Logo + WhatsApp number + Instagram icon]
         ↓
[Hero: Full-width photo + tagline + 2 CTAs]
         ↓
[Gallery: 2–3 col grid of 7 product cards]
         ↓
["Como Funciona" strip — 3 steps (optional but recommended)]
         ↓
["Sobre a Artesã" — photo + text + CTA back to gallery]
         ↓
[Contato: WhatsApp + Instagram + Email + City]
         ↓
[Footer: copyright + links]

[Floating WhatsApp button: persistent on all scroll positions]
```

### WhatsApp Message Templates

**Floating button (generic):**
```
Olá! Vi o site da Sea Salt Artesanato e quero saber mais 😊
```
URL: `https://wa.me/5512997817407?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Sea%20Salt%20Artesanato%20e%20quero%20saber%20mais%20%F0%9F%98%8A`

**Per-product button (specific):**
```
Olá! Tenho interesse na peça "[NOME DA PEÇA]". Pode me informar os valores?
```
URL pattern: `https://wa.me/5512997817407?text=Ol%C3%A1!%20Tenho%20interesse%20na%20pe%C3%A7a%20%22[NOME_ENCODED]%22.%20Pode%20me%20informar%20os%20valores%3F`

### Product Card Interaction Pattern

```
[Card at rest]
  → Square image (aspect-ratio 1:1)
  → Product name (h3)
  → Short description (1–2 lines)
  → "Consulte valores" label (muted)
  → [Pedir pelo WhatsApp] button (full width, terracota)

[Card on hover/focus — desktop]
  → Image scales to 1.03 (transform)
  → Button transitions to slightly darker terracota
```

### Mobile Navigation Pattern

- No hamburger menu needed for a 4-section single page — a simple sticky header with logo + floating WA button is sufficient
- If nav links are added: horizontal scroll pill-shaped anchors ("Peças · Sobre · Contato") is cleaner than a hamburger for 3–4 items on mobile
- Smooth scroll anchor links: `<a href="#galeria">`, `<a href="#sobre">`, `<a href="#contato">`

### Instagram: Static Link Pattern (Recommended over live embed)

```html
<!-- Simple, zero-dependency Instagram CTA -->
<section class="instagram-cta">
  <p>Acompanhe o processo e as novidades no Instagram:</p>
  <a href="https://instagram.com/_sea_salt_artesanato" 
     target="_blank" rel="noopener noreferrer"
     class="btn btn-outline">
    @_sea_salt_artesanato ↗
  </a>
</section>
```

Optionally, add 3–6 hand-picked static screenshot images as a mini grid linking to the profile. This is zero-dependency, always works, never breaks on free tier limits, and adds visual warmth.

---

*Research sources: artisan website UX studies, WCAG 2.2 accessibility guidelines, wa.me documentation, mobile grid pattern surveys, Instagram embed feasibility analysis for static sites.*
