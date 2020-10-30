function startup() {
    var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchleave", handleLeave, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click","alert('click')");
  }
  window.onload=startup;
  function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="Touchstart"+evt[0].pageX+""+evt[0].pageY;
}
function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="Touchend"+evt[0].pageX+""+evt[0].pageY;
}
function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="Touchmove"+evt[0].pageX+""+evt[0].pageY;
}
function click(){
    alert('click');
}