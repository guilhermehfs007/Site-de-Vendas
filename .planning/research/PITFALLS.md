# Common Pitfalls — Static Artisan Vitrine Sites

> Project: Sea Salt Artesanato | Stack: HTML/CSS/JS puro | Deploy: GitHub Pages / Netlify
> Last updated: 2026-11-04

---

## 🔴 Critical Pitfalls

### 1. WhatsApp Link Encoding Failures

**Problem:** Pre-filled messages in `wa.me` links break silently when they contain unencoded special characters. The WhatsApp link format is:
```
https://wa.me/5512997817407?text=MESSAGE
```
The `MESSAGE` part **must** be percent-encoded (`encodeURIComponent` in JS, or manual encoding). Common failures:

| Character | Raw | Encoded |
|-----------|-----|---------| 
| Space | ` ` | `%20` (or `+`) |
| Line break | `\n` | `%0A` |
| `&` | `&` | `%26` |
| `+` | `+` | `%2B` |
| `#` | `#` | `%23` |
| Emoji (e.g. 😊) | `😊` | `%F0%9F%98%8A` |
| Portuguese accents (ã, é, ç) | raw | `%C3%A3`, `%C3%A9`, `%C3%A7` |

**Specific risk for this project:** The generic floating button message contains `😊` and accented Portuguese ("Olá!", "quero saber mais"). Each product button embeds the product name (e.g. "bolsa-vermelha", "case-de-notebook") — if names are ever user-generated they may include spaces or special chars.

**Fix:** Always build WhatsApp href via JS:
```javascript
function waLink(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
// Usage:
anchor.href = waLink('5512997817407', 'Olá! Vi o site da Sea Salt Artesanato e quero saber mais 😊');
```
Never hard-code the query string manually in HTML for messages containing non-ASCII.

---

### 2. Unoptimized Images Destroying Mobile Performance

**Problem:** The 7 product images are the entire content of this site. If served as large JPGs (cameras produce 3–8 MB originals), the site will:
- Score <30 on Lighthouse mobile performance
- Take 10–20 s to load on 4G
- Cause massive Cumulative Layout Shift (CLS) while images download

**Specific risks:**
- **WebP conversion without resizing**: Converting a 4000×3000 px JPG to WebP still produces a 1–2 MB file. Resize **before** converting: gallery cards need ≤800px wide; hero needs ≤1200px wide.
- **Missing `width`/`height` attributes**: Browser can't reserve layout space → CLS score tanks. Always set explicit `width` and `height` on `<img>` matching the intrinsic size of the WebP.
- **Lazy loading the hero/above-fold image**: `loading="lazy"` on the first visible image delays the LCP (Largest Contentful Paint). The hero image must be `loading="eager"` (default). Only apply `loading="lazy"` to gallery images below the fold.
- **No `srcset`**: Serving the same image to both a 320px phone and a 1440px desktop wastes bandwidth. Use `srcset` with 400w and 800w variants.

**Target sizes:**
| Use | Max dimension | Target file size |
|-----|--------------|-----------------| 
| Gallery card thumbnail | 400 × 400 px | < 40 KB |
| Gallery card full (lightbox) | 800 × 800 px | < 120 KB |
| Hero/OG image | 1200 × 630 px | < 150 KB |

---

### 3. WebP Compatibility on Older iOS Safari (pre-14)

**Problem:** iOS Safari did not support WebP until Safari 14 (iOS 14, released September 2020). Devices stuck on iOS 13 (iPhone 6, 6s, some 7s) will display broken images.

**Market reality for Brazil:** As of 2024–2025, ~5–8% of Brazilian mobile users are still on iOS <14. For an artisan's audience that skews older/broader, this is non-negligible.

