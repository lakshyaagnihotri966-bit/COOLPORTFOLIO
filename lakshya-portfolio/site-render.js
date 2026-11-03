/* Applies portfolio content to the page. Source: localStorage "echo_site" (set by admin.html) or site-data.js defaults. */
(function () {
  var D = window.SITE_DEFAULT, S = D;
  try { var o = localStorage.getItem('echo_site'); if (o) S = JSON.parse(o); } catch (e) {}
  Object.keys(D).forEach(function (k) { if (S[k] === undefined) S[k] = D[k]; });
  window.SITE = S;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var list = function (s) { return String(s || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean); };
  var P = S.profile, up = function (s) { return String(s || '').toUpperCase(); };

  var mk = function (x) {
    return { src: x.image, image: x.image, alt: x.title, title: x.title, subtitle: x.subtitle, description: x.description,
      link: x.link, href: x.link || '#', category: x.category, stats: x.stats, tools: list(x.tools), deliverables: list(x.deliverables) };
  };
  window.SITE_ITEMS = {
    featured: S.projects.filter(function (x) { return x.section === 'featured'; }).map(mk),
    landing: S.projects.filter(function (x) { return x.section === 'landing'; }).map(mk)
  };

  function set(id, html) { var e = $(id); if (e) e.innerHTML = html; }

  function render() {
    document.title = P.name + ' — ' + P.roles.join(' • ');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', P.name + ' — ' + P.roles.join(', ') + '. ' + P.tagline);

    // brand, drawer
    var brand = document.querySelector('header a[href="#home"] span');
    if (brand) brand.textContent = (P.heroLine1 || P.name.split(' ')[0]).toUpperCase();
    set('drawer-brand', esc((P.heroLine1 || P.name.split(' ')[0]).toUpperCase()) + '•');
    set('drawer-name', esc(up(P.name)));
    set('drawer-role', esc(P.roles.join(' • ')));

    // hero
    set('hero-title', '<span class="block"><span class="text-[#121212]">' + esc(P.heroLine1) + '</span></span><span class="block"><span class="metallic-title">' + esc(P.heroLine2) + '</span></span>');
    set('hero-est', esc(P.estLabel));
    set('hero-pitch', esc(up(P.tagline)));
    set('hero-roles', P.roles.map(function (r, i) {
      return '<a href="#services" onclick="selectService(' + i + ')" class="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5"><span>' + esc(up(r)) + '</span></a>';
    }).join(''));
    var ph = $('hero-photo'), wrap = $('hero-photo-wrap');
    if (ph && P.photo) { ph.src = P.photo; ph.alt = P.name; if (wrap) wrap.style.display = ''; }
    else if (wrap) { wrap.style.display = 'none'; }

    // about
    set('about-headline', esc(up(P.aboutHeadline)));
    set('about-loc', esc(up(P.location + (P.college ? ' • ' + P.college : ''))));
    set('about-roles', esc(up(P.roles.join(' • '))));
    set('about-text', esc(up(P.aboutText)));
    ['sem-media-img', 'sem-media-blur'].forEach(function (id) { var e = $(id); if (e && P.aboutImage) e.src = P.aboutImage; });
    var bg = $('about-bg'); if (bg && P.aboutBg) bg.src = P.aboutBg;

    // stats
    set('stats-grid', S.stats.map(function (s) {
      return '<div class="px-8 py-10 border-neutral-200 sm:border-r last:border-r-0 border-b sm:border-b-0 last:border-b-0"><div class="text-5xl md:text-6xl font-light text-neutral-900">' + esc(s.value) + '</div><div class="text-[11px] tracking-widest uppercase text-neutral-400 mt-3">' + esc(s.label) + '</div></div>';
    }).join(''));
    var sg = $('stats-grid'); if (sg) sg.style.gridTemplateColumns = 'repeat(auto-fit,minmax(200px,1fr))';

    // experience
    var n = S.experience.length, sec = $('experience'), stage = $('exp-horizontal-stage');
    if (sec) sec.style.height = (80 + 100 * Math.max(n, 1)) + 'vh';
    if (stage) stage.style.width = (90 + 100 * Math.max(n, 1)) + 'vw';
    set('exp-chapters', S.experience.map(function (c, i) {
      return '<div class="exp-panel relative flex-shrink-0 w-[105vw] md:w-[100vw] px-8 md:px-16 lg:px-24 flex flex-col justify-center">' +
        '<div class="exp-date-bg absolute -top-8 right-12 md:right-28 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.04] tracking-tighter select-none pointer-events-none will-change-transform" data-parallax-factor="0.15">' + esc(c.dates) + '</div>' +
        '<div class="relative z-10 max-w-4xl"><div class="flex items-center gap-4 mb-4"><span class="text-xs font-semibold tracking-widest uppercase text-neutral-400">' + esc(c.dates) + '</span><span class="h-[1px] w-12 bg-white/20"></span><span class="text-xs font-bold tracking-widest uppercase text-white">' + esc(c.label) + '</span>' +
        (c.badge ? '<span class="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] font-semibold uppercase text-neutral-300">' + esc(c.badge) + '</span>' : '') + '</div>' +
        '<h3 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">' + c.title + '</h3>' +
        '<p class="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">' + esc(c.summary) + '</p>' +
        '<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-3xl mb-8">' + (c.milestones || []).map(function (m) {
          return '<div><div class="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5">' + esc(m.k) + '</div><div class="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">' + esc(m.v) + '</div></div>';
        }).join('') + '</div></div></div>';
    }).join(''));
    set('exp-jumps', S.experience.map(function (c, i) {
      var t = Math.min(1, (60 + 100 * i) / (100 * n - 10)).toFixed(2);
      return '<button type="button" class="exp-jump-btn text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border ' + (i ? 'border-white/5 text-neutral-500' : 'border-white/20 text-white bg-white/10') + ' hover:text-white transition-all" data-target-progress="' + t + '" data-phase="' + esc(up(c.label)) + '">' + esc(c.tab) + '</button>';
    }).join(''));

    // services
    set('svc-list', S.services.map(function (s, i) {
      var a = i === 0;
      return '<div id="service-' + i + '" onclick="toggleService(' + i + ')" class="accordion-item ' + (a ? 'active bg-black text-white shadow-xl scale-[1.01]' : 'bg-white text-neutral-800 border-neutral-300') + ' w-full flex flex-col px-6 py-4 rounded-3xl border hover:border-black cursor-pointer transition-all transform">' +
        '<div class="flex items-center justify-between"><span class="item-badge w-8 h-8 rounded-full border ' + (a ? 'border-neutral-700 text-neutral-300' : 'border-neutral-300 text-neutral-700') + ' flex items-center justify-center text-xs font-medium">' + (i + 1) + '</span>' +
        '<span class="item-title text-xs md:text-sm font-bold tracking-widest uppercase ' + (a ? 'text-white' : 'text-neutral-800') + '">' + esc(s.title) + '</span>' +
        '<div class="item-icon w-8 h-8 rounded-full border ' + (a ? 'border-neutral-700 rotate-90' : 'border-neutral-300 rotate-0') + ' flex items-center justify-center transition-transform"><svg class="w-3.5 h-3.5 ' + (a ? 'text-white' : 'text-neutral-700') + '" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div>' +
        '<div class="accordion-content"><p class="text-xs ' + (a ? 'text-neutral-300' : 'text-neutral-500') + ' leading-relaxed max-w-2xl mb-4">' + esc(s.desc) + '</p>' +
        '<div class="flex items-center justify-between border-t ' + (a ? 'border-neutral-800' : 'border-neutral-200') + ' pt-3"><span class="text-[11px] font-mono text-neutral-400">DELIVERABLES: ' + esc(up(s.deliverables)) + '</span>' +
        '<button onclick="event.stopPropagation(); bookSpecificService(' + esc(JSON.stringify(s.title)) + ');" class="text-xs font-bold underline ' + (a ? 'text-white' : '') + '">INQUIRE ↗</button></div></div></div>';
    }).join(''));
    set('contact-service', S.services.map(function (s) { return '<option value="' + esc(s.title) + '">' + esc(s.title) + '</option>'; }).join('') + '<option value="Other">Other / Full Project</option>');

    // socials: header icons + footer pills
    var url = function (label) { var f = S.socials.filter(function (x) { return x.label.toLowerCase() === label.toLowerCase(); })[0]; return f && f.url ? f.url : ''; };
    ['Instagram', 'Twitter', 'LinkedIn', 'GitHub'].forEach(function (l) {
      var a = document.querySelector('header a[title="' + l + '"]'); if (!a) return;
      var u = url(l); if (u) { a.href = u; } else { a.style.display = 'none'; }
    });
    var pill = 'px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white';
    set('footer-pills', S.socials.filter(function (x) { return x.url; }).map(function (x) {
      return '<a class="' + pill + '" href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.label) + '</a>';
    }).join('') + (S.contact.email ? '<a class="' + pill + '" href="mailto:' + esc(S.contact.email) + '">EMAIL</a>' : '') +
      '<button onclick="openContactModal()" class="px-7 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition transform hover:scale-105">CONTACT ME</button>');
    set('footer-cta', esc(S.footer.cta));
    set('footer-credit', esc(S.footer.credit));
    set('footer-copy', esc(S.footer.copyright));

    // section visibility
    var vis = { stats: ['stats'], experience: ['experience', 'nav-experience'], projects: ['projects', 'nav-projects'], landing: ['landing-pages', 'nav-landing-pages'], services: ['services', 'nav-services'] };
    Object.keys(vis).forEach(function (k) { if (S.show[k] === false) vis[k].forEach(function (id) { var e = $(id); if (e) e.style.display = 'none'; }); });
  }
  render();
})();
