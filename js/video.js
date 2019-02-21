var videoPro = document.getElementById('videoPro'),
  playBtn = document.getElementById('playBtn');

function playVideo() {
  if (videoPro.paused) {
    videoPro.play();
  } else {
    videoPro.pause();
  }
}