**Fix:** Use the `<picture>` element with a JPG fallback:
```html
<picture>
  <source srcset="imagem/bolsa-vermelha.webp" type="image/webp">
  <img src="imagem/bolsa-vermelha.jpg" alt="Bolsa de crochê vermelha feita à mão" 
       width="400" height="400" loading="lazy">
</picture>
```
Keep the original JPGs (compressed to ≤120 KB) alongside the WebP files. The browser picks the best format automatically.

---

### 4. GitHub Pages / Netlify Case Sensitivity Gotchas

**Problem:** Windows and macOS file systems are **case-insensitive** by default. Linux (where GitHub Pages and Netlify run) is **case-sensitive**. This creates broken links that only manifest after deployment.

**Classic failure patterns:**
- File saved as `Imagem/Bolsa-Vermelha.webp` but referenced in HTML as `imagem/bolsa-vermelha.webp` → 404 on production, works fine locally
- CSS file `Style.css` referenced as `style.css` → page renders unstyled on production
- `index.HTML` instead of `index.html` → GitHub Pages serves 404 on the root

**Fix:**
1. Use **all-lowercase, hyphen-separated** filenames for all assets: `bolsa-vermelha.webp`, `style.css`, `main.js`
2. After every file rename, do a project-wide search to update all references
3. Test with `npx serve .` locally on a case-sensitive path before push (or use WSL)

**Netlify-specific: `_redirects` file for SPA-style navigation:**
Not applicable here (single HTML file), but if you ever add a 404 page, name it `404.html` exactly.

**GitHub Pages CNAME pitfall:** If a custom domain is added later, the `CNAME` file must be in the repo root and contain only the bare domain (`seasaltartesanato.com.br`, no `https://`). Missing it after a `git push --force` wipes the domain setting.

---

### 5. Floating WhatsApp Button Z-Index and Mobile Overlap

**Problem:** The floating WhatsApp button is a fixed-position element. Common failures:

- **Z-index war**: If any element (modal, cookie banner, sticky header) also uses `position: fixed` without a z-index, they stack unpredictably. The WA button disappears behind overlapping elements.
- **Overlap with browser bottom bar on iOS**: On iPhone Safari, the browser chrome (address bar + bottom tab bar) can be 90–110 px tall. A button positioned `bottom: 20px` may be hidden under the tab bar in landscape.
- **Overlap with page content on small screens**: On 320px-wide phones (iPhone SE 1st gen), a large floating button (60×60 px) placed `right: 20px; bottom: 20px` may cover the last CTA button in the contact section.
- **Missing `pointer-events` trap**: If a transparent overlay (e.g., from a CSS animation) covers the button, clicks pass to the overlay instead. The button looks clickable but isn't.

**Fix:**
```css
.whatsapp-float {
  position: fixed;
  bottom: 24px;          /* safe above iOS tab bar */
  right: 20px;
  z-index: 9999;         /* explicit high value */
  width: 56px;
  height: 56px;
  /* ensure tap target ≥ 48×48 CSS px per WCAG 2.5.5 */
}
```
Add `padding-bottom: env(safe-area-inset-bottom)` or account for it in the `bottom` value for iPhone X+ notch/home bar devices.

---

## 🟡 Medium Pitfalls

### 6. Tap Target Too Small (Mobile UX / Core Web Vitals)

**Problem:** Google's CWV and WCAG 2.5.5 require interactive elements to have a minimum tap target of **48×48 CSS pixels**. Common failures on artisan sites:

- WhatsApp buttons styled small to look "elegant" (32×32 px icons with no padding)
- Product card "Pedir pelo WhatsApp" links with tiny font and minimal padding
- Social media icon links in the footer with 24px icons and no surrounding padding
- Instagram/email links in the header crammed together

**For this project:** The header shows WhatsApp, Instagram, and email contacts. If rendered as small icons side by side on mobile, all three will fail tap target size.

**Fix:** Ensure all `<a>` and `<button>` elements have `min-height: 44px; min-width: 44px` and sufficient `padding`. Test with Chrome DevTools "Mobile" mode.

---

### 7. Font Loading Performance Traps (FOUT / FOIT)

