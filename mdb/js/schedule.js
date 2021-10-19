
// window.setInterval(function() {
//   var myAudio = document.getElementById("audio");
//   var current = new Date();
//   var expiry = new Date("Sep 03, 2021 03:01:00")

//   if (current.getTime() < expiry.getTime()) {
//           $('.live').show();
//           $('.expired').hide();
//           $('.join').show();
//   } else if (current.getTime() > expiry.getTime()) {
//           $('.live').hide();
//           $('.expired').show();
//           $('.join').hide();
//           myAudio.pause();
//           window.location.href = "select.html";
//       }
//   }, 0);

var countDownstreaming = new Date("Oct 19, 2021 23:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownstreaming - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
//
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Connecting, please wait...";
  }
}, 1000);

window.setInterval(function() {
        var audio = document.getElementById("audio");
        // var player = document.getElementsByClassName(".player");
        // var notice = document.getElementsByClassName(".notice");
        var current = new Date();
        var visible = new Date("Oct 19, 2021 23:00:04")
        var expiry = new Date("Oct 20, 2021 02:00:03")

        if (current.getTime() > visible.getTime()) {
                // player.style.block = "none";
                // notice.style.block = "none";
                $('.player').hide();
                // $('.background').hide();
                $('.live').show();
                $('.notice').show();
                $('.player').show();
                $('.streaming').hide();
                $('.expired').hide();
                $('.join').show();
        } if (current.getTime() > expiry.getTime()) {
          // player.style.block = "none";
          // notice.style.block = "none";
                $('.notice').hide();
                $('.live').hide();
                $('.streaming').hide();
                $('.expired').show();
                $('.join').hide();
                audio.pause();
                window.location.href = "select.html";
            }
        }, 0);
