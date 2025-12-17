let map;
let userMarker;
let routeLine;
let follow = true;

function initMap(lat, lng) {
  map = L.map('map').setView([lat, lng], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OSM'
  }).addTo(map);

  userMarker = L.marker([lat, lng]).addTo(map);
}

function updateUserPosition(lat, lng) {
  userMarker.setLatLng([lat, lng]);
  if (follow) {
    map.on('dragstart zoomstart', () => {
      follow = false;
    });
  }
}

function drawRoute(coords) {
  if (routeLine) {
    map.removeLayer(routeLine);
  }
  routeLine = L.polyline(coords, { weight: 5 }).addTo(map);
}
