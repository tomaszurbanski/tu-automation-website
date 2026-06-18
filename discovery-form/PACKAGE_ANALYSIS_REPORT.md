# PACKAGE_ANALYSIS_REPORT — Bronze / Silver / Gold

**Źródło prawdy:** `linemind-ai-presentation.html` (slajd „PAKIETY LICENCYJNE" + slajd CTA „Zacznijmy pilot w 3 tygodnie").
**Zakres:** odczyt i uporządkowanie tego, co już istnieje w prezentacji. **Bez zmian w kodzie. Bez tworzenia nowych pakietów.**
**Uwaga metodologiczna:** poniżej jasno oddzielam **[Z PREZENTACJI]** (cytaty/fakty) od **[WNIOSEK]** / **[PROPOZYCJA]**. Tam, gdzie prezentacja milczy, jest to wprost zaznaczone jako „nie określono w prezentacji".

---

## 1. Lokalizacja danych w prezentacji

| Element | Miejsce |
|---|---|
| Slajd pakietów | `linemind-ai-presentation.html` — slajd „PAKIETY LICENCYJNE" / „Wybierz pakiet dla swojego zakładu" (3 karty: 🥉 Brązowy, 🥈 Srebrny, 🥇 Złoty) |
| Ceny | Slajd CTA — Pilot 3 miesiące / Pełne wdrożenie / SaaS → wszystkie **„wycena indywidualna"** + nota „Szczegóły cenowe ustalane indywidualnie po konsultacji i analizie zakresu wdrożenia." |
| Narracja pakietów | „Pakiet podstawowy skupia się na diagnostyce i monitoringu maszyn. Wyższy poziom dokłada aplikację mobilną i automatyczną korektę napędów. Najszerszy obejmuje pełne KPI, predykcję awarii i integrację z systemami ERP. Zakres dobieramy wspólnie, a wycenę zawsze ustalamy indywidualnie." |

> Pakiety są zdefiniowane **wyłącznie jako listy funkcji** (kumulatywne: każdy wyższy zawiera niższy). Prezentacja **nie** podaje wprost limitów liczbowych, liczby użytkowników, poziomów supportu (poza Gold) ani parametrów wdrożenia per pakiet.

---

## 2. Dokładny wypis [Z PREZENTACJI]

### 🥉 BRONZE (BRĄZOWY) — „Diagnostyka & UR"
Podtytuł: *„Wykrywaj awarie — zanim zatrzymają linię"*

| Kategoria | Treść |
|---|---|
| **Funkcje** | • Monitoring maszyn w czasie rzeczywistym • AI — diagnoza przyczyny awarii • Alarmy i historia zdarzeń • Dashboard web • Analiza korzenia awarii |
| **Ograniczenia** | Nie określono wprost. **[WNIOSEK]** wynika z różnicy względem wyższych: brak aplikacji mobilnej, brak AI AutoTuning (brak interwencji w napędy), brak KPI/raportów zmianowych, brak chatu, brak integracji nadrzędnych (MES/ERP/API), brak predykcji awarii, brak cloud backup/SLA |
| **Integracje** | Nie wymieniono żadnych integracji nadrzędnych |
| **Użytkownicy** | Nie określono liczby. Dostęp przez „Dashboard web" |
| **AI** | „AI — diagnoza przyczyny awarii" + „Analiza korzenia awarii" → **AI diagnostyczne (opisowe), bez interwencji** |
| **Raporty** | „Dashboard web" + „Alarmy i historia zdarzeń" (brak raportów zmianowych/KPI) |
| **Support** | Nie określono |
| **Wdrożenie** | Nie określono per pakiet (model wspólny — patrz slajd CTA) |

### 🥈 SILVER (SREBRNY) — „Monitoring + Mobilna + AutoTuning"
Podtytuł: *„Wszystko z Brązu — plus interwencja AI i aplikacja mobilna"*

