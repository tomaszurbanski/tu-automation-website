'use strict';

// ── TRANSLATIONS ──
const T = {
  pl: {
    'nav.services': 'Usługi', 'nav.tech': 'Technologie', 'nav.projects': 'Projekty',
    'nav.process': 'Proces', 'nav.contact': 'Kontakt', 'nav.cta': 'Zapytaj o projekt',
    'hero.badge': 'Automatyka Przemysłowa',
    'hero.title1': 'Inteligentne systemy',
    'hero.subtitle': 'Projektuję i wdrażam systemy sterowania PLC, SCADA i HMI dla przemysłu produkcyjnego i tekstylnego. Od analizy wymagań po uruchomienie i serwis — kompleksowe rozwiązania automatyki pod klucz.',
    'hero.btn1': 'Omów projekt', 'hero.btn2': 'Zobacz realizacje',
    'hero.stat1': 'Lat doświadczenia', 'hero.stat2': 'Zrealizowanych projektów', 'hero.stat3': 'Obsługiwanych klientów',
    'typed.words': 'dla przemysłu.|sterowania PLC.|SCADA i HMI.|dla robotów UR.',
    'sec.services.tag': 'Oferta', 'sec.services.title': 'Zakres usług',
    'sec.services.desc': 'Kompleksowa obsługa projektów automatyki — od koncepcji i programowania po uruchomienie, szkolenie i serwis gwarancyjny.',
    's1.title': 'Programowanie PLC', 's1.desc': 'Projektowanie i pisanie oprogramowania dla sterowników Siemens S5, S7, TIA Portal, LOGO! oraz innych platform. Strukturalne podejście, pełna dokumentacja kodu i modularna architektura programu.',
    's2.title': 'Systemy SCADA i HMI', 's2.desc': 'Tworzenie paneli wizualizacyjnych i systemów nadzoru w WinCC, FactoryTalk, Ignition. Dashboardy w czasie rzeczywistym, alarmy, trendy i raporty historyczne.',
    's3.title': 'Aplikacje dla UR', 's3.desc': 'Tworzenie aplikacji URCaps dla robotów Universal Robots. Integracja chwytaków, czujników, systemów wizji i zewnętrznych systemów sterowania. Programowanie URScript.',
    's4.title': 'Sieci przemysłowe', 's4.desc': 'Projektowanie i uruchamianie sieci Profibus, Profinet, EtherNet/IP, Modbus TCP/RTU. Konfiguracja urządzeń sieciowych, diagnostyka i optymalizacja komunikacji.',
    's5.title': 'Modernizacje i migracje', 's5.desc': 'Migracja starszych systemów S5, S7-300 na nowoczesne platformy TIA Portal bez zatrzymywania produkcji. Integracja legacy systemów z nowymi urządzeniami.',
    's6.title': 'AI i kontrola maszyn', 's6.desc': 'Integracja sztucznej inteligencji z systemami sterowania: predykcja awarii, anomalie, optymalizacja parametrów procesu w czasie rzeczywistym. Dedykowane aplikacje mobilne i webowe do monitorowania i zarządzania serwisem.',
    'sec.tech.tag': 'Stack technologiczny', 'sec.tech.title': 'Technologie i platformy',
    'sec.tech.desc': 'Wieloletnie doświadczenie z szerokim spektrum systemów automatyki — od klasycznych sterowników Siemens S5 po nowoczesne platformy chmurowe i AI.',
    'sec.clients.tag': 'Branże', 'sec.clients.title': 'Obsługiwane sektory', 'sec.clients.desc': 'Doświadczenie zdobyte w wymagających środowiskach przemysłowych różnych branż.',
    'c1.title': 'Przemysł tekstylny', 'c1.desc': 'Automaty dziewiarskie, maszyny tkackie, linie farbiarskie, systemy nawojowe',
    'c2.title': 'Produkcja i montaż', 'c2.desc': 'Linie produkcyjne, systemy montażowe, kontrola jakości, roboty przemysłowe',
    'c3.title': 'Spożywczy i farmacja', 'c3.desc': 'Procesy dozowania, pakowania, sterylizacji; spełnienie wymogów GMP i HACCP',
    'c4.title': 'Energetyka i utilities', 'c4.desc': 'Systemy zarządzania energią, stacje transformatorowe, monitoring mediów',
    'c5.title': 'Wodociągi i oczyszczalnie', 'c5.desc': 'Sterowanie pompowniami, monitoring jakości wody, systemy SCADA',
    'c6.title': 'Logistyka i magazyny', 'c6.desc': 'Przenośniki, sortery, systemy WMS, automatyczne magazyny',
    'sec.apps.tag': 'Universal Robots', 'sec.apps.title': 'Aplikacje dla robotów UR',
    'sec.apps.desc': 'Tworzę dedykowane URCaps — rozszerzenia dla tabletów robotów Universal Robots, które integrują zewnętrzne urządzenia i upraszczają programowanie dla operatorów.',
    'app1.title': 'Gripper Control', 'app1.desc': 'Sterowanie chwytakami Robotiq, OnRobot, SMC',
    'app2.title': 'Vision Integration', 'app2.desc': 'Systemy wizji Cognex, Keyence, Basler',
    'app3.title': 'Force Sensing', 'app3.desc': 'Kontrola siły docisku i momentu obrotowego',
    'app4.title': 'PLC Bridge', 'app4.desc': 'Integracja z Siemens przez Profinet/Modbus',
    'app5.title': 'Recipe Manager', 'app5.desc': 'Zarządzanie recepturami i parametrami procesu',
    'app6.title': 'Safety Monitor', 'app6.desc': 'Monitoring stref bezpieczeństwa i ograniczeń ruchu',
    'apps.store.label': 'Aplikacja mobilna do zarządzania serwisem robotów — dostępna wkrótce:',
    'apps.store.soon': 'wkrótce',
    'sec.process.tag': 'Metodologia', 'sec.process.title': 'Jak pracuję', 'sec.process.desc': 'Sprawdzony proces realizacji projektów minimalizuje ryzyko i skraca czas wdrożenia.',
    'p1.title': 'Analiza i specyfikacja', 'p1.desc': 'Spotkanie z klientem, audyt istniejących systemów, analiza wymagań. Tworzenie specyfikacji funkcjonalnej (FDS) i technicznej (TDS) uzgodnionej z klientem przed rozpoczęciem prac.',
    'p2.title': 'Projektowanie i programowanie', 'p2.desc': 'Projektowanie architektury systemu, dobór sprzętu, pisanie oprogramowania sterownika z pełną dokumentacją. Modularna struktura kodu umożliwia łatwe modyfikacje i rozbudowę.',
    'p3.title': 'Testy i symulacja', 'p3.desc': 'Testy jednostkowe modułów, symulacja przed uruchomieniem na maszynie. FAT (Factory Acceptance Test) przeprowadzany z udziałem klienta.',
    'p4.title': 'Uruchomienie i SAT', 'p4.desc': 'Uruchomienie systemu na obiekcie klienta, testy SAT, strojenie parametrów procesu. Nadzór nad rozruchem produkcyjnym i eliminacja błędów.',
    'p5.title': 'Szkolenie i serwis', 'p5.desc': 'Szkolenie operatorów i służb utrzymania ruchu. Przekazanie dokumentacji powykonawczej, kodu źródłowego i instrukcji obsługi. Wsparcie serwisowe i gwarancyjne.',
    'sec.why.tag': 'Dlaczego TU Automation', 'sec.why.title': 'Przewagi współpracy',
    'w1.title': 'Jeden punkt kontaktu', 'w1.desc': 'Pracujesz bezpośrednio z inżynierem realizującym projekt. Zero pośredników — decyzje zapadają szybko, komunikacja jest bezpośrednia i efektywna.',
    'w2.title': 'Doświadczenie z legacy', 'w2.desc': 'Znam Siemens S5 od środka. Potrafię zmodernizować stary system bez przerywania produkcji, zachowując ciągłość operacyjną zakładu.',
    'w3.title': 'Kompleksowe podejście', 'w3.desc': 'PLC, SCADA, HMI, sieci, aplikacje mobilne — obsługuję cały stack technologiczny bez potrzeby angażowania wielu podwykonawców.',
    'w4.title': 'Szybki czas reakcji', 'w4.desc': 'Jako jednoosobowa firma jestem elastyczny i mobilny. Krytyczne awarie obsługuję priorytetowo, minimalizując czas przestoju linii produkcyjnej.',
    'w5.title': 'AI w automatyce', 'w5.desc': 'Integruję algorytmy AI bezpośrednio z systemami PLC i SCADA — predykcja awarii, wykrywanie anomalii, optymalizacja produkcji. LineMind AI to przykład własnego rozwiązania tej klasy.',
    'w6.title': 'Przejrzyste warunki', 'w6.desc': 'Jasna wycena, harmonogram i zakres przed rozpoczęciem prac. Bez ukrytych kosztów i niespodzianek przy odbiorze projektu.',
    'sec.projects.tag': 'Portfolio', 'sec.projects.title': 'Wybrane realizacje', 'sec.projects.desc': 'Przykłady wdrożonych systemów automatyki i oprogramowania z różnych branż i platform.',
    'proj1.title': 'LineMind AI – Monitorowanie maszyn z AI', 'proj1.desc': 'System monitorowania linii produkcyjnych oparty o sztuczną inteligencję. Aplikacja webowa PWA zbiera dane z czujników w czasie rzeczywistym, wykrywa anomalie i przewiduje awarie. Backend FastAPI + Python, baza SQLite, alerty mobilne i raporty OEE.',
    'proj2.title': 'Modernizacja linii dziewiarskiej – S5 → S7', 'proj2.desc': 'Migracja sterowania automatów dziewiarskich ze Siemens S5 na S7-1500 z TIA Portal. Zachowanie wszystkich funkcji technologicznych, nowy panel HMI, zdalna diagnostyka przez PROFINET — bez zatrzymania produkcji.',
    'proj3.title': 'Aplikacja URCap do sterowania dozowaniem', 'proj3.desc': 'Dedykowana aplikacja URCap integrująca robota UR10 z układem dozowania kleju. Kontrola ciśnienia, zarządzanie recepturami bezpośrednio z tabletu robota. Interfejs dostosowany do obsługi przez operatora bez znajomości robotyki.',
    'proj4.title': 'System SCADA dla oczyszczalni ścieków', 'proj4.desc': 'Kompleksowy system nadzoru — monitoring pomp, napowietrzaczy i reaktorów biologicznych. Wizualizacja WinCC OA, trendy historyczne, alarmy SMS, raportowanie automatyczne. Sieć Profibus obsługująca 120+ urządzeń terenowych.',
    'sec.contact.tag': 'Kontakt', 'sec.contact.title': 'Zacznijmy projekt',
    'contact.h2': 'Porozmawiajmy o Twoim projekcie automatyki',
    'contact.p': 'Opisz mi swój problem lub cel — przygotowuję bezpłatną wstępną ocenę projektu i orientacyjną wycenę w ciągu 48 godzin. Działam z Niemiec, realizuję projekty na terenie całej Europy.',
    'contact.location': 'Deutschland · Cała Europa · Cały świat',
    'form.name': 'Imię i nazwisko', 'form.name.ph': 'Jan Kowalski',
    'form.company': 'Firma', 'form.company.ph': 'Nazwa firmy',
    'form.email': 'E-mail', 'form.phone': 'Telefon',
    'form.service': 'Rodzaj usługi',
    'form.service.opt0': 'Wybierz...', 'form.service.opt1': 'Programowanie PLC / Siemens',
    'form.service.opt2': 'System SCADA / HMI', 'form.service.opt3': 'Aplikacja URCap / Universal Robots',
    'form.service.opt4': 'Modernizacja / migracja systemu', 'form.service.opt5': 'Sieci przemysłowe',
    'form.service.opt6': 'Aplikacja IoT / mobilna', 'form.service.opt7': 'Inne',
    'form.message': 'Opis projektu', 'form.message.ph': 'Opisz czego potrzebujesz, jakie maszyny / systemy są zaangażowane, jaki jest cel projektu...',
    'form.submit': 'Wyślij zapytanie', 'form.sent': '✓ Wysłano — odpiszę w ciągu 48h',
    'footer.tagline': 'Automatyka przemysłowa · Tomasz Urbański',
    'footer.location': 'Deutschland · Europa · Świat',
    'footer.privacy': 'Polityka prywatności',
    'cookie.text': 'Ta strona używa plików cookies w celu analizy ruchu i poprawy jakości. Więcej: ',
    'cookie.link': 'Polityka prywatności', 'cookie.decline': 'Odrzuć', 'cookie.accept': 'Akceptuj',
  },
  en: {
    'nav.services': 'Services', 'nav.tech': 'Technologies', 'nav.projects': 'Projects',
    'nav.process': 'Process', 'nav.contact': 'Contact', 'nav.cta': 'Request a quote',
    'hero.badge': 'Industrial Automation',
    'hero.title1': 'Intelligent systems',
    'hero.subtitle': 'I design and implement PLC, SCADA and HMI control systems for manufacturing and textile industries. From requirements analysis to commissioning and service — complete turnkey automation solutions.',
    'hero.btn1': 'Discuss project', 'hero.btn2': 'See projects',
    'hero.stat1': 'Years experience', 'hero.stat2': 'Completed projects', 'hero.stat3': 'Clients served',
    'typed.words': 'for industry.|PLC control.|SCADA & HMI.|for UR robots.',
    'sec.services.tag': 'Services', 'sec.services.title': 'Service scope',
    'sec.services.desc': 'Full-service automation projects — from concept and programming to commissioning, training and warranty support.',
    's1.title': 'PLC Programming', 's1.desc': 'Design and development of software for Siemens S5, S7, TIA Portal, LOGO! and other platforms. Structured approach, full code documentation and modular program architecture.',
    's2.title': 'SCADA & HMI Systems', 's2.desc': 'Creating visualization panels and supervisory systems in WinCC, FactoryTalk, Ignition. Real-time dashboards, alarms, trends and historical reports.',
    's3.title': 'UR Applications', 's3.desc': 'Developing URCaps for Universal Robots. Integration of grippers, sensors, vision systems and external control systems. URScript programming.',
    's4.title': 'Industrial Networks', 's4.desc': 'Design and commissioning of Profibus, Profinet, EtherNet/IP, Modbus TCP/RTU networks. Device configuration, diagnostics and communication optimization.',
    's5.title': 'Modernization & Migration', 's5.desc': 'Migration of legacy S5, S7-300 systems to modern TIA Portal platforms without production downtime. Integration of legacy systems with new devices.',
    's6.title': 'AI & machine control', 's6.desc': 'Integrating artificial intelligence with control systems: failure prediction, anomaly detection, real-time process optimization. Custom mobile and web applications for machine monitoring and service management.',
    'sec.tech.tag': 'Tech stack', 'sec.tech.title': 'Technologies & platforms',
    'sec.tech.desc': 'Years of experience across a wide range of automation systems — from classic Siemens S5 controllers to modern cloud and AI platforms.',
    'sec.clients.tag': 'Industries', 'sec.clients.title': 'Sectors served', 'sec.clients.desc': 'Experience gained in demanding industrial environments across multiple industries.',
    'c1.title': 'Textile industry', 'c1.desc': 'Knitting machines, weaving looms, dyeing lines, winding systems',
    'c2.title': 'Manufacturing & assembly', 'c2.desc': 'Production lines, assembly systems, quality control, industrial robots',
    'c3.title': 'Food & pharma', 'c3.desc': 'Dosing, packaging, sterilization processes; GMP and HACCP compliance',
    'c4.title': 'Energy & utilities', 'c4.desc': 'Energy management systems, transformer stations, media monitoring',
    'c5.title': 'Water & wastewater', 'c5.desc': 'Pump station control, water quality monitoring, SCADA systems',
    'c6.title': 'Logistics & warehouses', 'c6.desc': 'Conveyors, sorters, WMS systems, automated storage',
    'sec.apps.tag': 'Universal Robots', 'sec.apps.title': 'Applications for UR robots',
    'sec.apps.desc': 'I create custom URCaps — extensions for Universal Robots tablets that integrate external devices and simplify programming for operators.',
    'app1.title': 'Gripper Control', 'app1.desc': 'Control of Robotiq, OnRobot, SMC grippers',
    'app2.title': 'Vision Integration', 'app2.desc': 'Cognex, Keyence, Basler vision systems',
    'app3.title': 'Force Sensing', 'app3.desc': 'Contact force and torque control',
    'app4.title': 'PLC Bridge', 'app4.desc': 'Siemens integration via Profinet/Modbus',
    'app5.title': 'Recipe Manager', 'app5.desc': 'Process recipe and parameter management',
    'app6.title': 'Safety Monitor', 'app6.desc': 'Safety zone and motion limit monitoring',
    'apps.store.label': 'Mobile app for robot service management — coming soon:',
    'apps.store.soon': 'soon',
    'sec.process.tag': 'Methodology', 'sec.process.title': 'How I work', 'sec.process.desc': 'A proven project delivery process minimizes risk and shortens implementation time.',
    'p1.title': 'Analysis & specification', 'p1.desc': 'Customer meeting, existing system audit, requirements analysis. Creation of functional (FDS) and technical (TDS) specifications agreed with the client before work begins.',
    'p2.title': 'Design & programming', 'p2.desc': 'System architecture design, hardware selection, controller software development with full documentation. Modular code structure allows easy modifications and expansion.',
    'p3.title': 'Testing & simulation', 'p3.desc': 'Module unit tests, simulation before machine commissioning. FAT (Factory Acceptance Test) conducted with the client.',
    'p4.title': 'Commissioning & SAT', 'p4.desc': 'On-site system commissioning, SAT tests, process parameter tuning. Production startup supervision and error resolution during initial operation.',
    'p5.title': 'Training & service', 'p5.desc': 'Operator and maintenance staff training. Handover of as-built documentation, source code and operating manuals. Post-commissioning warranty and service support.',
    'sec.why.tag': 'Why TU Automation', 'sec.why.title': 'Advantages of working together',
    'w1.title': 'Single point of contact', 'w1.desc': 'You work directly with the engineer executing the project. No middlemen — decisions are made quickly, communication is direct and efficient.',
    'w2.title': 'Legacy expertise', 'w2.desc': 'I know Siemens S5 inside out. I can modernize old systems without interrupting production, maintaining the plant\'s operational continuity.',
    'w3.title': 'Full-stack approach', 'w3.desc': 'PLC, SCADA, HMI, networks, mobile apps — I cover the entire automation technology stack without needing multiple subcontractors.',
    'w4.title': 'Fast response time', 'w4.desc': 'As a one-person firm I\'m flexible and mobile. I handle critical failures as priority, minimizing production line downtime.',
    'w5.title': 'AI in automation', 'w5.desc': 'I integrate AI algorithms directly with PLC and SCADA systems — failure prediction, anomaly detection, production optimization. LineMind AI is an example of a custom solution of this class.',
    'w6.title': 'Transparent terms', 'w6.desc': 'Clear pricing, schedule and scope before work begins. No hidden costs and no surprises at project handover.',
    'sec.projects.tag': 'Portfolio', 'sec.projects.title': 'Selected projects', 'sec.projects.desc': 'Examples of implemented automation systems and software across different industries and platforms.',
    'proj1.title': 'LineMind AI – Machine monitoring with AI', 'proj1.desc': 'AI-based production line monitoring system. A PWA web application collects sensor data in real time, detects anomalies and predicts failures. FastAPI + Python backend, SQLite database, mobile alerts and OEE reports.',
    'proj2.title': 'Knitting line upgrade – S5 → S7', 'proj2.desc': 'Migration of knitting machine control from Siemens S5 to S7-1500 with TIA Portal. All technological functions retained, new HMI panel, remote diagnostics via PROFINET — without stopping production.',
    'proj3.title': 'URCap application for dispensing control', 'proj3.desc': 'Custom URCap integrating a UR10 robot with a glue dispensing system. Pressure control, recipe management directly from the robot tablet. Interface designed for operators with no robotics background.',
    'proj4.title': 'SCADA system for wastewater treatment', 'proj4.desc': 'Comprehensive supervisory system — monitoring of pumps, aerators and biological reactors. WinCC OA visualization, historical trends, SMS alarms, automated reporting. Profibus network serving 120+ field devices.',
    'sec.contact.tag': 'Contact', 'sec.contact.title': 'Let\'s start a project',
    'contact.h2': 'Let\'s talk about your automation project',
    'contact.p': 'Describe your problem or goal — I provide a free preliminary project assessment and indicative quote within 48 hours. Based in Germany, delivering projects across Europe.',
    'contact.location': 'Deutschland · All of Europe · Worldwide',
    'form.name': 'Full name', 'form.name.ph': 'John Smith',
    'form.company': 'Company', 'form.company.ph': 'Company name',
    'form.email': 'E-mail', 'form.phone': 'Phone',
    'form.service': 'Service type',
    'form.service.opt0': 'Select...', 'form.service.opt1': 'PLC Programming / Siemens',
    'form.service.opt2': 'SCADA / HMI System', 'form.service.opt3': 'URCap / Universal Robots',
    'form.service.opt4': 'System modernization / migration', 'form.service.opt5': 'Industrial networks',
    'form.service.opt6': 'IoT / mobile application', 'form.service.opt7': 'Other',
    'form.message': 'Project description', 'form.message.ph': 'Describe what you need, which machines/systems are involved, what the project goal is...',
    'form.submit': 'Send inquiry', 'form.sent': '✓ Sent — I\'ll reply within 48h',
    'footer.tagline': 'Industrial Automation · Tomasz Urbański',
    'footer.location': 'Deutschland · Europe · Worldwide',
    'footer.privacy': 'Privacy Policy',
    'cookie.text': 'This website uses cookies for traffic analysis and quality improvement. More: ',
    'cookie.link': 'Privacy Policy', 'cookie.decline': 'Decline', 'cookie.accept': 'Accept',
  },
  de: {
    'nav.services': 'Leistungen', 'nav.tech': 'Technologien', 'nav.projects': 'Projekte',
    'nav.process': 'Prozess', 'nav.contact': 'Kontakt', 'nav.cta': 'Anfrage stellen',
    'hero.badge': 'Industrieautomatisierung',
    'hero.title1': 'Intelligente Systeme',
    'hero.subtitle': 'Ich entwickle und implementiere SPS-, SCADA- und HMI-Steuerungssysteme für Fertigungs- und Textilindustrie. Von der Anforderungsanalyse bis zur Inbetriebnahme und Wartung — schlüsselfertige Automatisierungslösungen.',
    'hero.btn1': 'Projekt besprechen', 'hero.btn2': 'Projekte ansehen',
    'hero.stat1': 'Jahre Erfahrung', 'hero.stat2': 'Abgeschlossene Projekte', 'hero.stat3': 'Betreute Kunden',
    'typed.words': 'für die Industrie.|SPS-Steuerung.|SCADA & HMI.|für UR-Roboter.',
    'sec.services.tag': 'Leistungen', 'sec.services.title': 'Leistungsumfang',
    'sec.services.desc': 'Vollständige Abwicklung von Automatisierungsprojekten — von Konzept und Programmierung bis Inbetriebnahme, Schulung und Garantieservice.',
    's1.title': 'SPS-Programmierung', 's1.desc': 'Entwicklung von Software für Siemens S5, S7, TIA Portal, LOGO! und andere Plattformen. Strukturierter Ansatz, vollständige Codedokumentation und modulare Programmarchitektur.',
    's2.title': 'SCADA & HMI-Systeme', 's2.desc': 'Erstellung von Visualisierungspanelen und Überwachungssystemen in WinCC, FactoryTalk, Ignition. Echtzeit-Dashboards, Alarme, Trends und historische Berichte.',
    's3.title': 'UR-Anwendungen', 's3.desc': 'Entwicklung von URCaps für Universal Robots. Integration von Greifern, Sensoren, Bildverarbeitungssystemen und externen Steuerungssystemen. URScript-Programmierung.',
    's4.title': 'Industrienetzwerke', 's4.desc': 'Planung und Inbetriebnahme von Profibus-, Profinet-, EtherNet/IP-, Modbus-TCP/RTU-Netzwerken. Gerätekonfiguration, Diagnose und Kommunikationsoptimierung.',
    's5.title': 'Modernisierung & Migration', 's5.desc': 'Migration älterer S5-, S7-300-Systeme auf moderne TIA-Portal-Plattformen ohne Produktionsunterbrechung. Integration von Legacy-Systemen mit neuen Geräten.',
    's6.title': 'KI & Maschinensteuerung', 's6.desc': 'Integration von Künstlicher Intelligenz in Steuerungssysteme: Ausfallprognose, Anomalieerkennung, Echtzeitoptimierung von Prozessparametern. Individuelle mobile und Web-Applikationen zur Maschinenüberwachung und Serviceverwaltung.',
    'sec.tech.tag': 'Technologie-Stack', 'sec.tech.title': 'Technologien & Plattformen',
    'sec.tech.desc': 'Langjährige Erfahrung mit einem breiten Spektrum von Automatisierungssystemen — von klassischen Siemens-S5-Steuerungen bis hin zu modernen Cloud- und KI-Plattformen.',
    'sec.clients.tag': 'Branchen', 'sec.clients.title': 'Bediente Sektoren', 'sec.clients.desc': 'Erfahrung aus anspruchsvollen industriellen Umgebungen verschiedener Branchen.',
    'c1.title': 'Textilindustrie', 'c1.desc': 'Strickmaschinen, Webmaschinen, Färbereien, Wickelsysteme',
    'c2.title': 'Fertigung & Montage', 'c2.desc': 'Produktionslinien, Montagesysteme, Qualitätskontrolle, Industrieroboter',
    'c3.title': 'Lebensmittel & Pharma', 'c3.desc': 'Dosier-, Verpackungs-, Sterilisierungsprozesse; GMP- und HACCP-Konformität',
    'c4.title': 'Energie & Versorgung', 'c4.desc': 'Energiemanagementsysteme, Trafostationen, Medienüberwachung',
    'c5.title': 'Wasser & Abwasser', 'c5.desc': 'Pumpenstationssteuerung, Wasserqualitätsmonitoring, SCADA-Systeme',
    'c6.title': 'Logistik & Lager', 'c6.desc': 'Fördertechnik, Sorter, WMS-Systeme, automatische Lager',
    'sec.apps.tag': 'Universal Robots', 'sec.apps.title': 'Anwendungen für UR-Roboter',
    'sec.apps.desc': 'Ich entwickle individuelle URCaps — Erweiterungen für Universal-Robots-Tablets, die externe Geräte integrieren und die Programmierung für Bediener vereinfachen.',
    'app1.title': 'Greifer-Steuerung', 'app1.desc': 'Steuerung von Robotiq-, OnRobot-, SMC-Greifern',
    'app2.title': 'Vision-Integration', 'app2.desc': 'Cognex-, Keyence-, Basler-Bildverarbeitungssysteme',
    'app3.title': 'Kraftmessung', 'app3.desc': 'Kontaktkraft- und Drehmomentkontrolle',
    'app4.title': 'SPS-Bridge', 'app4.desc': 'Siemens-Integration über Profinet/Modbus',
    'app5.title': 'Rezept-Manager', 'app5.desc': 'Prozessrezept- und Parameterverwaltung',
    'app6.title': 'Sicherheits-Monitor', 'app6.desc': 'Sicherheitszonenüberwachung und Bewegungslimitkontrolle',
    'apps.store.label': 'Mobile App zur Roboter-Serviceverwaltung — demnächst verfügbar:',
    'apps.store.soon': 'demnächst',
    'sec.process.tag': 'Methodik', 'sec.process.title': 'Meine Arbeitsweise', 'sec.process.desc': 'Ein bewährter Projektabwicklungsprozess minimiert Risiken und verkürzt die Implementierungszeit.',
    'p1.title': 'Analyse & Spezifikation', 'p1.desc': 'Kundengespräch, Bestandsaufnahme vorhandener Systeme, Anforderungsanalyse. Erstellung von Funktional- (FDS) und Technischem (TDS) Lastenheft, vom Kunden vor Arbeitsbeginn freigegeben.',
    'p2.title': 'Entwurf & Programmierung', 'p2.desc': 'Systemarchitekturdesign, Hardwareauswahl, Steuerungssoftwareentwicklung mit vollständiger Dokumentation. Modularer Codeaufbau ermöglicht einfache Änderungen und Erweiterungen.',
    'p3.title': 'Tests & Simulation', 'p3.desc': 'Modulare Unit-Tests, Simulation vor der Maschineninbetriebnahme. FAT (Factory Acceptance Test) in Anwesenheit des Kunden durchgeführt.',
    'p4.title': 'Inbetriebnahme & SAT', 'p4.desc': 'Inbetriebnahme vor Ort, SAT-Tests, Prozessparameter-Abstimmung. Begleitung des Produktionsanlaufs und Behebung von Fehlern im Betrieb.',
    'p5.title': 'Schulung & Service', 'p5.desc': 'Schulung von Bedienern und Instandhaltungspersonal. Übergabe von As-built-Dokumentation, Quellcode und Betriebsanleitung. Garantie- und Serviceunterstützung nach der Inbetriebnahme.',
    'sec.why.tag': 'Warum TU Automation', 'sec.why.title': 'Vorteile der Zusammenarbeit',
    'w1.title': 'Einziger Ansprechpartner', 'w1.desc': 'Sie arbeiten direkt mit dem ausführenden Ingenieur. Keine Zwischenhändler — Entscheidungen werden schnell getroffen, die Kommunikation ist direkt und effizient.',
    'w2.title': 'Legacy-Expertise', 'w2.desc': 'Ich kenne Siemens S5 von innen. Ich kann alte Systeme modernisieren, ohne die Produktion zu unterbrechen, und die Betriebskontinuität des Werks erhalten.',
    'w3.title': 'Ganzheitlicher Ansatz', 'w3.desc': 'SPS, SCADA, HMI, Netzwerke, mobile Apps — ich decke den gesamten Automatisierungs-Technologie-Stack ab, ohne mehrere Subunternehmer einzubinden.',
    'w4.title': 'Schnelle Reaktionszeit', 'w4.desc': 'Als Einzelunternehmen bin ich flexibel und mobil. Kritische Störungen bearbeite ich prioritär und minimiere die Ausfallzeit der Produktionslinie.',
    'w5.title': 'KI in der Automatisierung', 'w5.desc': 'Ich integriere KI-Algorithmen direkt in SPS- und SCADA-Systeme — Ausfallprognose, Anomalieerkennung, Produktionsoptimierung. LineMind AI ist ein Beispiel für eine eigene Lösung dieser Klasse.',
    'w6.title': 'Transparente Konditionen', 'w6.desc': 'Klare Kalkulation, Zeitplan und Umfang vor Arbeitsbeginn. Keine versteckten Kosten und keine Überraschungen bei der Projektabnahme.',
    'sec.projects.tag': 'Portfolio', 'sec.projects.title': 'Ausgewählte Projekte', 'sec.projects.desc': 'Beispiele realisierter Automatisierungssysteme und Software aus verschiedenen Branchen und Plattformen.',
    'proj1.title': 'LineMind AI – Maschinenüberwachung mit KI', 'proj1.desc': 'KI-basiertes Überwachungssystem für Produktionslinien. Eine PWA-Webanwendung sammelt Sensordaten in Echtzeit, erkennt Anomalien und prognostiziert Ausfälle. FastAPI + Python Backend, SQLite-Datenbank, mobile Alarme und OEE-Berichte.',
    'proj2.title': 'Modernisierung Stricklinie – S5 → S7', 'proj2.desc': 'Migration der Strickmaschinensteuerung von Siemens S5 auf S7-1500 mit TIA Portal. Alle technologischen Funktionen erhalten, neues HMI-Panel, Ferndiagnose über PROFINET — ohne Produktionsstillstand.',
    'proj3.title': 'URCap-Anwendung für Dosiersteuerung', 'proj3.desc': 'Individuelle URCap integriert einen UR10-Roboter mit einer Kleberauftragsanlage. Druckregelung, Rezeptverwaltung direkt vom Roboter-Tablet. Bedienerschnittstelle ohne Robotikkenntnisse bedienbar.',
    'proj4.title': 'SCADA-System für Kläranlage', 'proj4.desc': 'Umfassendes Überwachungssystem — Monitoring von Pumpen, Belüftern und biologischen Reaktoren. WinCC-OA-Visualisierung, historische Trends, SMS-Alarme, automatische Berichte. Profibus-Netzwerk mit 120+ Feldgeräten.',
    'sec.contact.tag': 'Kontakt', 'sec.contact.title': 'Projekt starten',
    'contact.h2': 'Sprechen wir über Ihr Automatisierungsprojekt',
    'contact.p': 'Schildern Sie mir Ihr Problem oder Ziel — ich erstelle innerhalb von 48 Stunden eine kostenlose Erstbewertung und ein Richtangebot. Standort Deutschland, Projektrealisierung in ganz Europa.',
    'contact.location': 'Deutschland · Ganz Europa · Weltweit',
    'form.name': 'Vor- und Nachname', 'form.name.ph': 'Max Mustermann',
    'form.company': 'Unternehmen', 'form.company.ph': 'Firmenname',
    'form.email': 'E-Mail', 'form.phone': 'Telefon',
    'form.service': 'Leistungsart',
    'form.service.opt0': 'Auswählen...', 'form.service.opt1': 'SPS-Programmierung / Siemens',
    'form.service.opt2': 'SCADA / HMI-System', 'form.service.opt3': 'URCap / Universal Robots',
    'form.service.opt4': 'Modernisierung / Migration', 'form.service.opt5': 'Industrienetzwerke',
    'form.service.opt6': 'IoT / Mobile Applikation', 'form.service.opt7': 'Sonstiges',
    'form.message': 'Projektbeschreibung', 'form.message.ph': 'Beschreiben Sie, was Sie benötigen, welche Maschinen/Systeme beteiligt sind und was das Projektziel ist...',
    'form.submit': 'Anfrage senden', 'form.sent': '✓ Gesendet — Antwort innerhalb von 48h',
    'footer.tagline': 'Industrieautomatisierung · Tomasz Urbański',
    'footer.location': 'Deutschland · Europa · Weltweit',
    'footer.privacy': 'Datenschutz',
    'cookie.text': 'Diese Website verwendet Cookies zur Verkehrsanalyse und Qualitätsverbesserung. Mehr: ',
    'cookie.link': 'Datenschutz', 'cookie.decline': 'Ablehnen', 'cookie.accept': 'Akzeptieren',
  }
};

