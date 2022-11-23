document.addEventListener("DOMContentLoaded", () => {
  playMusic();
});

function playMusic() {
  if (audio == null) {
    var audio = new Audio("../media/song-02.mp3");
    audio.play();
    audio.loop = true;
  }
}