| Kategoria | Treść |
|---|---|
| **Funkcje** | • Wszystko z pakietu Brązowego • Aplikacja mobilna iOS / Android • AI AutoTuning — korekta napędów w czasie rzeczywistym • Chat zakładowy (per linia + General) • Podstawowe KPI + raporty zmianowe • Alerty wibracyjne push |
| **Ograniczenia** | Nie określono wprost. **[WNIOSEK]**: KPI tylko „podstawowe" (pełne dashboardy KPI dopiero Gold); brak integracji MES/ERP/API; brak predykcji awarii per komponent; brak Dashboardu Dyrektora; brak cloud backup/auto raportów e-mail; brak dedykowanego onboardingu + SLA |
| **Integracje** | Aplikacja mobilna iOS / Android (kanał mobilny). Brak integracji nadrzędnych (te w Gold) |
| **Użytkownicy** | „Chat zakładowy (per linia + General)" → **[WNIOSEK]** wielu użytkowników / podział per linia; liczba nie określona |
| **AI** | „AI AutoTuning — korekta napędów w czasie rzeczywistym" → **AI z interwencją (sterujące)** + AI diagnostyczne z Brązu |
| **Raporty** | „Podstawowe KPI + raporty zmianowe", „Alerty wibracyjne push" |
| **Support** | Nie określono (SLA dopiero Gold) |
| **Wdrożenie** | Nie określono per pakiet |

### 🥇 GOLD (ZŁOTY) — „Pełny KPI + Predykcja AI + MES/ERP"
Podtytuł: *„Wszystko ze Srebrnego — plus zarządzanie przez dane i integracje"*

| Kategoria | Treść |
|---|---|
| **Funkcje** | • Wszystko z pakietu Srebrnego • Pełne dashboardy KPI (OEE / MTTR / MTBF / NOK) • AI Predykcja awarii per komponent • Dashboard Dyrektora + auto-komentarze AI • REST API + MQTT + integracja MES/ERP • Cloud backup + auto raporty e-mail • Dedykowany onboarding + SLA |
| **Ograniczenia** | Brak — pakiet najwyższy (pełny zakres) |
| **Integracje** | **REST API + MQTT + integracja MES/ERP** (najbogatsze); Cloud backup |
| **Użytkownicy** | „Dashboard Dyrektora" → rola kadry zarządczej + role z niższych pakietów; liczba nie określona |
| **AI** | „AI Predykcja awarii per komponent" + „auto-komentarze AI" (+ AutoTuning + diagnoza z niższych) → **AI predykcyjne** |
| **Raporty** | „Pełne dashboardy KPI (OEE / MTTR / MTBF / NOK)", „Dashboard Dyrektora + auto-komentarze AI", „Cloud backup + auto raporty e-mail" |
| **Support** | **„Dedykowany onboarding + SLA"** (jedyny pakiet z explicite określonym supportem) |
| **Wdrożenie** | „Dedykowany onboarding"; „Cloud backup" |

---

## 3. Tabela porównawcza (funkcje [Z PREZENTACJI])

Kumulatywnie (każdy wyższy zawiera niższy):

| Funkcja | Bronze | Silver | Gold |
|---|:--:|:--:|:--:|
| Monitoring maszyn w czasie rzeczywistym | ✓ | ✓ | ✓ |
| AI — diagnoza przyczyny awarii | ✓ | ✓ | ✓ |
| Analiza korzenia awarii (root-cause) | ✓ | ✓ | ✓ |
| Alarmy i historia zdarzeń | ✓ | ✓ | ✓ |
| Dashboard web | ✓ | ✓ | ✓ |
| Aplikacja mobilna iOS / Android | — | ✓ | ✓ |
| AI AutoTuning — korekta napędów (real-time) | — | ✓ | ✓ |
| Chat zakładowy (per linia + General) | — | ✓ | ✓ |
| Podstawowe KPI + raporty zmianowe | — | ✓ | ✓ |
| Alerty wibracyjne push | — | ✓ | ✓ |
| Pełne dashboardy KPI (OEE / MTTR / MTBF / NOK) | — | — | ✓ |
| AI Predykcja awarii per komponent | — | — | ✓ |
| Dashboard Dyrektora + auto-komentarze AI | — | — | ✓ |
| REST API + MQTT + integracja MES/ERP | — | — | ✓ |
| Cloud backup + auto raporty e-mail | — | — | ✓ |
| Dedykowany onboarding + SLA | — | — | ✓ |

### Skrót w 8 kategoriach

| Kategoria | Bronze | Silver | Gold |
|---|---|---|---|
| **AI** | Diagnoza / root-cause (opisowe) | + AutoTuning (sterujące, real-time) | + Predykcja per komponent + auto-komentarze |
| **Raporty** | Dashboard web, alarmy, historia | + Podstawowe KPI + raporty zmianowe | + Pełne KPI (OEE/MTTR/MTBF/NOK), auto raporty e-mail, Dashboard Dyrektora |
| **Integracje** | — | Mobilna iOS/Android | REST API + MQTT + MES/ERP, Cloud backup |
| **Użytkownicy** | nie określono (web) | Chat per linia + General (wielu) | + Dashboard Dyrektora (kadra) |
| **Support** | nie określono | nie określono | Dedykowany onboarding + SLA |
| **Wdrożenie** | wspólny model | wspólny model | + dedykowany onboarding, cloud backup |
| **Funkcje (rdzeń)** | Monitoring + diagnoza | + Mobilna + AutoTuning + chat + KPI podst. | + Pełne KPI + predykcja + integracje |
| **Ograniczenia** | brak mobile/AI-interwencji/KPI/integracji | brak pełnych KPI/predykcji/integracji MES-ERP | brak (pełny) |

