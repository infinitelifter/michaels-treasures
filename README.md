# Michael's Treasures — praguevintagewatches.com

Single-page site for Michael's Treasures, a vintage watch dealer in Prague,
built with Next.js (App Router). Ported from the Claude Design project
"Michaels Treasures v5".

## Run it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Before going live

1. **Photographs** — drop real JPEGs into `public/images/` and update the
   paths + alt text in `lib/site.ts` (`photos`). Placeholders are the dark
   "M" SVGs.
2. **Business details** — replace the `[year]`, `IČO [number]` and
   `[registered address]` placeholders in `lib/site.ts`. They flow into the
   page, the JSON-LD and the footer automatically.
3. **Contact form delivery** — `app/api/contact/route.ts` currently only
   logs enquiries. Hook it up to Resend/SMTP (TODO comment marks the spot).
4. **Domain** — the canonical URL is `https://praguevintagewatches.com` in
   `lib/site.ts`; change it there if the domain differs.

## SEO & AI visibility

- `app/layout.tsx` — full metadata (Open Graph, Twitter, canonical, robots)
  and a schema.org JSON-LD graph: `LocalBusiness` + `Person` (Michal
  Sopoliga) + `WebSite` + `FAQPage`.
- `app/sitemap.ts`, `app/robots.ts` — generated `sitemap.xml` and
  `robots.txt`; AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-
  Extended, …) are explicitly allowed so the business can be cited by
  ChatGPT/Claude/Perplexity/Gemini.
- `public/llms.txt` — plain-language summary of the business for AI
  assistants (llmstxt.org convention).
- `app/opengraph-image.tsx` — generated social share card;
  `app/icon.svg` — favicon.
- Semantic HTML throughout (`h1`–`h3`, `dl` trust bar, real FAQ markup),
  descriptive image alt text, `next/font` with `display: swap`,
  hero image `priority`, everything else lazy.

All copy renders on the server — no content is hidden behind JavaScript.
