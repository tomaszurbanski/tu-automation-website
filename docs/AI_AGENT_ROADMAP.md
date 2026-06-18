# AI Agent — Roadmap (TU Automation / LineMind AI)

Plan rozwoju agentów AI. Dokument planistyczny — **nie zmienia kodu**.
Powiązany ze stanem bieżącym: `docs/LINEMIND_TU_AUTOMATION_STATUS.md`.

Ostatnia aktualizacja: 2026-06-18.

---

## Stan obecny (zrobione)
- ✅ Agent firmowy TU Automation na `index.html` (`/api/tuautomation-agent-intro`), intro firma-first PL/EN/DE, głos ElevenLabs, start po ON.
- ✅ Backend Render: OpenAI (z retry/timeout) + ElevenLabs (PL/EN/DE) + fallbacki; `/health`.
- ✅ Odporność na awarię OpenAI: gdy OpenAI pada, intro firmowe i tak jest czytane (tekst stały) → ElevenLabs, brak „baby z przeglądarki".
- ✅ Prezenter LineMind na `linemind.html` (`/api/linemind-present-slide`), dedykowane narracje PL/EN (`data-narration-*`), czytane **verbatim**, auto PL/EN wg `#langToggle`, bez DE.
- ✅ Osobny prezenter w `linemind-ai-presentation.html` (nietknięty, referencyjny).
- ✅ Bezpieczeństwo: klucze tylko w `.env`/Render env; nigdy w HTML/JS; domyślnie Render URL; localhost tylko za flagą dev.

## Krótki termin (następne kroki)
- [ ] **Manual Deploy backendu na Render** najnowszego `main` (`autoDeploy:false`) — aby narracja verbatim i poprawki były żywe.
- [ ] Weryfikacja w przeglądarce na żywo (klik ON na index i linemind, PL/EN) po deployu.
- [ ] Ewentualne dostrojenie długości/tonu narracji LineMind po odsłuchu (tylko `data-narration-*`).
- [ ] Rozważyć cache audio per (slajd+język), by ograniczyć liczbę zapytań do ElevenLabs.

## Średni termin (opcje do decyzji)
- [ ] Interaktywny tryb pytań na `linemind.html` (chat) — wymagałby świadomej decyzji i osobnego UX (dziś prezenter tylko narratuje).
- [ ] Narracja DE dla LineMind (dziś świadomie tylko PL/EN) — jeśli pojawi się potrzeba rynku DE.
- [ ] Telemetria użycia (ile uruchomień ON, które slajdy) — bez danych osobowych.
- [ ] Wersjonowanie głosów ElevenLabs / dobór głosu per marka.

## Długi termin (wizja)
- [ ] Wspólna, współdzielona biblioteka widgetu prezentera (jedno źródło zamiast kopii w `linemind.html` i prezentacji) — **tylko po wyraźnej decyzji**, bo dziś świadomie są to osobne kopie.
- [ ] Panel treści narracji (CMS) zamiast atrybutów w HTML.
- [ ] Integracja agenta z realnym backendem LineMind (dane z maszyn) dla narracji kontekstowej.

## Zasady (niezmienne)
- Trzy agenty pozostają **rozdzielone** (patrz `docs/LINEMIND_TU_AUTOMATION_STATUS.md` §1). Nie mieszać endpointów ani plików.
- Żadnych kluczy API w froncie. Sekrety tylko w Render env / lokalnym `.env`.
- Domyślnie Render URL; lokalny backend tylko za flagą dev.
- `linemind-ai-presentation.html` to plik referencyjny — nie edytować bez wyraźnej decyzji.