---

## 4. Co wpływa na koszt, abonament i co da się wykryć z Discovery

> **[WNIOSEK/PROPOZYCJA]** — prezentacja podaje tylko „wycena indywidualna", więc poniższe to klasyfikacja czynników, nie cennik.

| Element pakietu | Koszt wdrożenia (jednorazowy) | Abonament (cykliczny / SaaS) | Wykrywalne z Discovery (pole formularza) |
|---|:--:|:--:|---|
| Liczba maszyn / PLC / napędów / czujników (źródła danych) | ● duży | ● (punkty danych) | ✓ Sekcje 3–7 (liczba wierszy + ilości) |
| Liczba zakładów (multi-site) | ● | ● | ✓ Sekcja 1 — „Liczba zakładów" |
| Liczba / grupy użytkowników | ○ | ● | ✓ Sekcja 12 — grupy + liczba |
| AI AutoTuning (zapis do napędów) | ● (konfiguracja, bezpieczeństwo) | ○ | ✓ Sekcja 10 — „Integracja z AI" / pośrednio napędy |
| AI Predykcja per komponent | ● (modele) | ● | ✓ Sekcja 10 — „Predykcyjne utrzymanie ruchu" |
| Integracja MES / ERP / SAP | ●● duży | ● | ✓ Sekcja 9 — MES/ERP/SAP |
| REST API / MQTT / OPC UA | ● | ○ | ✓ Sekcja 11 (eksport) + Sekcja 8 (protokoły) |
| Pełne KPI (OEE/MTTR/MTBF/NOK) | ○ | ● | ✓ Sekcja 10 — OEE / KPI / Dashboardy |
| Aplikacja mobilna / chat | ○ | ● | ✓ pośrednio (Sekcja 10 / wymagania) |
| Active Directory / Azure AD / SSO / LDAP / MFA | ● (integracja tożsamości) | ○ | ✓ Sekcja 13 — Bezpieczeństwo |
| Infrastruktura cloud / hybryda + Cloud backup | ● | ● | ✓ Sekcja 14 — Infrastruktura |
| Dedykowany onboarding + SLA | ●● | ● | ✓ pośrednio (priorytet, skala, Sekcja 15) |

Legenda: ●● bardzo duży · ● istotny · ○ mały/pomijalny.

**Podsumowanie:**
- **Na koszt wdrożenia** najmocniej wpływają: integracja MES/ERP, AutoTuning (zapis do napędów), liczba/zróżnicowanie źródeł danych, multi-site, integracja tożsamości (AD/SSO), dedykowany onboarding.
- **Na abonament** najmocniej wpływają: liczba użytkowników, liczba monitorowanych punktów/maszyn, hosting cloud + backup, poziom KPI/predykcji, SLA.
- **Z Discovery wykrywalne automatycznie** są niemal wszystkie powyższe — formularz zbiera dokładnie te dane (sekcje 1, 3–14).

---

## 5. [PROPOZYCJA] Logika kwalifikacji Bronze / Silver / Gold

> Propozycja zgodna z definicjami z prezentacji. Wartości progowe są **do kalibracji** z TU Automation. Pakiet jest sugestią — decyzja finalna należy do TU Automation.

### 5.1 Reguły twarde (decydujące) — kolejność: Gold → Silver → Bronze

**→ GOLD, jeżeli zachodzi KTÓRYKOLWIEK z warunków** (odpowiadają funkcjom wyłącznym Gold):
- Wymagana integracja **MES / ERP / SAP**, lub
- Wymagane **REST API / MQTT / OPC UA** jako kanał integracji/eksportu, lub
- **Active Directory / Azure AD / SSO / LDAP** (uwierzytelnianie korporacyjne), lub
- **Liczba zakładów > 1** (multi-site / zarządzanie przez dane), lub
- Wymagana **predykcja awarii (predykcyjne UR)** lub **pełne KPI (OEE/MTTR/MTBF)** / Dashboard zarządczy, lub
- Wymagane **SLA / dedykowany onboarding**.

