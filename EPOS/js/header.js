var inicialValueOfHamburger = $(".hamburger-icon").css("content");
var oldDate = new Date();

document.addEventListener("DOMContentLoaded", () => {
  window.setInterval(function () {
    var d = new Date();
    let sati = d.getHours();
    let minuti = d.getMinutes();
    let sekunde = d.getSeconds();
    $("#sati").text(sati);
    $("#minuti").text(minuti);
    $("#sekunde").text(sekunde);
  }, 1000);
});

$(".hamburger-icon").click(function () {
  toggleSideNav();
});

var sideNavIsOpen = false;

function toggleSideNav() {
  sideNavIsOpen ? closeSideNavigation() : openSideNavigation();
}

function openSideNavigation() {
  $(".hamburger-icon").css("content", "url('../img/close-black.png')");
  $("html").css("overflow", "hidden");
  $("nav").css("display", "flex");
  $("nav").css("flex-direction", "column");
  sideNavIsOpen = true;
}

function closeSideNavigation() {
  $(".hamburger-icon").css("content", inicialValueOfHamburger);
  $("html").css("overflow", "auto");
  $("nav").css("display", "none");
  sideNavIsOpen = false;
}

$(window).on("resize", function () {
  var win = $(this);
  if (win.height() < 1000) {
    $("nav").css("display", "none");
  }
  if (win.width() >= 1000) {
    $("html").css("overflow", "auto");
    $("nav").css("display", "flex");
    $("nav").css("flex-direction", "row");
  }
  $(".hamburger-icon").css("content", inicialValueOfHamburger);
  sideNavIsOpen = false;
});
