// Obra 04 · app instalada. Regla de oro: la página SIEMPRE se pide primero a internet (así nunca queda una versión vieja);
// solo si no hay señal se abre la última copia guardada. El visor 3D y los datos (Supabase) no pasan por aquí.
const PAGINA = 'obra-pagina-v1', LIBS = 'obra-libs-v1';
const CDN = ['unpkg.com', 'cdn.jsdelivr.net', 'cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== PAGINA && k !== LIBS) await caches.delete(k);
    await self.clients.claim();
  })());
});

const sinConexion = () => new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sin conexión</title><body style="font:16px system-ui;padding:32px;text-align:center;color:#33415a"><h2>Sin conexión</h2><p>No hay internet y todavía no hay una copia guardada del panel. Conéctate una vez y vuelve a abrir la app.</p>', { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });

async function pagina(req, base) {
  const cache = await caches.open(PAGINA), clave = new Request(base);
  try {
    const r = await fetch(req.url, { cache: 'no-store', credentials: 'same-origin' });
    if (r.ok) cache.put(clave, r.clone());
    return r;
  } catch (e) {
    return (await cache.match(clave)) || sinConexion();
  }
}
async function rapido(req) {   // iconos y manifest: sirve lo guardado y lo renueva por detrás
  const cache = await caches.open(PAGINA), hit = await cache.match(req);
  const red = fetch(req).then((r) => { if (r.ok) cache.put(req, r.clone()); return r; }).catch(() => hit || Response.error());
  return hit || red;
}
async function libreria(req) {   // librerías con versión fija (mapa, gráficos, tipografías): una vez bajadas, sin internet también funcionan
  const cache = await caches.open(LIBS), hit = await cache.match(req);
  if (hit) return hit;
  const r = await fetch(req);
  if (r.ok || r.type === 'opaque') cache.put(req, r.clone());
  return r;
}

self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url), base = new URL(self.registration.scope).pathname;
  if (u.origin === self.location.origin) {
    const p = u.pathname;
    if (p === base || p === base + 'index.html') e.respondWith(pagina(r, base));
    else if (/\.(png|webmanifest)$/.test(p) || p === base + 'manifest.json') e.respondWith(rapido(r));
    return;   // visor, planos, limpiar.html y lo demás: directo a la red
  }
  if (CDN.includes(u.hostname)) e.respondWith(libreria(r));
});
