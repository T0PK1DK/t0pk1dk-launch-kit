# Signal — Landing Page Kit

**By [T0PK1DK](https://github.com/T0PK1DK)**

A premium, mobile-first landing page kit for indie products and small studios. Static HTML + CSS + a little JS. No build step. Deploy to Cloudflare Pages from repo root.

> **Demo content notice:** Everything on the live demo page — product name, pricing, testimonials, and copy — is **fictional placeholder content** for Signal (the kit selling itself). Replace all demo text, links, and placeholder logos in `index.html` before launching your own product.

---

## What's included

| File / folder | Purpose |
|---|---|
| `index.html` | Full demo page with 9 commented, reusable sections |
| `css/variables.css` | **Theme file** — colors, fonts, spacing, radii |
| `css/styles.css` | Component styles (imports variables) |
| `js/main.js` | Mobile nav toggle, FAQ accordion, smooth scroll |
| `assets/svg/` | Original SVG logo, hero preview, trust marks, avatars, step illustrations |
| `LICENSE.txt` | Personal + commercial use; no reselling the kit |

### Sections (in order)

1. **Nav + announcement bar** — sticky header, hamburger menu on mobile
2. **Hero** — serif headline, dual CTAs, product visual frame, social proof row
3. **Logo / trust strip** — generic placeholder marks (swap for your clients)
4. **Features** — 6 feature cards with inline SVG icons
5. **How it works** — 3-step flow with illustration frames
6. **Pricing** — 3 tiers + comparison table
7. **FAQ** — accordion (one open at a time)
8. **Final CTA** — full-width conversion block
9. **Footer** — brand, link columns, legal strip

---

## Quick start

```bash
# Clone or download, then open locally
open index.html        # macOS
xdg-open index.html    # Linux
```

No `npm install`. No build command. Edit files, refresh browser.

---

## Customization guide

### 1. Colors & theme

Open **`css/variables.css`** and edit the `:root` custom properties:

```css
:root {
  --color-ink: #121f18;       /* body text */
  --color-forest: #1e3a2f;    /* primary brand / buttons */
  --color-cream: #f6f2ea;     /* page background */
  --color-sage: #5a8f72;      /* accents & labels */
  --color-accent: #c47d3a;    /* stars, highlights */
  /* … */
}
```

Every component references these variables — one file, full retheme.

### 2. Typography

Change font families in `variables.css`:

```css
--font-serif: "Newsreader", "Georgia", serif;
--font-sans: "Sora", system-ui, sans-serif;
```

Then update the Google Fonts `<link>` in `index.html` `<head>` to match.

**Current pairing:** [Newsreader](https://fonts.google.com/specimen/Newsreader) (headlines) + [Sora](https://fonts.google.com/specimen/Sora) (body) — inspired by editorial SaaS layouts with clean sans body copy.

### 3. Copy & content

Each section in `index.html` is wrapped in an HTML comment:

```html
<!-- SECTION 2: Hero -->
```

Search for `SECTION` to jump between blocks. Replace:

- `<title>` and meta description
- Hero headline, subtitle, bullet points, CTAs
- Feature titles and descriptions
- Pricing tiers, prices, and feature lists
- FAQ questions and answers
- Footer links and tagline

### 4. Logo & visuals

| Asset | Path | Notes |
|---|---|---|
| Logo mark | `assets/svg/logo-mark.svg` | Replace with your brand icon |
| Hero preview | `assets/svg/hero-preview.svg` | Swap for a product screenshot or custom illustration |
| Trust logos | `assets/svg/trust-logo-*.svg` | Replace with client logos (with permission) |
| Avatars | `assets/svg/avatar-*.svg` | Abstract placeholders — use real photos or remove the proof row |

### 5. Remove a section

Delete the commented block in `index.html` and remove the corresponding nav link. No JS changes needed unless you remove the FAQ or nav (then trim `main.js`).

---

## Mobile-first specs

Designed at **390px** viewport width:

- **20px gutters** (`--gutter: 1.25rem`)
- **44px minimum tap targets** (`--tap-min: 2.75rem`) on all buttons and nav links
- **Hamburger menu** with body scroll lock and Escape-to-close
- Layouts scale up at `640px`, `768px`, and `1024px` breakpoints

---

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repository.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (repo root)
5. Deploy. Cloudflare serves `index.html` at your custom domain with SSL.

### Optional: custom domain

Pages → your project → **Custom domains** → add your domain and follow DNS instructions.

---

## File structure

```
.
├── index.html
├── css/
│   ├── variables.css      ← edit this to retheme
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── svg/
│       ├── logo-mark.svg
│       ├── hero-preview.svg
│       ├── trust-logo-1.svg … trust-logo-6.svg
│       ├── avatar-1.svg … avatar-5.svg
│       ├── step-download.svg
│       ├── step-customize.svg
│       └── step-launch.svg
├── LICENSE.txt
└── README.md
```

---

## License

See **[LICENSE.txt](./LICENSE.txt)**.

- Personal and commercial use in your own and client projects
- **Do not** resell or redistribute the kit as a template product

---

## Support

Questions or issues? **hello@t0pk1dk.dev**

Built with care by **T0PK1DK**.
