# DISCOVERY_GAP_ANALYSIS

**Analizowane:** `discovery-form.html`, `discovery-form.js`, `PACKAGE_ANALYSIS_REPORT.md`
**Cel oceny:** czy formularz zbiera dane wystarczające do (1) wyceny wdrożenia, (2) określenia abonamentu, (3) przypisania Bronze/Silver/Gold, (4) specyfikacji technicznej.
**Status:** analiza i rekomendacje. **Formularz NIE został zmodyfikowany.**

---

## 0. Ocena z 4 perspektyw

| Perspektywa | Mocne strony | Najważniejsze braki |
|---|---|---|
| **Automatyk** | Pełna lista protokołów, sprzęt z producent/model/ilość, czujniki | Brak **poziomu dostępu** (odczyt vs zapis vs sterowanie), brak częstotliwości próbkowania / liczby tagów, HMI tylko w polu tekstowym |
| **Integrator systemów** | Integracje (E) pokryte w 100% — ERP/MES/SAP/Historian/CMMS + REST API/MQTT/OPC UA; uwierzytelnianie pełne (AD/Azure AD/LDAP/SSO/MFA) | Brak norm/compliance (IEC 62443, ISO 27001, GxP), brak architektury sieci / dostępu zdalnego (VPN) |
| **Wdrożeniowiec PLC** | PLC/napędy/wizja/czujniki strukturalnie, ilości | Brak **zakresu ingerencji** (tylko odczyt / zapis do PLC / AutoTuning / sterowanie) — rdzeń pozycjonowania LineMind „zawsze tylko odczyt"; brak liczby linii/maszyn explicite; brak stanu dokumentacji (schematy, lista I/O) |
| **Właściciel TU Automation** | Skala (zakłady, użytkownicy, grupy), funkcje mapujące na pakiety, scoring B/S/G działa | Brak driverów wyceny: poziom dostępu, compliance, liczba linii/punktów danych, oczekiwany **SLA/wsparcie**, horyzont czasowy/budżet |

---

## Pokrycie wymaganej listy A–E

Legenda: ✓ pełne · ◑ częściowe / pośrednie · ✗ brak.

### A. Źródła danych
| Element | Status | Gdzie / uwaga |
|---|:--:|---|
| PLC | ✓ | Sekcja 3 (producent/model/ilość) |
| HMI | ✗ | tylko w placeholderze pola „Inne systemy kontrolne" (Sekcja 7) — niestrukturalnie |
| SCADA | ◑ | Sekcja 9 jako *system nadrzędny* (nie jako źródło danych) |
| Roboty | ✓ | Sekcja 4 |
| Napędy | ✓ | Sekcja 5 |
| Kamery | ✓ | Sekcja 6 (Systemy wizji) |
| IoT | ✗ | brak; ewentualnie „Inne" / czujniki |
| Liczniki energii | ◑ | typ czujnika „Licznik energii" (Sekcja 7) + funkcja „Monitoring energii" (Sekcja 10) |

### B. Dostęp do systemu (poziom ingerencji) — **najsłabszy obszar**
| Element | Status | Uwaga |
|---|:--:|---|
| tylko odczyt | ✗ | brak — a to kluczowy komunikat produktu i baza Bronze |
| alarmy | ◑ | „Alarmy AI" (Sekcja 10) + uprawnienie „alarmy" (Sekcja 12) |
| raporty | ✓ | Raporty PDF/Excel (Sekcja 10) + Eksport (Sekcja 11) |
| zapis parametrów | ✗ | brak (zapis do PLC) |
| AutoTuning | ✗ | brak dedykowanego pola — a to różnicownik **Silver** |
| sterowanie procesem | ✗ | brak (pętla zamknięta) |

### C. Bezpieczeństwo
| Element | Status |
|---|:--:|
| Active Directory | ✓ |
| Azure AD | ✓ |
| LDAP | ✓ |
| SSO | ✓ |
| MFA | ✓ |
| IEC 62443 | ✗ |
| ISO 27001 | ✗ |
| GMP | ✗ |
| FDA / 21 CFR Part 11 | ✗ |
| GxP | ✗ |

→ Uwierzytelnianie kompletne; **normy / compliance całkowicie brak**.

### D. Skala projektu
| Element | Status | Uwaga |
|---|:--:|---|
| liczba zakładów | ✓ | Sekcja 1 |
| liczba linii | ✗ | brak |
| liczba maszyn | ◑ | tylko pośrednio z ilości w wierszach (Sekcje 3–7) |
| liczba użytkowników | ✓ | Sekcja 12 (suma z grup) |
| liczba grup użytkowników | ✓ | Sekcja 12 |

### E. Integracje — **w pełni pokryte**
| Element | Status |
|---|:--:|
| ERP | ✓ |
| MES | ✓ |
| SAP | ✓ |
| REST API | ✓ |
| MQTT | ✓ |
| OPC UA | ✓ |
| Historian | ✓ |
| CMMS | ✓ |

