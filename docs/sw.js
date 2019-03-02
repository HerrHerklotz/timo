/**
 * This file implements a service worker which follows the offline first / cache first pattern (see https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers#Offline_First). 
 * The file was created with the help of the following sources:
 *   https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
 *   https://gist.github.com/anthonyalvarez/efe25e8ad92c8181de477ae45179bf4c
 */

// The version number (v1) is used to update the service worker if a new version of the app containing new assets.
const gOfflineCache = 'timo-v1';
const gRuntimeCache = 'timo-runtime';

// A list of strings containing the files we want to cache.
const gFilesToCache = [
    '.', // /index.html
    'assets/images/icon_48.png',
    'assets/images/icon_72.png',
    'assets/images/icon_96.png',
    'assets/images/icon_144.png',
    'assets/images/icon_192.png',
    'assets/images/icon_512.png',
    'favicon.ico',
    'main.js',
    'manifest.json',
    'polyfills.js',
    'runtime.js',
    'styles.js',
    'sw.js',
    'vendor.js'
];


/**
 * @description Installs service worker for the first time, give it a name and populates it with cache date.
 * @param {Event} pEvent
 * @returns none - Installed service worker
 */
self.addEventListener('install', (pEvent) => {
    console.log('[service worker] install');
    pEvent.waitUntil(
        // Store all static files into our offline cache.
        caches.open(gOfflineCache)
            .then((cache) => cache.addAll(gFilesToCache))
            .then(self.skipWaiting())
    );
});


/**
 * @description service worker is activating at this point and deletes old caches. This event is usually used to delete any files that are no longer necessary and clean up after the app in general.
 * @param  {Event} pEvent
 * @returns none - Activated service worker
 */
self.addEventListener('activate', (pEvent) => {
    // Create a list of used caches.
    const currentCaches = [gOfflineCache, gRuntimeCache]; 

    pEvent.waitUntil(
        caches.keys()
            .then((pCaches) => {
                // Returns a list which only contains unused/old caches.
                return pCaches.filter((eCache) => (currentCaches.includes(eCache) == false));
            })
            .then((pUnusedCaches) => {
                if (pUnusedCaches.length > 0) {
                    console.warn('[service worker] activate: detect old cache', cachesToDelete);

                    return Promise.all(pUnusedCaches.map((eUnusedCache) => {
                        // Delete eUnusedCache from cache.
                        return caches.delete(eUnusedCache);
                    }));
                } else {
                    console.info('[service worker] activate: cache is clean')
                }
            })
            .then(() => self.clients.claim()));
});


/**
 * @description Intercepts all fetch requests. It will then respond with the cached response if one is found, if not it will fetch the data from network using the fetch API.
 * @param {Event} pEvent
 * @returns {object} pEvent.request - Resource from cache or network
 */
self.addEventListener('fetch', (pEvent) => {
    if (pEvent.request.url.startsWith(self.location.origin)) {
        // Let the browser do its default thing for non-GET requests.
        if (pEvent.request.method != 'GET') {
            return;
        }

        pEvent.respondWith(
            caches.match(pEvent.request).then(cachedResponse => {
                if (cachedResponse) {
                    console.log('[service worker] fetch: cached version', pEvent.request.url)
                    return cachedResponse;
                }

                return caches.open(gRuntimeCache).then((cache) => {
                    return fetch(pEvent.request).then(response => {
                        // Put a copy of the response in the runtime cache.
                        console.log('[service worker] fetch: save to cache', pEvent.request.url);

                        return cache.put(pEvent.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }
});