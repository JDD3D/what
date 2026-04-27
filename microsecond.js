var countDownDate = new Date("June 19, 2026 10:30:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var msFormatted = distance.toString().padStart(3, "0");

  document.getElementById("Seconds").innerHTML = msFormatted + " ms";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Seconds").innerHTML = "";
  }
}, 1); 