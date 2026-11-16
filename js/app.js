(() => {
  const C = window.CONFIG, S = C.site, app = document.getElementById('app');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const list = a => (a || []).filter(Boolean);

  // Theme + Kopfbereich
  for (const [k, v] of Object.entries(C.theme || {})) document.documentElement.style.setProperty('--' + k, v);
  document.title = S.name;
  const logo = document.getElementById('logo'); logo.src = S.logo; logo.alt = '';
  document.getElementById('brandName').textContent = S.name;
  document.getElementById('footer').innerHTML =
    `<img class="logo-f" src="${esc(S.logo)}" alt="">` +
    `<p>${esc(S.footer || '')}</p>` +
    (S.contact ? `<p><a href="${esc(S.contact.url)}" target="_blank" rel="noopener noreferrer">${esc(S.contact.label)}</a></p>` : '') +
    `<nav class="legal-links" aria-label="Rechtliche Informationen"><a href="#/impressum">Impressum</a><a href="#/datenschutz">Datenschutz</a></nav>`;

  function legalPage(kind) {
    const L = S.legal || {};
    const missing = (keys) => keys.filter(([key]) => !L[key]).map(([, label]) => label);
    const address = [L.street, [L.postalCode, L.city].filter(Boolean).join(' ')].filter(Boolean).map(esc);
    const contactMissing = missing([['operator', 'vollständiger Name'], ['street', 'Straße und Hausnummer'], ['postalCode', 'Postleitzahl'], ['city', 'Ort'], ['email', 'E-Mail-Adresse']]);
    const hostingMissing = missing([
      ['hostingProvider', 'Hosting-Anbieter'], ['hostingAddress', 'Anschrift des Hosting-Anbieters'],
      ['hostingPrivacyUrl', 'Datenschutzhinweise des Hosting-Anbieters'], ['hostingRegion', 'Hosting-Region'],
      ['logRetention', 'Speicherdauer der Server-Protokolle']
    ]);
    const warning = (items) => items.length
      ? `<p class="legal-warning"><strong>Vor Veröffentlichung ergänzen:</strong> ${items.map(esc).join(', ')}.</p>` : '';
    const email = L.email ? `<a href="mailto:${esc(L.email)}">${esc(L.email)}</a>` : '<strong>[E-Mail-Adresse ergänzen]</strong>';
    const phone = L.phone ? `<p>Telefon: ${esc(L.phone)}</p>` : '';
    const heading = kind === 'impressum' ? 'Impressum' : 'Datenschutzerklärung';
    document.title = `${heading} – ${S.name}`;
    document.documentElement.style.setProperty('--bg', 'var(--paper)');

    if (kind === 'impressum') {
      app.innerHTML = `<section class="legal-page"><a class="back" href="#/">← Zur Startseite</a><h1>${heading}</h1>${warning(contactMissing)}
        <h2>Angaben gemäß § 5 DDG</h2><p>${L.operator ? esc(L.operator) : '<strong>[Vollständigen Namen ergänzen]</strong>'}<br>${address.length ? address.join('<br>') : '<strong>[Vollständige Anschrift ergänzen]</strong>'}</p>
        <h2>Kontakt</h2><p>E-Mail: ${email}</p>${phone}
        <h2>Inhaltlich verantwortlich</h2><p>${L.operator ? esc(L.operator) : '<strong>[Vollständigen Namen ergänzen]</strong>'}<br>${address.length ? address.join('<br>') : '<strong>[Vollständige Anschrift ergänzen]</strong>'}</p>
        <p class="legal-note">Diese Website ist eine private, nicht-kommerzielle Präsentationsseite. Die Angaben müssen vor Veröffentlichung geprüft und vervollständigt werden.</p></section>`;
      return;
    }

    app.innerHTML = `<section class="legal-page"><a class="back" href="#/">← Zur Startseite</a><h1>${heading}</h1>
      ${warning([...contactMissing, ...hostingMissing])}
      <h2>1. Verantwortliche Person</h2><p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br>
      ${L.operator ? esc(L.operator) : '<strong>[Vollständigen Namen ergänzen]</strong>'}<br>
      ${address.length ? address.join('<br>') : '<strong>[Vollständige Anschrift ergänzen]</strong>'}<br>
      E-Mail: ${email}</p>
      <h2>2. Hosting und Server-Protokolle</h2>
      <p>Diese Website wird mit GitHub Pages als statische Website bereitgestellt. Beim Aufruf wird insbesondere die IP-Adresse an GitHub übermittelt. GitHub erklärt, IP-Adressen von Besuchern einer GitHub-Pages-Website zu Sicherheitszwecken zu protokollieren und zu speichern. Soweit ich für die Bereitstellung und Sicherheit dieser Website selbst personenbezogene Daten verarbeite, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und zuverlässigen Betrieb). Für eigene Verarbeitungen durch GitHub gelten zusätzlich die Datenschutzhinweise von GitHub.</p>
      <p>Anbieter: ${L.hostingProvider ? esc(L.hostingProvider) : '<strong>[Hosting-Anbieter ergänzen]</strong>'}<br>
      Anschrift: ${L.hostingAddress ? esc(L.hostingAddress) : '<strong>[Anschrift ergänzen]</strong>'}<br>
      Region des Hostings: ${L.hostingRegion ? esc(L.hostingRegion) : '<strong>[Region ergänzen]</strong>'}<br>
      Speicherdauer der Protokolle: ${L.logRetention ? esc(L.logRetention) : '<strong>[Speicherdauer beim Anbieter erfragen]</strong>'}</p>
      ${L.hostingPrivacyUrl ? `<p><a href="${esc(L.hostingPrivacyUrl)}" target="_blank" rel="noopener noreferrer">Datenschutzhinweise des Hosting-Anbieters</a></p>` : ''}
      <p>Für Übermittlungen aus dem EWR nennt GitHub unter anderem Standardvertragsklauseln und das EU-U.S. Data Privacy Framework. Prüfe die für dein Konto geltenden Vertragsbedingungen und die aktuellen Anbieterangaben; Hosting-Region und Aufbewahrung können sich ändern.</p>
      <p>Bitte prüfe außerdem, ob für dein konkretes Vertragsverhältnis ein Vertrag zur Auftragsverarbeitung erforderlich ist.</p>
      <h2>3. Cookies, Analyse und externe Inhalte</h2>
      <p>Diese Website setzt nach dem hier bereitgestellten Quellcode keine Cookies oder vergleichbaren Speichertechnologien ein und verwendet keine Analyse- oder Marketingdienste. Schriftarten, Bilder, Skripte und Stylesheets werden lokal von dieser Website geladen; es werden dafür keine Google Fonts oder sonstigen externen Inhalte eingebunden. Wenn du selbst externe Links in der Konfiguration ergänzt, gelten beim Besuch der verlinkten Angebote deren Datenschutzhinweise.</p>
      <h2>4. Kontaktaufnahme</h2><p>Diese Website enthält kein Kontaktformular. Wenn du per E-Mail Kontakt aufnimmst, werden die von dir übermittelten Angaben zur Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern es um ein Vertrags- oder vorvertragliches Anliegen geht, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
      <h2>5. Deine Rechte</h2><p>Du hast im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen. Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren.</p>
      <h2>6. Aktualität</h2><p>Diese Datenschutzhinweise müssen an den tatsächlich eingesetzten Hosting-Anbieter und dessen Einstellungen angepasst werden.</p></section>`;
  }

  const STAT_LABELS = [
    ['totalDays', 'Samen bis Ernte'], ['generation', 'Generation'], ['height', 'Wuchshöhe'],
    ['yield', 'Ertrag'], ['thc', 'THC'], ['cbd', 'CBD']
  ];

  const ICON_PATHS = {
    totalDays: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
    generation: '<path d="M7 3c7 3 3 15 10 18M17 3c-7 3-3 15-10 18M8 7h8M7 12h10M8 17h8"/>',
    height: '<path d="M12 20V4m0 0-5 5m5-5 5 5M12 20l5-5m-5 5-5-5"/>',
    yield: '<path d="M12 21v-8m0 0c-4 0-7-2.5-7-6 4.5 0 7 2.5 7 6Zm0-3c0-4 2.5-7 7-7 0 4.5-2.5 7-7 7Z"/>',
    thc: '<path d="m12 3 7 4v8l-7 5-7-5V7l7-4Z"/><circle cx="12" cy="11" r="2"/>',
    cbd: '<path d="M12 21c-4-4-6-8-4-12 1-2 3-4 4-6 1 2 3 4 4 6 2 4 0 8-4 12Z"/><path d="M12 20v-8m0 3 3-3"/>',
    aroma: '<path d="M8 20c-2-2-2-4 0-6s2-4 0-6m8 12c-2-2-2-4 0-6s2-4 0-6M12 4v2"/>',
    effect: '<path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>',
    sparkles: '<path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>',
    leaf: '<path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-6 10-16Z"/><path d="M5 20c3-4 6-7 11-10"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ICON_PATHS.leaf}</svg>`;

  function home() {
    const filterTags = [...new Set(C.strains.flatMap(s => list(s.filterTags)))];
    const cards = C.strains.map((s, i) => `
      <a class="card reveal strain-card" data-filter-tags="${esc(list(s.filterTags).map(tag => tag.toLocaleLowerCase('de')).join('|'))}" style="--d:${i*90}ms;--c-bg:${esc(s.bg || '')}" href="#/strain/${esc(s.id)}">
        ${s.status ? `<span class="badge">${esc(s.status)}</span>` : ''}
        <img src="${esc(s.cover || s.pack?.front)}" alt="Samenpackung ${esc(s.name)}" loading="lazy">
        <div class="meta"><h3>${esc(s.name)}</h3><div class="gen">${list(s.genetics).map(esc).join(' × ')}</div></div>
      </a>`).join('');
    const soon = S.showComingSoon ? `<div class="card soon reveal">${esc(S.comingSoonText || 'Bald mehr')}</div>` : '';
    const ticker = Array(8).fill('No Sales ✦ Private Stash ✦ Homegrown').join(' ✦ ');
    app.innerHTML = `
      <section class="hero">
        <div><h1>Robin's<br><em>Homegrown</em></h1><p>${esc(S.tagline || '')}</p></div>
        <img class="logo-big" src="${esc(S.logo)}" alt="${esc(S.name)}">
      </section>
      <div class="marquee"><span>${ticker} ✦ ${ticker}</span></div>
      <section class="section" id="strains"><h2>Alle Sorten</h2>
        <div class="strain-tools">
          <div class="filter-options" role="group" aria-label="Sorten nach Tags filtern">
            <button class="filter-chip is-active" type="button" data-filter="" aria-pressed="true">Alle</button>
            ${filterTags.map(tag => `<button class="filter-chip" type="button" data-filter="${esc(tag.toLocaleLowerCase('de'))}" aria-pressed="false">${esc(tag)}</button>`).join('')}
          </div>
          <p class="filter-count" id="filterCount" aria-live="polite"></p>
        </div>
        <div class="grid" id="strainGrid">${cards}${soon}</div>
        <p class="empty-state" id="noStrains" hidden>Keine Sorten in diesem Filter. Wähle einen anderen Filter.</p>
      </section>
      ${S.about ? `<section class="about" id="about"><div class="section"><h2>Zu Robin's Homegrown</h2><p>${esc(S.about)}</p></div></section>` : ''}`;
    document.documentElement.style.setProperty('--bg', 'var(--yellow)');

    const filterButtons = [...app.querySelectorAll('.filter-chip')];
    const strainCards = [...app.querySelectorAll('.strain-card')];
    const count = document.getElementById('filterCount');
    const noStrains = document.getElementById('noStrains');
    const comingSoon = app.querySelector('.card.soon');
    let activeFilter = '';

    const updateStrains = () => {
      let visible = 0;
      strainCards.forEach(card => {
        const matches = !activeFilter || card.dataset.filterTags.split('|').includes(activeFilter);
        if (matches && card.hidden) {
          card.classList.remove('filter-enter');
          void card.offsetWidth;
          card.classList.add('filter-enter');
        }
        card.hidden = !matches;
        if (matches) visible++;
      });
      if (comingSoon) comingSoon.hidden = Boolean(activeFilter);
      noStrains.hidden = visible > 0;
      count.textContent = `${visible} ${visible === 1 ? 'Sorte' : 'Sorten'}`;
    };

    filterButtons.forEach(button => button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      updateStrains();
    }));
    updateStrains();
  }

  function detail(id) {
    const s = C.strains.find(x => x.id === id);
    if (!s) { app.innerHTML = `<div class="notfound">Sorte nicht gefunden.<br><a href="#/">Zurück</a></div>`; return; }
    document.title = `${s.name} – ${S.name}`;
    const root = document.documentElement.style;
    root.setProperty('--accent', s.accent || 'var(--orange)'); root.setProperty('--bg', s.bg || 'var(--yellow)');

    const tags = [s.type, s.packSize, s.born && 'Born: ' + s.born].filter(Boolean)
      .map((t, i) => `<span class="tag ${i === 0 ? 'hot' : ''}">${esc(t)}</span>`).join('');
    const stats = STAT_LABELS.filter(([k]) => s.stats?.[k])
      .map(([k, l], i) => `<div class="stat reveal s${i % 5}" style="--d:${i * 300}ms"><div class="stat-head"><small>${l}</small><span class="stat-icon">${icon(k)}</span></div><strong>${esc(s.stats[k])}</strong></div>`).join('');
    const cultivationInfo = list(s.cultivationInfo).filter(info => info?.label && info?.value)
      .map((info, i) => `<div class="stat reveal s${i % 5}" style="--d:${i * 120}ms"><div class="stat-head"><small>${esc(info.label)}</small><span class="stat-icon">${icon('leaf')}</span></div><strong>${esc(info.value)}</strong></div>`).join('');
    const stampOptions = s.forecastStamp || {};
    const stampIcon = Object.prototype.hasOwnProperty.call(ICON_PATHS, stampOptions.icon) ? stampOptions.icon : 'sparkles';
    const stampTone = ['orange', 'blue', 'green', 'pink', 'ink'].includes(stampOptions.tone) ? stampOptions.tone : 'orange';
    const stamp = s.forecast ? `<div class="forecast reveal"><span class="stamp stamp--${stampTone}">${icon(stampIcon)}<span>${esc(stampOptions.label || 'Prognose')}</span></span><p>${esc(s.forecastNote || 'Werte sind geschätzt.')}</p></div>` : '';
    const parents = list(s.parents).map((parent, i) => {
      if (typeof parent === 'string') {
        return `<article class="parent-card reveal"><span class="parent-role">Elternteil ${i + 1}</span><strong>${esc(parent)}</strong></article>`;
      }
      if (!parent?.name) return '';
      return `<article class="parent-card reveal">
        <div class="parent-topline">
          <span class="parent-role">${esc(parent.role || `Elternteil ${i + 1}`)}</span>
          ${parent.fGen ? `<span class="parent-generation">${esc(parent.fGen)}</span>` : ''}
        </div>
        <strong>${esc(parent.name)}</strong>
        ${parent.breeder ? `<span class="parent-breeder">Züchter: ${esc(parent.breeder)}</span>` : ''}
      </article>`;
    }).join('');
    const parentsSection = parents
      ? `<section class="parents"><h3>Eltern</h3><div class="parent-grid">${parents}</div></section>` : '';
    const notesSection = s.notes
      ? `<section class="notes-block"><h3>Hinweise</h3><div class="notes reveal"><p>${esc(s.notes)}</p></div></section>` : '';
    const parentNotes = parentsSection || notesSection
      ? `<div class="parent-notes">${parentsSection}${notesSection}</div>` : '';
    const chips = (title, arr, iconName) => list(arr).length
      ? `<div class="reveal"><h3 class="list-heading">${icon(iconName)}<span>${title}</span></h3><div class="tags">${arr.map(a => `<span class="tag">${esc(a)}</span>`).join('')}</div></div>` : '';
    const lists = [chips('Aroma', s.aroma, 'aroma'), chips('Wirkung', s.effect, 'effect')].join('');
    const gal = list(s.gallery).map(g =>
      `<figure class="reveal" data-src="${esc(g.src)}" data-cap="${esc(g.caption || '')}"><img src="${esc(g.src)}" alt="${esc(g.caption || s.name)}" loading="lazy">${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ''}</figure>`).join('');
    const pack = s.pack?.back
      ? `<button class="flip" id="flip" aria-label="Packung umdrehen">
          <div class="flip-in">
            <div class="face f"><img src="${esc(s.pack.front || s.cover)}" alt="Packung Vorderseite"></div>
            <div class="face b"><img src="${esc(s.pack.back)}" alt="Packung Rückseite"></div>
          </div>
        </button><p class="hint">Klick zum Umdrehen ↻</p>`
      : `<div class="pack-static"><img src="${esc(s.pack?.front || s.cover)}" alt="Packung Vorderseite"></div>`;

    app.innerHTML = `
      <section class="detail"><div class="wrap">
        <a class="back" href="#/">← Alle Sorten</a>
        <div class="dhead">
          <div class="pack-view">${pack}</div>
          <div class="dinfo">
            <h1>${esc(s.name)}</h1>
            ${list(s.genetics).length ? `<div class="cross">${s.genetics.map(g => `<b>${esc(g)}</b>`).join('<i>×</i>')}</div>` : ''}
            <div class="tags">${tags}</div>
            ${s.description ? `<p class="desc">${esc(s.description)}</p>` : ''}
          </div>
        </div>
        ${stats ? `${stamp}<div class="stats">${stats}</div>` : ''}
        ${cultivationInfo ? `<section class="grow-info"><h2>Anbauinfos</h2><div class="stats">${cultivationInfo}</div></section>` : ''}
        ${lists.trim() ? `<div class="lists">${lists}</div>` : ''}
        ${parentNotes}
        ${gal ? `<div class="gal"><h2>Galerie</h2><div class="gal-grid">${gal}</div></div>` : ''}
      </div></section>`;

    const flip = document.getElementById('flip');
    if (flip) flip.onclick = () => flip.classList.toggle('is-back');
    app.querySelectorAll('.gal-grid figure').forEach(f => f.onclick = () => openLb(f.dataset.src, f.dataset.cap));
  }

  const lb = document.getElementById('lightbox');
  function openLb(src, cap) { lb.querySelector('img').src = src; lb.querySelector('p').textContent = cap; lb.hidden = false; }
  lb.onclick = () => lb.hidden = true;
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  const observe = () => app.querySelectorAll('.reveal').forEach(el => io.observe(el));

  function route() {
    const m = location.hash.match(/^#\/strain\/(.+)$/);
    document.title = S.name;
    const legal = location.hash.match(/^#\/(impressum|datenschutz)$/);
    if (m) { detail(decodeURIComponent(m[1])); scrollTo(0, 0); }
    else if (legal) { legalPage(legal[1]); scrollTo(0, 0); }
    else {
      home();
      const t = location.hash === '#about' ? document.getElementById('about') : null;
      t ? t.scrollIntoView() : scrollTo(0, 0);
    }
    observe();
    document.getElementById('aboutLink').style.display = S.about ? '' : 'none';
  }
  addEventListener('hashchange', route);
  route();
})();
