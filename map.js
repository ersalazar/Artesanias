mapboxgl.accessToken = 'pk.eyJ1IjoiZXJzYWxhemFyIiwiYSI6ImNsMTJ0bWljODBrMnUza3MzdmIweXh1aGEifQ.r_l1ktWX_DhYOcn1FbR8DA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: '7',
  center: [-89.6, 20.9]
});

map.addControl(new mapboxgl.NavigationControl());

var markers = [[-89.6,20.9], [12.550343, 55.665957]]

markers.forEach(element => {
  const marker1 = new mapboxgl.Marker()
        .setLngLat([element[0], element[1]])
        .addTo(map)
});
  



