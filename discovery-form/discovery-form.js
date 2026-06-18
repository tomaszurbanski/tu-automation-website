/* ============================================================
   LineMind AI — Discovery / Requirements Form — logic (PL / EN / DE)
   ============================================================ */
(function () {
  "use strict";
  var KEY = "linemind_discovery_v1";
  var LKEY = "linemind_discovery_lang";
  var LANGS = ["pl", "en", "de"];
  var NEXT = { pl: "EN", en: "DE", de: "PL" };
  var CUR = "pl";

  /* ---------- i18n dictionary for JS-generated content ---------- */
  var LT = {
    section: { pl:"Sekcja", en:"Section", de:"Abschnitt" },
    choose:  { pl:"— wybierz —", en:"— select —", de:"— auswählen —" },
    perms:   { pl:"Uprawnienia", en:"Permissions", de:"Berechtigungen" },
    removeTitle:{ pl:"Usuń wiersz", en:"Remove row", de:"Zeile entfernen" },
    saving:  { pl:"Zapisywanie…", en:"Saving…", de:"Speichern…" },
    saved:   { pl:"Zapisano lokalnie", en:"Saved locally", de:"Lokal gespeichert" },
    copied:  { pl:"✓ Skopiowano", en:"✓ Copied", de:"✓ Kopiert" },
    confirmReset:{ pl:"Wyczyścić cały formularz? Tej operacji nie można cofnąć.",
                   en:"Reset the entire form? This cannot be undone.",
                   de:"Das gesamte Formular zurücksetzen? Dies kann nicht rückgängig gemacht werden." },
    rl: {
      vendor:{pl:"Producent",en:"Manufacturer",de:"Hersteller"},
      model: {pl:"Model",en:"Model",de:"Modell"},
      qty:   {pl:"Ilość",en:"Quantity",de:"Menge"},
      type:  {pl:"Typ",en:"Type",de:"Typ"},
      group: {pl:"Nazwa grupy",en:"Group name",de:"Gruppenname"},
      count: {pl:"Liczba użytkowników",en:"Number of users",de:"Anzahl Benutzer"}
    },
    perm: {
      "tylko podgląd":{pl:"tylko podgląd",en:"view only",de:"nur Ansicht"},
      "dashboard":{pl:"dashboard",en:"dashboard",de:"Dashboard"},
      "raporty":{pl:"raporty",en:"reports",de:"Berichte"},
      "alarmy":{pl:"alarmy",en:"alarms",de:"Alarme"},
      "konfiguracja":{pl:"konfiguracja",en:"configuration",de:"Konfiguration"},
      "administracja":{pl:"administracja",en:"administration",de:"Administration"},
      "zarządzanie użytkownikami":{pl:"zarządzanie użytkownikami",en:"user management",de:"Benutzerverwaltung"},
      "pełny dostęp":{pl:"pełny dostęp",en:"full access",de:"Vollzugriff"}
    },
    /* summary field labels */
    k: {
      companyName:{pl:"Nazwa firmy",en:"Company name",de:"Firmenname"},
      industry:{pl:"Branża",en:"Industry",de:"Branche"},
      country:{pl:"Kraj",en:"Country",de:"Land"},
      location:{pl:"Lokalizacja",en:"Location",de:"Standort"},
      sites:{pl:"Liczba zakładów",en:"Number of plants",de:"Anzahl der Werke"},
      contactPerson:{pl:"Osoba kontaktowa",en:"Contact person",de:"Ansprechpartner"},
      email:{pl:"E-mail",en:"E-mail",de:"E-Mail"},
      phone:{pl:"Telefon",en:"Phone",de:"Telefon"},
      problem:{pl:"Problem",en:"Problem",de:"Problem"},
      currentSituation:{pl:"Obecna sytuacja",en:"Current situation",de:"Aktuelle Situation"},
      expectedResult:{pl:"Oczekiwany rezultat",en:"Expected result",de:"Erwartetes Ergebnis"},
      priority:{pl:"Priorytet",en:"Priority",de:"Priorität"},
      items:{pl:"Pozycje",en:"Items",de:"Positionen"},
      other:{pl:"Inne",en:"Other",de:"Andere"},
      otherControl:{pl:"Inne systemy kontrolne",en:"Other control systems",de:"Weitere Kontrollsysteme"},
      protocols:{pl:"Protokoły",en:"Protocols",de:"Protokolle"},
      systems:{pl:"Systemy",en:"Systems",de:"Systeme"},
      selected:{pl:"Wybrane",en:"Selected",de:"Ausgewählt"},
      formats:{pl:"Formaty",en:"Formats",de:"Formate"},
      groups:{pl:"Grupy",en:"Groups",de:"Gruppen"},
      mechanisms:{pl:"Mechanizmy",en:"Mechanisms",de:"Mechanismen"},
      model:{pl:"Model",en:"Model",de:"Modell"},
      notes:{pl:"Uwagi",en:"Notes",de:"Anmerkungen"},
      none:{pl:"— nie podano —",en:"— not provided —",de:"— nicht angegeben —"}
    },
    pkg: {
      badge:{pl:"Sugestia wstępna",en:"Preliminary suggestion",de:"Vorläufige Empfehlung"},
      name:{pl:"Pakiet:",en:"Package:",de:"Paket:"},
      score:{pl:"wynik dopasowania",en:"match score",de:"Übereinstimmungswert"},
      sig:{pl:"sygnałów zakresu",en:"scope signals",de:"Umfangssignale"},
      noSig:{pl:"— brak sygnałów podwyższających zakres —",en:"— no scope-raising signals —",de:"— keine umfangssteigernden Signale —"},
      note:{pl:"To wyłącznie wstępna sugestia wyliczona z zebranych danych (Bronze / Silver / Gold). Ostateczny pakiet i wycenę określa TU Automation po analizie wymagań — formularz nie zakłada pakietu z góry.",
            en:"This is only a preliminary suggestion derived from the collected data (Bronze / Silver / Gold). The final package and pricing are determined by TU Automation after analysing the requirements — the form does not assume a package upfront.",
            de:"Dies ist nur eine vorläufige Empfehlung aus den erfassten Daten (Bronze / Silver / Gold). Das endgültige Paket und der Preis werden von TU Automation nach der Anforderungsanalyse festgelegt — das Formular setzt kein Paket voraus."},
      rationale:{
        gold:{pl:"Zakres obejmuje zaawansowaną analitykę, predykcję AI oraz integracje z systemami nadrzędnymi — sygnały wskazują na najwyższy poziom wdrożenia.",
              en:"The scope covers advanced analytics, AI prediction and integration with supervisory systems — signals point to the highest deployment level.",
              de:"Der Umfang umfasst fortgeschrittene Analytik, KI-Prognose und Integration mit übergeordneten Systemen — die Signale deuten auf die höchste Ausbaustufe hin."},
        silver:{pl:"Zakres wykracza poza podstawowy monitoring (KPI/OEE, dashboardy, alarmy AI) — sygnały wskazują na poziom pośredni.",
                en:"The scope goes beyond basic monitoring (KPI/OEE, dashboards, AI alarms) — signals point to an intermediate level.",
                de:"Der Umfang geht über das Basismonitoring hinaus (KPI/OEE, Dashboards, KI-Alarme) — die Signale deuten auf eine mittlere Stufe hin."},
        bronze:{pl:"Zakres skupia się na diagnostyce i monitoringu maszyn — sygnały wskazują na poziom podstawowy.",
                en:"The scope focuses on machine diagnostics and monitoring — signals point to the entry level.",
                de:"Der Umfang konzentriert sich auf Maschinendiagnose und Monitoring — die Signale deuten auf die Einstiegsstufe hin."}
      }
    },
    sig: {
      "Integracja MES / ERP / SAP":{en:"MES / ERP / SAP integration",de:"MES- / ERP- / SAP-Integration"},
      "Predykcyjne utrzymanie ruchu":{en:"Predictive maintenance",de:"Vorausschauende Wartung"},
      "Integracja z AI":{en:"AI integration",de:"KI-Integration"},
      "Eksport API / OPC UA / MQTT":{en:"API / OPC UA / MQTT export",de:"API- / OPC UA- / MQTT-Export"},
      "Uwierzytelnianie korporacyjne":{en:"Enterprise authentication",de:"Unternehmens-Authentifizierung"},
      "MFA":{en:"MFA",de:"MFA"},
      "Wiele zakładów":{en:"Multiple plants",de:"Mehrere Werke"},
      "Złożona struktura użytkowników":{en:"Complex user structure",de:"Komplexe Benutzerstruktur"},
      "Zarządzanie recepturami":{en:"Recipe management",de:"Rezepturverwaltung"},
      "Analiza jakości":{en:"Quality analysis",de:"Qualitätsanalyse"},
      "Monitoring energii":{en:"Energy monitoring",de:"Energieüberwachung"},
      "OEE / KPI":{en:"OEE / KPI",de:"OEE / KPI"},
      "Dashboardy":{en:"Dashboards",de:"Dashboards"},
      "Analiza przestojów":{en:"Downtime analysis",de:"Stillstandsanalyse"},
      "Alarmy AI":{en:"AI alarms",de:"KI-Alarme"},
      "Rozbudowany park maszynowy":{en:"Extensive machine park",de:"Umfangreicher Maschinenpark"}
    }
  };
  function tr(o){ return o ? (o[CUR]||o.en||o.pl) : ""; }
  function trSig(s){ var o=LT.sig[s]; return o ? (CUR==="pl"?s:(o[CUR]||s)) : s; }

  /* ---------- repeatable-row definitions ---------- */
  var ROW = {
    plc:    { container:"plcRows",   cls:"cols-3", fields:[
              {k:"vendor",type:"select",rk:"vendor",opts:["Siemens","Allen Bradley","Beckhoff","Mitsubishi","Omron","Schneider","B&R","WAGO","Inne"]},
              {k:"model",type:"text",rk:"model",ph:"S7-1500"},
              {k:"qty",type:"number",rk:"qty",ph:"1"}] },
    robot:  { container:"robotRows", cls:"cols-3", fields:[
              {k:"vendor",type:"select",rk:"vendor",opts:["KUKA","ABB","FANUC","Yaskawa","Universal Robots","Inne"]},
              {k:"model",type:"text",rk:"model",ph:"KR 10 R1100"},
              {k:"qty",type:"number",rk:"qty",ph:"1"}] },
    drive:  { container:"driveRows", cls:"cols-3", fields:[
              {k:"vendor",type:"text",rk:"vendor",ph:"Lenze, SEW, Danfoss"},
              {k:"model",type:"text",rk:"model",ph:"i700"},
              {k:"qty",type:"number",rk:"qty",ph:"1"}] },
    vision: { container:"visionRows",cls:"cols-3", fields:[
              {k:"vendor",type:"select",rk:"vendor",opts:["Cognex","Keyence","Sick","Basler","Inne"]},
              {k:"model",type:"text",rk:"model",ph:"In-Sight 2800"},
              {k:"qty",type:"number",rk:"qty",ph:"1"}] },
    sensor: { container:"sensorRows",cls:"cols-4", fields:[
              {k:"type",type:"select",rk:"type",opts:["Temperatura","Wibracje / drgania","Ciśnienie","Przepływ","Poziom","Zbliżeniowe / obecności","Enkoder / pozycja","IO-Link","Skanery / kody","Wagi","Licznik energii","Inne"]},
              {k:"vendor",type:"text",rk:"vendor",ph:"IFM, Sick, Balluff"},
              {k:"model",type:"text",rk:"model",ph:"PT100"},
              {k:"qty",type:"number",rk:"qty",ph:"1"}] },
    user:   { container:"userRows",  cls:"cols-users",
              perms:["tylko podgląd","dashboard","raporty","alarmy","konfiguracja","administracja","zarządzanie użytkownikami","pełny dostęp"],
              fields:[
              {k:"group",type:"text",rk:"group",ph:"Operatorzy"},
              {k:"count",type:"number",rk:"count",ph:"10"}] }
  };

  function el(tag, cls, html){ var e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; }
  function esc(s){ return (s==null?"":String(s)).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c];}); }

  /* ---------- build one repeatable row ---------- */
  function buildRow(type, data){
    data = data || {};
    var def = ROW[type];
    var row = el("div", "repeat-row " + def.cls);
    def.fields.forEach(function(f){
      var field = el("div", "field");
      var lab = el("label", null, esc(tr(LT.rl[f.rk]))); lab.setAttribute("data-rk", f.rk);
      field.appendChild(lab);
      var input;
      if(f.type==="select"){
        input=document.createElement("select"); input.className="rsel";
        var ph=new Option(tr(LT.choose),""); ph.className="ph";
        input.appendChild(ph);
        f.opts.forEach(function(o){ input.appendChild(new Option(o,o)); });
      } else {
        input=document.createElement("input"); input.type=f.type;
        if(f.ph) input.setAttribute("data-rph", f.ph);
        if(f.type==="number") input.min="0";
      }
      input.setAttribute("data-k", f.k);
      if(data[f.k]!=null) input.value=data[f.k];
      input.addEventListener("input", save); input.addEventListener("change", save);
      field.appendChild(input);
      row.appendChild(field);
    });
    var rm = el("button","btn-remove","✕"); rm.type="button"; rm.setAttribute("data-rmtitle","1");
    rm.title=tr(LT.removeTitle);
    rm.addEventListener("click", function(){ row.remove(); save(); });
    row.appendChild(rm);

    if(type==="user"){
      var pw = el("div","row-perms");
      var pl=el("div","perm-lbl",esc(tr(LT.perms))); pl.setAttribute("data-permslbl","1");
      pw.appendChild(pl);
      var chips = el("div","chips");
      var chosen = data.perms || [];
      def.perms.forEach(function(p){
        var lab2=el("label","chip perm-chip");
        var inp=document.createElement("input"); inp.type="checkbox"; inp.value=p;
        if(chosen.indexOf(p)>=0) inp.checked=true;
        inp.addEventListener("change", save);
        var sp=el("span",null,esc(tr(LT.perm[p]))); sp.setAttribute("data-permk", p);
        lab2.appendChild(inp); lab2.appendChild(sp);
        chips.appendChild(lab2);
      });
      pw.appendChild(chips);
      row.appendChild(pw);
    }
    applyRowPlaceholders(row);
    return row;
  }
  function applyRowPlaceholders(scope){
    (scope||document).querySelectorAll("input[data-rph]").forEach(function(i){
      var base=i.getAttribute("data-rph");
      i.placeholder = (CUR==="pl"?"np. ":CUR==="de"?"z. B. ":"e.g. ")+base;
    });
  }
  function addRow(type, data){ document.getElementById(ROW[type].container).appendChild(buildRow(type,data)); }

  /* ---------- stepper / navigation ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll(".section"));
  var total = sections.length, cur = 0;
  var stepper = document.getElementById("stepper");
  sections.forEach(function(sec, i){
    var s = el("div","step");
    s.appendChild(el("div","step-num","<span>"+(i+1)+"</span>"));
    s.appendChild(el("div","step-title",""));
    s.addEventListener("click", function(){ go(i); });
    stepper.appendChild(s);
  });
  var stepEls = Array.prototype.slice.call(stepper.children);

  function pad(n){ return (n<10?"0":"")+n; }
  function go(i){
    cur = Math.max(0, Math.min(total-1, i));
    sections.forEach(function(s,k){ s.classList.toggle("active", k===cur); });
    stepEls.forEach(function(s,k){ s.classList.toggle("active", k===cur); s.classList.toggle("done", k<cur); });
    document.getElementById("navCount").textContent = pad(cur+1)+" / "+pad(total);
    document.getElementById("progress").style.width = ((cur+1)/total*100)+"%";
    document.getElementById("btnBack").disabled = (cur===0);
    document.getElementById("btnNext").style.display = (cur===total-1) ? "none" : "";
    if(cur===total-1) buildSummary();
    window.scrollTo({top:0, behavior:"smooth"});
  }
  document.getElementById("btnBack").addEventListener("click", function(){ go(cur-1); });
  document.getElementById("btnNext").addEventListener("click", function(){ go(cur+1); });

  /* ---------- language switching ---------- */
  function sectionTitle(i){ var h=sections[i].querySelector("h2.title"); return h?(h.getAttribute("data-"+CUR)||h.getAttribute("data-en")||h.textContent):""; }
  function applyLang(lang){
    if(LANGS.indexOf(lang)<0) lang="pl";
    CUR=lang;
    document.querySelectorAll("[data-pl]").forEach(function(e){
      var v=e.getAttribute("data-"+lang); if(v!=null) e.innerHTML=v;
    });
    document.querySelectorAll("[data-ph-pl]").forEach(function(e){
      var v=e.getAttribute("data-ph-"+lang); if(v!=null) e.placeholder=v;
    });
    // section numbers
    sections.forEach(function(sec,i){ var lab=sec.querySelector(".label"); if(lab) lab.textContent=tr(LT.section)+" "+pad(i+1); });
    // stepper titles
    stepEls.forEach(function(s,i){ var t=s.querySelector(".step-title"); if(t) t.textContent=sectionTitle(i); });
    // generated rows
    document.querySelectorAll("label[data-rk]").forEach(function(e){ e.textContent=tr(LT.rl[e.getAttribute("data-rk")]); });
    document.querySelectorAll("span[data-permk]").forEach(function(e){ e.textContent=tr(LT.perm[e.getAttribute("data-permk")]); });
    document.querySelectorAll("[data-permslbl]").forEach(function(e){ e.textContent=tr(LT.perms); });
    document.querySelectorAll("[data-rmtitle]").forEach(function(e){ e.title=tr(LT.removeTitle); });
    document.querySelectorAll("select.rsel option.ph").forEach(function(o){ o.textContent=tr(LT.choose); });
    applyRowPlaceholders(document);
    // toggle button + html lang
    var lt=document.getElementById("langToggle"); if(lt) lt.textContent="🌐 "+NEXT[lang];
    document.documentElement.lang=lang;
    try{ localStorage.setItem(LKEY, lang); }catch(e){}
    var sl=document.getElementById("saveLabel"); if(sl) sl.textContent=tr(LT.saved);
    if(cur===total-1) buildSummary();
  }
  document.getElementById("langToggle").addEventListener("click", function(){
    applyLang(LANGS[(LANGS.indexOf(CUR)+1)%LANGS.length]);
  });

  /* ---------- "inne" reveal ---------- */
  document.querySelectorAll('[data-other]').forEach(function(cb){
    cb.addEventListener("change", function(){
      var w=document.getElementById(cb.getAttribute("data-other"));
      if(w) w.classList.toggle("show", cb.checked);
      save();
    });
  });

  /* ---------- collect data (values stay canonical) ---------- */
  function val(id){ var e=document.getElementById(id); return e?e.value.trim():""; }
  function checksOf(key){ return Array.prototype.slice.call(document.querySelectorAll('[data-key="'+key+'"] input[type=checkbox]:checked')).map(function(i){return i.value;}); }
  function radioOf(key){ var c=document.querySelector('[data-key="'+key+'"] input[type=radio]:checked'); return c?c.value:""; }
  function otherOf(id){ var w=document.getElementById(id); if(!w) return ""; var i=w.querySelector("input"); return i?i.value.trim():""; }
  function rowsOf(type){
    var out=[];
    document.querySelectorAll("#"+ROW[type].container+" .repeat-row").forEach(function(r){
      var o={};
      r.querySelectorAll("[data-k]").forEach(function(inp){ o[inp.getAttribute("data-k")]=inp.value.trim(); });
      if(type==="user") o.perms=Array.prototype.slice.call(r.querySelectorAll(".perm-chip input:checked")).map(function(i){return i.value;});
      var has=false; for(var k in o){ if(Array.isArray(o[k])?o[k].length:o[k]) has=true; }
      if(has) out.push(o);
    });
    return out;
  }
  function collect(){
    return {
      lang:CUR,
      company:{ companyName:val("companyName"), industry:val("industry"), country:val("country"),
        location:val("location"), sites:val("sites"), contactPerson:val("contactPerson"),
        email:val("email"), phone:val("phone") },
      project:{ problem:val("problem"), currentSituation:val("currentSituation"),
        expectedResult:val("expectedResult"), priority:radioOf("priority") },
      plc:rowsOf("plc"), robot:rowsOf("robot"), drive:rowsOf("drive"), vision:rowsOf("vision"),
      sensor:rowsOf("sensor"), otherControl:val("otherControl"),
      protocols:checksOf("protocols"), protocolsOther:otherOf("protocolsOther"),
      supervisory:checksOf("supervisory"), supervisoryOther:otherOf("supervisoryOther"),
      features:checksOf("features"),
      export:checksOf("export"), exportOther:otherOf("exportOther"),
      users:rowsOf("user"),
      security:checksOf("security"),
      infrastructure:radioOf("infrastructure"),
      additional:val("additional"),
      _meta:{ version:"1.0", form:"LineMind AI Discovery" }
    };
  }

  /* ---------- package scoring (preliminary, configurable) ---------- */
  var PACKAGE = {
    thresholds:{ gold:9, silver:4 },
    compute:function(d){
      var score=0, signals=[];
      var f=set(d.features), sup=set(d.supervisory), ex=set(d.export), sec=set(d.security);
      function add(cond,pts,label){ if(cond){ score+=pts; signals.push(label); } }
      add(sup["MES"]||sup["ERP"]||sup["SAP"], 3, "Integracja MES / ERP / SAP");
      add(f["Predykcyjne utrzymanie ruchu"], 3, "Predykcyjne utrzymanie ruchu");
      add(f["Integracja z AI"], 2, "Integracja z AI");
      add(ex["REST API"]||ex["OPC UA"]||ex["MQTT"], 2, "Eksport API / OPC UA / MQTT");
      add(sec["SSO"]||sec["Azure AD"]||sec["Active Directory"]||sec["LDAP"], 2, "Uwierzytelnianie korporacyjne");
      add(sec["MFA"], 1, "MFA");
      add((parseInt(d.company.sites,10)||1)>1, 2, "Wiele zakładów");
      add(d.users.length>=3, 1, "Złożona struktura użytkowników");
      add(f["Zarządzanie recepturami"], 1, "Zarządzanie recepturami");
      add(f["Analiza jakości"], 1, "Analiza jakości");
      add(f["Monitoring energii"], 1, "Monitoring energii");
      add(f["OEE"]||f["KPI"], 1, "OEE / KPI");
      add(f["Dashboardy"], 1, "Dashboardy");
      add(f["Analiza przestojów"], 1, "Analiza przestojów");
      add(f["Alarmy AI"], 1, "Alarmy AI");
      add((d.plc.length+d.robot.length+d.drive.length+d.vision.length+(d.sensor?d.sensor.length:0))>=5, 1, "Rozbudowany park maszynowy");
      var tier = (score>=PACKAGE.thresholds.gold)?"gold":(score>=PACKAGE.thresholds.silver)?"silver":"bronze";
      var name = {gold:"Gold",silver:"Silver",bronze:"Bronze"}[tier];
      return { tier:tier, name:name, score:score, signals:signals };
    }
  };
  function set(arr){ var o={}; (arr||[]).forEach(function(v){ o[v]=true; }); return o; }

  /* ---------- summary ---------- */
  function fmtRows(rows, cols){
    if(!rows.length) return "";
    return rows.map(function(r){
      var parts = cols.map(function(c){ return r[c.k]?(tr(LT.rl[c.rk||c.k]||{pl:c.k,en:c.k,de:c.k})+": "+r[c.k]):null; }).filter(Boolean);
      if(r.perms && r.perms.length) parts.push(tr(LT.perms)+": "+r.perms.map(function(p){return tr(LT.perm[p])||p;}).join(", "));
      return "• "+parts.join("  ·  ");
    }).join("\n");
  }
  function block(title, pairs){
    var rows = pairs.map(function(p){
      var empty = !p[1] || (Array.isArray(p[1]) && !p[1].length);
      var v = Array.isArray(p[1]) ? p[1].map(function(t){return '<span class="tag">'+esc(t)+'</span>';}).join("") : esc(p[1]);
      return '<div class="summary-row"><div class="k">'+esc(p[0])+'</div><div class="v'+(empty?' empty':'')+'">'+(empty?tr(LT.k.none):v)+'</div></div>';
    }).join("");
    return '<div class="summary-block"><h3>'+esc(title)+'</h3>'+rows+'</div>';
  }
  var COLS3=[{k:"vendor",rk:"vendor"},{k:"model",rk:"model"},{k:"qty",rk:"qty"}];
  var COLSS=[{k:"type",rk:"type"},{k:"vendor",rk:"vendor"},{k:"model",rk:"model"},{k:"qty",rk:"qty"}];
  var COLSU=[{k:"group",rk:"group"},{k:"count",rk:"count"}];
  function K(key){ return tr(LT.k[key]); }
  function H(i){ return pad(i+1)+" · "+sectionTitle(i); }

  function buildSummary(){
    var d=collect(), pkg=PACKAGE.compute(d), c=d.company, p=d.project, html="";
    html+=block(H(0),[[K("companyName"),c.companyName],[K("industry"),c.industry],[K("country"),c.country],[K("location"),c.location],[K("sites"),c.sites],[K("contactPerson"),c.contactPerson],[K("email"),c.email],[K("phone"),c.phone]]);
    html+=block(H(1),[[K("problem"),p.problem],[K("currentSituation"),p.currentSituation],[K("expectedResult"),p.expectedResult],[K("priority"),p.priority]]);
    html+=block(H(2),[[K("items"),fmtRows(d.plc,COLS3)]]);
    html+=block(H(3),[[K("items"),fmtRows(d.robot,COLS3)]]);
    html+=block(H(4),[[K("items"),fmtRows(d.drive,COLS3)]]);
    html+=block(H(5),[[K("items"),fmtRows(d.vision,COLS3)]]);
    html+=block(H(6),[[K("items"),fmtRows(d.sensor,COLSS)],[K("otherControl"),d.otherControl]]);
    html+=block(H(7),[[K("protocols"),d.protocols],[K("other"),d.protocolsOther]]);
    html+=block(H(8),[[K("systems"),d.supervisory],[K("other"),d.supervisoryOther]]);
    html+=block(H(9),[[K("selected"),d.features]]);
    html+=block(H(10),[[K("formats"),d.export],[K("other"),d.exportOther]]);
    html+=block(H(11),[[K("groups"),fmtRows(d.users,COLSU)]]);
    html+=block(H(12),[[K("mechanisms"),d.security]]);
    html+=block(H(13),[[K("model"),d.infrastructure]]);
    html+=block(H(14),[[K("notes"),d.additional]]);
    html+='<div class="pkg-suggest '+pkg.tier+'">'
      + '<div class="pkg-badge">'+esc(tr(LT.pkg.badge))+'</div>'
      + '<div class="pkg-name">'+esc(tr(LT.pkg.name))+' '+esc(pkg.name)+'</div>'
      + '<div class="pkg-rationale">'+esc(tr(LT.pkg.rationale[pkg.tier]))+'</div>'
      + '<div class="pkg-score"><div class="ps"><b>'+pkg.score+'</b>'+esc(tr(LT.pkg.score))+'</div>'
      + '<div class="ps"><b>'+pkg.signals.length+'</b>'+esc(tr(LT.pkg.sig))+'</div></div>'
      + '<div class="pkg-signals">'+(pkg.signals.length?pkg.signals.map(function(s){return '<span class="tag">'+esc(trSig(s))+'</span>';}).join(""):'<span class="v empty">'+esc(tr(LT.pkg.noSig))+'</span>')+'</div>'
      + '<div class="pkg-note">'+esc(tr(LT.pkg.note))+'</div></div>';
    document.getElementById("summaryOut").innerHTML=html;
    window._discoveryData=d; window._discoveryPkg=pkg;
  }

  /* ---------- exports ---------- */
  function toMarkdown(d, pkg){
    function L(t){ return t&&t.length?(Array.isArray(t)?t.join(", "):t):"—"; }
    function R(rows){ return rows.length?rows.map(function(r){
      var parts=[]; for(var k in r){ if(k==="perms") continue; if(r[k]) parts.push(k+": "+r[k]); }
      if(r.perms&&r.perms.length) parts.push(tr(LT.perms)+": "+r.perms.join(", "));
      return "  - "+parts.join(", ");
    }).join("\n"):"  - —"; }
    var c=d.company,p=d.project,m=[];
    m.push("# LineMind AI — "+ (CUR==="pl"?"Specyfikacja wstępna projektu":CUR==="de"?"Vorläufige Projektspezifikation":"Preliminary project specification") +"\n");
    m.push("## "+H(0)); m.push("- "+K("companyName")+": "+L(c.companyName)); m.push("- "+K("industry")+": "+L(c.industry));
    m.push("- "+K("country")+": "+L(c.country)+" · "+K("location")+": "+L(c.location)); m.push("- "+K("sites")+": "+L(c.sites));
    m.push("- "+K("contactPerson")+": "+L(c.contactPerson)+" · "+L(c.email)+" · "+L(c.phone)+"\n");
    m.push("## "+H(1)); m.push("- "+K("problem")+": "+L(p.problem)); m.push("- "+K("currentSituation")+": "+L(p.currentSituation));
    m.push("- "+K("expectedResult")+": "+L(p.expectedResult)); m.push("- "+K("priority")+": "+L(p.priority)+"\n");
    m.push("## "+H(2)+"\n"+R(d.plc)+"\n");
    m.push("## "+H(3)+"\n"+R(d.robot)+"\n");
    m.push("## "+H(4)+"\n"+R(d.drive)+"\n");
    m.push("## "+H(5)+"\n"+R(d.vision)+"\n");
    m.push("## "+H(6)+"\n"+R(d.sensor)+"\n- "+K("otherControl")+": "+L(d.otherControl)+"\n");
    m.push("## "+H(7)+"\n- "+L(d.protocols)+(d.protocolsOther?" ("+K("other")+": "+d.protocolsOther+")":"")+"\n");
    m.push("## "+H(8)+"\n- "+L(d.supervisory)+(d.supervisoryOther?" ("+K("other")+": "+d.supervisoryOther+")":"")+"\n");
    m.push("## "+H(9)+"\n- "+L(d.features)+"\n");
    m.push("## "+H(10)+"\n- "+L(d.export)+(d.exportOther?" ("+K("other")+": "+d.exportOther+")":"")+"\n");
    m.push("## "+H(11)+"\n"+R(d.users)+"\n");
    m.push("## "+H(12)+"\n- "+L(d.security)+"\n");
    m.push("## "+H(13)+"\n- "+L(d.infrastructure)+"\n");
    m.push("## "+H(14)+"\n"+L(d.additional)+"\n");
    m.push("## "+tr(LT.pkg.badge)+" — "+tr(LT.pkg.name)+" "+pkg.name+" ("+pkg.score+")");
    m.push("- "+tr(LT.pkg.rationale[pkg.tier]));
    m.push("- "+tr(LT.pkg.sig)+": "+(pkg.signals.length?pkg.signals.map(trSig).join(", "):"—"));
    m.push("\n_"+tr(LT.pkg.note)+"_");
    return m.join("\n");
  }
  function download(name, content, mime){
    var blob=new Blob([content],{type:mime||"text/plain;charset=utf-8"});
    var url=URL.createObjectURL(blob), a=document.createElement("a");
    a.href=url; a.download=name; document.body.appendChild(a); a.click();
    setTimeout(function(){ a.remove(); URL.revokeObjectURL(url); },100);
  }
  function fileBase(){ var n=val("companyName").replace(/[^\wÀ-ɏ-]+/g,"_").replace(/^_+|_+$/g,""); return "LineMind_Discovery_"+(n||"projekt"); }
  document.getElementById("btnJson").addEventListener("click", function(){ buildSummary(); download(fileBase()+".json", JSON.stringify(window._discoveryData,null,2), "application/json"); });
  document.getElementById("btnMd").addEventListener("click", function(){ buildSummary(); download(fileBase()+".md", toMarkdown(window._discoveryData, window._discoveryPkg), "text/markdown;charset=utf-8"); });
  document.getElementById("btnCopy").addEventListener("click", function(){
    buildSummary();
    var txt=toMarkdown(window._discoveryData, window._discoveryPkg);
    var btn=document.getElementById("btnCopy"), old=btn.innerHTML;
    function done(){ btn.textContent=tr(LT.copied); setTimeout(function(){ btn.innerHTML=old; },1600); }
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(done, done); }
    else { var ta=document.createElement("textarea"); ta.value=txt; document.body.appendChild(ta); ta.select(); try{document.execCommand("copy");}catch(e){} ta.remove(); done(); }
  });
  document.getElementById("btnPrint").addEventListener("click", function(){ buildSummary(); setTimeout(function(){ window.print(); },80); });
  document.getElementById("btnReset").addEventListener("click", function(){
    if(!confirm(tr(LT.confirmReset))) return;
    localStorage.removeItem(KEY); location.reload();
  });

  /* ---------- autosave ---------- */
  var saveT=null;
  function save(){
    if(saveT) clearTimeout(saveT);
    var dot=document.getElementById("saveDot"), lbl=document.getElementById("saveLabel");
    if(lbl) lbl.textContent=tr(LT.saving); if(dot) dot.style.background="var(--amber)";
    saveT=setTimeout(function(){
      try{ localStorage.setItem(KEY, JSON.stringify(collect())); }catch(e){}
      if(lbl) lbl.textContent=tr(LT.saved); if(dot) dot.style.background="var(--green)";
      if(cur===total-1) buildSummary();
    }, 400);
  }
  document.querySelectorAll("input, select, textarea").forEach(function(e){ e.addEventListener("input", save); e.addEventListener("change", save); });

  /* ---------- restore ---------- */
  function setVal(id,v){ var e=document.getElementById(id); if(e&&v!=null) e.value=v; }
  function escCss(v){ return (window.CSS&&CSS.escape)?CSS.escape(v):v; }
  function setChecks(key, arr){
    (arr||[]).forEach(function(v){
      var box=document.querySelector('[data-key="'+key+'"] input[value="'+escCss(v)+'"]');
      if(box){ box.checked=true; if(box.getAttribute("data-other")){ var w=document.getElementById(box.getAttribute("data-other")); if(w) w.classList.add("show"); } }
    });
  }
  function setOther(id,v){ var w=document.getElementById(id); if(w&&v){ var i=w.querySelector("input"); if(i) i.value=v; w.classList.add("show"); } }
  function setRadio(key,v){ if(!v) return; var r=document.querySelector('[data-key="'+key+'"] input[value="'+escCss(v)+'"]'); if(r) r.checked=true; }
  function restore(){
    var d=null; try{ var raw=localStorage.getItem(KEY); d=raw?JSON.parse(raw):null; }catch(e){}
    if(d){
      var c=d.company||{}, p=d.project||{};
      setVal("companyName",c.companyName); setVal("industry",c.industry); setVal("country",c.country);
      setVal("location",c.location); setVal("sites",c.sites); setVal("contactPerson",c.contactPerson);
      setVal("email",c.email); setVal("phone",c.phone);
      setVal("problem",p.problem); setVal("currentSituation",p.currentSituation);
      setVal("expectedResult",p.expectedResult); setRadio("priority",p.priority);
      setChecks("protocols",d.protocols); setOther("protocolsOther",d.protocolsOther);
      setChecks("supervisory",d.supervisory); setOther("supervisoryOther",d.supervisoryOther);
      setChecks("features",d.features);
      setChecks("export",d.export); setOther("exportOther",d.exportOther);
      setChecks("security",d.security);
      setRadio("infrastructure",d.infrastructure);
      setVal("additional",d.additional); setVal("otherControl",d.otherControl);
      ["plc","robot","drive","vision","sensor"].forEach(function(t){ (d[t]||[]).forEach(function(r){ addRow(t,r); }); });
      (d.users||[]).forEach(function(r){ addRow("user",r); });
    }
    ["plc","robot","drive","vision","sensor","user"].forEach(function(t){
      if(!document.querySelector("#"+ROW[t].container+" .repeat-row")) addRow(t,{});
    });
  }

  document.querySelectorAll("[data-add]").forEach(function(b){ b.addEventListener("click", function(){ addRow(b.getAttribute("data-add"), {}); }); });

  /* ---------- particle background ---------- */
  (function particles(){
    var cv=document.getElementById("bgCanvas"); if(!cv) return; var cx=cv.getContext("2d");
    var W,H,pts;
    function rs(){ W=cv.width=window.innerWidth; H=cv.height=window.innerHeight; }
    function ip(){ var n=Math.floor(W*H/26000); pts=[]; for(var i=0;i<n;i++) pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22}); }
    function draw(){
      cx.clearRect(0,0,W,H);
      for(var i=0;i<pts.length;i++){ var q=pts[i]; q.x+=q.vx; q.y+=q.vy; if(q.x<0||q.x>W)q.vx*=-1; if(q.y<0||q.y>H)q.vy*=-1;
        cx.beginPath(); cx.arc(q.x,q.y,1.2,0,6.283); cx.fillStyle="rgba(20,184,166,.45)"; cx.fill(); }
      for(var a=0;a<pts.length;a++) for(var b=a+1;b<pts.length;b++){
        var dx=pts[a].x-pts[b].x, dy=pts[a].y-pts[b].y, dd=dx*dx+dy*dy;
        if(dd<12000){ cx.beginPath(); cx.moveTo(pts[a].x,pts[a].y); cx.lineTo(pts[b].x,pts[b].y); cx.strokeStyle="rgba(20,184,166,"+(.10*(1-dd/12000))+")"; cx.stroke(); } }
      requestAnimationFrame(draw);
    }
    rs(); ip(); draw(); window.addEventListener("resize", function(){ rs(); ip(); });
  })();

  /* ---------- init ---------- */
  var startLang="pl"; try{ var sv=localStorage.getItem(LKEY); if(sv&&LANGS.indexOf(sv)>=0) startLang=sv; }catch(e){}
  restore();
  applyLang(startLang);
  go(0);
  document.addEventListener("keydown", function(e){
    if(e.altKey && e.key==="ArrowRight"){ go(cur+1); }
    if(e.altKey && e.key==="ArrowLeft"){ go(cur-1); }
  });
})();