// ── LANGUAGE ──
let currentLang = localStorage.getItem('tu-lang') || detectLang();
let typedWords = [];
let typedReset = false;

function detectLang() {
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith('de')) return 'de';
  if (lang.startsWith('pl')) return 'pl';
  return 'en';
}

function applyLang(lang) {
  const t = T[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('tu-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-p]').forEach(el => {
    const v = t[el.dataset.i18nP];
    if (v !== undefined) el.placeholder = v;
  });
  // select options with data-i18n
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  // cookie link text
  const cookieLink = document.querySelector('.cookie-text a');
  if (cookieLink && t['cookie.link']) cookieLink.textContent = t['cookie.link'];

  // update typed words and restart
  typedWords = (t['typed.words'] || 'for industry.|PLC.|SCADA.').split('|');
  typedReset = true;

  // update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // update submit button if already sent
  const btn = document.getElementById('submitBtn');
  if (btn && btn.dataset.sent === 'true') {
    btn.textContent = t['form.sent'] || btn.textContent;
  }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 50
    ? 'rgba(8,12,20,0.97)' : 'rgba(8,12,20,0.85)';
}, { passive: true });

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── TYPED TEXT ──
const typedEl = document.getElementById('typed');
let wi = 0, ci = 0, deleting = false, typingTimer = null;

