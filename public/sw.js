const CACHE_NAME = "mechtamamy-v1"
const urlsToCache = [
  "/",
  "/logo.png",
  "/baby1.png",
  "/baby2.png",
  "/baby3.png",
  "/baby4.png",
  "/parent1.png",
  "/parent2.png",
  "/parent3.png",
  "/parent4.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Возвращаем кэшированную версию или загружаем из сети
      return response || fetch(event.request)
    }),
  )
})
