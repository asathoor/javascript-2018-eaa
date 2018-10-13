/**
 * file: geopos.js
 *

Koden bygger på denne tutorial fra Mapbox:
uri: https://www.mapbox.com/help/custom-markers-gl-js/

 **/
$(function() { // shorthand doc ready

  let lat, lng;
  let zoom = 14.2;

  function showPosition(pos, error) {
    lat = pos.coords.latitude; // latitude
    lng = pos.coords.longitude; // longtitude

    // Geojson data kan gemmes i form af en variabel
    var geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat] // get position from browser
        },
        properties: {
          title: 'Her er du',
          description: 'I centrum af denne cirkel!',
          lidtmere: '<a href="https://www.multimusen.dk">Multimusen.dk</a>'
        }
      }]
    };

    // mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/asathoor/cjfktdidngvx92ro7quci300o',
      center: [lng, lat], // centrerer
      zoom: zoom
    });

    // add markers to map
    // nb: forEach tilføjer alle markers fra din geojson
    geojson.features.forEach(function(marker) {

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

      // popup
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({
            offset: 25
          }) // add popups
          .setHTML('<h3>' + marker.properties.title +'</h3><p>' +
            marker.properties.description + '</p><p>' +
            marker.properties.lidtmere + '</p>'
          ))
        .addTo(map);
      // end markers
    });
  } // end showPosition()

  $('#btn').click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      $('#x').html("Geolocation is not supported by this browser.");
    }
  });

}); // end document ready
