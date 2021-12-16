// Fa bars
function openBtnmenu() {
  let menu = document.querySelector(".menu");
  menu.style.transform = "translateX(0%)";
}

function closeBtnmenu() {
  let menu = document.querySelector(".menu");
  menu.style.transform = "translateX(-101%)";
}
// Xarita
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [40.538294, 70.971076],
    zoom: 10,
  });
}

//Carousel
$(".carousel").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

//Job Modal
let modal = document.querySelector(".modal");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.querySelector(".jobBtn").addEventListener("click", function () {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
});

function closeBtn() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}
// document.querySelector(".fa-close").addEventListener("click", function () {
//   let modal = document.querySelector(".modal");
//   modal.style.display = "none";
// });

$(document).ready(function () {
  $(window).scroll(function () {
    var x = $(document).scrollTop();
    if (x > 200) {
      $("#scrollTopBtn").show();
    } else {
      $("#scrollTopBtn").hide();
    }
  });
  $("#scrollTopBtn").click(function () {
    $(window).scrollTop(0);
  });
});

// Window scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowsheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowsheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Elementlar
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 1150) {
    document.querySelector(".services").classList.add("anim1");
  } else {
    document.querySelector(".services").classList.remove("anim1");
  }
});
