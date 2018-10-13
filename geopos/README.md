Geopos - eller hvor er jeg?
===========================

Tryk på en knap, og en ikon markerer, hvor du er.
Koden bygger videre på
[denne](https://www.mapbox.com/help/custom-markers-gl-js/)
tutorial fra Mapbox.

Browseren henter brugerens position via
`navigator.geolocation.getCurrentPosition(showPosition)`

Her er `showPosition` en funktion, der henter browserens
geografiske position:

~~~~
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
  ~~~~

  *NB:* Google Chrome kræver, at brugeren gør noget
  aktivt, hvis positionen skal vises. Derfor kan man
  bruge en knap eller et andet klikbart element.

  Kortet kan naturligvis loades inden positionen sættes.
