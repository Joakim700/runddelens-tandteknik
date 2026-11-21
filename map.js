// Kort på kontaktsiden - Leaflet + OpenStreetMap (gratis, ingen API-nøgle)
document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("map");
  if (!mapEl || typeof L === "undefined") return;

  const lat = 55.694375;
  const lng = 12.548185;

  const map = L.map("map", { scrollWheelZoom: false }).setView([lat, lng], 17);
  
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  referrerPolicy: "origin",
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-bidragydere'
}).addTo(map);

  L.marker([lat, lng]).addTo(map)
    .bindPopup("Runddelens Tandteknik<br>Nørrebrogade 153, 2200 København N")
    .openPopup();

  // Sikrer korrekt størrelse, hvis siden layoutes om efter kortet er indlæst
  setTimeout(() => map.invalidateSize(), 200);
});