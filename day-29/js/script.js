var container = document.querySelector("#container");
var itemList = document.querySelector(".item-list");
var arrowLeft = document.querySelector(".arrow .ar-left");
var arrowRight = document.querySelector(".arrow .ar-right");
var dots = document.querySelectorAll(".dots span");

var items = itemList.children;
// console.log(items[0].offsetWidth);
var count = 0;
var totalItems = items.length;
var startX = 0;

function updateDots() {
  dots.forEach(function (dot, index) {
    if (index === count) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

arrowRight.addEventListener("click", function () {
  if (count < totalItems - 1) {
    count++;
    itemList.style.transform = `translateX(${-100 * count}%)`;
    updateDots();
  }
});

arrowLeft.addEventListener("click", function () {
  if (count > 0) {
    count--;
    itemList.style.transform = `translateX(${-100 * count}%)`;
    updateDots();
  }
});

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    count = index;
    itemList.style.transform = `translateX(${-100 * count}%)`;
    updateDots();
  });
});

updateDots();

itemList.addEventListener("mousedown", function (e) {
  startX = e.clientX;
  itemList.style.cursor = "move";
  document.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", function () {
  itemList.style.cursor = "default";
  document.removeEventListener("mousemove", handleDrag);
});

function handleDrag(e) {
  var moveX = e.clientX - startX;
  if (moveX < 0 && count < items.length - 1) {
    count++;
  } else if (moveX > 0 && count > 0) {
    count--;
  }
  itemList.style.translate = `${-100 * count}%`;
  itemList.style.transition = "1s ease";
  updateDots();
}