function type() {
  if (typedReset) {
    typedReset = false;
    wi = 0; ci = 0; deleting = false;
    typedEl.textContent = '';
  }
  if (!typedWords.length) return;
  const word = typedWords[wi] || '';
  if (!deleting) {
    ci++;
    typedEl.textContent = word.slice(0, ci);
    if (ci >= word.length) { deleting = true; typingTimer = setTimeout(type, 1800); return; }
  } else {
    ci--;
    typedEl.textContent = word.slice(0, ci);
    if (ci <= 0) {
      deleting = false;
      wi = (wi + 1) % typedWords.length;
      typingTimer = setTimeout(type, 300); return;
    }
  }
  typingTimer = setTimeout(type, deleting ? 40 : 70);
}

// ── REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revealObserver.observe(el));

// ── COUNTERS ──
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = current + '+';
      if (current < target) requestAnimationFrame(tick);
    };
    tick();
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// ── CONTACT FORM ──
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = T[currentLang];
    submitBtn.textContent = '...';
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = t['form.sent'] || '✓ Sent';
      submitBtn.dataset.sent = 'true';
      submitBtn.style.background = '#10B981';
      submitBtn.style.clipPath = 'none';
    }, 1000);
  });
}

// ── ACTIVE NAV ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#00D4FF' : '';
  });
}, { passive: true });

