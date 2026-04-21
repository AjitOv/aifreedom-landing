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

## LLM Discoverability

- [`/llms.txt`](https://aifreedom.in/llms.txt) — Summary for LLMs
- [`/llms-full.txt`](https://aifreedom.in/llms-full.txt) — Full context
- [`/knowledge.md`](https://aifreedom.in/knowledge.md) — Structured knowledge
- [`/.well-known/ai-plugin.json`](https://aifreedom.in/.well-known/ai-plugin.json) — AI plugin manifest

## License

© 2026 AI Freedom Institute. All Rights Reserved.
