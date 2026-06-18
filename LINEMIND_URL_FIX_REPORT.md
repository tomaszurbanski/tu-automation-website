# LINEMIND_URL_FIX_REPORT

**Data:** 2026-06-18
**Projekt:** `C:\Users\t_urb\Projects\tu-automation-website` (tuautomation.de, GitHub Pages, gałąź `master`)
**Cel:** `linemind-ai-presentation.html` jako **jedyna oficjalna** prezentacja LineMind AI; `linemind.html` zdeprecjonowany i przekierowany.

---

## 1. Podsumowanie

| Stan | Plik |
|------|------|
| ✅ OFICJALNA prezentacja (kanoniczna) | `linemind-ai-presentation.html` |
| ⛔ Zdeprecjonowana → przekierowanie | `linemind.html` |

Wszystkie aktywne linki, modal hasłowy, canonical i sitemap wskazują teraz **wyłącznie** na `linemind-ai-presentation.html`.

---

## 2. Wykonane zmiany (per plik)

### `index.html`
- **Linia 706** — modal hasłowy „LineMind AI — Prezentacja" (hasło `LineMind2025`):
  - przed: `window.open('linemind.html','_blank')`
  - po:   `window.open('linemind-ai-presentation.html','_blank')`
- Efekt: jedyna ścieżka wejścia w prezentację z landing page prowadzi do oficjalnego pliku.

### `linemind.html`  → zamieniony na stronę-przekierowanie (301-equivalent)
Cała stara zawartość (duplikat decka) zastąpiona stubem przekierowującym:
- `<link rel="canonical" href="https://tuautomation.de/linemind-ai-presentation.html"/>`
- `<meta http-equiv="refresh" content="0; url=…/linemind-ai-presentation.html"/>`
- `<meta name="robots" content="noindex, follow"/>`
- `<script>location.replace("linemind-ai-presentation.html")</script>`
- fallback: widoczny link „Przejdź do prezentacji →" (PL/EN)
- **Usunięty przy okazji** pośredni przycisk z dawnej linii 359 („Zobacz interaktywną prezentację AI →") prowadzący stara→nowa prezentacja (pkt 4 zadania).
- Oryginalna treść zachowana w historii git: `git show HEAD:linemind.html`.

### `linemind-ai-presentation.html`
- Dodany do `<head>`: `<link rel="canonical" href="https://tuautomation.de/linemind-ai-presentation.html"/>`
- Ustawia tę stronę jako jedyne kanoniczne źródło SEO.

### `sitemap.xml`
- Dodany wpis **tylko** dla oficjalnej prezentacji (priority 0.9, changefreq monthly):
  `https://tuautomation.de/linemind-ai-presentation.html`
- `linemind.html` **świadomie pominięty** — strona przekierowująca/`noindex` nie należy do sitemap.

### `README.md`
- Tabela „Pages": dodany wiersz oficjalnej prezentacji; wiersz `linemind.html` oznaczony jako **Deprecated — redirect stub**.

---

## 3. Weryfikacja punktów kontrolnych (pkt 6 zadania)

| Obszar | Stan | Uwagi |
|--------|------|-------|
| **Menu** | ✅ | Górna nawigacja nie linkuje bezpośrednio do `linemind.html` (wejście tylko przez modal hasłowy w `index.html` — poprawiony). |
| **Landing page** (`index.html`) | ✅ | Sekcja projektu LineMind + modal → `linemind-ai-presentation.html`. |
| **Sitemap** | ✅ | Wskazuje wyłącznie na oficjalną prezentację. |
| **Linki wewnętrzne** | ✅ | Grep `linemind.html` w `*.html/*.js/*.xml` → **0 aktywnych linków**. |
| **SEO canonical** | ✅ | `linemind-ai-presentation.html` → canonical do siebie; `linemind.html` → canonical do prezentacji + `noindex,follow`. |

Kontrola końcowa (`*.html`, `*.js`, `*.xml`): **brak jakichkolwiek aktywnych odwołań do `linemind.html`**.

---

## 4. 301 Redirect — ważne zastrzeżenie hostingowe

Serwis działa na **GitHub Pages**, który **nie obsługuje serwerowych przekierowań HTTP 301** (brak `.htaccess`, brak `_redirects`). Zastosowano standardowy odpowiednik po stronie klienta:
**canonical + `meta refresh` + `location.replace` + `noindex,follow`** w `linemind.html`.
Z punktu widzenia SEO konsoliduje to sygnały na `linemind-ai-presentation.html` (canonical przekazuje „link equity"), a użytkownik jest natychmiast przenoszony.

### Gotowe reguły na wypadek migracji na host z prawdziwym 301

**Apache (`.htaccess`):**
```apache
Redirect 301 /linemind.html /linemind-ai-presentation.html
```

**Netlify / Cloudflare Pages (`_redirects`):**
```
/linemind.html  /linemind-ai-presentation.html  301!
```

**Nginx:**
```nginx
location = /linemind.html { return 301 /linemind-ai-presentation.html; }
```

---

## 5. Do przeglądu (poza zakresem auto-edycji)

Pliki dokumentacji wciąż opisują starą architekturę „dwóch osobnych kopii" prezentera i oznaczają `linemind-ai-presentation.html` jako „plik referencyjny — nie edytować". Wymagają ręcznego przeglądu pod nową, pojedynczą strukturę:
- `docs/LINEMIND_TU_AUTOMATION_STATUS.md` (m.in. wiersze #2/#3, sekcje URL/Plik, troubleshooting)
- `docs/AI_AGENT_ROADMAP.md` (wzmianki o `linemind.html` jako stronie live)

Nie zmieniono ich treści, by nie nadpisywać narracji oznaczonej „nie edytować bez wyraźnej decyzji".

---

## 6. Backup / odwracalność

Repozytorium było czyste i śledzone przez git — oryginalny `linemind.html` jest w pełni zachowany w historii:
```bash
git show HEAD:linemind.html > linemind_ORIGINAL.html
```
Żaden plik nie został trwale skasowany.

---

## 7. Lista zmodyfikowanych plików

1. `index.html` (modal hasłowy → oficjalna prezentacja)
2. `linemind.html` (treść → redirect stub / 301-equivalent + canonical + noindex)
3. `linemind-ai-presentation.html` (dodany canonical)
4. `sitemap.xml` (dodana oficjalna prezentacja)
5. `README.md` (tabela Pages zaktualizowana)
6. `LINEMIND_URL_FIX_REPORT.md` (ten raport)
