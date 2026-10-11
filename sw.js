// WeldCheck moved to https://weldcheck.welderbase.net — this worker removes the old offline copy.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://weldcheck.welderbase.net/');
})()));
