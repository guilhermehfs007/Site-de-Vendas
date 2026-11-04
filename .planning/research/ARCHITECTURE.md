# Architecture Research — Sea Salt Artesanato Vitrine

> Static single-page catalog: HTML5 + CSS3 + Vanilla JS, mobile-first, no backend.

---

## 1. Recommended Structure

### File Layout

For a 7-product artisan catalog, a **small split-file** structure is the sweet spot: one `index.html` as the single entry point, with CSS and JS kept in dedicated subfolders to stay maintainable without build tools.

```
/
├── index.html              ← single HTML entry point (all sections inline)
├── css/
│   ├── variables.css       ← CSS custom properties (palette, fonts, spacing)
│   ├── base.css            ← reset, typography, global body styles
│   ├── components.css      ← BEM-lite components: .card, .btn, .nav, .hero…
│   └── utilities.css       ← minimal helper classes: .u-text-center, .u-mt-*
├── js/
│   └── main.js             ← lazy-load observer + smooth-scroll focus fix (< 60 LOC)
├── imagem/
│   ├── bolsa-vermelha.webp
│   ├── bolsa-vermelha.jpg  ← JPEG fallback kept alongside
│   └── … (one .webp + .jpg per peça)
└── favicon.ico
```

**Why split CSS but keep a single JS file?**  
CSS is loaded synchronously; splitting it into logical files keeps specificity flat and makes future edits surgical. JS is so small (lazy-load + scroll fix) that one file is preferable — no module bundler needed.

**Why no `products.json`?**  
With only 7 static products that won't change frequently, hardcoding cards in HTML avoids a `fetch()` CORS issue on `file://` and keeps the site functional with zero JS at all (progressive enhancement).

---

## 2. Component Patterns

### 2.1 CSS Architecture: BEM-lite + Custom Properties

Use a **hybrid**: CSS Custom Properties for the design system (palette, spacing, font stacks) and **BEM-lite naming** for components (`.card`, `.card__title`, `.card__img`, `.btn--whatsapp`). Skip deep BEM nesting.

**Design tokens in `:root`** (matches project palette):

```css
/* css/variables.css */
:root {
  /* Palette — Sea Salt Artesanato */
  --color-bg:        #faf7f2;   /* off-white */
  --color-surface:   #f5efe6;   /* bege */
  --color-primary:   #c47b55;   /* terracota */
  --color-primary-dk:#a85f3a;   /* terracota escuro (hover) */
  --color-accent:    #7a9e7e;   /* verde-sálvia */
  --color-text:      #3b2f2f;   /* marrom escuro */
  --color-text-muted:#7a6a5a;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body:    'Lato', system-ui, sans-serif;

  /* Spacing scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;

  /* Shape */
  --radius-sm: 4px;
  --radius-md: 8px;
  --shadow-card: 0 2px 8px rgba(59,47,47,.10);
}
```

**BEM-lite component example (product card)**:

```css
/* css/components.css */
.card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.card__img {
  width: 100%;
  aspect-ratio: 1/1;      /* uniform square crops */
  object-fit: cover;
  display: block;
}
.card__body {
  padding: var(--space-md);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
.card__title   { font-family: var(--font-heading); font-size: 1.1rem; color: var(--color-text); }
.card__desc    { font-size: .875rem; color: var(--color-text-muted); flex: 1; }
.card__price   { font-weight: 700; color: var(--color-primary); font-size: .9rem; }
```

**Button variants**:

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  padding: .65rem 1.2rem;
  border-radius: var(--radius-sm);
  border: none;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: .9rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color .2s, transform .1s;
}
.btn:active { transform: scale(.97); }

.btn--whatsapp {
  background: var(--color-primary);
  color: #fff;
  width: 100%;
}
.btn--whatsapp:hover { background: var(--color-primary-dk); }

/* Floating WhatsApp button */
.btn--fab {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25d366;   /* WhatsApp brand green */
  color: #fff;
  font-size: 1.6rem;
  box-shadow: 0 4px 12px rgba(0,0,0,.25);
  z-index: 9999;
}
```

### 2.2 CSS Grid Gallery — Mobile-First

```css
/* css/components.css */
.gallery {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
}
```

### 2.3 WhatsApp Deeplink Format

```
https://wa.me/5512997817407?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Sea%20Salt%20e%20tenho%20interesse%20na%20pe%C3%A7a%20%22Bolsa%20Vermelha%22%20%F0%9F%98%8A
```

- Número: internacional sem formatação (`5512997817407`)
- Texto codificado com `encodeURIComponent()`

### 2.4 WebP com JPEG Fallback — `<picture>`

```html
<picture>
  <source srcset="imagem/bolsa-vermelha.webp" type="image/webp">
  <img
    src="imagem/bolsa-vermelha.jpg"
    alt="Bolsa de crochê vermelha feita à mão"
    width="400" height="400"
    loading="lazy"
    decoding="async"
    class="card__img"
  >
</picture>
```

---

## 3. Performance Patterns

- Google Fonts com `<link rel="preconnect">` + `display=swap`
- Lazy loading nativo (`loading="lazy"`) com `width` e `height` explícitos
- Apenas 1 script vanilla leve (`main.js` com ~40 linhas)
- CSS limpo, modular, sem framework
