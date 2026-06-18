# DISCOVERY_FORM_V2_PROPOSAL

**Podstawa:** `PACKAGE_ANALYSIS_REPORT.md` + `DISCOVERY_GAP_ANALYSIS.md`
**Charakter:** projekt docelowej struktury formularza. **Bez zmian w kodzie i HTML — tylko design.**
**Cel V2:** formularz wystarczający do (1) wyceny wdrożenia, (2) abonamentu, (3) kwalifikacji Bronze/Silver/Gold, (4) specyfikacji technicznej.

Legenda statusu: **[=]** bez zmian · **[~]** zmienione/rozszerzone · **[+]** nowe.

---

## 1. Nowe / docelowe sekcje (struktura V2)

V2 rozszerza obecne 15 sekcji do **20 sekcji + podsumowanie**, grupując je logicznie. Domykają one luki B (poziom dostępu) i C (compliance) oraz skalę D.

| # | Sekcja | Status | Rola |
|---|---|:--:|---|
| 1 | Dane firmy | [~] | + „Branża regulowana?" (tak/nie → ujawnia compliance) |
| 2 | Opis projektu | [~] | + horyzont czasowy / termin, + budżet (opcjonalny przedział) |
| 3 | **Skala projektu** | [+] | liczba zakładów, **linii**, **maszyn**, punktów danych/tagów, częstotliwość |
| 4 | Sterowniki PLC | [=] | producent/model/ilość |
| 5 | **HMI / panele operatorskie** | [+] | producent/model/ilość |
| 6 | Roboty | [=] | |
| 7 | Napędy | [=] | |
| 8 | Systemy wizji / kamery | [=] | |
| 9 | Czujniki i pozostałe systemy kontrolne | [~] | wydzielone „Liczniki energii" |
| 10 | **IoT / bramki (gateways)** | [+] | Raspberry Pi / mini-PC / IIoT, ilość, rola |
| 11 | Protokoły komunikacyjne | [=] | |
| 12 | Systemy nadrzędne i integracje | [~] | ERP/MES/SAP/Historian/CMMS/SCADA (źródło vs integracja) |
| 13 | **Poziom dostępu do procesu** | [+] | **rdzeń B** — odczyt / zapis / AutoTuning / sterowanie |
| 14 | Funkcjonalności | [~] | doprecyzowana „Analiza PLC", bez dублowania formatów |
| 15 | Eksport danych | [~] | formaty raportów scalone z funkcjami |
| 16 | Użytkownicy i uprawnienia | [=] | grupy + uprawnienia |
| 17 | Bezpieczeństwo i uwierzytelnianie | [=] | AD/Azure AD/LDAP/SSO/MFA + sieć/VPN |
| 18 | **Zgodność / normy (compliance)** | [+] | **IEC 62443, ISO 27001, GMP, FDA/21 CFR Part 11, GxP, NIS2** |
| 19 | Infrastruktura | [~] | + Cloud backup, region hostingu |
| 20 | **SLA / wsparcie + stan wejściowy** | [+] | poziom SLA, onboarding, dokumentacja (schematy, lista I/O) |
| 21 | Dodatkowe wymagania | [=] | |
| 22 | Podsumowanie + sugestia pakietu | [~] | uwzględnia nowe sygnały i reguły twarde |

---

## 2. Nowe pola (szczegółowo)

### Sekcja 3 — Skala projektu **[+]**
- `sites` — liczba zakładów *(przeniesione z Sekcji 1)*
- `lines` — **liczba linii produkcyjnych** *(number)*
- `machines` — **szacowana liczba maszyn** *(number)*
- `dataPoints` — liczba punktów danych / tagów *(number, opcjonalne)*
- `samplingRate` — częstotliwość próbkowania *(select: <1 s / 1–5 s / >5 s / nieznana)*

### Sekcja 5 — HMI / panele operatorskie **[+]**
- wiersze: producent *(Siemens / Beckhoff / Pro-face / Weintek / B&R / Inne)* · model · ilość

