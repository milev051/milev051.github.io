document.addEventListener("DOMContentLoaded", () => {
  playMusic();
});

function playMusic() {
      var audio = new Audio("../media/song-01.mp3");
      audio.play();
      audio.loop = true;
  }