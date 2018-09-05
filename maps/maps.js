/**
 * file: maps.js
 * purpose: display a Mapbox map
 **/

// get the token from Mapbox Studio
 mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';

/*
container = the id holding your map
style = uri to the style from Mapbox Studio
center = latitude and longtitude from Open Street Maps
zoom = the zoom level
*/
 let map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/asathoor/cjfktdidngvx92ro7quci300o',
   center: [10.214790, 56.127812],
   zoom: 11.0
 });
