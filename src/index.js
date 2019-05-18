console.log('Hello from JavaScript');
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiY29ubmVyc3Rlbm5ldHQiLCJhIjoiY2p2dHJ2cjdtMHNpYjQ0b2dtcDVsajl1dCJ9.-3X1emS1Fdef9FM6JJtTIw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});
const newDiv = document.createElement("div");
newDiv.style.width = '32px';
newDiv.style.height = '39px';
newDiv.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
const newMarker = new mapboxgl.Marker(newDiv).setLngLat([-74.009151, 40.705086]).addTo(map);
import markerCreator from "./marker.js";
markerCreator("hotel",[-74.005, 40.701]).addTo(map);