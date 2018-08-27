/**
 * file: audio-pls.js
 * purpose: play internet radio streams from SomaFM
 **/

// random track no.
let Rnd = function() {
  return Math.round(
    Math.random() * myTracks.length
  );
}

// sample track list
let myTracks = [
  'http://ice3.somafm.com/missioncontrol-128-mp3',
  'http://ice1.somafm.com/thistle-128-mp3'
]

myMusic.src = myTracks[Rnd()]; // random track from the track list

myMusic.controls = true;
myMusic.currentTime = true;
console.log('Playing: ' + myMusic.src);

// track list

// let your user chage the soundscape by a click ...
