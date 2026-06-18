# LineMind AI / TU Automation — Status (stan działający)

Dokument opisuje **aktualny działający stan** agentów AI na stronie TU Automation oraz backendu LineMind.
Dokumentacja stanu — **nie zmienia kodu**.

Ostatnia aktualizacja: 2026-06-18.

---

## 1. Trzy różne agenty — NIE MIESZAĆ

W projekcie działają **trzy odrębne** rozwiązania AI. Każde ma własny plik, własny endpoint i własny cel.
Mylenie ich to najczęstsza przyczyna błędów.

| # | Agent | Gdzie żyje | Endpoint backendu | Co mówi |
|---|-------|-----------|-------------------|---------|
| 1 | **Agent TU Automation** (firmowy) | `index.html` (podpięte `assets/js/tu-ai-agent.js` + `assets/css/tu-ai-agent.css`) | `POST /api/tuautomation-agent-intro` | Krótkie intro o firmie TU Automation, ofercie, doświadczeniu, kontakt `info@tuautomation.de` |
| 2 | **Prezenter LineMind (strona)** | `linemind.html` (widget `lmfa` wstawiony inline w tym pliku) | `POST /api/linemind-present-slide` | Narracja produktowa LineMind AI per slajd (PL/EN), czytana **verbatim** z `data-narration-*` |
| 3 | **Prezenter prezentacji** | `linemind-ai-presentation.html` (osobny, samodzielny widget `lmfa`) | `POST /api/linemind-present-slide` | Narracja slajdów własnej prezentacji (czyta swoje slajdy + censored pricing) |

### Czego NIE mieszać
- **NIE** dodawaj `assets/js/tu-ai-agent.js` / `tu-ai-agent.css` do `linemind.html` ani do prezentacji.
  Agent firmowy (`/api/tuautomation-agent-intro`) jest **tylko** dla `index.html`.
