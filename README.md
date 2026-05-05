# Outlier by frafief

**Uncommon mind, uncommon picks.**

Independent equity research website — thesis, analisa emiten, dan insight corporate action dari perspektif contrarian.

## Structure

```
outlier/
├── index.html              ← Landing page
├── about.html              ← Bio + disclaimer
├── template.html           ← Blank article template
├── articles/
│   ├── index.html          ← All articles + tag filter
│   └── [slug].html         ← Individual articles
├── portfolio/
│   └── index.html          ← Portfolio (coming soon)
└── assets/
    ├── css/style.css       ← Global stylesheet
    └── js/main.js          ← Nav, filtering, interactions
```

## How to Add a New Article

1. Copy `template.html` to `articles/[slug].html`
2. Fill in the `[PLACEHOLDERS]` — title, tags, date, content
3. Add a card entry in `articles/index.html`
4. If it's the newest, update `index.html` featured card
5. `git add . && git commit -m "New article: [title]" && git push`

## Deploying to GitHub Pages

1. Create a repo named `username.github.io`
2. Push this folder's contents to the `main` branch
3. Go to Settings → Pages → Source: `main` branch
4. Site live at `https://username.github.io`

## Tag System

- **Category tags**: `thesis`, `ca`, `general`
- **Emiten tags**: stock ticker codes (e.g., `bbca`, `tlkm`)
- Articles use `data-tags` attribute for client-side filtering

## Stack

- Pure HTML/CSS/JS — no frameworks, no build tools
- Google Fonts (Space Grotesk)
- Vanilla JS for nav dropdown, tag filtering, animations

---

*Bukan ajakan beli/jual. Bukan financial advice. DYOR.*
