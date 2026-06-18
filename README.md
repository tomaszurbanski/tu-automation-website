# TU Automation — Website

Source for **[tuautomation.de](https://tuautomation.de)** — the marketing site of
TU Automation (Tomasz Urbański), industrial automation services (PLC / SCADA / HMI,
retrofits, AI for maintenance).

Static site (HTML/CSS/JS, no build step), deployed via **GitHub Pages** from the
`master` branch. Custom domain is pinned in `CNAME` → `tuautomation.de`.

## Languages

UI is trilingual **PL / EN / DE** (PL is default). Strings live in the `T`
dictionary in `script.js` and are applied to elements via `data-i18n="key"`
attributes. The language switcher is in the top nav (`.lang-switcher`).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, services, tech, projects, process, calculator, contact |
| `oferta.html` | **Service Proposal / Serviceangebot** — standalone interactive offer (EN/PL/DE, animated, self-contained). Opened from the **Serwis / Service** button at the end of the "Zakres usług" section on `index.html`. Prices: £ for EN/PL, € for DE (€0.30/km travel). |
| `plcbridge.html` | PLCbridge product page |
| `linemind.html` | LineMind AI product page |
| `scada.html`, `migration.html` | Service detail pages |
| `omnie.html` | About me |
| `gallery.html` + `gallery/` | Project gallery |
| `blog.html` + `blog/` | Blog index and articles |
| `impressum.html`, `privacy.html`, `privacy-worktimer.html` | Legal (DE Impressum, privacy) |
| `billing-success.html`, `404.html` | Utility pages |

## Assets

- `style.css` — single stylesheet; design tokens in `:root` (`--cyan #00D4FF`,
  `--bg #080C14`, fonts Inter + Rajdhani).
- `script.js` — i18n, nav, animations, calculator, modals.
- `logo-tu.png`, `favicon.svg`, `tomasz.jpg` — brand/media.
- `sitemap.xml`, `robots.txt`, `CNAME` — SEO / hosting.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8080   # then visit http://localhost:8080
```

## Deploy

Push to `master` — GitHub Pages publishes automatically to `tuautomation.de`.

## Documentation

- [`docs/LINEMIND_TU_AUTOMATION_STATUS.md`](docs/LINEMIND_TU_AUTOMATION_STATUS.md) — current working state of the AI agents (TU Automation agent vs LineMind presenters), which agent is which, what not to mix, how to test, how to deploy, troubleshooting, last known commits.
- [`docs/AI_AGENT_ROADMAP.md`](docs/AI_AGENT_ROADMAP.md) — AI agent roadmap.
- Backend status & Render deployment: see `docs/BACKEND_STATUS.md` in the [linemind-ai-backend](https://github.com/tomaszurbanski/linemind-ai-backend) repo.
