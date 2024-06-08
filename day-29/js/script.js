var itemList = document.querySelector(".item-list");
var arrowLeft = document.querySelector(".arrow .ar-left");
var arrowRight = document.querySelector(".arrow .ar-right");

var items = itemList.children;
var widthImage = items[0].offsetWidth;
console.log(widthImage);

var count = 0;
var totalItems = items.length;

arrowRight.addEventListener("click", function () {
  if (count < totalItems - 1) {
    count++;
    itemList.style.transform = `translateX( ${-widthImage * count}px)`;
  }
});

arrowLeft.addEventListener("click", function () {
  if (currentIndex > 0) {
    count--;
    itemList.style.transform = `translateX( ${-widthImage * count}px)`;
  }
});
