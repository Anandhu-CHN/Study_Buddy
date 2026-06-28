const CACHE_NAME = 'gate-v1';
// We include the relative path './' to ensure it points to your repo folder
const ASSETS = ['./', './index.html', './manifest.json','./icons.jpg']; 

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