### Sekcja 10 — IoT / bramki **[+]**
- wiersze: typ *(Raspberry Pi / mini-PC / bramka IIoT / inne)* · rola *(gateway / edge / akwizycja)* · ilość

### Sekcja 13 — Poziom dostępu do procesu **[+]** (kategoria B — krytyczna)
- `accessLevel` — **radio (jeden, rosnący zakres ingerencji):**
  1. **Tylko odczyt** (read-only)
  2. **Odczyt + alarmy / raporty**
  3. **Zapis parametrów** (zapis do PLC — wybrane parametry)
  4. **AutoTuning** (automatyczna korekta napędów w czasie rzeczywistym)
  5. **Sterowanie procesem** (pętla zamknięta)
- `accessScope` — pole tekstowe: „które maszyny / parametry obejmuje zapis/AutoTuning"
- `readOnlyConfirm` — checkbox: „Potwierdzam, że domyślnie system pracuje read-only" *(spójne z pozycjonowaniem produktu)*

### Sekcja 18 — Zgodność / normy **[+]** (kategoria C)
- `compliance` — checkboxy: **IEC 62443 · ISO 27001 · GMP · FDA / 21 CFR Part 11 · GxP · NIS2 · Inne**
- `validation` — checkbox: „Wymagana walidacja / kwalifikacja (IQ/OQ/PQ)" *(pharma)*

### Sekcja 17 — Bezpieczeństwo (rozszerzenie) **[~]**
- `remoteAccess` — dostęp zdalny / VPN *(tak / nie / do ustalenia)*
- `networkSegmentation` — segmentacja sieci / VLAN *(tak / nie)*

### Sekcja 20 — SLA / wsparcie + stan wejściowy **[+]**
- `sla` — radio: **8×5 / 24×7 / brak / do ustalenia**
- `responseTime` — oczekiwany czas reakcji *(select)*
- `onboarding` — checkbox: „Dedykowany onboarding"
- `docsAvailable` — checkboxy: schematy elektryczne · lista I/O · opis procesu · dokumentacja PLC

### Sekcja 2 / 19 — uzupełnienia **[~]**
- `timeline` — horyzont / termin *(select: <1 mies. / 1–3 / 3–6 / >6)*
- `budget` — opcjonalny przedział *(opcjonalne)*
- `cloudBackup` — Cloud backup *(tak / nie)*

---

## 3. Pola obowiązkowe (V2)

| Pole | Sekcja | Dlaczego obowiązkowe |
|---|---|---|
| Nazwa firmy | 1 | identyfikacja |
| E-mail | 1 | kontakt |
| Branża | 1 | kontekst + compliance |
| Liczba zakładów | 3 | skala → Gold |
| Liczba linii **lub** liczba maszyn | 3 | sizing wyceny/abonamentu |
| ≥ 1 źródło danych (PLC/HMI/robot/napęd/wizja/czujnik/IoT) | 4–10 | podstawa spec |
| **Poziom dostępu do procesu** | 13 | krytyczne: ryzyko, koszt, kwalifikacja Bronze/Silver |
| Priorytet | 2 | planowanie |
| Problem **lub** oczekiwany rezultat | 2 | minimum specyfikacji |

Compliance, SLA, IoT, integracje itd. — opcjonalne (formularz ma pozostać łatwy).

---

## 4. Pola wpływające na Bronze / Silver / Gold

### 4.1 Reguły TWARDE (override — niezależne od punktów)