---

## 1. Co jest KOMPLETNE

- **Identyfikacja klienta** (firma, kontakt, kraj, lokalizacja).
- **Park sprzętowy** strukturalnie: PLC, Roboty, Napędy, Wizja, Czujniki — producent / model / ilość. Dobra baza pod spec i koszt.
- **Protokoły** — pełna lista (Profinet/Profibus/OPC UA/Modbus TCP-RTU/Ethernet-IP/MQTT/BACnet/CAN/RS232/RS485 + Inne).
- **Integracje i systemy nadrzędne (E)** — 100%: ERP/MES/SAP/Historian/CMMS + REST API/MQTT/OPC UA. To najmocniejszy obszar i kluczowy dla kwalifikacji **Gold**.
- **Funkcjonalności** mapujące na pakiety: OEE/KPI, predykcyjne UR, integracja AI, monitoring energii, receptury, jakość, dashboardy, analiza przestojów, alarmy AI.
- **Eksport danych** (PDF/Excel/CSV/SQL/REST API/OPC UA/MQTT).
- **Użytkownicy + grupy + uprawnienia** (8 poziomów).
- **Uwierzytelnianie** (AD/Azure AD/LDAP/SSO/MFA) — pełne.
- **Infrastruktura** (lokalnie/cloud/hybryda), priorytet, dodatkowe wymagania.
- **Scoring B/S/G** już działa na większości sygnałów (MES/ERP/SAP, predykcyjne UR, integracja AI, API/OPC UA/MQTT, uwierzytelnianie korporacyjne, multi-site, grupy, park ≥5 itd.).

---

## 2. Czego BRAKUJE (priorytetowo)

**P1 — krytyczne dla wyceny i kwalifikacji:**
- **Poziom dostępu / ingerencji (cała kategoria B)**: tylko odczyt / zapis parametrów / **AutoTuning** / sterowanie procesem. Bez tego nie da się wycenić ryzyka i pracy, ani **wykryć Silver** (AutoTuning) i potwierdzić **Bronze** (tylko odczyt).
- **Normy / compliance (C)**: IEC 62443, ISO 27001, GMP, FDA / 21 CFR Part 11, GxP. Duży driver kosztu i specyfikacji w branżach regulowanych (pharma/spożywka) — często wymusza zakres ponad standard.

**P2 — istotne dla skali/abonamentu:**
- **Liczba linii produkcyjnych** (D) — potrzebna do funkcji „per linia" (chat, KPI) i sizingu.
- **Liczba maszyn / punktów danych (tagów) + częstotliwość próbkowania** — driver **abonamentu** (wolumen danych).
- **Oczekiwany SLA / poziom wsparcia** (np. 8×5 / 24×7) — różnicownik **Gold**, dziś tylko domyślany.
- **HMI** i **IoT / bramki** jako strukturalne źródła danych (dziś tylko pole tekstowe / pośrednio).

**P3 — wspomaga wycenę/spec:**
- Architektura sieci / segmentacja / **dostęp zdalny (VPN)**.
- **Stan dokumentacji** (schematy, lista I/O, opis procesu) — wpływa na koszt wdrożenia.
- Horyzont czasowy / termin, opcjonalny przedział budżetu.
- Cloud backup (jawnie) — dziś tylko „infrastruktura".

---

## 3. Co jest ZBĘDNE / do uproszczenia

- **Podwójne zbieranie formatów raportów**: „Raporty PDF" / „Raporty Excel" (Sekcja 10, Funkcjonalności) **vs** „PDF" / „Excel" (Sekcja 11, Eksport). Warto ujednolicić (np. raporty = funkcja, formaty = jedno miejsce).
- **OPC UA / MQTT** występują w Protokołach (8) **i** w Eksporcie (11). To celowe (obecne w instalacji ≠ kanał eksportu), ale warto dodać krótką etykietę wyjaśniającą, by uniknąć dezorientacji / podwójnego liczenia w scoringu.
- **„Analiza PLC"** (Sekcja 10) jest niejasna i pokrywa się z „diagnozą AI" — do doprecyzowania albo usunięcia.
- Poza tym nic krytycznie zbędnego — reszta pól uzasadniona.

---

## 4. Jakie pola NALEŻY DODAĆ (konkret)

**Nowa sekcja „Poziom dostępu / ingerencji" (B)** — multi/radio:
- Tylko odczyt · Odczyt + alarmy · Odczyt + raporty · Zapis parametrów (do PLC) · AutoTuning (korekta napędów) · Sterowanie procesem (pętla zamknięta)
- + pole „które maszyny / parametry mają być zapisywane".

