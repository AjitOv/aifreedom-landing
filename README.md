# AI Freedom Institute — Landing Website

> **Live:** [aifreedom.in](https://aifreedom.in)

AI Freedom Institute is an Indian EdTech organization providing practical, hands-on AI training across 4 programs:

- 🏫 **Schools** — AI awareness workshops for students & teachers
- 🏢 **Corporate** — AI productivity training for teams
- 👤 **Individuals** — Self-paced AI skills courses
- 💼 **Business Owners** — AI-powered growth strategies

## Tech Stack

- **Frontend:** Static HTML, CSS, JavaScript
- **Hosting:** Vercel (Edge CDN)
- **Domain:** aifreedom.in
- **Analytics:** Google Analytics (GA4) + Google Tag Manager
- **Forms:** WhatsApp redirect
- **SEO:** Structured data, sitemap, robots.txt, LLM-optimized content

## Pages

| Page | Path |
|------|------|
| Homepage | `/` |
| Schools | `/schools` |
| Corporate | `/corporate` |
| Individuals | `/individuals` |
| Business | `/business` |
| Contact | `/contact` |
| Course Hub | `/Course` |
| Course Player | `/course-player` |

## Deployment

```bash
# Deploy to Vercel
vercel --prod
```

The site auto-deploys via Vercel on push to `main`.

## Google preferred sources

The homepage, blog index, articles, and blog template include a footer link to
`https://www.google.com/preferences/source?q=aifreedom.in`, styled by
`preferred-source.css`. The explicit domain keeps the link pointed at the live
publication when viewed on localhost or a Vercel preview. This uses Google's
[documented deeplink implementation](https://developers.google.com/search/docs/appearance/preferred-sources#deeplink-implementation)
and works without JavaScript.

Before publishing the call to action, search for `aifreedom.in` in Google's
source preferences tool and confirm that the publication can be selected.
The tool returned **No results** for both `aifreedom.in` and `www.aifreedom.in`
on October 29, 2026. Adding this link does not make the publication eligible;
Google controls availability, and each reader must choose the source themselves.

## LLM Discoverability

- [`/llms.txt`](https://aifreedom.in/llms.txt) — Summary for LLMs
- [`/llms-full.txt`](https://aifreedom.in/llms-full.txt) — Full context
- [`/knowledge.md`](https://aifreedom.in/knowledge.md) — Structured knowledge
- [`/.well-known/ai-plugin.json`](https://aifreedom.in/.well-known/ai-plugin.json) — AI plugin manifest

## License

© 2026 AI Freedom Institute. All Rights Reserved.
