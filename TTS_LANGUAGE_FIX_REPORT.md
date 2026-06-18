# TTS_LANGUAGE_FIX_REPORT

**Data:** 2026-06-18
**Priorytet:** P1
**Plik:** `linemind-ai-presentation.html` (prezenter AI „lmfa")
**Symptom:** W wersji **DE** interfejs jest po niemiecku, ale lektor czyta po **angielsku** (angielski głos i/lub angielska narracja). PL działa poprawnie.

---

## 1. Jak działa system TTS (analiza)

Prezenter „lmfa" to samodzielny moduł JS na końcu pliku. Przepływ przy zmianie slajdu:

1. `watch()` wykrywa zmianę slajdu → wywołuje `present(idx)`.
2. `present()`:
   - `detectLang(idx)` — ustala język **z przełącznika deck'a** (`#langToggle`), z atrybutów slajdu, a w ostateczności ze scoringu tekstu.
   - `slideNarration(idx, lang)` — pobiera dedytorską narrację z atrybutu `data-narration-*` slajdu.
   - wysyła POST do backendu `…onrender.com/api/linemind-present-slide` z `{language, narration, slideText…}`.
   - **Ścieżka audio:** jeśli backend zwróci `audioBase64` (ElevenLabs) → `playBase64()`; w przeciwnym razie / przy błędzie → `browserSpeak()` (Web Speech API przeglądarki).
3. `browserSpeak(text, lang)` — ustawia `utterance.lang` i wybiera głos z `speechSynthesis.getVoices()`.

**Skąd narracje:** z atrybutów `data-narration-pl` / `data-narration-en` / `data-narration-de` na każdym slajdzie (verbatim), przekazywane do backendu i/lub czytane lokalnie.
**Jak wybierany język:** `detectLang()` — priorytet ma stan `#langToggle`.
**Jak wybierany głos:** `browserSpeak()` mapuje język → tag BCP-47 i wybiera natywny głos przeglądarki.

---

## 2. Przyczyny błędu (5 błędów + brak treści)

Deck przełącza język w cyklu **PL → EN → DE → PL** (`toggleLang`), a przycisk pokazuje **następny** język (PL→„EN", EN→„DE", DE→„PL").

| # | Miejsce | Błąd | Skutek dla DE |
|---|---------|------|---------------|
| 1 | `detectLang()` — odczyt `#langToggle` | Sprawdzało tylko `PL`/`EN`. Przy DE przycisk pokazuje „PL", a kod miał `if(tt.indexOf('PL'))→return 'en'` | **DE rozpoznawane jako EN** |
| 2 | `slideNarration()` | `lang==='pl' ? data-narration-pl : data-narration-en` — brak gałęzi DE | Dla DE pobierało **angielską** narrację |
| 3 | `present()` | `ttsLang = narration ? (lang==='pl'?'pl':'en') : lang` — wymuszało EN, gdy istniała narracja | **DE wymuszane na EN** |
| 4 | `browserSpeak()` | `u.lang=(lang==='pl')?'pl-PL':'en-US'`; głos `pref=(lang==='pl')?'pl':'en'` | Brak `de-DE` → **głos angielski** |
| 5 | `localText()` (fallback) | Tylko gałęzie PL/EN | Fallback po **angielsku** |
| 6 | Treść slajdów | **Brak `data-narration-de`** na wszystkich 15 slajdach (0/15) | Brak niemieckiego skryptu lektora |

Błędy się kumulowały: nawet gdyby jeden naprawić, pozostałe nadal dawały angielski.

---

## 3. Wprowadzone poprawki

### Treść
- **Dodano 15 niemieckich narracji** `data-narration-de` (po jednej na slajd), profesjonalne tłumaczenia odpowiadające wersjom PL/EN. Stan narracji: **PL 15 / EN 15 / DE 15**.

### JavaScript (`linemind-ai-presentation.html`)
1. **`detectLang()`** — poprawne mapowanie przycisku wg cyklu: `EN→pl`, `DE→en`, `PL→de`. Teraz DE jest rozpoznawane.
2. **`slideNarration()`** — wybór atrybutu wg języka (`pl`/`de`/`en`) z awaryjnym fallbackiem do EN tylko gdy brak lokalnej narracji.
3. **`present()`** — `ttsLang = lang` (koniec wymuszania EN); narracja czytana w wykrytym języku.
4. **`browserSpeak()`** — mapa `{pl:'pl-PL', de:'de-DE', en:'en-US'}`, wybór natywnego głosu wg prefiksu (`de…`), tolerancja `de_DE`/`de`, log do konsoli i status z użytym tagiem. Gdy brak natywnego głosu DE w systemie → ustawia poprawny `lang` i informuje („no native voice").
5. **`localText()`** — dodana gałąź niemiecka (intro / zakończenie / treść środkowa).

---

## 4. Test po naprawie (PL / DE / EN)

Test automatyczny `_tts_test.js` uruchamia **rzeczywiste funkcje** wyodrębnione z pliku, na zamockowanej liście głosów przeglądarki (`pl-PL`, `de-DE`, `en-US`). Wynik: **13/13 PASS**.

| Język (stan deck'a) | Wykryty język | Narracja odczytana | Tag TTS | Użyty głos |
|---|---|---|---|---|
| PL (przycisk „EN") | `pl` | `data-narration-pl` (PL) | `pl-PL` | Microsoft Paulina [pl-PL] |
| **DE (przycisk „PL")** | **`de`** | **`data-narration-de` (DE)** | **`de-DE`** | **Microsoft Hedda [de-DE]** |
| EN (przycisk „DE") | `en` | `data-narration-en` (EN) | `en-US` | Microsoft Zira [en-US] |

- ✅ Język zgadza się z wybraną wersją interfejsu.
- ✅ Narracja jest w języku slajdu (DE czyta niemiecki skrypt).
- ✅ Głos jest natywny dla języka (DE → `de-DE`).
- ✅ Fallback lokalny `localText('de')` zwraca tekst niemiecki.

Walidacja składni JS: kod wykonał się przez `new Function(...)` bez błędów (parsowanie + uruchomienie funkcji).

---

## 5. Zależności i ograniczenia

- **Głos systemowy:** Web Speech API używa głosów zainstalowanych w systemie/przeglądarce. Jeśli na danym urządzeniu **nie ma głosu `de-DE`**, przeglądarka użyje głosu domyślnego — kod ustawia wtedy poprawny `lang='de-DE'`, wybiera najbliższy głos i loguje ostrzeżenie. Rozwiązanie po stronie użytkownika: doinstalować niemiecki pakiet głosowy (Windows: Ustawienia → Język → niemiecki → Mowa).
- **Audio z backendu (ElevenLabs):** frontend wysyła teraz `language:'de'` + niemiecką narrację verbatim. Jakość/zgodność głosu w tej ścieżce zależy od backendu `linemind-ai-backend` (osobne repo). Ścieżka awaryjna `browserSpeak` gwarantuje niemiecki głos lokalnie niezależnie od backendu.

---

## 6. Zmienione / dodane

- `linemind-ai-presentation.html` — 15× `data-narration-de` + 5 poprawek JS (detectLang, slideNarration, present, browserSpeak, localText).

Pliki pomocnicze testu/iniekcji (`_add_de_narration.py`, `_tts_test.js`) zostały usunięte po wykonaniu — nie są częścią strony.