**Problem:** This project uses Playfair Display (titles) + Lato (body) from Google Fonts. Common traps:

- **FOIT (Flash of Invisible Text):** Default Google Fonts behavior blocks text render until fonts load. On slow 3G, users see a blank page for 2–3 seconds.
- **FOUT (Flash of Unstyled Text):** With `font-display: swap`, text renders immediately in a system font then "jumps" to the web font. This causes layout shift (CLS penalty) if the fallback font has different metrics.
- **Loading too many weights:** Requesting `Playfair Display:400,700,900` and `Lato:300,400,700,900` loads ~200 KB of font data. For this site, you need: Playfair Display 700 (headings) + Lato 400 + Lato 700 (body + bold). That's 3 weights max.
- **Two separate `<link>` calls:** Each Google Fonts stylesheet is a separate HTTP request + render-blocking. Combine into one URL.

**Wrong (two requests):**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

**Correct (one request, with preconnect):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

**Best practice fallback font stack:**
```css
h1, h2, h3 { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
body        { font-family: 'Lato', Arial, Helvetica, sans-serif; }
```

---

### 8. CSS Specificity Conflicts with Google Fonts + Custom Styles

**Problem:** Common mistakes:
- `@import url(...)` in CSS *and* a `<link>` in HTML — font requested twice
- Typo in font-family name: `'Playfair-Display'` or `'playfair display'` (lowercase) → silent fallback
- Mixing `font-weight: bold` (keyword) with `font-weight: 700` (number) in different rules

**Fix:**
- Use `<link>` in HTML only — never also `@import` in CSS for the same font
- Use exact string: `'Playfair Display'` (capital P, capital D, space)
- Only use numeric `font-weight` values that you actually requested from Google Fonts (400, 700)

---

### 9. SEO Mistakes for Single-Page Sites

**Problem:** A single-page site with no extra effort will rank poorly and share badly. Common omissions:

| Missing Element | Consequence |
|-----------------|-------------|
| `<title>` tag | Google uses URL as title in SERPs |
| `<meta name="description">` | Google auto-generates snippets (usually bad) |
| `og:title`, `og:description`, `og:image` | WhatsApp/Instagram/Facebook previews show nothing |
| `og:image` wrong size | Preview image is cropped or missing |
| `<html lang="pt-BR">` | Screen readers use wrong language; Google may index as wrong language |
| No `<meta name="viewport">` | Site renders as desktop zoomed-out on mobile |
| No canonical URL | If site is accessible via both `www.` and non-`www.`, Google sees duplicate content |

**og:image specifics:** The image must be:
- Absolute URL (not relative): `https://seasaltartesanato.com.br/og-image.jpg`
- At least 1200×630 px for Facebook/WhatsApp full preview
- Under 300 KB
- Accessible without authentication

---

### 10. Color Contrast Failures on "Pretty" Artisan Palettes

**Problem:** The project palette has accessibility traps:

| Foreground | Background | Ratio | WCAG AA Normal | WCAG AA Large |
|------------|------------|-------|---------------|---------------|
| `#c47b55` (terracota) | `#f5efe6` (bege) | ~2.8:1 | ❌ FAIL | ❌ FAIL |
| `#7a9e7e` (sálvia) | `#f5efe6` (bege) | ~2.6:1 | ❌ FAIL | ❌ FAIL |
| `#ffffff` white | `#c47b55` (terracota) | ~3.1:1 | ❌ FAIL | ✅ PASS (large) |
| `#333333` dark | `#f5efe6` (bege) | ~9.3:1 | ✅ PASS | ✅ PASS |

**Fix without destroying the aesthetic:**
- Use palette colors for decorative elements, borders, icons, and backgrounds — not for body text
- Body text: use `#3d2b1f` (dark brown) or `#2c2c2c` on bege backgrounds
- CTA button text: use `#ffffff` on darkened terracota (`#9e5c38` gives 4.6:1) or use dark text on light terracota
- Run every color combination through [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) before finalizing

