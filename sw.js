// Incrémente ce numéro à chaque modification des fichiers pour forcer la mise à jour chez les utilisateurs
const CACHE_NAME = 'arabe-v5';

const ASSETS = [
  './',
  './index.html',
  './donnees.js',
  './phrases.js',
  './manifest.json',
  './web-app-manifest-192x192.png',
  './web-app-manifest-512x512.png',
  './duolingo-correct-sound.mp3',
  './duolingo-wrong-sound.mp3',
  './duolingo-completed-lesson.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // Un fichier manquant ne doit pas empêcher de mettre en cache tous les autres
      Promise.all(ASSETS.map((url) => cache.add(url).catch((err) => console.log('Cache ignoré :', url, err))))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  // Pages : réseau d'abord (pour toujours avoir la dernière version), cache si hors-ligne
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copie = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(e.request, copie));
          return res;
        })
        .catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // Le reste (données, sons, icônes) : cache d'abord, réseau en secours, et mise à jour en arrière-plan
  e.respondWith(
    caches.match(e.request).then((cache) => {
      const reseau = fetch(e.request)
        .then((res) => {
          if (res && res.ok) {
            const copie = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(e.request, copie));
          }
          return res;
        })
        .catch(() => cache);
      return cache || reseau;
    })
  );
});
