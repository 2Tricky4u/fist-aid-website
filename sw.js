/* =========================================================================
   Service worker : offline first.

   A first-aid reference is needed exactly when there is no signal: in a
   basement, a tunnel, a mountain valley. Everything is precached on install
   and served cache-first, so the site works fully offline after one visit.
   ========================================================================= */

/* Bump this on every content or asset release: a new name forces a fresh
   precache on install and drops the old one on activate. */
var CACHE = 'psch-v31';

var ASSETS = [
  './',
  './index.html',
  './styles.css',
  './sources.js',
  './figures.js',
  './content.js',
  './app.js',
  './manifest.json'
];

/* Planches sous licence déposées dans planches/. Elles sont facultatives :
   listez ici celles que vous ajoutez. Contrairement à ASSETS, un fichier absent
   n'empêche pas l'installation du service worker. */
var PLATES = [
  './planches/rcp-mains.jpg',
  './planches/dae-electrodes.jpg',
  './planches/alerter-144.jpg',
  './planches/accident-rcp.jpg',
  './planches/compression-plaie.jpg',
  './planches/etouffement-dos.jpg',
  './planches/voies-aeriennes.jpg',
  './planches/pls.jpg',
  './planches/rautek.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      // `cache: 'reload'` contourne le cache HTTP du navigateur. Sans cela,
      // addAll() peut pré-cacher une version périmée d'un fichier et la servir
      // indéfiniment : le bump de CACHE ne suffirait pas à publier la mise à jour.
      .then(function (c) {
        return c.addAll(ASSETS.map(function (u) {
          return new Request(u, { cache: 'reload' });
        })).then(function () {
          // une planche manquante ne doit pas faire échouer toute l'installation
          return Promise.all(PLATES.map(function (u) {
            return c.add(new Request(u, { cache: 'reload' })).catch(function () {});
          }));
        });
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (k) {
          return k === CACHE ? null : caches.delete(k);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;

  // Never touch non-GET or cross-origin requests (the source links go out to
  // the guideline publishers and must fail normally when offline).
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) {
        // Refresh in the background so an updated file lands on the next visit.
        e.waitUntil(
          fetch(req).then(function (res) {
            if (res && res.ok) return caches.open(CACHE).then(function (c) { return c.put(req, res); });
          }).catch(function () { /* offline: keep the cached copy */ })
        );
        return hit;
      }

      return fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        // Offline and uncached: a navigation still gets the app shell.
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 504, statusText: 'Hors ligne' });
      });
    })
  );
});
