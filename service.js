let version = 'version-0.0.9';
let url = location.host;

const installDocument = () => {
    caches.open(version).then(cache => {
        console.log('Caché abierta');
        
        return cache.addAll([
            `http://${url}/webapp/index.html`,
            `http://${url}/webapp/estilo.css`,
            `http://${url}/webapp/codigo.js`
        ]);
    })
}

self.addEventListener('install', (event) => {
    event.waitUntil(installDocument());
});

self.addEventListener('activate', (event) => {
event.waitUntil(     
 caches.keys().then(cacheNames => {
    cacheNames.map(cacheName => {
        if (cacheName !== version) {
          caches.delete(cacheName);

        }
; // Necesario para evitar problemas con Promise.all
    })
}))
});


