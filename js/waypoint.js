// 静的経由地（例）
let waypoints = [
{ lat: 35.743303, lng: 139.998168, name: "馬込十字路", image: "img/1.JPG" },
{ lat: 35.680882, lng: 139.998538, name: "若松", image: "img/2.JPG" },
{ lat: 35.646582, lng: 139.850286, name: "大井ふ頭方面", image: "img/3.JPG" },
{ lat: 35.647214, lng: 139.837579, name: "新木場", image: "img/4.JPG" },
{ lat: 35.596853, lng: 139.803081, name: "臨海副都心方面", image: "img/5.JPG" },
{ lat: 35.595132, lng: 139.799911, name: "臨海副都心方面交差点", image: "img/6.JPG" },
{ lat: 35.615716, lng: 139.783099, name: "辰巳・臨海副都心方面", image: "img/7.JPG" },
{ lat: 35.618272, lng: 139.780872, name: "テレコムセンター方面交差点", image: "img/8.JPG" },
{ lat: 35.625253, lng: 139.770116, name: "お台場イルミネーション方面", image: "img/9.JPG" },
{ lat: 35.631144, lng: 139.778716, name: "シーリア前", image: "img/10.JPG" },
{ lat: 35.630303, lng: 139.779360, name: "海浜公園入口", image: "img/11.JPG" },
{ lat: 35.631053, lng: 139.780364, name: "レインボー入口", image: "img/12.JPG" },
{ lat: 35.634009, lng: 139.778002, name: "首都高速11号台場線入口", image: "img/13.JPG" },
{ lat: 35.651059, lng: 139.759227, name: "銀座・箱崎方面", image: "img/14.JPG" },
{ lat: 35.660055, lng: 139.759999, name: "銀座・箱崎方面", image: "img/15.JPG" },
{ lat: 35.683056, lng: 139.777954, name: "湾岸線方面", image: "img/16.JPG" },
{ lat: 35.680259, lng: 139.783067, name: "湾岸線方面", image: "img/17.JPG" },
{ lat: 35.646538, lng: 139.812495, name: "横浜・羽田方面", image: "img/18.JPG" },
{ lat: 35.641045, lng: 139.803048, name: "横浜方面", image: "img/19.JPG" },
{ lat: 35.633934, lng: 139.789520, name: "銀座方面", image: "img/20.JPG" },
{ lat: 35.651028, lng: 139.759211, name: "銀座・箱崎方面", image: "img/21.JPG" },
{ lat: 35.659685, lng: 139.759704, name: "汐留出口", image: "img/22.JPG" },
{ lat: 35.663577, lng: 139.762488, name: "汐留方面", image: "img/23.JPG" },
{ lat: 35.663590, lng: 139.757687, name: "築地虎ノ門トンネル入口", image: "img/24.JPG" },
{ lat: 35.670266, lng: 139.745628, name: "赤坂一丁目", image: "img/25.JPG" },
{ lat: 35.670741, lng: 139.743170, name: "溜池", image: "img/26.JPG" },
{ lat: 35.667286, lng: 139.739442, name: "六本木二丁目", image: "img/27.JPG" },
{ lat: 35.666126, lng: 139.737978, name: "六本木通り方面", image: "img/28.JPG" },
{ lat: 35.661232, lng: 139.728466, name: "六本木六丁目", image: "img/29.JPG" },
{ lat: 35.660460, lng: 139.728005, name: "一時停止", image: "img/30.JPG" },
{ lat: 35.659475, lng: 139.727855, name: "けやき坂イルミネーション始点", image: "img/31.JPG" },
{ lat: 35.659379, lng: 139.732179, name: "けやき坂イルミネーション終点", image: "img/32.JPG" },
{ lat: 35.660696, lng: 139.730609, name: "六本木六丁目方面", image: "img/33.JPG" },
{ lat: 35.661524, lng: 139.728627, name: "六本木六丁目", image: "img/34.JPG" },
{ lat: 35.676638, lng: 139.749463, name: "国会前", image: "img/35.JPG" },
{ lat: 35.674189, lng: 139.760916, name: "丸の内イルミネーション始点", image: "img/36.JPG" },
{ lat: 35.676084, lng: 139.761587, name: "丸の内イルミネーション終点", image: "img/37.JPG" },
{ lat: 35.675274, lng: 139.765674, name: "有楽橋", image: "img/38.JPG" },
{ lat: 35.685361, lng: 139.771259, name: "桜通りイルミネーション始点", image: "img/39.JPG" },
{ lat: 35.687052, lng: 139.776425, name: "桜通りイルミネーション終点", image: "img/40.JPG" }
];

function getCurrentWaypoint() {
  return waypoints.length > 0 ? waypoints[0] : null;
}

function removeCurrentWaypoint() {
  waypoints.shift();
}
