const staticTremplin = "tremplin-app-v1"
const assets = [
  "/",

  "/activites.html",
  "/index.html",
  "/defis.html",
  "/journee.html",
  "/profil.html",
  "/village.html",
  "/css/style.css",
  "/js/app.js",
  "images/icons/tremplin-logo.jpg",
  "images/icons/access-icon.svg",
  "images/icons/album-icon.svg",
  "images/icons/calendar-icon.svg",
  "images/icons/contact-icon.svg",
  "images/icons/home-icon.svg",
  "images/icons/map-icon.svg",
  "images/icons/stagiaire.svg",
  "images/icons/tableau-icon.svg",
  "images/icons/photo-icon.svg",
  "images/icons/star-icon.svg",
  "images/icons/tremplin-logo.jpg",
  "images/icons/badges/ovales/bell-tower.png",
  "images/icons/badges/ovales/Mountain.png",
  "images/icons/badges/ovales/Sea.png",
  "images/icons/badges/ovales/Soccer Field.png",
  "images/icons/badges/ovales/Trees.png",
  "images/icons/badges/ronds/bell-tower.png",
  "images/icons/badges/ronds/Mountain.png",
  "images/icons/badges/ronds/Sea.png",
  "images/icons/badges/ronds/Soccer-Field.png",
  "images/icons/badges/ronds/Trees.png",
  "images/coffre-open.svg",
  "images/help.svg",
  "images/home.svg",
  "images/onboarding.svg",
  "images/previous.svg",
  "images/treasure-bar.svg",
  "images/treasure.svg",


]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticTremplin).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}