**Rozszerzyć Sekcję 13 (Bezpieczeństwo) o normy/compliance (C):**
- IEC 62443 · ISO 27001 · GMP · FDA / 21 CFR Part 11 · GxP · (opcjonalnie NIS2).

**Źródła danych (A):**
- HMI (producent/model/ilość lub checkbox) · IoT / bramki (gateway) · wydzielić „Liczniki energii" jako osobną pozycję.

**Skala (D):**
- „Liczba linii produkcyjnych" · „Szacowana liczba maszyn" · (opcjonalnie) „Liczba punktów danych / tagów" + „Częstotliwość próbkowania".

**Wycena / abonament / wdrożenie:**
- „Oczekiwany SLA / wsparcie" (8×5 / 24×7) · „Horyzont czasowy / termin" · „Budżet (opcjonalny przedział)" · „Dostęp zdalny / VPN" · „Cloud backup" · „Dostępna dokumentacja (schematy, lista I/O, opis procesu)".

---

## 5. Jakie pola powinny być OBOWIĄZKOWE

| Pole | Dlaczego |
|---|---|
| Nazwa firmy *(już wymagane)* | identyfikacja |
| E-mail *(już wymagane)* | kontakt zwrotny |
| Branża | kontekst + compliance |
| Liczba zakładów | skala → kwalifikacja Gold |
| ≥ 1 źródło danych (PLC/robot/napęd/wizja/czujnik) | bez tego brak podstawy spec/wyceny |
| **Poziom dostępu (nowe, B)** | krytyczne dla wyceny ryzyka i kwalifikacji Bronze/Silver |
| Priorytet | planowanie / kwalifikacja |
| Problem **lub** oczekiwany rezultat | minimum do specyfikacji |

Pozostałe — opcjonalne (formularz Discovery ma być łatwy do wypełnienia).

---

## 6. Jakie pola powinny WPŁYWAĆ na Bronze / Silver / Gold

**Już wpływają (z `PACKAGE.compute` — niezmieniane):** MES/ERP/SAP (+3), predykcyjne UR (+3), integracja AI (+2), REST API/OPC UA/MQTT (+2), uwierzytelnianie korporacyjne AD/Azure AD/SSO/LDAP (+2), MFA (+1), wiele zakładów (+2), ≥3 grupy (+1), receptury/jakość/energia (+1 każdy), OEE-KPI/dashboardy/przestoje/alarmy AI (+1 każdy), park ≥5 (+1).

**Powinny dodatkowo wpływać (po dodaniu pól) — propozycja zgodna z PACKAGE_ANALYSIS_REPORT:**

| Pole (nowe) | Wpływ na pakiet |
|---|---|
| Poziom dostępu = **Tylko odczyt** | potwierdza **Bronze** |
| Poziom dostępu = **AutoTuning / zapis parametrów** | wymusza min. **Silver** |
| Poziom dostępu = **Sterowanie procesem** | **Gold** lub wycena indywidualna |
| Compliance (IEC 62443 / ISO 27001 / GxP / FDA / GMP) | **Gold** / poza standardem (duży koszt) |
| Liczba linii (np. > 3) | **Silver+**; bardzo duża → **Gold** |
| Liczba maszyn / punktów danych (próg) | poziom **abonamentu** |
| SLA 24×7 | **Gold** |
| Aplikacja mobilna / chat (jeśli dodane) | **Silver** |

> ⚠️ **Największa luka kwalifikacyjna:** obecny scoring **nie wykrywa cech Silver-specyficznych** (AutoTuning, aplikacja mobilna, chat per linia) ani **Bronze „tylko odczyt"**, bo formularz nie ma tych pól. W praktyce dziś łatwiej trafić do Gold (dużo sygnałów Gold) lub Bronze (brak sygnałów), a **Silver bywa „przezroczysty"**. Dodanie kategorii B (poziom dostępu) + pola mobilna/chat domyka tę lukę.

---

## Podsumowanie

- **Najlepiej pokryte:** Integracje (E — 100%), Uwierzytelnianie (część C), park sprzętowy, funkcjonalności.
- **Krytyczne braki:** **poziom dostępu/ingerencji (B)** i **normy/compliance (C)** — oba są jednocześnie driverem **kosztu**, **specyfikacji** i **kwalifikacji** (szczególnie Silver i klienci regulowani).
- **Ważne uzupełnienia skali:** liczba linii, liczba maszyn/punktów danych, SLA.
- **Do uproszczenia:** dublujące się formaty raportów (Sekcja 10 vs 11), doprecyzowanie „Analiza PLC".
- Po dodaniu pól z pkt 4–6 formularz będzie wystarczający do automatycznej wyceny, abonamentu, kwalifikacji B/S/G i specyfikacji.

*Rekomendacje powyżej; formularz pozostaje niezmieniony — gotowy do wdrożenia poprawek po akceptacji.*
