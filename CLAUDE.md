# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install Node.js (LTS) via mise
mise install

# Install dependencies
npm install

# Build site
npm run build

# Serve locally with live reload
npx @11ty/eleventy --serve

# Format, lint, and organise imports
npx @biomejs/biome check --write .
```

No tests are configured.

## Architecture

This is a minimal personal website built with [Eleventy](https://www.11ty.dev/) (static site generator), deployed to Cloudflare Pages.

- `src/` — all source content; Eleventy uses this as its input directory
- `src/_includes/layout.liquid` — the single shared HTML layout; all CSS lives inline here. Contains page-specific logic keyed on `page.url`: JSON-LD Person schema and `og:type` for `/cv/`, and canonical URL handling for the 404 page. Print styles exist mainly so the CV page prints cleanly (footer hidden, external link URLs printed inline, `.no-print` class available)
- `src/index.md`, `src/cv.md`, and `src/404.md` — page content in Markdown with Liquid front matter. Front matter variables: `title` (page `<h1>`), `pageTitle` (meta/OG title), `description`, and optionally `permalink`
- `src/sitemap.liquid` — generates `/sitemap.xml`
- `src/_headers` — Cloudflare Pages HTTP security headers (passed through as-is to the build output)
- `src/robots.txt` — also passed through unchanged
- `.eleventy.js` — Eleventy config; adds an `isoDate` Liquid filter (using luxon) and configures passthrough copy for `robots.txt` and `_headers`. Note: luxon is not a direct dependency in `package.json` — it resolves as a transitive dependency of Eleventy
- `biome.json` — Biome linter/formatter config: tabs for indentation, double quotes for JS strings