// ── COOKIE CONSENT ──
const banner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');

if (!localStorage.getItem('tu-cookie')) {
  setTimeout(() => banner.classList.add('visible'), 1500);
}
cookieAccept.addEventListener('click', () => {
  localStorage.setItem('tu-cookie', 'accepted');
  banner.classList.remove('visible');
});
cookieDecline.addEventListener('click', () => {
  localStorage.setItem('tu-cookie', 'declined');
  banner.classList.remove('visible');
});

// ── WIZARD ──
let wizardStep = 1;
function wizardGoTo(step) {
  document.querySelectorAll('.wizard-panel').forEach((p, i) => p.classList.toggle('active', i + 1 === step));
  document.querySelectorAll('.wizard-step-item').forEach((s, i) => {
    s.classList.toggle('active', i + 1 === step);
    s.classList.toggle('done', i + 1 < step);
  });
  wizardStep = step;
}
document.querySelectorAll('.btn-next').forEach(btn => btn.addEventListener('click', () => {
  if (wizardStep < 3) wizardGoTo(wizardStep + 1);
}));
document.querySelectorAll('.btn-prev').forEach(btn => btn.addEventListener('click', () => {
  if (wizardStep > 1) wizardGoTo(wizardStep - 1);
}));
document.querySelectorAll('.check-item').forEach(item => {
  item.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') return;
    const input = this.querySelector('input');
    if (!input) return;
    if (input.type === 'radio') {
      document.querySelectorAll(`input[name="${input.name}"]`).forEach(r => r.closest('.check-item').classList.remove('selected'));
      this.classList.add('selected');
      input.checked = true;
    } else {
      this.classList.toggle('selected');
      input.checked = this.classList.contains('selected');
    }
  });
});

