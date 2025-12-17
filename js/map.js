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

  //マップ移動でfollow = falseで追従off
  map.on('dragstart zoomstart', () => {
    follow = false;
  });
}


function updateUserPosition(lat, lng) {
  userMarker.setLatLng([lat, lng]);
  //ボタン押してfollow = trueで追従no
  if (follow) {
    map.setView([lat, lng]);
  }
}

function drawRoute(coords) {
  if (routeLine) {
    map.removeLayer(routeLine);
  }
  routeLine = L.polyline(coords, { weight: 5 }).addTo(map);
}
