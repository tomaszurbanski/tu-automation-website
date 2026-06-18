/*
 * TU Automation — website AI agent (floating, bottom-right).
 * Small avatar + ON/OFF + waveform + subtle status. No big panel, no transcript.
 * On ON it speaks a short intro about TU Automation (backend OpenAI + ElevenLabs, with browser-speech fallback).
 * NO API keys here — only the public backend URL.
 */
(function () {
  "use strict";

  // ── config (no secrets) ──
  // Default ALWAYS the production Render backend (works on localhost:8080, tuautomation.de, file://).
  var LINEMIND_API_BASE_URL = "https://linemind-ai-backend.onrender.com";
  // Local backend is used ONLY with an explicit dev flag: ?localBackend=1 or localStorage LINEMIND_USE_LOCAL_BACKEND=1.
  var _useLocal = false;
  try {
    _useLocal = /[?&]localBackend=1(\b|&|$)/.test((location && location.search) || '') ||
      (window.localStorage && localStorage.getItem('LINEMIND_USE_LOCAL_BACKEND') === '1');
  } catch (e) {}
  var BACKEND = _useLocal ? "http://localhost:8787" : LINEMIND_API_BASE_URL;
  try { console.log('[tu-ai-agent] API base: ' + (_useLocal ? 'local dev' : 'render')); } catch (e) {}
  var AGENT_ENDPOINT = "/api/tuautomation-agent-intro";

  var on = false, speaking = false, busy = false, curAudio = null, ctrl = null;
  var ttsOK = ('speechSynthesis' in window) && (typeof window.SpeechSynthesisUtterance !== 'undefined');

  function pageContext() {
    if (window.TU_AI_AGENT_PAGE) return window.TU_AI_AGENT_PAGE;
    var p = (location.pathname || '').toLowerCase();
    if (p.indexOf('linemind') >= 0) return 'linemind';
    if (p.indexOf('omnie') >= 0 || p.indexOf('about') >= 0) return 'about';
    return 'homepage';
  }
  function detectLang() {
    // 1) site language switcher state, if exposed
    if (window.TU_SITE_LANG) { var s = ('' + window.TU_SITE_LANG).toLowerCase();
      if (s.indexOf('pl') === 0) return 'pl'; if (s.indexOf('de') === 0) return 'de'; if (s.indexOf('en') === 0) return 'en'; }
    // 2) document language (script.js keeps documentElement.lang in sync with the active language)
    var dl = (document.documentElement.lang || '').toLowerCase();
    if (dl.indexOf('pl') === 0) return 'pl';
    if (dl.indexOf('de') === 0) return 'de';
    if (dl.indexOf('en') === 0) return 'en';
    // 3) visible page text hint
    var t = (document.body ? (document.body.innerText || '') : '').toLowerCase().slice(0, 4000);
    if (/[äöüß]/.test(t) || /\b(und|für|maschinen|instandhaltung|produktion|qualität|automatisierung)\b/.test(t)) return 'de';
    if (/[ąćęłńóśźż]/.test(t) || /\b(oraz|dla|maszyn|utrzymanie|produkcji)\b/.test(t)) return 'pl';
    return 'en';
  }

  // ── local fallback intro (backend down) ──
  function localIntro(lang) {
    if (lang === 'pl') {
      return 'Cześć, jestem wirtualnym asystentem TU Automation. Tomasz ma ponad dwadzieścia lat doświadczenia w automatyce przemysłowej, utrzymaniu ruchu i uruchamianiu maszyn — specjalizuje się w sterownikach Siemens S7 i TIA Portal, HMI, diagnostyce maszyn, modernizacjach, systemach wizyjnych oraz rozwiązaniach AI dla przemysłu. Pomaga firmom szybciej diagnozować problemy, ograniczać przestoje i poprawiać efektywność produkcji. Napisz na info@tuautomation.de.';
    }
    if (lang === 'de') {
      return 'Hallo, ich bin der virtuelle Assistent von TU Automation. Tomasz hat über zwanzig Jahre Erfahrung in der industriellen Automatisierung, Instandhaltung und Maschineninbetriebnahme — spezialisiert auf Siemens SPS mit S7 und TIA Portal, HMI, Maschinendiagnose, Modernisierung, Bildverarbeitungssysteme und KI-Lösungen für die Produktion. Er hilft Unternehmen, Probleme schneller zu diagnostizieren, Ausfallzeiten zu reduzieren und die Produktion effizienter zu machen. Schreiben Sie an info@tuautomation.de.';
    }
    return "Hi, I'm the virtual assistant of TU Automation. Tomasz has over twenty years of experience in industrial automation, maintenance and machine commissioning — specializing in Siemens PLC with S7 and TIA Portal, HMI, machine diagnostics, modernizations, vision systems and industrial AI solutions. He helps companies diagnose problems faster, reduce downtime and improve production efficiency. Reach out at info@tuautomation.de.";
  }

  // ── DOM ──
  var uiLang = 'en';
  var ST = {
    en: { off: 'AI Assistant Off', on: 'AI assistant active', thinking: 'Preparing…', speaking: 'Speaking', eleven: 'ElevenLabs voice active', browser: 'Browser voice', down: 'Browser voice (offline)' },
    pl: { off: 'Asystent AI nieaktywny', on: 'Asystent AI aktywny', thinking: 'Przygotowuję…', speaking: 'Mówię', eleven: 'Głos ElevenLabs', browser: 'Głos przeglądarki', down: 'Głos przeglądarki (offline)' },
    de: { off: 'KI-Assistent aus', on: 'KI-Assistent aktiv', thinking: 'Bereite vor…', speaking: 'Spricht', eleven: 'ElevenLabs-Stimme aktiv', browser: 'Browser-Stimme', down: 'Browser-Stimme (offline)' }
  };
  function statusTextFor() { return ST[uiLang] || ST.en; }
  var statusText = statusTextFor(); // updated on init/toggle
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  var $stat, $wf, $orb, $pwr, $led;
  function buildUI() {
    var dock = el('div', 'tuai-dock');
    var pill = el('div', 'tuai-pill');
    var info = el('div', 'tuai-info');
    $stat = el('span', 'tuai-stat', statusText.off);
    $wf = el('div', 'tuai-wf', '<i></i><i></i><i></i><i></i><i></i>');
    info.appendChild($stat); info.appendChild($wf);
    $pwr = el('button', 'tuai-pwr', 'ON'); $pwr.type = 'button'; $pwr.setAttribute('aria-label', 'Toggle AI assistant');
    pill.appendChild(info); pill.appendChild($pwr);
    $orb = el('div', 'tuai-orb');
    $orb.title = 'TU Automation AI assistant';
    $led = el('span', 'tuai-led');
    $orb.appendChild($led);
    $orb.insertAdjacentHTML('beforeend',
      '<svg width="38" height="38" viewBox="0 0 120 120" aria-hidden="true">' +
      '<circle class="tuai-dring" cx="60" cy="60" r="54" fill="none" stroke="rgba(20,184,166,.4)" stroke-width="2" stroke-dasharray="3 8"/>' +
      '<path class="tuai-head" d="M60 22 L90 38 L90 72 L60 98 L30 72 L30 38 Z"/>' +
      '<line class="tuai-eye" x1="49" y1="54" x2="55" y2="54"/><line class="tuai-eye" x1="65" y1="54" x2="71" y2="54"/>' +
      '<circle class="tuai-core" cx="60" cy="68" r="7"/></svg>');
    dock.appendChild(pill); dock.appendChild($orb);
    document.body.appendChild(dock);
  }

  function setState(key) { // off|on|thinking|speaking
    if (!$stat) return;
    var label = (key === 'thinking') ? statusText.thinking : (key === 'speaking') ? statusText.speaking
      : on ? statusText.on : statusText.off;
    $stat.textContent = label;
    $stat.classList.toggle('on', key === 'on' || key === 'speaking');
    $wf.className = 'tuai-wf' + (key === 'speaking' ? ' speaking' : key === 'thinking' ? ' thinking' : '');
    $orb.classList.toggle('speaking', key === 'speaking');
    if ($led) {
      var c = (key === 'thinking') ? '#f59e0b' : (on ? '#39ff9e' : '#3a4a5e');
      $led.style.background = c; $led.style.boxShadow = (on || key === 'thinking') ? ('0 0 9px ' + c) : 'none';
    }
  }
  function setStatusLabel(txt) { if ($stat) $stat.textContent = txt; }

  // ── audio ──
  function stopSpeech() { if (curAudio) { try { curAudio.pause(); } catch (e) {} curAudio = null; } if (ttsOK) { try { window.speechSynthesis.cancel(); } catch (e) {} } speaking = false; }
  function playB64(b64, mime) {
    try {
      stopSpeech();
      var bin = atob(b64), n = bin.length, a = new Uint8Array(n); for (var i = 0; i < n; i++) a[i] = bin.charCodeAt(i);
      var url = URL.createObjectURL(new Blob([a], { type: mime || 'audio/mpeg' }));
      curAudio = new Audio(url); speaking = true; setState('speaking'); setStatusLabel(statusText.eleven);
      curAudio.onended = function () { speaking = false; setState(on ? 'on' : 'off'); try { URL.revokeObjectURL(url); } catch (e) {} };
      curAudio.onerror = function () { speaking = false; setState(on ? 'on' : 'off'); };
      var p = curAudio.play(); if (p && p.catch) p.catch(function () { browserSpeak(lastText, lastLang); });
      return true;
    } catch (e) { return false; }
  }
  var lastText = '', lastLang = 'en';
  function browserSpeak(text, lang, label) {
    if (!ttsOK) { setStatusLabel('Voice not supported'); return; }
    stopSpeech();
    var u = new SpeechSynthesisUtterance(text); u.lang = (lang === 'pl') ? 'pl-PL' : 'en-US';
    var vs = window.speechSynthesis.getVoices() || [], pref = (lang === 'pl') ? 'pl' : 'en';
    for (var i = 0; i < vs.length; i++) { if ((vs[i].lang || '').toLowerCase().indexOf(pref) === 0) { u.voice = vs[i]; break; } }
    speaking = true; setState('speaking'); setStatusLabel(label || statusText.browser);
    u.onend = function () { speaking = false; setState(on ? 'on' : 'off'); };
    u.onerror = function () { speaking = false; setState(on ? 'on' : 'off'); };
    window.speechSynthesis.speak(u);
  }

  // ── intro ──
  function speakIntro() {
    var lang = detectLang(); lastLang = lang;
    setState('thinking');
    if (ctrl) { try { ctrl.abort(); } catch (e) {} }
    var c = (typeof AbortController !== 'undefined') ? new AbortController() : null; ctrl = c;
    var opts = { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: lang, pageContext: pageContext() }) };
    if (c) opts.signal = c.signal;
    fetch(BACKEND + AGENT_ENDPOINT, opts)
      .then(function (r) { if (!r.ok) throw new Error('status'); return r.json(); })
      .then(function (d) { if (!on) return; if (!d || !d.ok) throw new Error('bad');
        try { console.log('[tu-ai-agent] audioProvider: ' + d.audioProvider); console.log('[tu-ai-agent] ttsAvailable: ' + d.ttsAvailable); } catch (e) {}
        lastText = d.text || localIntro(lang);
        if (d.audioProvider === 'elevenlabs' && d.ttsAvailable && d.audioBase64) {
          if (!playB64(d.audioBase64, d.audioMimeType || 'audio/mpeg')) browserSpeak(lastText, lang);
        } else {
          try { console.warn('[tu-ai-agent] no ElevenLabs audio in response → browser fallback'); } catch (e) {}
          browserSpeak(lastText, lang);
        }
      })
      .catch(function (err) { if (err && err.name === 'AbortError') return; if (!on) return;
        try { console.warn('[tu-ai-agent] backend request failed → browser fallback: ' + (err && err.message ? err.message : err)); } catch (e) {}
        lastText = localIntro(lang); browserSpeak(lastText, lang, statusText.down);
      });
  }

  function turnOn() { if (on) return; on = true; uiLang = detectLang(); statusText = statusTextFor(); $orb.classList.add('on'); $pwr.classList.add('on'); $pwr.textContent = 'OFF'; setState('on'); speakIntro(); }
  function turnOff() { on = false; $orb.classList.remove('on', 'speaking'); $pwr.classList.remove('on'); $pwr.textContent = 'ON'; if (ctrl) { try { ctrl.abort(); } catch (e) {} ctrl = null; } stopSpeech(); setState('off'); }
  function toggle() { on ? turnOff() : turnOn(); }

  function init() {
    uiLang = detectLang(); statusText = statusTextFor();
    buildUI(); setState('off');
    document.addEventListener('click', function (ev) {
      var t = ev.target.closest ? ev.target.closest('.tuai-pwr, .tuai-orb') : null; if (!t) return; toggle();
    });
    if (ttsOK && window.speechSynthesis.getVoices().length === 0) { try { window.speechSynthesis.onvoiceschanged = function () {}; } catch (e) {} }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
