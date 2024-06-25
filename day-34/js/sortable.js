var list = document.querySelector(".list");
var itemList = list.querySelectorAll(".list-item");

itemList.forEach(function (item) {
  item.addEventListener("dragstart", function () {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", function () {
    item.classList.remove("dragging");
  });
});

var sortableList = function (e) {
  e.preventDefault();
  var dragging = list.querySelector(".dragging");
  var clientY = e.clientY;
  //   console.log("Y ", clientY);
  var siblings = [...list.querySelectorAll(".list-item:not(.dragging)")];
  var nextSibling = siblings.find(function (sibling) {
    // console.log("top ", sibling.offsetTop);
    // console.log("height ", sibling.offsetHeight);
    return clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  //   console.log(nextSibling);
  list.insertBefore(dragging, nextSibling);
};

list.addEventListener("dragover", sortableList);