| Warunek (pole) | Wynik |
|---|---|
| `accessLevel` = **Sterowanie procesem** | **Gold** (lub wycena indywidualna) |
| `compliance` zawiera IEC 62443 / ISO 27001 / GxP / FDA / GMP | **Gold / poza standardem** (duży koszt + walidacja) |
| Integracja **MES / ERP / SAP** | **Gold** |
| **REST API / MQTT / OPC UA** jako kanał integracji | **Gold** |
| Uwierzytelnianie korporacyjne (AD / Azure AD / SSO / LDAP) | **Gold** |
| Liczba zakładów > 1 (multi-site) | **Gold** |
| Predykcja AI / pełne KPI (OEE-MTTR-MTBF) / Dashboard Dyrektora | **Gold** |
| `sla` = 24×7 | **Gold** |
| `accessLevel` = **AutoTuning** lub **Zapis parametrów** | **min. Silver** |
| `accessLevel` = **Tylko odczyt** i brak sygnałów wyższych | **Bronze** |

### 4.2 Sygnały punktowe (rozszerzenie istniejącego `PACKAGE.compute`)

> Propozycja wag — **do kalibracji**, nie do wdrożenia tutaj.

| Sygnał (pole V2) | Punkty | Kierunek |
|---|:--:|---|
| Sterowanie procesem (`accessLevel`) | +5 | Gold |
| Compliance (dowolna norma) | +4 | Gold/custom |
| AutoTuning (`accessLevel`) | +3 | Silver→ |
| Zapis parametrów (`accessLevel`) | +2 | Silver |
| MES/ERP/SAP *(istnieje)* | +3 | Gold |
| Predykcyjne UR *(istnieje)* | +3 | Gold |
| SLA 24×7 | +3 | Gold |
| Liczba linii > 10 | +3 | Gold |
| Integracja AI *(istnieje)* | +2 | Gold |
| API/OPC UA/MQTT *(istnieje)* | +2 | Gold |
| Uwierzytelnianie korporacyjne *(istnieje)* | +2 | Gold |
| Wiele zakładów *(istnieje)* | +2 | Gold |
| Liczba linii 4–10 | +2 | Silver→ |
| Aplikacja mobilna / chat *(nowe pole funkcji)* | +1 | Silver |
| MFA / receptury / jakość / energia / KPI / dashboardy / przestoje / alarmy AI / park≥5 *(istnieją)* | +1 ea | — |

**Progi (bez zmian):** wynik ≥ 9 → Gold · ≥ 4 → Silver · inaczej Bronze — **z nałożonymi regułami twardymi z 4.1** (override ma pierwszeństwo).

---

## 5. Logika kwalifikacji pakietów (V2)

```
START
│
├─ REGUŁY TWARDE (dowolna → ustaw pakiet, pomiń resztę):
│   ├─ accessLevel = Sterowanie procesem ........... GOLD
│   ├─ compliance ∈ {IEC62443, ISO27001, GxP, FDA, GMP} GOLD / custom
│   ├─ MES/ERP/SAP lub REST API/MQTT/OPC UA ......... GOLD
│   ├─ AD/Azure AD/SSO/LDAP ......................... GOLD
│   ├─ zakłady > 1 .................................. GOLD
│   ├─ predykcja AI / pełne KPI / SLA 24×7 .......... GOLD
│   │
│   ├─ accessLevel ∈ {AutoTuning, Zapis parametrów}.. min. SILVER
│   └─ accessLevel = Tylko odczyt (i brak wyższych).. BRONZE
│
├─ Jeśli żadna twarda nie rozstrzygnęła → policz SYGNAŁY PUNKTOWE (4.2)
│   ├─ wynik ≥ 9 ......... GOLD
│   ├─ wynik ≥ 4 ......... SILVER
│   └─ inaczej ........... BRONZE
│
└─ Pokaż: pakiet + uzasadnienie + listę sygnałów + notę „wycena/decyzja: TU Automation"
```

**Kluczowa poprawa V2:** dzięki polu `accessLevel` system po raz pierwszy **jednoznacznie wykrywa Bronze (tylko odczyt) i Silver (AutoTuning/zapis)** — domyka to „przezroczystość Silver" wskazaną w `DISCOVERY_GAP_ANALYSIS.md`. Compliance i sterowanie procesem dają twarde przejście do Gold/custom.

