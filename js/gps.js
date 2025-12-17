let lastPos = null;
let lastUpdate = 0;

navigator.geolocation.watchPosition(
  async pos => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    if (!map) {
      initMap(lat, lng);
      document.getElementById("loading").style.display = "none";
    }

    updateUserPosition(lat, lng);

    const now = Date.now();
    const wp = getCurrentWaypoint();
    if (!wp) {
      document.getElementById("distance").textContent = "完了";
      return;
    }

    let needUpdate = false;

    if (lastPos) {
      const d = map.distance([lat, lng], [lastPos.lat, lastPos.lng]);
      if (d > 30) needUpdate = true;
    }

    if (now - lastUpdate > 5000) needUpdate = true;

    const distToWp = map.distance([lat, lng], [wp.lat, wp.lng]);

    // 経由地到達判定
    if (distToWp < 30) {
      removeCurrentWaypoint();
      needUpdate = true;
    }

    if (needUpdate) {
      await fetchRoute({ lat, lng }, wp);
      lastUpdate = now;
      lastPos = { lat, lng };
    }
  },
  err => alert("GPS取得失敗"),
  { enableHighAccuracy: true }
);

// 現在位置に戻る
document.getElementById("backToMeBtn").onclick = () => {
  if (!userMarker) return;
  follow = true;
  map.setView(userMarker.getLatLng());
};

//経由地削除 → 次へ即切替
document.getElementById("deleteWpBtn").onclick = async () => {
  removeCurrentWaypoint();

  const wp = getCurrentWaypoint();
  if (!wp || !lastPos) return;

  await fetchRoute(lastPos, wp);
};
