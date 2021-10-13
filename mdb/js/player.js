// const chk = document.getElementById('chk');

// chk.addEventListener('click', () => {
//   chk.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");
//   localStorage.setItem('darkModeStatus', chk.checked);
// });

// window.addEventListener('load', (event) => {
//   if(localStorage.getItem('darkModeStatus')=="true"){
//     document.body.classList.add("dark");
//     document.getElementById('chk').checked = true;
//   }
// });


const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const volume = videoPlayer.querySelector('.volume')
const muteButton = videoPlayer.querySelector('.mute')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')


  playButton.addEventListener("click", function () {
            if (video.paused == true) {
                video.play();
            } else {
                video.pause();
            }
        });
        $(document).keyup(function (e) {
          var keyCode = e.keyCode ? e.keyCode : e.which
          if (keyCode == 32) {
            video.play();
          }
        });
        $(document).keyup(function (e) {
          var keyCode = e.keyCode ? e.keyCode : e.which
          if (keyCode == 75) {
            video.pause();
          }
        });
        volume.addEventListener("change", function () {
          video.volume = volume.value;
      });
        muteButton.addEventListener("click", function () {
            if (video.muted == false) {
                video.muted = true;
                muteButton.innerHTML = '<span class="unmute-tooltiptext">Unmute (n)</span><i class="fa fa-volume-off mute"></i>';
            } else {
                video.muted = false;
                muteButton.innerHTML = '<span class="mute-tooltiptext">Mute (m)</span><i class="fa fa-volume-up mute"></i>';
            }
        });
        $(document).keyup(function (e) {
          var keyCode = e.keyCode ? e.keyCode : e.which
          if (keyCode == 77) {
            video.muted = true;
            muteButton.innerHTML = '<span class="unmute-tooltiptext">Unmute (n)</span><i class="fa fa-volume-off mute" title="Mute (m)"></i>';
          }
        });
        $(document).keyup(function (e) {
          var keyCode = e.keyCode ? e.keyCode : e.which
          if (keyCode == 78) {
            video.muted = false;
            muteButton.innerHTML = '<span class="mute-tooltiptext">Mute (m)</span><i class="fa fa-volume-up mute" title="Unmute (n)"></i>';
          }
        });
        //current time and duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes = Math.floor(video.duration / 60)
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+ currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)
        //Progress bar
video.addEventListener('timeupdate', () =>{
  const percentage = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${percentage}%`
})

//change progress bar on click
progress.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = progressTime
})
        fullScreenButton.addEventListener("click", function () {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen(); // Firefox
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen(); // Chrome and Safari
            }
        });
        seekBar.addEventListener("change", function () {
            var time = video.duration * (seekBar.value / 100);
            video.currentTime = time;
        });
        video.addEventListener("timeupdate", function () {
            var value = (100 / video.duration) * video.currentTime;
            seekBar.value = value;
        });
        seekBar.addEventListener("mousedown", function () {
            video.pause();
        });
        seekBar.addEventListener("mouseup", function () {
            video.play();
        });




// //Play and Pause button
// playButton.addEventListener('click', (e) => {
//   if(video.paused){
//     video.play()
//     e.target.textContent = '❚❚'
//   } else {
//     video.pause()
//     e.target.textContent = '►'
//   }
// })

// //volume
// volume.addEventListener('mousemove', (e)=> {
//   video.volume = e.target.value
// })












// var div = document.getElementById('player');
// div.innerHTML += '<div class="player-controls"><div class="video-progress"><div class="video-progress-filled"></div></div><button class="play-button play-tooltip" title="Play"><span class="play-tooltiptext">Play (space)</span>  ►</button><a class="button2 next-tooltip" title="Next"><span class="next-tooltiptext">Next</span> <i class="fas fa-forward" style="color: white;"></i> </a><a class="button3 mute-tooltip" title="Mute"><span class="mute-tooltiptext">Mute (m)</span> <i class="fas fa-volume-up" style="color: white;"></i> </a><input type="range" class="volume" min="0" max="1" step="0.01" value="1" /><div class="time"><span class="current">0:00</span>\
// <!-- <span class="duration">0:00</span> --></div><a class="button5 download-tooltip" title="Download" data-toggle="modal" data-target="#Menu" href="javascript:void(0)"><span class="download-tooltiptext">Download</span> <i class="fas fa-download" style="color: white;"></i> </a><a class="button4 disabled" title="Fullscreen"> <i class="fas fa-expand" style="color: white;"></i> </a></div>';

