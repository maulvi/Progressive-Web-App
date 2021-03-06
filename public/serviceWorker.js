self.addEventListener('install', function(event) {
    console.log('Inside install event..Installing SW..', event);
});

self.addEventListener('activate', function(event) {
    console.log('Inside activate event..Activating SW..', event);
    return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
    console.log('Service Worker..Fetch event..', event);
    event.respondWith(fetch(event.request));
});