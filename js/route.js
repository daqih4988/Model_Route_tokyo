const OSRM_URL = "https://router.project-osrm.org/route/v1/driving";

let lastRouteTime = 0;

async function fetchRoute(from, to) {
  const url =
    `${OSRM_URL}/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson`;

  const res = await fetch(url);
  const data = await res.json();
  if (!data.routes.length) return;

  const route = data.routes[0];

  document.getElementById("distanceBig").textContent =
    Math.round(route.distance) + "m";

  document.getElementById("wpName").textContent =
    to.name || "";

  document.getElementById("wpImage").src =
    to.image || "";

  const coords = route.geometry.coordinates.map(c => [c[1], c[0]]);
  drawRoute(coords);
}