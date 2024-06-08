var container = document.querySelector("#container");
var itemList = document.querySelector(".item-list");
var arrowLeft = document.querySelector(".arrow .ar-left");
var arrowRight = document.querySelector(".arrow .ar-right");
var dots = document.querySelectorAll(".dots span");

var items = itemList.children;
var widthImage = items[0].offsetWidth;
console.log(widthImage);
var count = 0;
var totalItems = items.length;
console.log(totalItems);

function updateContainerWidth() {
  itemList.style.width = `${widthImage * totalItems}px`;
}

function updateDots() {
  dots.forEach(function (dot, index) {
    if (index === count) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

updateContainerWidth();
updateDots();

arrowRight.addEventListener("click", function () {
  if (count < totalItems - 1) {
    count++;
    itemList.style.transform = `translateX(${-widthImage * count}px)`;
    updateDots();
  }
});

arrowLeft.addEventListener("click", function () {
  if (count > 0) {
    count--;
    itemList.style.transform = `translateX(${-widthImage * count}px)`;
    updateDots();
  }
});

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    handleDotClick(index);
  });
});

function handleDotClick(index) {
  count = index;
  itemList.style.transform = `translateX(${-widthImage * count}px)`;
  updateDots();
}
