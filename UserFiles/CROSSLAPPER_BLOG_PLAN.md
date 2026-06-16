# CROSSLAPPER — plan wpisu blogowego + demo (PL/DE/EN)

Data: 2026-06-16 · Status: **przygotowane lokalnie, BEZ deploy / BEZ git commit / BEZ push**

## 1. Znalezione pliki animacji (źródło: `C:\Users\t_urb\Desktop\SEGREGUJ\`)
- `Crosslapper_Prezentacja_TU_PL.html` — wersja PL (styl strony, ciemny + cyan)
- `Crosslapper_Prezentacja_TU_DE.html` — wersja DE
- `Crosslapper_Prezentacja_TU_EN.html` — wersja EN
- `logo-tu.png` — logo wymagane przez demo
- (pominięto `Crosslapper_Prezentacja_Interaktywna.html` — jasny motyw inżynierski, nie pod publiczne demo; oraz backupy `_backup_v*`)

## 2. Które wersje użyto jako PL/DE/EN
Użyto trzech brandowych wersji `..._TU_PL/DE/EN.html` (design zgodny z tuautomation.de:
#080C14 + #00D4FF, Rajdhani/Inter, logo-tu). To one stały się publicznymi demo.

## 3. Pliki dodane do strony (`tu-automation-website`)
**Demo (publiczne kopie animacji):**
- `assets/demos/crosslapper-demo-pl.html`
- `assets/demos/crosslapper-demo-de.html`
- `assets/demos/crosslapper-demo-en.html`
- `assets/demos/logo-tu.png`
- W każdym demo rozszerzono notę o klauzulę PLC:
  - PL: „Model poglądowy — … nie pełną dynamikę napędów **ani kompletną logikę PLC**."
  - DE: „Anschauliches Modell — … nicht die vollständige Antriebsdynamik **oder PLC-Logik**."
  - EN: „Illustrative model — … not full drive dynamics **or complete PLC logic**."

**Wpisy blogowe (3 wersje językowe, wzajemnie linkowane):**
- `blog/crosslapper-control-s7-1200-mitsubishi.html` (PL — kanon, slug jak proponowany)
- `blog/crosslapper-control-s7-1200-mitsubishi-de.html` (DE)
- `blog/crosslapper-control-s7-1200-mitsubishi-en.html` (EN)

## 4. Treść wpisu
Opisano (publicznie, bez know-how): czym jest układacz/crosslapper; dlaczego sterowanie
jest wymagające; zależności kinematyczne (prędkość wlotowa, sukno 1, sukno 2, wózek górny,
wózek dolny, taśma odciągowa, szerokość układania, liczba warstw); platforma **Siemens
S7-1200** + napędy **Mitsubishi**; kluczowa synchronizacja wózków i taśm; sekcja
„Interaktywna wizualizacja pracy układacza" z 3 przyciskami (Otwórz demo PL / Demo auf
Deutsch öffnen / Open EN demo); CTA kontaktowy.

## 5. Meta / SEO
| Wersja | title | description |
|---|---|---|
| PL | Sterowanie crosslappera — Siemens S7-1200 i Mitsubishi \| TU Automation | Nowe sterowanie układacza / crosslappera oparte na Siemens S7-1200 i napędach Mitsubishi. Analiza prędkości taśm, wózków i odkładania warstw. |
| DE | Crosslapper-Steuerung — Siemens S7-1200 und Mitsubishi \| TU Automation | Neue Crosslapper-Steuerung mit Siemens S7-1200 und Mitsubishi-Antrieben. Analyse von Bandgeschwindigkeiten, Wagenbewegung und Lagenbildung. |
| EN | Crosslapper Control — Siemens S7-1200 and Mitsubishi \| TU Automation | New crosslapper control system based on Siemens S7-1200 and Mitsubishi drives. Analysis of belt speeds, carriage movement and web layering. |

Każdy artykuł ma `<link rel="canonical">` na własny URL.

## 6. blog.html — zaktualizowany? **TAK**
- Dodano kartę crosslappera jako pierwszą w `blog-grid` (link → wersja PL).
- Dodano klucze i18n `a5.tag/title/excerpt/date/read` w tłumaczeniach **pl / de / en**.
- TR/AR: bez tłumaczeń a5 (strona używa przełącznika PL/DE/EN) — karta wyświetli wtedy
  domyślny tekst PL (fallback). Patrz „Open points".

## 7. sitemap.xml — zaktualizowana? **TAK**
Dodano 3 URL-e artykułu (PL/DE/EN), priorytet 0.7, changefreq yearly.
(Pliki demo to zasoby osadzone — nieindeksowane w sitemap; do decyzji — patrz Open points.)

## 8. Brak wzmianki S5 → S7 w nowym wpisie — **POTWIERDZONE**
Grep po nowych plikach: jedyne „S5" w repo to **istniejąca** karta artykułu o migracji
(a2), niepowiązana z crosslapperem. Nowe pliki crosslappera: 0× „S5".

## 9. Brak danych klienta / poufnych — **POTWIERDZONE**
Grep nowych plikow (Lenze, Brinkhaus, 200382, 25018, FB_HMI, DB43, Cognex, know-how): 0 trafień.
Brak: nazwy klienta, parametrów prywatnych, kodu PLC, pełnej logiki sterowania,
plików roboczych z komentarzami wewnętrznymi. Demo = model poglądowy.

## 10. Open points (przed publikacją)
- **Link karty a per-język:** karta w blog.html prowadzi zawsze do wersji **PL** (jak
  pozostałe artykuły na stronie, które są PL-only). Z poziomu artykułu działa przełącznik
  „Wersja językowa: PL · DE · EN". Opcjonalnie: dodać JS przełączający `href` karty wg
  wybranego języka (drobna zmiana w skrypcie blog.html).
- **Data:** ustawiono „Czerwiec 2026 / Juni 2026 / June 2026". Potwierdź.
- **Czas czytania:** „9 min" — szacunkowy.
- **Sitemap demo:** czy dodać `assets/demos/*` do sitemap (raczej nie — to demo, nie treść SEO).
- **TR/AR:** ewentualnie dodać tłumaczenia karty a5 dla tr/ar (obecnie fallback PL).
- **Cross-link sąsiednich artykułów:** w stopce artykułu link „→ SCADA czy HMI?" (do zmiany wg uznania).
- Po akceptacji: `git add` → `git commit` → `git push` (NIE wykonano).
