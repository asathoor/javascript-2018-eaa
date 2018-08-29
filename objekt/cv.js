/**
 * file: cv.js
 * purpose: obejct sample
 * Try to add or remove stuff in the works array
 **/
let author = {
  // properties (egenskaber)
  navn: 'Dante Stanza',
  titel: 'Author',
  address: 'Royal Mile 11, Edinburgh',
  email: 'zzz@yyyy.dk',
  mob: '1234 5678',
  works: [
    'Songs of Innocence and Whiskey (2016)',
    'Oh Yeah - Minor Attempts at High Lyrics (2014)',
    'No! I Never Ever Said Such a Thing (2000)',
    'Water in the Jar (1999)',
    'Two Guitars Bass and Drums (1997)',
    'Milk and Cats (1988)'
  ],
  about: function() {
    // method (metode)
    return '<address><strong>' + this.navn.toUpperCase() + '</strong><br>'
    + this.titel.toLowerCase() + '<br>'
    + this.address + '<br>'
    + 'Email: ' + this.email + '<br>'
    + 'Mob: ' + this.mob + '<br>'
    +'</address>'
  },
  workList: function() {
    let liste = '';
    for (w in this.works){
      liste += '<li>' + this.works[w] + '</li>\n';
    }
    return liste;
  }
}

// info
about.innerHTML = author.about(); // object method added to #about
works.innerHTML += author.workList();
