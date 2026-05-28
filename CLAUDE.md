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
- `src/_includes/layout.liquid` — the single shared HTML layout; all CSS lives inline here
- `src/index.md` and `src/404.md` — page content in Markdown with Liquid front matter
- `src/sitemap.liquid` — generates `/sitemap.xml`
- `src/_headers` — Cloudflare Pages HTTP security headers (passed through as-is to the build output)
- `src/robots.txt` — also passed through unchanged
- `.eleventy.js` — Eleventy config; adds an `isoDate` Liquid filter (using luxon) and configures passthrough copy for `robots.txt` and `_headers`
- `biome.json` — Biome linter/formatter config: tabs for indentation, double quotes for JS strings
