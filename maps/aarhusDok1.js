/**
 * file: aarhusDok1.js
 * purpose: display a map in #map
 **/
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/asathoor/cjfkvmngz9bz52rpdgbs29r0w',
  center: [10.150040, 56.117220],
  zoom: 14.0,
  pitch: 50
});
