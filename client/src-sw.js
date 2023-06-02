const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { CacheFirst, StaleWhileRevalidate } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === "navigate", pageCache);

// TODO: Implement asset caching

registerRoute(
  // only returns true if request is these types: style, script, worker
  ({ request }) => ["style", "script", "worker"].includes(request.destribution),
  // tries to serve the response from cache, but also fetch a fresh copy and update the cache in background
  new StaleWhileRevalidate({
    // use a seperate cache (cacheName) to store the response of this route
    cacheName: "asset-cache",
    plugins: [
      // ensures only valid responses are chached
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