- **NIE** dodawaj prezentera prezentacji do `index.html`.
- Prezenter w `linemind.html` (#2) i prezenter w `linemind-ai-presentation.html` (#3) to **dwie osobne kopie** widgetu `lmfa`.
  Zmiana w jednym **nie** zmienia drugiego. `linemind-ai-presentation.html` jest plikiem **referencyjnym** — nie edytuj go bez wyraźnej decyzji.
- Endpoint `/api/tuautomation-agent-intro` jest **wyłącznie** dla agenta firmowego. Prezenterzy LineMind (#2, #3) używają **wyłącznie** `/api/linemind-present-slide`.

---

## 2. Strona główna — agent TU Automation
- URL: https://tuautomation.de  (lokalnie: http://localhost:8080/index.html)
- Pliki: `index.html`, `assets/js/tu-ai-agent.js`, `assets/css/tu-ai-agent.css`
- Endpoint: `POST /api/tuautomation-agent-intro`
- Zachowanie: orb w prawym dolnym rogu, ON/OFF, waveform/status, brak dużego panelu, start **dopiero po kliknięciu ON**.
- Tekst intro: stały, zatwierdzony skrypt firmowy (firma → wartość → doświadczenie → kontakt), czytany verbatim głosem ElevenLabs. PL/EN/DE.
- WhatsApp jest **tylko** w sekcji kontaktu (nie jako floating button).

## 3. Strona LineMind — prezenter LineMind
- URL: https://tuautomation.de/linemind.html  (lokalnie: http://localhost:8080/linemind.html)
- Plik: `linemind.html` (widget `lmfa` inline; brak zależności od `tu-ai-agent.*`)
- Endpoint: `POST /api/linemind-present-slide`
- Narracje: **dedykowane PL/EN** w atrybutach `data-narration-pl` / `data-narration-en` na każdym slajdzie (`#deck .slide`).
  - **Bez DE** — gdy strona jest w DE, prezenter narratuje po **angielsku**.
  - Tekst jest czytany **verbatim** (backend przy obecnym `narration` pomija przepisywanie przez OpenAI).
  - Agent **opowiada, co robi LineMind AI** i rozwija punkty slajdu — **nie opisuje slajdu** jako obrazka.
- Język przełącza się automatycznie istniejącym przełącznikiem strony (`#langToggle`): PL→PL, inny→EN.
- Zachowanie: orb prawy dolny róg, ON/OFF, waveform/status, start po ON, auto-narracja przy zmianie slajdu.

## 4. Prezentacja — osobny prezenter
- URL: https://tuautomation.de/linemind-ai-presentation.html
- Plik: `linemind-ai-presentation.html` (samodzielny widget `lmfa`)
- Endpoint: `POST /api/linemind-present-slide`
- Ma własną logikę slajdów, censored pricing i narrację. **Plik referencyjny — nie edytować bez wyraźnej decyzji.**

---

## 5. Backend (Render)
- URL: https://linemind-ai-backend.onrender.com
- Repo: https://github.com/tomaszurbanski/linemind-ai-backend  (branch `main`)
- Endpointy: `GET /health`, `POST /api/tuautomation-agent-intro`, `POST /api/linemind-present-slide`, `POST /api/linemind-assistant`
- OpenAI (narracja slajdów, z retry) + ElevenLabs (głos PL/EN/DE) + fallbacki.
- **`narration` verbatim**: gdy front wysyła pole `narration`, backend czyta je dosłownie (bez OpenAI).
- **Render `autoDeploy:false`** → po każdej zmianie backendu trzeba zrobić **Manual Deploy** (patrz `docs/BACKEND_STATUS.md` w repo backendu).

API base w froncie: domyślnie zawsze Render. Lokalny backend `http://localhost:8787` tylko z jawną flagą dev:
`?localBackend=1` w URL lub `localStorage.setItem("LINEMIND_USE_LOCAL_BACKEND","1")`. W konsoli widać `[tu-ai-agent] API base: render` / `[linemind] API base: render`.

---

## 6. Jak testować lokalnie
```bash
cd "C:\Users\t_urb\Projects\tu-automation-website"
python -m http.server 8080
```
- Strona główna: http://localhost:8080/index.html → klik **ON** → w konsoli `[tu-ai-agent] API base: render`, request do `…onrender.com/api/tuautomation-agent-intro`.
- LineMind: http://localhost:8080/linemind.html → klik **ON**, przejdź kilka slajdów → request do `…onrender.com/api/linemind-present-slide`; przełącz `#langToggle` i sprawdź PL↔EN.
- Twarde odświeżenie **Ctrl+F5** po każdym deployu (cache JS).

## 7. Jak deployować STRONĘ
- Push na branch **`master`** → **GitHub Pages** publikuje automatycznie na `tuautomation.de` (custom domain w `CNAME`).
- Nic więcej nie trzeba; po ~1–2 min odśwież Ctrl+F5.

## 8. Jak deployować BACKEND
- Repo backendu: `linemind-ai-backend`, branch `main`. Push kodu **nie** deployuje sam (Render `autoDeploy:false`).
- Po pushu: Render Dashboard → usługa `linemind-ai-backend` → **Manual Deploy / Deploy latest commit**.
- Klucze są w Render → Environment (nigdy w repo/.env w repo). Szczegóły: `docs/BACKEND_STATUS.md`.

---

## 9. Troubleshooting

### Wraca „głos przeglądarki" (browser fallback) zamiast ElevenLabs
Oznacza brak audio z backendu. Sprawdź kolejno:
1. **Cache** — zrób Ctrl+F5 (stary `tu-ai-agent.js`/`linemind.html` w cache).
2. **Konsola** — czy jest `API base: render`. Jeśli `local dev`, masz włączoną flagę `?localBackend=1`/localStorage — usuń ją.
3. **/health** — otwórz https://linemind-ai-backend.onrender.com/health → `openai:true, elevenlabs:true, voices set`.
4. **Network** — czy POST leci na `…onrender.com/...` i jaki ma status:
   - `200` ale brak audio → `audioProvider`/`ttsAvailable` w odpowiedzi (głos ElevenLabs niedostępny).
   - `500` → backend nie domyka połączenia do OpenAI (patrz `docs/BACKEND_STATUS.md`); fallback narracji powinien i tak dać ElevenLabs po redeployu.
   - błąd CORS → origin nie na allowliście (localhost loopback i `tuautomation.de` są dozwolone od commitu CORS; wymaga redeployu backendu).
5. **Render** — czy działa **najnowszy** commit backendu (Manual Deploy). Stary build = stare zachowanie.

### Wracają „stare teksty" (intro/narracja)
- To znaczy, że **Render działa na starym commicie backendu**. Zrób **Manual Deploy** najnowszego commitu `main`.
- Dodatkowo Ctrl+F5 na stronie (front mógł zostać w cache).

---

## 10. Ostatnie znane commity

| Repo | Branch | Commit | Opis |
|------|--------|--------|------|
| `tu-automation-website` | `master` | `022ba16` | refine: rewrite linemind presenter narration |
| `linemind-ai-backend` | `main` | `2ae6637` | feat: speak dedicated slide narration verbatim when provided |

> Uwaga: powyższe to najnowsze commity w repo. Żywy backend na Render działa dopiero po **Manual Deploy** danego commitu (`autoDeploy:false`).
