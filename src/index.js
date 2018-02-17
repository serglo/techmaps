/*global mapboxgl */

import './index.css';
import geojson from './geo.json';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFnZ28iLCJhIjoiYXdzWFR2cyJ9.ke0Vc_1-0TRvq0XhMuYKpA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-96, 37.8],
  zoom: 3
});

// add markers to map
geojson.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});
