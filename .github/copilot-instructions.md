# Copilot Instructions for markbrady.net

## Project Overview

This is a minimal personal website built with [Eleventy](https://www.11ty.dev/) (11ty) v3.0. The site uses:
- **Liquid templates** for layouts and content
- **Markdown** for page content with YAML frontmatter
- **Biome** for formatting/linting (replaces ESLint/Prettier)
- **mise** for Node.js version management

Build output goes to `_site/`, source files live in `src/`.

## Development Workflow

**Setup:**
```bash
mise install           # Install Node.js LTS
npm install
```

**Build & Serve:**
```bash
npx @11ty/eleventy --serve    # Dev server with hot reload
npx @11ty/eleventy            # Production build (npm run build)
```

**Formatting/Linting:**
```bash
npx @biomejs/biome check --write .
```

## Key Architecture Patterns

### Content Structure
- Pages are Markdown files in `src/` with YAML frontmatter
- All pages use `layout: layout.liquid` to reference `src/_includes/layout.liquid`
- Frontmatter `title` property renders as `<h1>{{ title }}</h1>` in layout
- Special frontmatter: `permalink` (custom URL), `eleventyExcludeFromCollections` (exclude from sitemap)

### Eleventy Configuration (`.eleventy.js`)
- ES modules format (`type: "module"` in `package.json`)
- Custom filter `isoDate` converts dates for sitemap using Luxon
- `addPassthroughCopy` copies `robots.txt` to output root
- Input directory: `src/`, output: `_site/` (default)

### Styling Approach
- **No external CSS files** - all styles inline in `layout.liquid` `<style>` tag
- Monospace font, centered layout, responsive breakpoints
- Dark/light mode via `prefers-color-scheme` media queries
- CSS animations for `.wave` (waving hand) and `.home` (funky house emoji)

### Analytics & SEO
- Umami analytics script in layout (deferred)
- Canonical URLs: homepage for 404, `page.url` for all others
- SVG favicon (burger emoji) as data URI
- Sitemap generated via `sitemap.liquid` iterating `collections.all`

## Code Conventions

- **Indentation:** Tabs (enforced by Biome)
- **Quotes:** Double quotes for JavaScript (Biome config)
- **Files to ignore:** `_site/`, `node_modules/` (see `.gitignore`)
- **No test framework** - `npm test` placeholder only

## When Making Changes

- **Adding pages:** Create `.md` file in `src/` with frontmatter (`title`, `layout`)
- **Modifying layout:** Edit `src/_includes/layout.liquid` (affects all pages)
- **Static assets:** Use `addPassthroughCopy` in `.eleventy.js` to copy to `_site/`
- **Custom filters/shortcodes:** Add to `.eleventy.js` export function
- **Formatting:** Always run Biome check after edits

## Important Context

- Site domain: `https://www.markbrady.net` (hardcoded in canonical URLs, sitemap)
- 404 page uses `permalink: 404.html` to generate at root
- No build tooling for JS/CSS - keep it simple and inline
- Liquid syntax: `{{ variable }}` for output, `{% logic %}` for tags/filters
