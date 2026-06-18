# LineMind AI — Discovery / Requirements Form

Interaktywna, trójjęzyczna (PL / EN / DE) karta zbierania wymagań dla klientów LineMind AI.
Klient wypełnia ją samodzielnie, a wynik stanowi gotową bazę specyfikacji i podstawę do przygotowania oferty.

> **Status:** wersja robocza, zaakceptowana wizualnie.
> **NIE jest podpięta do strony** `tuautomation.de` i **nie jest publikowana** przez GitHub Pages — żyje na osobnej gałęzi `discovery-form` (Pages serwuje tylko `master`). W plikach ustawiono też `noindex, nofollow`.

---

## Pliki

| Plik | Rola |
|------|------|
| `discovery-form.html` | Struktura formularza (16 sekcji: 15 danych + automatyczne podsumowanie). Linkuje CSS i JS względnie. |
| `discovery-form.css` | Style — system wizualny przeniesiony 1:1 z `linemind-ai-presentation.html` (tokeny, typografia, glass, teal, animacje). |
| `discovery-form.js` | Logika: kreator, dynamiczne wiersze, chipy, autozapis, podsumowanie, scoring pakietu, eksport, i18n PL/EN/DE. |
| `DISCOVERY_FORM_DESIGN_REPORT.md` | Raport projektowy — uzasadnienie brandingu, lista sekcji, struktura scoringu. |
| `README.md` | Ten plik — dokumentacja użytkowa i utrzymaniowa. |

Pakiet jest **samodzielny** (vanilla HTML/CSS/JS, bez zależności i build-stepu).

---

## Podgląd lokalny

```bash
# z katalogu repozytorium:
python -m http.server 8080
# następnie otwórz:
#   http://localhost:8080/discovery-form/discovery-form.html
```

Można też otworzyć plik bezpośrednio (`file://`), ale serwer HTTP jest pewniejszy (schowek, pobieranie plików).

---

## Funkcje

- **Kreator krokowy** (16 sekcji) z animacją wejścia jak slajdy prezentacji, stepperem i paskiem postępu.
- **Dynamiczne wiersze**: Sterowniki PLC, Roboty, Napędy, Systemy wizji, Czujniki, Grupy użytkowników (＋ dodaj / ✕ usuń).
- **Chipy** (multi-select) dla protokołów, systemów nadrzędnych, funkcjonalności, eksportu, bezpieczeństwa; „Inne" odsłania pole tekstowe.
- **Autozapis** do `localStorage` (klucz `linemind_discovery_v1`) — klient może wrócić bez utraty danych.
- **Automatyczne podsumowanie** + eksport: kopiuj (Markdown), pobierz JSON, pobierz Markdown, drukuj/PDF, wyczyść.
- **Trójjęzyczność PL / EN / DE** — przełącznik 🌐 w nagłówku (cykl PL→EN→DE), wybór zapamiętany w `localStorage` (`linemind_discovery_lang`).
- **Responsywny** (desktop / tablet / telefon).

---

## Wielojęzyczność (i18n)

- **Statyczny UI**: atrybuty `data-pl / data-en / data-de` (tekst) i `data-ph-pl / data-ph-en / data-ph-de` (placeholdery). Funkcja `applyLang(lang)` w JS podstawia treść — ten sam wzorzec co prezentacja.
- **Treści generowane w JS** (etykiety wierszy, podsumowanie, sugestia pakietu): słownik `LT` w `discovery-form.js`.
- **Wartości danych są kanoniczne** (stałe, niezależne od języka): np. `OPC UA`, `Siemens`, `MES`, „Alarmy AI". Dzięki temu eksport JSON jest spójny niezależnie od języka wypełniania.

**Dodanie/zmiana tłumaczenia:** edytuj atrybuty `data-*` w HTML (UI statyczne) lub wpisy w obiekcie `LT` w JS (treści dynamiczne).

---

## Struktura przypisania pakietu (Bronze / Silver / Gold)

Pakiet **nie jest zakładany z góry** — jest wyliczany po zebraniu danych jako *sugestia wstępna*. Konfiguracja w `discovery-form.js`:

```js
var PACKAGE = {
  thresholds: { gold: 9, silver: 4 },   // wynik ≥9 → Gold, ≥4 → Silver, inaczej Bronze
  compute: function (d) { /* ważone sygnały zakresu */ }
};
```

Progi i wagi sygnałów (np. MES/ERP/SAP +3, predykcyjne UR +3, integracja AI +2) zmienia się w jednym miejscu. Karta sugestii zawiera notę, że **ostateczny pakiet i wycenę określa TU Automation**.

---

## Dane wyjściowe

- **JSON** — pełny, strukturalny zrzut (`collect()`), gotowy do CRM/integracji. Wartości kanoniczne.
- **Markdown** — czytelna specyfikacja wstępna w aktywnym języku.
- **PDF** — przez `window.print()` z dedykowanym arkuszem `@media print`.

---

## Utrzymanie (jak rozszerzać)

- **Nowa sekcja:** dodaj `<section class="section" data-title="…">` z `h2.title` (data-pl/en/de) i treścią; numeracja, stepper i nawigacja dostosują się automatycznie. Jeśli sekcja ma trafić do podsumowania — dopisz blok w `buildSummary()` / `toMarkdown()`.
- **Nowy typ wiersza:** dodaj wpis w obiekcie `ROW` (kontener, pola) + kontener `<div class="repeat" id="…Rows">` i przycisk `data-add`.
- **Nowe chipy:** dodaj `<label class="chip">` z `value` (kanoniczne) i `<span>` (z data-pl/en/de jeśli tekst jest językowy).
- **Nowy język:** dodaj kod do `LANGS`/`NEXT`, atrybuty `data-xx`/`data-ph-xx` oraz pole `xx` w słowniku `LT`.

---

## Publikacja na stronie (gdy zapadnie decyzja)

Obecnie pliki są tylko na gałęzi `discovery-form`. Aby udostępnić publicznie:

1. Scal/dodaj folder `discovery-form/` do gałęzi `master` (źródło GitHub Pages).
2. (Opcjonalnie) zmień nazwę `discovery-form.html` → `index.html`, by uzyskać czysty URL `/discovery-form/`.
3. Usuń `noindex, nofollow` z `<head>` jeśli ma być indeksowany.
4. Dodaj link (np. z oferty) i wpis do `sitemap.xml`.

Do tego czasu formularz pozostaje wyłącznie kopią zapasową na GitHubie, niewidoczną na `tuautomation.de`.
