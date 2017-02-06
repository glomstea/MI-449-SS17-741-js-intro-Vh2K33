function kickFunction() {
  var audio = document.getElementById("kick");
  audio.play();
}
function snareFunction() {
  var audio = document.getElementById("snare");
  audio.play();
}
function hihatFunction() {
  var audio = document.getElementById("hihat");
  audio.play();
}
function rideFunction() {
  var audio = document.getElementById("ride");
  audio.play();
}
function tomFunction() {
  var audio = document.getElementById("tom");
  audio.play();
}
function clapFunction() {
  var audio = document.getElementById("clap");
  audio.play();
}
document.getElementById("kickbutton").addEventListener("mouseover", kickFunction);
document.getElementById("kickbutton").addEventListener("click", kickFunction);
document.getElementById("snarebutton").addEventListener("mouseover", snareFunction);
document.getElementById("snarebutton").addEventListener("click", snareFunction);
document.getElementById("hihatbutton").addEventListener("mouseover", hihatFunction);
document.getElementById("hihatbutton").addEventListener("click", hihatFunction);
document.getElementById("ridebutton").addEventListener("mouseover", rideFunction);
document.getElementById("ridebutton").addEventListener("click", rideFunction);
document.getElementById("tombutton").addEventListener("mouseover", tomFunction);
document.getElementById("tombutton").addEventListener("click", tomFunction);
document.getElementById("clapbutton").addEventListener("mouseover", clapFunction);
document.getElementById("clapbutton").addEventListener("click", clapFunction);
