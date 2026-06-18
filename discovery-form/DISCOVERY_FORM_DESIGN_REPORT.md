# DISCOVERY_FORM_DESIGN_REPORT

**Data:** 2026-06-18
**Status:** wersja robocza do akceptacji — **nieopublikowana, niepodpięta do strony**
**Pliki:** `discovery-form.html`, `discovery-form.css`, `discovery-form.js`

Interaktywna karta Discovery / Requirements Gathering dla klientów LineMind AI. Klient wypełnia ją samodzielnie, a wynik stanowi gotową bazę specyfikacji i podstawę do przygotowania oferty. **Pakiet (Bronze/Silver/Gold) nie jest zakładany z góry** — najpierw zbierane są wymagania; sugestia pakietu jest wyliczana dopiero na końcu.

---

## 1. Analiza brandingu (baza wizualna)

Przeanalizowałem `linemind-ai-presentation.html` i wyodrębniłem system wizualny, który został zastosowany 1:1:

| Element | Źródło w prezentacji | Zastosowanie w formularzu |
|---|---|---|
| **Tokeny kolorów** | `:root` — `--bg #0F172A`, `--surface #1E293B`, `--line #334155`, `--muted #64748B`, `--text #F1F5F9`, `--teal #14b8a6`, akcenty blue/amber/red/green | Identyczne `:root` w `discovery-form.css` |
| **Typografia** | `'Segoe UI', -apple-system, …` | Identyczna |
| **Logo** | `.logo-mark` (gradient teal „L" + glow) + `.logo-name` Line**Mind** AI | Odtworzone w nagłówku |
| **Tytuły** | `h2.title` z gradientem `#f1f5f9 → #14b8a6` (background-clip:text) | Identyczne |
| **Eyebrow** | `.label` — uppercase, teal, letter-spacing 3.5px | Użyte jako numer sekcji |
| **Karty** | glass `rgba(30,41,59,.55)` + `--line` + `backdrop-filter:blur` | `.section`, `.summary-block` |
| **Chip/badge** | `.tech-badge`, `.int-item` hover→teal | `.chip` (checkboxy) i `.tag` |
| **Przycisk** | `.cta-btn` — pill gradient teal, glow, scale hover | `.btn-primary` |
| **Karty pakietów** | `.pricing-card` bronze/silver/gold + `.pc-badge` | `.pkg-suggest` (sugestia pakietu) |
| **Tło cząsteczek** | `#canvas` particle network | `#bgCanvas` (lżejsza wersja) |
| **Animacje** | `@keyframes fadeUp / glow / pulse` | Te same; wejście sekcji = `fadeUp` |

Efekt: formularz wygląda jak naturalne przedłużenie prezentacji i materiałów TU Automation (ciemny granat + cyan/teal, neonowy glow, glass-morphism).

---

## 2. Koncepcja UX

- **Kreator krokowy (wizard)** zamiast „zwykłego formularza" — jedna sekcja naraz, z animacją wejścia jak slajdy prezentacji.
- **Stepper** (lewa kolumna na desktopie, pasek na mobile) — numerowane sekcje, stan `aktywna` / `ukończona` (✓), klik = skok do sekcji.
- **Górny pasek postępu** (gradient teal→blue) + licznik `NN / 15`.
- **Nawigacja**: Wstecz / Dalej, skróty `Alt+←` / `Alt+→`.
- **Autozapis** do `localStorage` (debounce 400 ms) — wskaźnik „Zapisywanie… / Zapisano lokalnie". Klient może wrócić bez utraty danych.
- **Responsywność**: desktop / tablet / telefon (breakpointy 880 px i 560 px; siatki zwijają się do 1 kolumny, stepper poziomy).

---

## 3. Sekcje (15 + podsumowanie)

1. **Dane firmy** — nazwa, branża, kraj, lokalizacja, liczba zakładów, osoba kontaktowa, e-mail, telefon.
2. **Opis projektu** — problem, obecna sytuacja, oczekiwany rezultat, **priorytet** (radio-cards: Niski/Średni/Wysoki/Krytyczny).
3. **Sterowniki PLC** — wiersze dynamiczne (producent: Siemens, Allen Bradley, Beckhoff, Mitsubishi, Omron, Schneider, B&R, WAGO, Inne · model · ilość).
4. **Roboty** — wiersze (KUKA, ABB, FANUC, Yaskawa, Universal Robots, Inne · model · ilość).
5. **Napędy** — wiersze (producent · model · ilość).
6. **Systemy wizji** — wiersze (Cognex, Keyence, Sick, Basler, Inne · model · ilość).
7. **Czujniki i pozostałe systemy kontrolne** — wiersze (Typ: temperatura, wibracje, ciśnienie, przepływ, poziom, zbliżeniowe, enkoder, IO-Link, skanery/kody, wagi, licznik energii, inne · producent · model · ilość) **+ pole tekstowe „Inne systemy kontrolne"** do swobodnego opisu (HMI, sterowniki bezpieczeństwa, motion, RFID/kody, BMS itp.).
8. **Protokoły** — chipy (Profinet, Profibus, OPC UA, Modbus TCP/RTU, Ethernet/IP, MQTT, BACnet, CAN, RS232, RS485, Inne→pole tekstowe).
9. **Systemy nadrzędne** — chipy (SCADA, MES, ERP, SAP, Historian, CMMS, Inne→pole).
10. **Funkcjonalności** — chipy (Alarmy AI, Analiza PLC, OEE, KPI, Raporty PDF/Excel, Dashboardy, Monitoring produkcji/energii, Predykcyjne UR, Analiza przestojów, Receptury, Analiza jakości, Integracja z AI).
11. **Eksport danych** — chipy (PDF, Excel, CSV, SQL, REST API, OPC UA, MQTT, Inne→pole).
12. **Użytkownicy** — grupy dynamiczne (nazwa, liczba) + uprawnienia per grupa (tylko podgląd, dashboard, raporty, alarmy, konfiguracja, administracja, zarządzanie użytkownikami, pełny dostęp).
13. **Bezpieczeństwo** — chipy (Active Directory, Azure AD, LDAP, lokalni użytkownicy, MFA, SSO).
14. **Infrastruktura** — radio-cards (Lokalnie / Cloud / Hybryda).
15. **Dodatkowe wymagania** — duże pole tekstowe.
16. **Podsumowanie** — automatycznie generowane + sugestia pakietu + eksport.

Wiersze dynamiczne (PLC/Roboty/Napędy/Wizja/Czujniki/Użytkownicy): przycisk „＋ Dodaj", usuwanie „✕", pomijanie pustych wierszy w podsumowaniu. Numeracja sekcji generowana automatycznie (JS) — dodanie/zmiana kolejności sekcji nie wymaga ręcznego przenumerowania.

---

## 4. Automatyczne podsumowanie

Sekcja 15 buduje na żywo (z aktualnych danych) uporządkowane podsumowanie wszystkich sekcji — gotową specyfikację wstępną. Eksport:

- **⧉ Kopiuj** — Markdown do schowka.
- **⬇ JSON** — surowe dane (`LineMind_Discovery_<firma>.json`) — gotowe do integracji/CRM.
- **⬇ Markdown** — czytelna specyfikacja (`.md`).
- **🖨 Drukuj / PDF** — dedykowany arkusz `@media print` (rozwija wszystkie sekcje, ukrywa nawigację, jasne tło).
- **↺ Wyczyść** — reset z potwierdzeniem.

---

## 5. Struktura przypisania pakietu (Bronze / Silver / Gold)

Zgodnie z wymaganiem **pakiet nie jest zakładany z góry** — jest **wyliczany po zebraniu danych** jako *sugestia wstępna* i przygotowany jako edytowalna struktura w `discovery-form.js` (`PACKAGE`):

```
PACKAGE.thresholds = { gold: 9, silver: 4 }   // wynik ≥9 → Gold, ≥4 → Silver, inaczej Bronze
PACKAGE.compute(data) → { tier, name, rationale, score, signals[] }
```

**Sygnały podwyższające zakres (wagi):**

| Sygnał | Punkty |
|---|---|
| Integracja MES / ERP / SAP | +3 |
| Predykcyjne utrzymanie ruchu | +3 |
| Integracja z AI | +2 |
| Eksport API / OPC UA / MQTT | +2 |
| Uwierzytelnianie korporacyjne (SSO/AD/Azure AD/LDAP) | +2 |
| Wiele zakładów | +2 |
| MFA / złożona struktura użytkowników / receptury / jakość / energia | +1 każdy |
| OEE-KPI / Dashboardy / Analiza przestojów / Alarmy AI | +1 każdy |
| Rozbudowany park maszynowy (≥5 pozycji) | +1 |

Wynik mapowany na **Bronze / Silver / Gold**, z uzasadnieniem i listą sygnałów wyświetlanymi w karcie `.pkg-suggest` (styl `pricing-card` z prezentacji). Karta zawiera jawną notę, że **ostateczny pakiet i wycenę określa TU Automation** — sugestia jest wyłącznie pomocnicza. Progi i wagi można dostroić w jednym miejscu bez zmiany reszty kodu.

---

## 5b. Wielojęzyczność (PL / EN / DE)

Formularz jest **trójjęzyczny**, dokładnie jak prezentacja — przełącznik **🌐** w nagłówku cyklicznie zmienia PL → EN → DE (przycisk pokazuje następny język). Wybór zapisywany w `localStorage`.

- **Teksty UI** (tytuły, opisy, etykiety pól, placeholdery, przyciski, karty radio, etykiety chipów specyficzne dla języka) przełączane przez atrybuty `data-pl/en/de` + `data-ph-pl/en/de` (ten sam wzorzec co deck) oraz mini-słownik `LT` dla treści generowanych w JS (wiersze dynamiczne, podsumowanie, sugestia pakietu).
- **Numeracja sekcji, stepper, podsumowanie i raport Markdown** generują się w aktywnym języku.
- **Wartości danych pozostają kanoniczne** (stałe, niezależne od języka) — np. `OPC UA`, `Siemens`, `MES`, `Profinet`, a także pozycje listowe takie jak „Alarmy AI". Dzięki temu zebrane dane (JSON) są spójne i nadają się do dalszego przetwarzania niezależnie od języka wypełniania. Terminy standardowe (protokoły, producenci, formaty) są i tak wspólne dla wszystkich języków.

## 6. Zgodność z wymaganiami technicznymi

- ✅ Responsywny: desktop / tablet / telefon.
- ✅ Spójny branding (kolory, typografia, animacje, układ, komponenty).
- ✅ Nie jest „zwykłym formularzem HTML" — kreator z autozapisem, dynamicznymi wierszami, live-podsumowaniem i scoringiem.
- ✅ Wszystkie 14 sekcji + automatyczne podsumowanie.
- ✅ Struktura pod późniejsze przypisanie Bronze/Silver/Gold.
- ✅ `noindex, nofollow` w `<head>` (na czas wersji roboczej).

**Walidacja:** `node --check discovery-form.js` → składnia OK. Pliki serwowane lokalnie (200). Otwarte w przeglądarce do akceptacji.

---

## 7. Stan i następne kroki (po akceptacji)

- **Nieopublikowane / niepodpięte** do `index.html`, sitemap ani nawigacji — zgodnie z poleceniem.
- Możliwe rozszerzenia po akceptacji:
  - **Wysyłka** podsumowania (e-mail/endpoint/CRM) zamiast tylko lokalnego eksportu.
  - Podpięcie pod stronę (np. `/discovery-form.html` za linkiem w ofercie) i wpis do `sitemap.xml` — dopiero na wyraźną decyzję.

**Pliki do akceptacji:** `discovery-form.html`, `discovery-form.css`, `discovery-form.js`, `DISCOVERY_FORM_DESIGN_REPORT.md`.
Podgląd: http://localhost:8080/discovery-form.html
