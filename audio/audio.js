/**
 * file: audio.js
 **/

// sample track list
let myTracks = [
  'workoutmix.mp3',
  'yoursample.mp3',
  'etc.'
]

/*
 Sample settings below.
 More @url: https://www.w3schools.com/tags/ref_av_dom.asp
 */
myMusic.controls = true;
myMusic.src = myTracks[0];
//myMusic.play(); // ... yeah, but is it wise?
myMusic.currentTime = true;
//myMusic.style.height = '75px';

// Exercise A)
// Create a function that will play a random mp3 from myTracks
// let the functions initiate automaticly

// Exercise B)
// Play MP3s according to the user's will
