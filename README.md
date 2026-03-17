# telegramcookies.com

Static brochure site for Telegram Cookies — French shortbread cookies made in Massachusetts.

## Structure

```
index.html          — Single-page site (hero, ingredients, story, footer)
wholesale.html      — Wholesale info page
css/style.css       — Styles
js/main.js          — Minimal JS (smooth scroll, map interaction)
fonts/              — Self-hosted brand fonts (WOFF2)
images/             — Product photos, logos, stamps, favicon
robots.txt          — Search engine directives
sitemap.xml         — XML sitemap
```

## Fonts

- **Cutive Mono** / **Cedarville Cursive** — Google Fonts
- **BN Bergen St** / **BN Tillsdale** / **Tay Basal** — Self-hosted WOFF2

## Development

No build step. Open `index.html` in a browser. For deployment, push to `main` and configure GitHub Pages or Netlify to serve from the root.

## Deployment

```bash
git push origin main
```