// ── CALCULATOR ──
const calcCfg = {
  plc:     { 1: 3000,  2: 5500,  3: 9000,  4: 14000 },
  hmi:     { 0: 0,     1: 900,   2: 1800,  3: 3200  },
  net:     { 1: 1.0,   2: 1.35,  3: 1.75  },
  urgency: { 1: 1.0,   2: 1.3,   3: 1.65  },
  weeks:   { 1: [3,4], 2: [5,7], 3: [8,12], 4: [12,18] },
  netW:    { 1: 0,     2: 1,     3: 3     },
  urgDiv:  { 1: 1.0,   2: 0.7,   3: 0.5   }
};
let cs = { plc: 1, hmi: 0, net: 1, urgency: 1 };
function updateCalc() {
  const raw = (calcCfg.plc[cs.plc] + calcCfg.hmi[cs.hmi]) * calcCfg.net[cs.net] * calcCfg.urgency[cs.urgency];
  const lo = Math.round(raw * 0.75 / 500) * 500;
  const hi = Math.round(raw * 1.35 / 500) * 500;
  const fmt = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const priceEl = document.getElementById('calcPrice');
  if (priceEl) priceEl.textContent = `${fmt(lo)} – ${fmt(hi)} €`;
  const bw = calcCfg.weeks[cs.plc];
  const ne = calcCfg.netW[cs.net];
  const ud = calcCfg.urgDiv[cs.urgency];
  const tl = Math.max(1, Math.round((bw[0] + ne) * ud));
  const th = Math.max(2, Math.round((bw[1] + ne) * ud));
  const wk = (T[currentLang] || T.pl)['calc.weeks'] || 'tyg.';
  const timeEl = document.getElementById('calcTime');
  if (timeEl) timeEl.textContent = `${tl}–${th} ${wk}`;
}
document.querySelectorAll('.calc-options').forEach(grp => {
  grp.querySelectorAll('.calc-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      grp.querySelectorAll('.calc-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      cs[grp.dataset.calc] = parseInt(btn.dataset.val, 10);
      updateCalc();
    });
  });
});

