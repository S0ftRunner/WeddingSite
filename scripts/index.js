const circles = document.querySelectorAll(".circleImg");
const firstHeart = document.querySelector("#first-heart");
const firstHeartPath = document.querySelector("#first-heart-path");
// console.log(firstHeart.viewBox.baseVal);
console.log(firstHeartPath);
console.log(circles);

function changeSizes() {
  let width = document.body.clientWidth;
  if (width <= 600) {
    window.frames["yandexFrame"].src =
      "https://yandex.ru/map-widget/v1/?um=constructor%3A8404e6788f70ad897cc8c47b1f3a52c1f8e02aa29a77c81545211f68934879b8&amp;source=constructor";
    window.frames["yandexFrame"].width = 336;
    window.frames["yandexFrame"].height = 247;
    circles.forEach((circle) => {
      circle.width.baseVal.value = 52;
      circle.height.baseVal.value = 52;
      console.log(circle.width.baseVal.value);
    });
  } else {
    window.frames["yandexFrame"].src =
      "https://yandex.ru/map-widget/v1/?um=constructor%3A841c6b075d39ce1162c1e4cdbfeaec45b0eccc85fe58166532ccd0a7aae5da93&amp;source=constructor";
    window.frames["yandexFrame"].width = 604;
    window.frames["yandexFrame"].height = 419;

    circles.forEach((circle) => {
      circle.width.baseVal.value = 113;
      circle.height.baseVal.value = 113;
      console.log(circle.width.baseVal.value);
    });
  }
}

changeSizes();

window.onresize = () => {
  changeSizes();
};
