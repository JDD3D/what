var countDownDate = new Date("November 23, 2025 10:30:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var milliseconds = distance % 1000;

  // Pad numbers
  var dformat = days.toString().padStart(2, "0");
  var hformat = hours.toString().padStart(2, "0");
  var mformat = minutes.toString().padStart(2, "0");
  var sformat = seconds.toString().padStart(2, "0");
  var msformat = milliseconds.toString().padStart(3, "0");

  document.getElementById("Countdown").innerHTML =
    dformat + "d " + hformat + "h " + mformat + "m " + sformat + "s " + msformat + "ms";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown").innerHTML = "Hi my love <3";
  }
}, 10);