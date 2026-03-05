const CACHE_NAME = 'chaos-theory-v26';
const urlsToCache = [
  './',          // index.html自体
  './icon-192.png',
  './icon-512.png'
];

// インストール時に自分自身（HTML）を保存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// ネットワークではなくキャッシュを優先して返す（爆速起動）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

