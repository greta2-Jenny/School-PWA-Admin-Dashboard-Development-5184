// Custom Service Worker

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Service Worker installed');
  
  // Cache map assets
  event.waitUntil(
    caches.open('map-assets-v1').then((cache) => {
      return cache.addAll([
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBnKWd2V4Q-9Qx-HWZUkxmxQVrKjsQzGPk&libraries=places',
        'https://maps.googleapis.com/maps/api/staticmap?center=Calmar+Subdivision,+Lucban,+Quezon+4328&zoom=15&size=600x300&key=AIzaSyBnKWd2V4Q-9Qx-HWZUkxmxQVrKjsQzGPk'
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // Basic fetch handler
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        // Return the offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
        
        // Check if it's a map request
        if (event.request.url.includes('maps.googleapis.com')) {
          return caches.match(event.request)
            .then((response) => {
              return response || Promise.reject('no-match');
            })
            .catch(() => {
              // Fallback for map requests
              return new Response(
                JSON.stringify({
                  error: 'Maps temporarily unavailable'
                }),
                {
                  headers: { 'Content-Type': 'application/json' }
                }
              );
            });
        }
        
        // Return a fallback for other requests
        return new Response('Offline content not available');
      })
  );
});

// Listen for push messages
self.addEventListener('push', (event) => {
  const title = 'Lil\' Hale Learners';
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/pwa-192x192.png',
    badge: '/pwa-192x192.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({type: 'window'})
      .then((windowClients) => {
        // Check if there is already a window with our URL open
        const url = '/';
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        // If no window is open, open a new one
        if (self.clients.openWindow) {
          return self.clients.openWindow(url);
        }
        return null;
      })
  );
});

// Handle sync events for offline operations
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    console.log('Attempting to sync data');
    // Here you would implement the logic to sync data when online
  }
});