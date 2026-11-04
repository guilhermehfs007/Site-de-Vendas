# Sea Salt Artesanato — 2025 Static Site Stack Research

> **Project:** Sea Salt Artesanato vitrine (catalog site) — pure HTML/CSS/JS, no backend, no framework.
> **Target audience:** Mobile-first consumers browsing handcraft/crochet pieces and contacting the artisan via WhatsApp.

---

## Overview

Recomendações técnicas para site vitrine mobile-first estático usando HTML5, CSS3 e JS puro. Foco em performance rápida, sem dependências externas pesadas e CTA direto para WhatsApp.

---

## Recommended Approach

| Concern | Recommended Solution | Confidence |
|---|---|---|
| CSS base/reset | Custom micro-reset inline (~20 lines) | ⭐⭐⭐⭐⭐ Very High |
| Google Fonts | CDN com `preconnect` + `font-display: swap`; 2 pesos (400, 700) | ⭐⭐⭐⭐⭐ Very High |
| Image format | WebP via script de conversão + fallback `<picture>` | ⭐⭐⭐⭐⭐ Very High |
| WhatsApp links | `https://wa.me/5512997817407?text=<encoded>` | ⭐⭐⭐⭐⭐ Very High |
| Lazy loading | Nativo `loading="lazy"` + `fetchpriority="high"` no Hero | ⭐⭐⭐⭐⭐ Very High |
| Product grid | CSS Grid `repeat(auto-fill, minmax(min(100%, 260px), 1fr))` | ⭐⭐⭐⭐⭐ Very High |
| SEO meta | Standard meta + Open Graph + JSON-LD `LocalBusiness` | ⭐⭐⭐⭐⭐ Very High |
| Deployment | Netlify, GitHub Pages ou Vercel | ⭐⭐⭐⭐⭐ Very High |

---

## Decisões Chave de Tecnologia

1. **Sem frameworks CSS ou JS**: Vanilla puro para tempo de carregamento instantâneo no celular.
2. **Imagens Otimizadas**: 7 imagens convertidas para WebP mantendo cópia JPEG para compatibilidade.
3. **Tipografia**: Playfair Display (serif) para títulos e Lato (sans-serif) para o corpo.
4. **Cores**: Bege (`#f5efe6`), Terracota (`#c47b55`), Verde-sálvia (`#7a9e7e`), Off-white (`#faf7f2`), Texto escuro (`#3b2f2f`).
