var countDownDate = new Date("November 24, 2025").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var msFormatted = distance.toString().padStart(3, "0");

  document.getElementById("Seconds").innerHTML = msFormatted + " ms";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Seconds").innerHTML = "Hi my love <3";
  }
}, 1); 