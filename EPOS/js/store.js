document.addEventListener("DOMContentLoaded", () => {
  playMusic();
});

var urlSlike;
var price;
var itemName;
var fname;
var lname;
var pnum;
var sex;
var contactChoice;

function clearInfo() {
  $(fname).text();
  $(lname).text();
  $(pnum).text();
}

$(".close-button").click(function () {
  $("#form").hide();
  clearInfo();
});

// Klik na karticu
$(".item-card").click(function () {
  urlSlike = $(this).children(".item-icon").attr("src");
  price = $(this).children("div").children(".item-button").text();
  itemName = $(this).children("div").children(".item-text").text();

  $("#form-picture").attr("src", urlSlike);
  $("#form-picture-link").attr("href", urlSlike);
  $("#price").text(price);
  $("#form").css("display", "flex");
});

$("#submit").click(function () {
  getInfo();
  if (
    !notValid(fname) &&
    !notValid(lname) &&
    !notValid(pnum) &&
    contactChoice != undefined
  ) {
    itemName = itemName.replace("\n", " ");
    price = price.replace("\n", " ");

    alert(
      `Uspesno ste obavili kupovinu!\nVasi podaci:` +
        itemName +
        " - " +
        price +
        "\nIme: " +
        fname +
        "\nPrezime: " +
        lname +
        "\nMobile Phone: " +
        pnum +
        "\nSex: " +
        sex +
        "\nPayment: " +
        contactChoice
    );
    $("#form").css("display", "none");
    clearInfo();
  } else {
    alert("Nevalidni podaci!");
  }
});

function notValid(value) {
  return (
    (typeof value == "string" && !value.trim()) ||
    typeof value == "undefined" ||
    value === null
  );
}

function getInfo(params) {
  fname = $("#fname").val();
  lname = $("#lname").val();
  pnum = $("#pnum").val();
  sex = $("#sex option:selected").text();
  contactChoice = $('input[name="payment"]:checked').val();
}

function playMusic() {
  var audio = new Audio("./media/song-03.mp3");
  audio.play();
  audio.loop = true;
}
