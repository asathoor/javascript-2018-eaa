/**
 * file: audio.js
 **/

// sample track list
let myTracks = [
  'http://ice3.somafm.com/missioncontrol-128-mp3',
  'more tracks here ...'
]

/*
 SOMAFM
 Use the link found in the pls files.
 */
myMusic.controls = true;
myMusic.src = myTracks[0];
myMusic.currentTime = true;
