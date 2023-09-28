// Crea un mapa utilizando Leaflet y configura la vista inicial
var map = L.map("map").setView([51.505, -0.09], 13);

// Utiliza una capa de OpenStreetMap como base del mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Añade un marcador en una ubicación específica (latitud y longitud)
var marker = L.marker([51.5, -0.09]).addTo(map);

// Añade un popup al marcador
marker.bindPopup("<b>Hello World!</b><br>I am a popup.").openPopup();