### Przykłady kwalifikacji V2

| Profil klienta | Pakiet | Decydujący sygnał |
|---|---|---|
| 3 PLC, 1 zakład, 8 użytk., **tylko odczyt**, brak integracji | **Bronze** | accessLevel = tylko odczyt |
| 10 PLC, 1 zakład, **AutoTuning**, mobilna, chat, KPI podst. | **Silver** | accessLevel = AutoTuning (min. Silver) |
| 2 zakłady, **SAP + REST API**, **Azure AD**, predykcja, **ISO 27001** | **Gold** | wiele reguł twardych |
| 1 zakład, **sterowanie procesem** pętla zamknięta | **Gold/custom** | accessLevel = sterowanie + ryzyko |
| pharma, **GMP + FDA 21 CFR Part 11**, walidacja IQ/OQ/PQ | **Gold/custom** | compliance regulowane |

---

## 6. Mapowanie szczególnie wymaganych elementów

| Wymagany element | Sekcja V2 | Pole | Wpływ na pakiet |
|---|---|---|---|
| Poziom dostępu do procesu | 13 | `accessLevel` | rdzeń: Bronze/Silver/Gold |
| AutoTuning | 13 | `accessLevel` = AutoTuning | min. Silver (+3) |
| Zapis parametrów | 13 | `accessLevel` = Zapis | Silver (+2) |
| Sterowanie procesem | 13 | `accessLevel` = Sterowanie | Gold/custom (+5) |
| IEC 62443 | 18 | `compliance` | Gold/custom (+4) |
| ISO 27001 | 18 | `compliance` | Gold/custom (+4) |
| GMP | 18 | `compliance` | Gold/custom (+4) |
| FDA / 21 CFR Part 11 | 18 | `compliance` | Gold/custom (+4) |
| GxP | 18 | `compliance` | Gold/custom (+4) |
| Liczba linii | 3 | `lines` | Silver (4–10) / Gold (>10) |
| Liczba maszyn | 3 | `machines` | sizing wyceny / abonamentu |
| HMI | 5 | wiersze HMI | źródło danych (spec/koszt) |
| IoT | 10 | wiersze IoT/bramki | źródło danych (spec/koszt) |

---

## 7. Czyszczenie / spójność (z gap analysis)

- Scalić formaty raportów: „Raporty PDF/Excel" (funkcje) + „PDF/Excel" (eksport) → jedno miejsce.
- Doprecyzować lub usunąć „Analiza PLC".
- OPC UA / MQTT w Protokołach vs Eksporcie — dodać etykiety „obecne w instalacji" vs „kanał integracji", by uniknąć podwójnego liczenia w scoringu.

---

## 8. Uwagi wdrożeniowe (na później, nie teraz)

- Zmiana **nie-łamiąca danych**: wartości pozostają kanoniczne; nowe pola = nowe klucze w `collect()`.
- Reguły twarde najlepiej dodać **przed** sumowaniem punktów w `PACKAGE.compute` (override).
- „Gold/custom" warto zwracać jako osobny status (np. `tier='gold', custom=true`) dla branż regulowanych / sterowania procesem.
- i18n: nowe etykiety wymagają wpisów PL/EN/DE (wzorzec jak w V1).

---

**Podsumowanie:** V2 dodaje 5 sekcji ([+] Skala, HMI, IoT, Poziom dostępu, Compliance/SLA) i domyka wszystkie luki krytyczne z `DISCOVERY_GAP_ANALYSIS.md`. Najważniejsza zmiana to **`accessLevel`** (czyni Bronze/Silver jednoznacznymi) oraz **`compliance`** (twarde przejście do Gold/custom). Logika kwalifikacji łączy **reguły twarde (override)** z istniejącym **scoringiem punktowym**.

*Projekt docelowy — gotowy do implementacji po akceptacji. Kod i HTML niezmienione.*
