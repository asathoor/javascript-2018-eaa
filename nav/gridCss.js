/**
 * file: gridCss.js
 * purpose: Dynamisk navigation til mobile enheder

 Læg mærke til at .style.display
 ændres via en EventListener,
 hvor funktionen sætter en ny .style

 Fordi nav er en id <nav id="nav">
 kan properties sættes uden en getElementById
 nav.style ... etc.
 **/

// ved klik på nav open
let navOpen = document.getElementById('nav-open')
  .addEventListener('click', function() {
    console.log('navOpen');
    nav.style.display = 'block';
  });

// ved klik på nav close
let navClose = document.getElementById('nav-close')
  .addEventListener('click', function() {
    console.log('navClose');
    nav.style.display = 'none';
  });

/*
 Gallery placeholders (dummy content)
 */
const myImg = 'https://via.placeholder.com/400x300'; // placeholder billede

for (let n = 0; n < 4; n++) {
  let image = document.createElement('img'); // <img> forberedes i DOM
  image.src = myImg; // <img src=' + myImg + '>
  image.alt = 'En placeholder '
  gallery.appendChild(image); // tilføjer til element
}

/*
 Tip: når de endelige billeder er klar
 så kan de loades fra et array via et loop.
*/
