// Planos · Obra 04 — modo sin conexión: la app y sus lectores se guardan al primer uso.
const VERSION = 'planos-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', (e) => {
  const rq = e.request;
  if (rq.method !== 'GET') return;
  const u = new URL(rq.url);
  if (u.origin !== location.origin) return;
  const esPagina = rq.mode === 'navigate' || /\/(index\.html|sw\.js)?$/.test(u.pathname);
  e.respondWith((async () => {
    const c = await caches.open(VERSION);
    if (esPagina) {   // red primero (para recibir versiones nuevas) y caché si no hay señal
      try { const r = await fetch(rq); if (r.ok) c.put(rq, r.clone()); return r; }
      catch (x) { return (await c.match(rq, { ignoreSearch: true })) || (await c.match('./index.html')) || Response.error(); }
    }
    const hit = await c.match(rq);
    if (hit) return hit;
    try { const r = await fetch(rq); if (r.ok && r.status === 200) c.put(rq, r.clone()); return r; }
    catch (x) { return Response.error(); }
  })());
});
