# Project Guidelines

## Code Style
- Use tabs for indentation and follow Biome defaults.
- Use double quotes in JavaScript.
- Run `npx @biomejs/biome check --write .` after edits.

## Architecture
- Eleventy v3 site with input in `src/` and output in `_site/`.
- Pages are Markdown files with YAML frontmatter and typically use `layout: layout.liquid`.
- Shared layout is in `src/_includes/layout.liquid`.
- Eleventy config is in `.eleventy.js` (ES module), including:
	- `isoDate` filter for sitemap dates.
	- passthrough copy for `src/robots.txt`.

## Build and Test
- Setup and local run workflow lives in `README.md`.
- Main commands agents may run:
	- `mise install`
	- `npm install`
	- `npx @11ty/eleventy --serve`
	- `npm run build`
- `npm test` is a placeholder and intentionally fails (no test suite yet).

## Conventions
- Keep styling inline in `src/_includes/layout.liquid`; this project does not use external CSS files.
- For new pages in `src/`, include frontmatter `title` and `layout` unless intentionally different.
- Use `permalink: 404.html` for the 404 page.
- Use `eleventyExcludeFromCollections: true` for pages that should not appear in collections/sitemap.
- In `src/sitemap.liquid`, pages marked `draft: true` are excluded from sitemap output.

## Important Context
- Canonical URLs and sitemap/robots values use the production domain `https://www.markbrady.net`.
- Keep JS/CSS build tooling simple; avoid adding bundlers unless explicitly requested.