**→ SILVER, jeżeli NIE Gold, a zachodzi KTÓRYKOLWIEK:**
- Potrzebna **aplikacja mobilna** lub **chat zakładowy**, lub
- **AI AutoTuning** (automatyczna korekta napędów / interwencja), lub
- **Podstawowe KPI / raporty zmianowe** lub **alerty wibracyjne**, lub
- Średnia skala (patrz progi 5.2).

**→ BRONZE (domyślny), jeżeli ani Gold, ani Silver:**
- Zakres = monitoring + diagnoza AI + alarmy + dashboard web; mała skala; brak integracji nadrzędnych, brak interwencji AI, brak uwierzytelniania korporacyjnego.

### 5.2 Progi skali (propozycja liczbowa — do kalibracji)

| Sygnał (z Discovery) | Bronze | Silver | Gold |
|---|---|---|---|
| Liczba PLC / sterowników | ≤ ~5 | ~6–20 | > ~20 |
| Liczba użytkowników (suma grup) | ≤ ~10 | ~11–50 | > ~50 |
| Liczba zakładów | 1 | 1 | > 1 (wymusza Gold) |
| Liczba integracji nadrzędnych (MES/ERP/API) | 0 | 0 (tylko mobile/chat) | ≥ 1 (wymusza Gold) |
| Wymagania AI | diagnoza | AutoTuning (interwencja) | predykcja per komponent |
| Active Directory / SSO | nie | nie | tak (wymusza Gold) |
| ERP / MES | nie | nie | tak (wymusza Gold) |

### 5.3 Drzewo decyzyjne (skrót)

```
START
 ├─ ERP/MES/SAP? ──────────────────┐
 ├─ REST API / MQTT / OPC UA? ──────┤
 ├─ AD / Azure AD / SSO / LDAP? ────┤
 ├─ Zakłady > 1? ───────────────────┼──► GOLD
 ├─ Predykcja AI / pełne KPI? ──────┤
 └─ SLA / dedyk. onboarding? ───────┘
        │ (żadne z powyższych)
        ▼
 ├─ Mobilna / chat / AutoTuning / KPI podst.? ──► SILVER
        │ (żadne)
        ▼
     BRONZE
```

### 5.4 Przykłady

- **Mała szwalnia, 3 PLC, 1 zakład, 8 użytkowników, brak ERP, brak AD, tylko monitoring + diagnoza** → **Bronze**.
- **Zakład z 10 PLC, aplikacja mobilna dla techników, chat per linia, AutoTuning napędów, podstawowe KPI, 1 zakład, brak ERP/AD** → **Silver**.
- **Grupa 2 zakłady, integracja z SAP, REST API do BI, Azure AD/SSO, predykcja per komponent, Dashboard Dyrektora, SLA** → **Gold** (kilka warunków twardych).

### 5.5 Zgodność z istniejącą implementacją

Powyższe pokrywa się kierunkowo z obecną, **niezmienianą** funkcją `PACKAGE.compute()` w `discovery-form.js` (ważone sygnały: MES/ERP/SAP +3, predykcyjne UR +3, integracja AI +2, API/OPC UA/MQTT +2, uwierzytelnianie korporacyjne +2, wiele zakładów +2, progi: ≥9 Gold / ≥4 Silver / inaczej Bronze). Ten raport porządkuje **podstawę merytoryczną** pod ewentualną kalibrację tych wag — kod nie został zmieniony.

---

## 6. Luki w prezentacji (do decyzji TU Automation)

Prezentacja **nie określa** wprost, a logika kwalifikacji może tego potrzebować:
- Limity liczbowe per pakiet (liczba maszyn / użytkowników / punktów danych).
- Poziom supportu dla Bronze i Silver (tylko Gold ma „SLA").
- Parametry wdrożenia per pakiet (czas, zakres onboardingu poza Gold).
- Czy „wycena indywidualna" = brak publicznych widełek na stałe (slajd CTA pokazuje „wycena indywidualna" dla Pilota / Pełnego wdrożenia / SaaS).

---

**Wnioski:** pakiety w prezentacji są spójne i kumulatywne; różnicują się głównie na osiach **AI (diagnoza → interwencja → predykcja)**, **raporty/KPI (podstawowe → pełne)** oraz **integracje (brak → mobilna → MES/ERP/API)**. Te trzy osie + sygnały enterprise (multi-site, AD, ERP) wystarczają do automatycznej kwalifikacji z danych Discovery.
