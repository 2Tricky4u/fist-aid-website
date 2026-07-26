/* =========================================================================
   Premiers secours en Suisse, rendering + interaction
   Reads NUMBERS / GROUPS / SECTIONS from content.js and SOURCES from sources.js.
   No dependencies.
   ========================================================================= */
(function () {
  'use strict';

  var LEVELS = [
    { id: 'essentiel', label: 'Essentiel', hint: 'Les gestes que tout le monde doit connaître. Ouvrez une section pour aller plus loin.' },
    { id: 'complet',   label: 'Complet',   hint: 'Procédure complète, niveau cours de premiers secours BLS-AED (SRC).' },
    { id: 'pro',       label: 'Pro',       hint: 'Explications médicales, justification des chiffres et références aux directives.' }
  ];
  var LEVEL_IDS = LEVELS.map(function (l) { return l.id; });
  var STORE = 'psch.level';

  var state = {
    level: 'essentiel',
    open: null,      // section id currently expanded
    query: ''
  };

  /* ---------- tiny DOM helpers ---------- */

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }

  function icon(name, cls) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', cls || 'ic');
    svg.setAttribute('aria-hidden', 'true');
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#i-' + name);
    svg.appendChild(use);
    return svg;
  }

  /* Content strings may contain **bold** and a {144} phone shorthand.
     Built as DOM nodes, never innerHTML, so content stays injection-safe. */
  function rich(text, target) {
    var out = target || document.createDocumentFragment();
    var re = /\*\*(.+?)\*\*|\{(\d{3,4})\}/g;
    var last = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) out.appendChild(document.createTextNode(text.slice(last, m.index)));
      if (m[1] != null) {
        out.appendChild(el('b', null, m[1]));
      } else {
        var a = el('a', null, m[2]);
        a.href = 'tel:' + m[2];
        out.appendChild(a);
      }
      last = re.lastIndex;
    }
    if (last < text.length) out.appendChild(document.createTextNode(text.slice(last)));
    return out;
  }

  function para(text, cls) {
    var p = el('p', cls);
    rich(text, p);
    return p;
  }

  /* A list item whose marker is a ::before pseudo-element. The text must live in
     a single wrapper: the <li> is a flex container, so bare text nodes and inline
     <b> from rich() would each become separate flex items. */
  function liRich(text) {
    var li = el('li');
    var span = el('span');
    rich(text, span);
    li.appendChild(span);
    return li;
  }

  /* ---------- block renderers (one per content block `type`) ---------- */

  var BLOCK = {
    steps: function (b) {
      var wrap = el('div', 'b b--steps');
      if (b.title) wrap.appendChild(el('h4', null, b.title));
      var ol = el('ol');
      b.items.forEach(function (t) { ol.appendChild(liRich(t)); });
      wrap.appendChild(ol);
      return wrap;
    },

    list: function (b) {
      var wrap = el('div', 'b b--list');
      if (b.title) wrap.appendChild(el('h4', null, b.title));
      var ul = el('ul');
      b.items.forEach(function (t) { ul.appendChild(liRich(t)); });
      wrap.appendChild(ul);
      return wrap;
    },

    prose: function (b) {
      var wrap = el('div', 'b b--prose');
      if (b.title) wrap.appendChild(el('h4', null, b.title));
      (Array.isArray(b.text) ? b.text : [b.text]).forEach(function (t) {
        wrap.appendChild(para(t));
      });
      return wrap;
    },

    note:  function (b) { return callout(b, 'note',  'i-info');  },
    warn:  function (b) { return callout(b, 'warn',  'i-alert'); },
    myth:  function (b) { return callout(b, 'myth',  'i-alert'); },
    good:  function (b) { return callout(b, 'good',  'i-info');  },

    table: function (b) {
      var wrap = el('div', 'b');
      if (b.title) wrap.appendChild(el('h4', null, b.title));
      var box = el('div', 'tbl__wrap');
      var t = el('table', 'tbl');
      if (b.head) {
        var thead = el('thead'), tr = el('tr');
        b.head.forEach(function (h) { tr.appendChild(el('th', null, h)); });
        thead.appendChild(tr); t.appendChild(thead);
      }
      var tb = el('tbody');
      b.rows.forEach(function (row) {
        var tr2 = el('tr');
        row.forEach(function (c) { var td = el('td'); rich(c, td); tr2.appendChild(td); });
        tb.appendChild(tr2);
      });
      t.appendChild(tb); box.appendChild(t); wrap.appendChild(box);
      return wrap;
    },

    kv: function (b) {
      var wrap = el('div', 'b');
      if (b.title) wrap.appendChild(el('h4', null, b.title));
      var dl = el('dl', 'kv');
      b.items.forEach(function (pair) {
        var row = el('div');
        row.appendChild(el('dt', null, pair[0]));
        var dd = el('dd'); rich(pair[1], dd); row.appendChild(dd);
        dl.appendChild(row);
      });
      wrap.appendChild(dl);
      return wrap;
    },

    /* Recursive decision tree. Every question owns its own branches, and a branch
       may carry a follow-up question, so a path can never end up beside an
       outcome belonging to a different question. */
    tree: function (b) {
      var wrap = el('div', 'b');
      if (b.title) wrap.appendChild(el('h4', null, b.title));
      wrap.appendChild(nodeOf(b));
      return wrap;

      function nodeOf(n) {
        var d = el('div', 'tree');
        d.appendChild(el('div', 'tree__q', n.q));
        var list = el('div', 'tree__bs');
        n.branches.forEach(function (br) {
          var item = el('div', 'tree__b tree__b--' + (br.tone || 'y'));
          item.appendChild(el('span', 'tree__lab', br.label));
          var body = el('div', 'tree__body');
          rich(br.text, body);
          item.appendChild(body);
          if (br.then) item.appendChild(nodeOf(br.then));
          list.appendChild(item);
        });
        d.appendChild(list);
        return d;
      }
    },

    /* Schéma SVG. Le markup vient de figures.js : c'est du code que nous
       écrivons, pas une donnée de contenu, d'où l'usage d'innerHTML ici
       uniquement. La légende, elle, reste construite en DOM comme le reste. */
    figure: function (b) {
      var fig = window.FIGURES && window.FIGURES[b.name];
      if (!fig) return el('div');
      var wrap = el('figure', 'b fig');
      if (b.title) wrap.appendChild(el('h4', null, b.title));

      var box = el('div', 'fig__box');
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', fig.viewBox);
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', fig.title);
      svg.innerHTML = fig.svg;
      box.appendChild(svg);
      wrap.appendChild(box);

      var cap = el('figcaption', 'fig__cap');
      rich(b.caption || fig.title, cap);
      wrap.appendChild(cap);
      return wrap;
    },

    /* Planche sous licence (SRC, Samaritains, etc.). Le fichier vit dans
       planches/ et n'est pas fourni avec le site : si l'image manque ou échoue,
       la figure se retire d'elle-même plutôt que d'afficher une image cassée,
       et le texte de la section reste seul. Le crédit est obligatoire dès qu'une
       planche sous licence est utilisée. */
    image: function (b) {
      // Masquée tant que le chargement n'a pas réussi : une planche absente ne
      // laisse ainsi ni image cassée ni cadre vide. Pas de loading="lazy" ici,
      // sinon une image hors écran n'est jamais chargée, donc jamais ni révélée
      // ni retirée. Le panneau n'étant construit qu'à l'ouverture de la carte,
      // le chargement est déjà différé de fait.
      var wrap = el('figure', 'b fig fig--pending');
      if (b.title) wrap.appendChild(el('h4', null, b.title));

      var box = el('div', 'fig__box');
      var img = new Image();
      img.alt = b.alt || '';
      img.decoding = 'async';
      img.onload  = function () { wrap.classList.remove('fig--pending'); };
      img.onerror = function () { wrap.remove(); };
      img.src = b.src;
      box.appendChild(img);
      wrap.appendChild(box);

      var cap = el('figcaption', 'fig__cap');
      if (b.caption) rich(b.caption, cap);
      if (b.credit) {
        var cr = el('span', 'fig__credit');
        rich(b.credit, cr);
        cap.appendChild(cr);
      }
      wrap.appendChild(cap);
      return wrap;
    },

    fast: function (b) {
      var wrap = el('div', 'b');
      var box = el('div', 'fast');
      box.appendChild(el('div', 'fast__t', b.title || 'Le test FAST'));
      var g = el('div', 'fast__g');
      b.items.forEach(function (it) {
        var c = el('div', 'fast__c');
        c.appendChild(el('b', null, it[0]));
        c.appendChild(el('span', null, it[1]));
        g.appendChild(c);
      });
      box.appendChild(g);
      if (b.foot) box.appendChild(para(b.foot, 'fast__f'));
      wrap.appendChild(box);
      return wrap;
    }
  };

  function callout(b, cls, ic) {
    var d = el('div', 'b ' + cls);
    d.appendChild(icon(ic.slice(2)));
    var body = el('div');
    if (b.title) body.appendChild(el('b', 'co__t', b.title));
    rich(b.text, body);
    d.appendChild(body);
    return d;
  }

  function renderBlocks(blocks) {
    var host = el('div', 'blocks');
    (blocks || []).forEach(function (b) {
      var fn = BLOCK[b.type];
      if (!fn) return;
      var node = fn(b);
      if (b.wide) node.classList.add('b--wide');
      host.appendChild(node);
    });
    return host;
  }

  /* ---------- sources ---------- */

  function renderSources(ids) {
    if (!ids || !ids.length) return null;
    var wrap = el('div', 'srcs b--wide');
    wrap.appendChild(el('h4', null, 'Sources'));
    var ul = el('ul');
    ids.forEach(function (id) {
      var s = window.SOURCES[id];
      if (!s) return;
      var li = el('li');
      li.appendChild(el('em', null, s.org));
      li.appendChild(document.createTextNode(' : '));
      if (s.url) {
        var a = el('a', null, s.title);
        a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
        li.appendChild(a);
      } else {
        li.appendChild(document.createTextNode(s.title));
      }
      if (s.ref) li.appendChild(document.createTextNode('. ' + s.ref));
      li.appendChild(document.createTextNode('. Vérifié le ' + fmtDate(s.checked) + '.'));
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    return wrap;
  }

  function fmtDate(iso) {
    if (!iso) return '';
    var p = iso.split('-');
    return p[2] + '.' + p[1] + '.' + p[0];
  }

  /* ---------- emergency numbers strip ---------- */

  function renderNumbers() {
    var ul = document.getElementById('nums');
    window.NUMBERS.forEach(function (n) {
      var li = el('li');
      var a = el('a');
      a.href = 'tel:' + n.num;
      a.setAttribute('aria-label', n.label + ', appeler le ' + n.num.split('').join(' '));
      a.appendChild(icon(n.icon));
      var box = el('div');
      box.appendChild(el('div', 'nums__n', n.num));
      box.appendChild(el('div', 'nums__l', n.label));
      a.appendChild(box);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /* ---------- level switch ---------- */

  function renderLevelSwitch() {
    var host = document.getElementById('lvl');
    LEVELS.forEach(function (l) {
      var b = el('button', null, l.label);
      b.type = 'button';
      b.dataset.level = l.id;
      b.setAttribute('aria-pressed', String(l.id === state.level));
      b.addEventListener('click', function () { setLevel(l.id); });
      host.appendChild(b);
    });
    syncLevelUI();
  }

  function syncLevelUI() {
    document.querySelectorAll('#lvl button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.level === state.level));
    });
    var l = LEVELS.find(function (x) { return x.id === state.level; });
    document.getElementById('lvlhint').textContent = l ? l.hint : '';
  }

  function setLevel(id) {
    if (LEVEL_IDS.indexOf(id) === -1) return;
    state.level = id;
    try { localStorage.setItem(STORE, id); } catch (e) { /* private mode */ }
    syncLevelUI();
    // re-render every open panel at the new depth
    document.querySelectorAll('.card.is-open').forEach(function (card) {
      fillPanel(card, byId(card.dataset.id), state.level);
    });
  }

  function byId(id) {
    return window.SECTIONS.find(function (s) { return s.id === id; });
  }

  /* ---------- cards ---------- */

  function renderCard(sec) {
    var card = el('article', 'card' + (sec.accent === 'red' ? ' card--red' : ''));
    card.dataset.id = sec.id;
    card.id = 'sec-' + sec.id;

    var body = el('div', 'card__body');
    var head = el('div', 'card__head');
    var chip = el('span', 'chip');
    chip.appendChild(icon(sec.icon));
    head.appendChild(chip);
    var h3 = el('h3', 'card__title', (sec.num ? sec.num + '. ' : '') + sec.title);
    head.appendChild(h3);
    body.appendChild(head);

    var ul = el('ul', 'bul');
    sec.essentiel.forEach(function (t) { ul.appendChild(liRich(t)); });
    body.appendChild(ul);
    card.appendChild(body);

    var btn = el('button', 'card__more');
    btn.type = 'button';
    btn.id = 'more-' + sec.id;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'panel-' + sec.id);
    btn.appendChild(el('span', null, 'Voir détails'));
    btn.appendChild(icon('chevron'));
    btn.addEventListener('click', function () { toggle(sec.id); });
    card.appendChild(btn);

    var panel = el('div', 'panel');
    panel.id = 'panel-' + sec.id;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', 'more-' + sec.id);
    var inner = el('div', 'panel__in');
    inner.appendChild(el('div', 'panel__pad'));
    panel.appendChild(inner);
    card.appendChild(panel);

    return card;
  }

  /* Build the panel contents for a given depth. Called on open and on level change. */
  function fillPanel(card, sec, level) {
    var pad = card.querySelector('.panel__pad');
    pad.textContent = '';

    // depth chooser inside the panel
    var nav = el('div', 'lvlnav');
    nav.appendChild(el('span', 'lvl__lab', 'Niveau de détail'));
    LEVELS.forEach(function (l) {
      if (l.id === 'essentiel') return;              // essentiel is the card itself
      var b = el('button', null, l.label);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(depthRank(level) >= depthRank(l.id)));
      b.addEventListener('click', function () { setLevel(l.id); });
      nav.appendChild(b);
    });
    var close = el('button', null, 'Replier');
    close.type = 'button';
    close.addEventListener('click', function () { toggle(sec.id); });
    nav.appendChild(close);
    pad.appendChild(nav);

    var blocks = (sec.complet || []).slice();
    if (depthRank(level) >= 2 && sec.pro) blocks = blocks.concat(sec.pro);
    var host = renderBlocks(blocks);

    if (depthRank(level) >= 2) {
      var s = renderSources(sec.sources);
      if (s) host.appendChild(s);
    }
    pad.appendChild(host);
  }

  function depthRank(id) { return Math.max(0, LEVEL_IDS.indexOf(id)); }

  function toggle(id, opts) {
    opts = opts || {};
    var card = document.getElementById('sec-' + id);
    if (!card) return;
    var isOpen = card.classList.contains('is-open');

    // close whatever is open (one panel at a time keeps the grid stable)
    if (state.open && state.open !== id) close(state.open);

    if (isOpen) { close(id); return; }

    fillPanel(card, byId(id), state.level);
    card.classList.add('is-open');
    card.querySelector('.card__more').setAttribute('aria-expanded', 'true');
    card.querySelector('.card__more span').textContent = 'Masquer les détails';
    state.open = id;

    if (history.replaceState) history.replaceState(null, '', '#' + id);
    if (!opts.silent) {
      card.scrollIntoView({ block: 'nearest', behavior: prefersReduced() ? 'auto' : 'smooth' });
      card.querySelector('.card__title').setAttribute('tabindex', '-1');
      card.querySelector('.card__title').focus({ preventScroll: true });
    }
  }

  function close(id) {
    var card = document.getElementById('sec-' + id);
    if (!card) return;
    card.classList.remove('is-open');
    var btn = card.querySelector('.card__more');
    btn.setAttribute('aria-expanded', 'false');
    btn.querySelector('span').textContent = 'Voir détails';
    if (state.open === id) {
      state.open = null;
      if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    }
  }

  function prefersReduced() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ---------- page build ---------- */

  function renderMain() {
    var main = document.getElementById('contenu');
    main.textContent = '';

    window.GROUPS.forEach(function (g) {
      var secs = window.SECTIONS.filter(function (s) { return s.group === g.id; });
      if (!secs.length) return;

      var head = el('div', 'grp');
      head.dataset.group = g.id;
      head.appendChild(el('h2', null, g.title));
      if (g.note) head.appendChild(el('span', null, g.note));
      main.appendChild(head);

      var grid = el('div', 'grid');
      grid.dataset.group = g.id;
      secs.forEach(function (s) { grid.appendChild(renderCard(s)); });
      main.appendChild(grid);
    });

    var empty = el('p', 'empty', 'Aucune section ne correspond à cette recherche.');
    empty.id = 'empty';
    empty.hidden = true;
    main.appendChild(empty);
  }

  /* ---------- search ---------- */

  function norm(s) {
    // strip accents so "brulure" finds "brûlure"
    return (s || '').toLowerCase().normalize('NFD').replace(new RegExp('[\\u0300-\\u036f]', 'g'), '');
  }

  /* Flatten a section into one searchable string, including deep content.
     Searching "adrénaline" should find the anaphylaxis card even though the
     word only appears at Pro level. */
  function haystack(sec) {
    if (sec._hay) return sec._hay;
    var parts = [sec.title, sec.keywords || ''].concat(sec.essentiel);
    function walk(blocks) {
      (blocks || []).forEach(function (b) {
        if (b.title) parts.push(b.title);
        if (b.text) parts.push([].concat(b.text).join(' '));
        if (b.items) parts.push(b.items.map(function (i) {
          return Array.isArray(i) ? i.join(' ') : i;
        }).join(' '));
        if (b.rows) parts.push(b.rows.map(function (r) { return r.join(' '); }).join(' '));
        if (b.foot) parts.push(b.foot);
        if (b.caption) parts.push(b.caption);
        if (b.q) walkTree(b);
      });
    }
    function walkTree(n) {
      parts.push(n.q);
      (n.branches || []).forEach(function (br) {
        parts.push(br.label, br.text);
        if (br.then) walkTree(br.then);
      });
    }
    walk(sec.complet); walk(sec.pro);
    sec._hay = norm(parts.join(' '));
    return sec._hay;
  }

  function applySearch(q) {
    state.query = q;
    var n = norm(q.trim());
    var terms = n ? n.split(/\s+/) : [];
    var shown = 0;

    window.SECTIONS.forEach(function (sec) {
      var card = document.getElementById('sec-' + sec.id);
      if (!card) return;
      var hit = !terms.length || terms.every(function (t) { return haystack(sec).indexOf(t) !== -1; });
      card.hidden = !hit;
      if (hit) shown++;
      if (!hit && state.open === sec.id) close(sec.id);
    });

    // hide group headings whose grid has no visible card left
    document.querySelectorAll('.grid').forEach(function (grid) {
      var any = Array.prototype.some.call(grid.children, function (c) { return !c.hidden; });
      grid.hidden = !any;
      var head = document.querySelector('.grp[data-group="' + grid.dataset.group + '"]');
      if (head) head.hidden = !any;
    });

    document.getElementById('empty').hidden = shown !== 0;
    document.getElementById('qclear').hidden = !q;
  }

  /* ---------- boot ---------- */

  function init() {
    try {
      var saved = localStorage.getItem(STORE);
      if (saved && LEVEL_IDS.indexOf(saved) !== -1) state.level = saved;
    } catch (e) { /* ignore */ }

    renderNumbers();
    renderLevelSwitch();
    renderMain();

    var q = document.getElementById('q');
    q.addEventListener('input', function () { applySearch(q.value); });
    document.getElementById('qclear').addEventListener('click', function () {
      q.value = ''; applySearch(''); q.focus();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (document.activeElement === q && q.value) { q.value = ''; applySearch(''); return; }
        if (state.open) close(state.open);
      }
      // "/" focuses search, the way a reference tool should behave
      if (e.key === '/' && document.activeElement !== q && !e.ctrlKey && !e.metaKey) {
        e.preventDefault(); q.focus();
      }
    });

    // deep link: #anaphylaxie opens that card
    var hash = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (hash && byId(hash)) {
      toggle(hash, { silent: true });
      document.getElementById('sec-' + hash).scrollIntoView({ block: 'start' });
    }
    window.addEventListener('hashchange', function () {
      var h = decodeURIComponent(location.hash.replace(/^#/, ''));
      if (h && byId(h) && state.open !== h) toggle(h);
      else if (!h && state.open) close(state.open);
    });

    var d = document.querySelector('.foot__date');
    if (d) d.textContent = 'Sources vérifiées le ' + fmtDate(window.LAST_VERIFIED) + '.';

    if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () { /* offline is a bonus */ });
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
