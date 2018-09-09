JavaScript Navigation and CSS Grid
==================================

**This sample is based on WebDeveloper 278:86**

* Mobile Navigation - hide and show the `<nav>` via JavaScript
* CSS3 Grid-based layout with fallbacks for browsers that do not support CSS grid.

From the CSS:

~~~~
@supports (display:grid){
  @media (min-width: 721px){
    #grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
~~~~

The code above will test if grid is supported, if that's the case the CSS rules will fire.

## From the JavaScript for the navigation

~~~~
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
~~~~

The code above will hide / display the nav tag on mobile devices.

## Addition to the JavaScript

For rapid development I have added a loop that will fill in placeholder images in the gallery.
This is a more convenient way to test the layout of image galleries.

~~~~
const myImg = 'https://via.placeholder.com/400x300'; // placeholder image

for (let n = 0; n < 4; n++) {
  let image = document.createElement('img'); // <img> prepared in the DOM
  image.src = myImg; // <img src=' + myImg + '>
  image.alt = 'En placeholder '
  gallery.appendChild(image); // add the img element to #gallery
}
~~~~
