// Visor de planos retirado: este archivo solo desinstala el modo sin conexión que quedó en los equipos y limpia su caché.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll()) c.navigate('../');
  })());
});
