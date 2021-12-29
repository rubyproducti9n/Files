// ==============================================================
// SCHEDULE CONTROL
// ==============================================================
window.setInterval(function() {
var audio = document.getElementById("audio");
var current = new Date();
var visible = new Date("Dec 30, 2021 00:00:01")
var expiry = new Date("Dec 30, 2021 03:00:02")
if (current.getTime() > visible.getTime()) {
$('.player').hide();
$('.live').show();
$('.notice').show();
$('.player').show();
$('.streaming').hide();
$('.expired').hide();
$('.join').show();
} if (current.getTime() > expiry.getTime()) {
$('.player').show();
$('.notice').hide();
$('.live').hide();
$('.streaming').hide();
$('.expired').show();
$('.join').hide();
audio.pause();
window.location.href = "select.html";}}, 0);











// ==============================================================
// START/END COUNT CONTROL
// ==============================================================
// COUNT START CONTROL ==========================================
var countDownstreaming = new Date("Dec 30, 2021 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownstreaming - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
clearInterval(x);
document.getElementById("timer").innerHTML = "NOW STREAMING";}}, 1000);
// COUNT END CONTROL ============================================
var countDownEnd = new Date("Dec 30, 2021 03:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownEnd - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("ending").innerHTML = "Ends in " + days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
if (distance < 0) {
clearInterval(x);
document.getElementById("ending").innerHTML = "Loading...";}}, 1000);


// ================================================================
// START/END AND WIDGET LOADING CONTROL
// ================================================================
var div = document.getElementById("loading-starts");
div.innerHTML += ' <div class="streaming">\
<center> <img class="strm-img" src="../bts-logo.png" draggable="false"></center>\
  <p class="expired-text"><center>\
  <h6>STREAMS IN</h6>\
  <h6><div id="timer"></div></h6>\
    <br><br><br>\
  </center>\
</div>';
{/*  */}
var div = document.getElementById("loading-ends");
div.innerHTML += '<div class="expired">\
<center> <img class="ex-img" src="../bts-logo.png" draggable="false"></center>\
\
</div>';

{/* <p class="expired-text"><center>\
    <h2> LIVE STREAM HAS ENDED </h2>\
    <img src="../../loader.gif" width="10%">\
    <br><br><br></center>\
    <div class="fancy-border-radius"></div>\
    <div class="fancy-border-radius"></div>\
    <div class="fancy-border-radius"></div></p>\ */}

// =============================================================
// AD CONTROL
// =============================================================
var div = document.getElementById("stream-ad");
div.innerHTML += '<h5 class="ad">AD</h5>\
  <table class="table text-black">\
    <tbody>\
      <tr>\
        <th> STREAM </th>\
        <th>DETAILS </th>\
        </tr>\
        <tr class="">\
          <th>\
          Title</th>\
          <td>\
            <a class="text-black" href="../Android App/rooms/bts room.html"><h6> BTS LIVE CONCERT | LIVE CONCERT | STREAMING SOON </h6></a>\
          </td>\
          <tr>\
            <th>\
              Announced\
            </th>\
            <td>\
              <time class="timeago text-black" datetime="04 Nov 2021 14:51"></time>\
            </td>\
          </tr>\
          <tr>\
            <th>\
              Artist\
            </th>\
            <td>\
              BTS\
            </td>\
          </tr>\
          <tr>\
            <th>\
              Medium\
            </th>\
            <td>\
              Audio / Video\
            </td>\
          </tr>\
          <tr>\
            <th>\
              Music Label\
            </th>\
            <td>\
              Hybe Label\
            </td>\
          </tr>\
          <tr>\
            <th>\
             Device\
            </th>\
            <td>\
              Any\
            </td>\
          </tr>\
          <tr>\
            <th>\
              Tags\
            </th>\
            <td>\
            <span class="badge bg-secondary">BTS ROOMS</span>\
            <span class="badge bg-secondary">K-POP</span>\
            <span class="badge bg-secondary">Silent Nights</span>\
            <span class="badge bg-secondary">Hybe Label</span>\
            <span class="badge bg-secondary">rubyproducti9n</span>\
            <span class="badge bg-secondary">...</span>\
            </td>\
          </tr>\
    </tbody>\
  </table>';




// ===============================================================
// PLAYER CONTROL
// ===============================================================

// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
  {
    name: "V Special",
    artist: "Kim Tae-hyung (김태형)",
    image: "../v-special.jpg",
    path: "https://drive.google.com/uc?export=download&id=1kd72X2xPFPpO08vSXHIVsVaeG8_hh-YV"
  },
];


function loadTrack(track_index) {
// Clear the previous seek timer
clearInterval(updateTimer);
resetValues();

// Load a new track
curr_track.src = track_list[track_index].path;
curr_track.load();

// Update details of the track
track_art.style.backgroundImage =
	"url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;
track_artist.textContent = track_list[track_index].artist;
now_playing.textContent =
	"PLAYING " + (track_index + 1) + " OF " + track_list.length;

// Set an interval of 1000 milliseconds
// for updating the seek slider
updateTimer = setInterval(seekUpdate, 1000);

// Move to the next track if the current finishes playing
// using the 'ended' event
curr_track.addEventListener("ended", nextTrack);

// Apply a random background color
// random_bg_color();
}

function random_bg_color() {
// Get a random number between 64 to 256
// (for getting lighter colors)
let red = Math.floor(Math.random() * 256) + 64;
let green = Math.floor(Math.random() * 256) + 64;
let blue = Math.floor(Math.random() * 256) + 64;

// Construct a color withe the given values
let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

// Set the background to the new color
document.body.style.background = bgColor;
}

// Function to reset all values to their default
function resetValues() {
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";
seek_slider.value = 0;
}
function playpauseTrack() {
// Switch between playing and pausing
// depending on the current state
if (!isPlaying) playTrack();
else pauseTrack();
}

function playTrack() {
// Play the loaded track
curr_track.play();
isPlaying = true;

// Replace icon with the pause icon
playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
// Pause the loaded track
curr_track.pause();
isPlaying = false;

// Replace icon with the play icon
playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
// Go back to the first track if the
// current one is the last in the track list
if (track_index < track_list.length - 1)
	track_index += 1;
else track_index = 0;

// Load and play the new track
loadTrack(track_index);
playTrack();
}

function prevTrack() {
// Go back to the last track if the
// current one is the first in the track list
if (track_index > 0)
	track_index -= 1;
else track_index = track_list.length - 1;

// Load and play the new track
loadTrack(track_index);
playTrack();
}
function seekTo() {
// Calculate the seek position by the
// percentage of the seek slider
// and get the relative duration to the track
seekto = curr_track.duration * (seek_slider.value / 100);

// Set the current track position to the calculated seek position
curr_track.currentTime = seekto;
}

function setVolume() {
// Set the volume according to the
// percentage of the volume slider set
curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
let seekPosition = 0;

// Check if the current track duration is a legible number
if (!isNaN(curr_track.duration)) {
	seekPosition = curr_track.currentTime * (100 / curr_track.duration);
	seek_slider.value = seekPosition;

	// Calculate the time left and the total duration
	let currentMinutes = Math.floor(curr_track.currentTime / 60);
	let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
	let durationMinutes = Math.floor(curr_track.duration / 60);
	let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

	// Add a zero to the single digit time values
	if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
	if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
	if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
	if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

	// Display the updated duration
	curr_time.textContent = currentMinutes + ":" + currentSeconds;
	total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}

// Load the first track in the tracklist
loadTrack(track_index);













