document.addEventListener("DOMContentLoaded", () => {
  resetBiographyBox();
  playMusic();
});

function playMusic() {
  var audio = new Audio("./media/song-04.mp3");
  audio.play();
  audio.loop = true;
}
function changeBiographyBox(title, paragraph) {
  $("#biography-title").text(title);
  $("#biography-paragraph").text(paragraph);
}
function resetBiographyBox() {
  $("#biography-title").text("");
  $("#biography-paragraph").text("");
}

$("#iva").hover(
  function () {
    // over
    changeBiographyBox(
      "Iva Veličković",
      "Hi. I'm from Zaječar and I really like crime movies. In my free time I hang out with friends and I am a member of the AIESEC organization."
    );
  },
  function () {
    // out
    resetBiographyBox();
  }
);

$("#marko").hover(
  function () {
    // over
    changeBiographyBox("Marko Milev", "There is nothing here. Go back to Iva.");
  },
  function () {
    // out
    resetBiographyBox();
  }
);

$("#petar").hover(
  function () {
    // over
    changeBiographyBox(
      "Petar Petrićević",
      "I should say something interesting about myself, but I'll leave that to Marko."
    );
  },
  function () {
    // out
    resetBiographyBox();
  }
);