// ── ADD NEW I18N KEYS ──
const newKeys = {
  pl: {
    'nav.blog': 'Blog',
    'certs.label': 'Technologie partnerskie:',
    'sec.calc.tag': 'Wycena orientacyjna', 'sec.calc.title': 'Kalkulator projektu',
    'sec.calc.desc': 'Dobierz parametry projektu, aby otrzymać przybliżony koszt i czas realizacji.',
    'calc.plc': 'Liczba sterowników PLC', 'calc.hmi': 'Panele HMI / SCADA',
    'calc.network': 'Sieć i integracje', 'calc.urgency': 'Pilność realizacji',
    'calc.none': 'Brak', 'calc.simple': 'Prosta', 'calc.medium': 'Średnia', 'calc.complex': 'Złożona',
    'calc.std': 'Standardowa', 'calc.fast': 'Przyspieszona', 'calc.urgent': 'Pilna',
    'calc.estimate': 'Szacowany budżet', 'calc.net': 'netto, orientacyjnie',
    'calc.timeline': 'Czas realizacji:', 'calc.weeks': 'tyg.',
    'calc.cta': 'Omów szczegóły →',
    'calc.disclaimer': 'Kalkulacja ma charakter orientacyjny. Dokładna wycena po analizie specyfikacji projektu.',
    'wizard.s1': 'Branża', 'wizard.s2': 'Projekt', 'wizard.s3': 'Kontakt',
    'wizard.industry': 'Branża klienta', 'wizard.other': 'Inna',
    'wizard.next': 'Dalej →', 'wizard.prev': '← Wstecz',
    'contact.linkedin': 'LinkedIn',
    'footer.impressum': 'Impressum',
  },
  en: {
    'nav.blog': 'Blog',
    'certs.label': 'Partner technologies:',
    'sec.calc.tag': 'Cost estimate', 'sec.calc.title': 'Project calculator',
    'sec.calc.desc': 'Configure your project parameters to get an indicative cost and timeline.',
    'calc.plc': 'Number of PLCs', 'calc.hmi': 'HMI / SCADA panels',
    'calc.network': 'Network & integrations', 'calc.urgency': 'Timeline urgency',
    'calc.none': 'None', 'calc.simple': 'Simple', 'calc.medium': 'Medium', 'calc.complex': 'Complex',
    'calc.std': 'Standard', 'calc.fast': 'Accelerated', 'calc.urgent': 'Urgent',
    'calc.estimate': 'Estimated budget', 'calc.net': 'net, indicative',
    'calc.timeline': 'Timeline:', 'calc.weeks': 'wks.',
    'calc.cta': 'Discuss details →',
    'calc.disclaimer': 'This is an indicative estimate. Accurate pricing requires project specification review.',
    'wizard.s1': 'Industry', 'wizard.s2': 'Project', 'wizard.s3': 'Contact',
    'wizard.industry': 'Client industry', 'wizard.other': 'Other',
    'wizard.next': 'Next →', 'wizard.prev': '← Back',
    'contact.linkedin': 'LinkedIn',
    'footer.impressum': 'Impressum',
  },
  de: {
    'nav.blog': 'Blog',
    'certs.label': 'Partnertechnologien:',
    'sec.calc.tag': 'Kostenabschätzung', 'sec.calc.title': 'Projektkalkulator',
    'sec.calc.desc': 'Konfigurieren Sie Ihre Projektparameter für eine Richtkostenschätzung.',
    'calc.plc': 'Anzahl SPS-Steuerungen', 'calc.hmi': 'HMI / SCADA-Panels',
    'calc.network': 'Netzwerk & Integrationen', 'calc.urgency': 'Dringlichkeit',
    'calc.none': 'Keine', 'calc.simple': 'Einfach', 'calc.medium': 'Mittel', 'calc.complex': 'Komplex',
    'calc.std': 'Standard', 'calc.fast': 'Beschleunigt', 'calc.urgent': 'Dringend',
    'calc.estimate': 'Geschätztes Budget', 'calc.net': 'netto, Richtwert',
    'calc.timeline': 'Realisierungsdauer:', 'calc.weeks': 'Wo.',
    'calc.cta': 'Details besprechen →',
    'calc.disclaimer': 'Diese Kalkulation ist ein Richtwert. Genaue Preise erfordern eine Projektspezifikationsanalyse.',
    'wizard.s1': 'Branche', 'wizard.s2': 'Projekt', 'wizard.s3': 'Kontakt',
    'wizard.industry': 'Kundenbranche', 'wizard.other': 'Sonstige',
    'wizard.next': 'Weiter →', 'wizard.prev': '← Zurück',
    'contact.linkedin': 'LinkedIn',
    'footer.impressum': 'Impressum',
  }
};
// Merge new keys into T
Object.keys(newKeys).forEach(lang => { if (T[lang]) Object.assign(T[lang], newKeys[lang]); });