---

## 🟢 Low-Risk Notes

### 11. Instagram Embedding Limitations (CORS / Login Wall)

**Problem:** You cannot embed live Instagram feeds on a static site without a third-party service. The Instagram Basic Display API requires OAuth and a backend callback URL. The old iframe embed now requires the user to be logged into Instagram.

**For this project:** A simple linked text/icon in the header and footer is correct. **Do not attempt to embed a live feed.** If a live feed is ever needed in v2, use Elfsight or Behold.so (both have free tiers).

---

### 12. GitHub Pages: Repository Name and Base URL Gotcha

**Problem:** If the GitHub repo is NOT named `username.github.io`, the site is served at `https://username.github.io/repo-name/`. All absolute asset paths like `/style.css` will 404.

**Fix:** Use **relative paths** for all asset references:
```html
<!-- Wrong -->
<link rel="stylesheet" href="/style.css">
<!-- Correct -->
<link rel="stylesheet" href="style.css">
```

---

### 13. Cumulative Layout Shift from Missing Image Dimensions

**Fix:** Always include `width` and `height` on every `<img>` matching intrinsic pixel dimensions:
```html
<img src="imagem/bolsa-vermelha.webp" width="400" height="400" 
     alt="Bolsa de crochê vermelha feita à mão" loading="lazy"
     style="max-width: 100%; height: auto;">
```

---

### 14. Missing `alt` Text on Product Images

Every product image needs a descriptive alt: `alt="Bolsa de crochê vermelha artesanal feita à mão"` — not generic (`alt="produto"`) and not empty (`alt=""`). Empty alt is only valid for purely decorative images.

---

### 15. Netlify-Specific: Cache Stale on Image Updates

For future updates: rename image files when content changes (cache-busting by filename). Never update an image file in-place with the same filename — browsers won't see the update.

---

## 🛡️ Mitigations Summary

| Pitfall | Mitigation | Priority |
|---------|-----------|----------|
| WhatsApp encoding | Use `encodeURIComponent()` in JS for all `wa.me` links | 🔴 Critical |
| Large images | Resize to ≤800px, convert to WebP, keep JPG fallback, set `width`/`height` | 🔴 Critical |
| WebP on iOS <14 | Use `<picture>` + `<source type="image/webp">` + `<img>` JPG fallback | 🔴 Critical |
| Case sensitivity on deploy | All filenames lowercase + hyphens; audit before push | 🔴 Critical |
| Floating button z-index | Explicit `z-index: 9999`, `bottom: 24px`, `min-width/height: 48px` | 🔴 Critical |
| Tap targets too small | `min-height: 44px` on all interactive elements; test on 320px viewport | 🟡 Medium |
| Font FOIT/FOUT | Single combined Google Fonts URL + `display=swap` + fallback stack | 🟡 Medium |
| Font specificity | One `<link>` only (no `@import`); exact font-family string; numeric weights | 🟡 Medium |
| SEO gaps | Complete `<head>`: title, description, og:*, lang, viewport, canonical | 🟡 Medium |
| Color contrast | Test all text/bg combos; use dark brown for body text on bege | 🟡 Medium |
| Instagram embedding | Don't embed a live feed — just link to the profile | 🟢 Low |
| GitHub Pages base URL | Use relative paths for all assets | 🟢 Low |
| CLS from missing dimensions | Add `width`/`height` to every `<img>` | 🟢 Low |
| Missing alt text | Descriptive alt on every product image | 🟢 Low |
| Netlify cache stale | Rename files when content changes | 🟢 Low |

---

*Research compiled from: MDN Web Docs, WhatsApp Business API docs, Google Web.dev CWV guidelines, WCAG 2.1, GitHub Pages documentation, Netlify deployment docs, WebAIM contrast checker, and common patterns observed in Brazilian artisan/handcraft e-commerce sites.*
