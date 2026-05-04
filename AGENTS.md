# AGENTS.md

## Cursor Cloud specific instructions

This is a **zero-dependency static website** (HTML, CSS, vanilla JavaScript). There is no package manager, no build step, no bundler, no linter, and no test framework.

### Running the site

Serve the repository root with any static HTTP server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. See `README.md` for the same instruction.

### Key files

| File | Purpose |
|---|---|
| `index.html` | Landing page markup |
| `styles.css` | All styles (responsive, uses CSS custom properties) |
| `script.js` | Certification catalog rendering, filtering, search, cart logic |

### Lint / Test / Build

No lint, test, or build tooling is configured. Changes can be validated by:

- Parsing HTML/CSS/JS for syntax errors (e.g. `python3 -c "from html.parser import HTMLParser; ..."` or loading in a browser DevTools console).
- Manually verifying the page renders and interactive features work (filters, search, add-to-cart).

### External services

The site links to WhatsApp (`wa.me`), an external Moodle campus, and the CENNI SEP government portal. These are external URLs and do not need to be running locally.