// ── SCL BACKGROUND ANIMATION ──
(function initSCLBg() {
  if (window.innerWidth < 768) return;
  const canvas = document.getElementById('scl-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const FS = 10, LH = 15, CW = 270;

  const L = [
    'FUNCTION_BLOCK "FB_PillowCheck_4Cameras"',
    '{ S7_Optimized_Access := TRUE }',
    'VERSION : 1.0',
    '',
    'VAR_INPUT',
    '  LineOn          : Bool;',
    '  LineRun         : Bool;',
    '  StartKontroli   : Bool;',
    '  KoniecKontroli  : Bool;',
    '  Reset           : Bool;',
    '  IncompleteAsNOK : Bool := TRUE;',
    '  FaultAsNOK      : Bool := TRUE;',
    '  Cam1_Enable     : Bool;',
    '  Cam1_Done       : Bool;',
    '  Cam1_OK         : Bool;',
    '  Cam1_NOK        : Bool;',
    '  Cam1_Fault      : Bool;',
    '  Cam1_State      : Int;',
    '  Cam1_FaultCode  : Word;',
    '  Cam2_Enable     : Bool;',
    '  Cam2_Done       : Bool;',
    '  Cam2_OK         : Bool;',
    '  Cam2_NOK        : Bool;',
    '  Cam2_Fault      : Bool;',
    '  Cam3_Enable     : Bool;',
    '  Cam3_Done       : Bool;',
    '  Cam3_OK         : Bool;',
    '  Cam3_NOK        : Bool;',
    '  Cam3_Fault      : Bool;',
    '  Cam4_Enable     : Bool;',
    '  Cam4_Done       : Bool;',
    '  Cam4_OK         : Bool;',
    '  Cam4_NOK        : Bool;',
    '  Cam4_Fault      : Bool;',
    'END_VAR',
    '',
    'VAR_OUTPUT',
    '  PillowDone      : Bool;',
    '  ResultValid     : Bool;',
    '  PoduszkaOK      : Bool;',
    '  PoduszkaNOK     : Bool;',
    '  Incomplete      : Bool;',
    '  KontrolaAktywna : Bool;',
    '  AnyCamNG_Live   : Bool;',
    '  AnyCamBad       : Bool;',
    '  ReceivedCount   : Int;',
    '  RequiredCount   : Int;',
    '  FirstBadCamera  : Int;',
    '  LastDoneCamera  : Int;',
    '  Cam1_Required   : Bool;',
    '  Cam2_Required   : Bool;',
    '  Cam1_Received   : Bool;',
    '  Cam2_Received   : Bool;',
    '  Cam1_ResultNOK  : Bool;',
    '  Cam2_ResultNOK  : Bool;',
    '  Cam1_FaultLatched : Bool;',
    '  Cam2_FaultLatched : Bool;',
    '  Cam1_Missing    : Bool;',
    '  Cam2_Missing    : Bool;',
    '  Cam1_Bad        : Bool;',
    '  Cam2_Bad        : Bool;',
    '  Cam1_LastFaultCode : Word;',
    '  Cam2_LastFaultCode : Word;',
    '  SequenceError   : Bool;',
    '  SequenceCode    : Word;',
    'END_VAR',
    '',
    'VAR',
    '  rTrigStart      : R_TRIG;',
    '  rTrigEnd        : R_TRIG;',
    '  rTrigReset      : R_TRIG;',
    '  rTrigCam1Done   : R_TRIG;',
    '  rTrigCam2Done   : R_TRIG;',
    '  rTrigCam3Done   : R_TRIG;',
    '  rTrigCam4Done   : R_TRIG;',
    'END_VAR',
    '',
    'BEGIN',
    '  rTrigStart(CLK := StartKontroli);',
    '  rTrigEnd(CLK := KoniecKontroli);',
    '  rTrigReset(CLK := Reset);',
    '  rTrigCam1Done(CLK := Cam1_Done);',
    '  rTrigCam2Done(CLK := Cam2_Done);',
    '  PillowDone := FALSE;',
    '  AnyCamNG_Live :=',
    '    (Cam1_Enable AND Cam1_NOK) OR',
    '    (Cam2_Enable AND Cam2_NOK) OR',
    '    (Cam3_Enable AND Cam3_NOK) OR',
    '    (Cam4_Enable AND Cam4_NOK);',
    '  IF rTrigReset.Q OR (NOT LineOn) THEN',
    '    KontrolaAktywna := FALSE;',
    '    ResultValid := FALSE;',
    '    PoduszkaOK := FALSE;',
    '    PoduszkaNOK := FALSE;',
    '    Incomplete := FALSE;',
    '    AnyCamBad := FALSE;',
    '    ReceivedCount := 0;',
    '    RequiredCount := 0;',
    '    FirstBadCamera := 0;',
    '    LastDoneCamera := 0;',
    '    Cam1_Required := FALSE;',
    '    Cam1_Received := FALSE;',
    '    Cam1_ResultNOK := FALSE;',
    '    Cam1_FaultLatched := FALSE;',
    '    Cam1_Missing := FALSE;',
    '    Cam1_Bad := FALSE;',
    '    Cam1_LastFaultCode := W#16#0000;',
    '    SequenceError := FALSE;',
    '    SequenceCode := W#16#0000;',
    '    RETURN;',
    '  END_IF;',
    '  IF rTrigStart.Q THEN',
    '    KontrolaAktywna := TRUE;',
    '    ResultValid := FALSE;',
    '    RequiredCount := 0;',
    '    Cam1_Required := Cam1_Enable;',
    '    Cam2_Required := Cam2_Enable;',
    '    Cam3_Required := Cam3_Enable;',
    '    Cam4_Required := Cam4_Enable;',
    '    IF Cam1_Enable THEN',
    '      RequiredCount := RequiredCount + 1;',
    '    END_IF;',
    '    IF Cam2_Enable THEN',
    '      RequiredCount := RequiredCount + 1;',
    '    END_IF;',
    '    Cam1_Received := FALSE;',
    '    Cam1_ResultNOK := FALSE;',
    '    Cam1_FaultLatched := FALSE;',
    '  END_IF;',
    '  IF rTrigEnd.Q AND (NOT KontrolaAktywna) THEN',
    '    SequenceError := TRUE;',
    '    SequenceCode := W#16#A001;',
    '  END_IF;',
    '  IF KontrolaAktywna THEN',
    '    IF Cam1_Required AND Cam1_Fault THEN',
    '      Cam1_FaultLatched := TRUE;',
    '      Cam1_LastFaultCode := Cam1_FaultCode;',
    '    END_IF;',
    '    IF Cam2_Required AND Cam2_Fault THEN',
    '      Cam2_FaultLatched := TRUE;',
    '      Cam2_LastFaultCode := Cam2_FaultCode;',
    '    END_IF;',
    '  END_IF;',
    '  IF KontrolaAktywna THEN',
    '    IF Cam1_Required AND rTrigCam1Done.Q',
    '       AND (NOT Cam1_Received) THEN',
    '      Cam1_Received := TRUE;',
    '      LastDoneCamera := 1;',
    '      ReceivedCount := ReceivedCount + 1;',
    '      Cam1_ResultNOK := Cam1_NOK OR',
    '        (Cam1_Fault AND FaultAsNOK) OR',
    '        ((NOT Cam1_OK) AND (NOT Cam1_NOK));',
    '    END_IF;',
    '    IF Cam2_Required AND rTrigCam2Done.Q',
    '       AND (NOT Cam2_Received) THEN',
    '      Cam2_Received := TRUE;',
    '      LastDoneCamera := 2;',
    '      ReceivedCount := ReceivedCount + 1;',
    '    END_IF;',
    '  END_IF;',
    '  IF KontrolaAktywna AND rTrigEnd.Q THEN',
    '    Cam1_Missing := Cam1_Required AND',
    '                    (NOT Cam1_Received);',
    '    Cam2_Missing := Cam2_Required AND',
    '                    (NOT Cam2_Received);',
    '    Incomplete := Cam1_Missing OR',
    '                  Cam2_Missing;',
    '    Cam1_Bad := Cam1_ResultNOK OR',
    '      (Cam1_FaultLatched AND FaultAsNOK) OR',
    '      (Cam1_Missing AND IncompleteAsNOK);',
    '    Cam2_Bad := Cam2_ResultNOK OR',
    '      (Cam2_FaultLatched AND FaultAsNOK) OR',
    '      (Cam2_Missing AND IncompleteAsNOK);',
    '    AnyCamBad := Cam1_Bad OR Cam2_Bad;',
    '    FirstBadCamera := 0;',
    '    IF Cam1_Bad THEN',
    '      FirstBadCamera := 1;',
    '    ELSIF Cam2_Bad THEN',
    '      FirstBadCamera := 2;',
    '    ELSIF Cam3_Bad THEN',
    '      FirstBadCamera := 3;',
    '    ELSIF Cam4_Bad THEN',
    '      FirstBadCamera := 4;',
    '    END_IF;',
    '    IF AnyCamBad THEN',
    '      PoduszkaOK := FALSE;',
    '      PoduszkaNOK := TRUE;',
    '    ELSE',
    '      PoduszkaOK := TRUE;',
    '      PoduszkaNOK := FALSE;',
    '    END_IF;',
    '    ResultValid := TRUE;',
    '    PillowDone := TRUE;',
    '    KontrolaAktywna := FALSE;',
    '  END_IF;',
    'END_FUNCTION_BLOCK',
    '',
  ];

  let cols = [], raf, resizeTimer;

  function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (window.innerWidth < 768) { cancelAnimationFrame(raf); return; }
    const n = Math.ceil(canvas.width / CW) + 1;
    cols = Array.from({ length: n }, (_, i) => ({
      x: i * CW + Math.round(Math.random() * 24 - 12),
      offset: Math.floor(Math.random() * L.length),
      speed: 0.16 + Math.random() * 0.24,
      scroll: Math.random() * L.length * LH
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${FS}px 'Courier New', monospace`;
    ctx.fillStyle = 'rgba(0,212,255,0.062)';
    const totalH = L.length * LH;
    cols.forEach(c => {
      c.scroll = (c.scroll + c.speed) % totalH;
      const first = Math.floor(c.scroll / LH);
      const sub = c.scroll % LH;
      const vis = Math.ceil(canvas.height / LH) + 2;
      for (let i = 0; i < vis; i++) {
        ctx.fillText(L[(c.offset + first + i) % L.length], c.x, i * LH - sub);
      }
    });
    raf = requestAnimationFrame(draw);
  }

  setup();
  draw();

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setup, 150);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else { raf = requestAnimationFrame(draw); }
  });
})();

// ── INIT ──
applyLang(currentLang);
type();
updateCalc();
