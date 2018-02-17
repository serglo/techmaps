/*global mapboxgl */

import './index.css';
import geojson from './geo.json';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFnZ28iLCJhIjoiYXdzWFR2cyJ9.ke0Vc_1-0TRvq0XhMuYKpA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [13.4011148, 52.5216238],
  zoom: 10
});

const popupTemplate = ({name, industry, address, technology}) => {
  return `
    <h1>${name}</h1>
    <ul>
      <li>Address: ${address}</li>
      <li>Industry: ${industry}</li>
      <li>Technology: ${technology.join(', ')}</li>
    </ul>
  `;
}

// add markers to map
geojson.forEach(function(marker) {

  var popup = new mapboxgl.Popup({closeOnClick: false})
    .setHTML(popupTemplate(marker));

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.location)
  .setPopup(popup)
  .addTo(map);
});
