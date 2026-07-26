/* =========================================================================
   Service worker — offline first.

   A first-aid reference is needed exactly when there is no signal: in a
   basement, a tunnel, a mountain valley. Everything is precached on install
   and served cache-first, so the site works fully offline after one visit.
   ========================================================================= */

/* Bump this on every content or asset release: a new name forces a fresh
   precache on install and drops the old one on activate. */
var CACHE = 'psch-v8';

var ASSETS = [
  './',
  './index.html',
  './styles.css',
  './sources.js',
  './content.js',
  './app.js',
  './manifest.json'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(ASSETS); })
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
