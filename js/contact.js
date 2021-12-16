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
