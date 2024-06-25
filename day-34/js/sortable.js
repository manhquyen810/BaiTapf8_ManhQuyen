var list = document.querySelector(".list");
var itemList = list.querySelectorAll(".list-item");

itemList.forEach(function (item) {
  item.addEventListener("dragstart", function () {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", function () {
    item.classList.remove("dragging");
    updateOrder();
  });
});

var sortableList = function (e) {
  e.preventDefault();
  var dragging = list.querySelector(".dragging");
  var clientY = e.clientY;
  var siblings = [...list.querySelectorAll(".list-item:not(.dragging)")];
  var nextSibling = siblings.find(function (sibling) {
    return clientY <= sibling.offsetTop - sibling.offsetHeight / 2;
  });
  if (!nextSibling) {
    list.append(dragging);
  } else {
    list.insertBefore(dragging, nextSibling);
  }
};
list.addEventListener("dragover", sortableList);

function updateOrder() {
  var items = list.querySelectorAll(".list-item");
  var moduleCount = 1;
  var lessonCount = 1;
  items.forEach(function (item) {
    var textContent = item.textContent.trim();
    if (textContent.startsWith("Module:")) {
      item.innerHTML = `Module: ${moduleCount++}: <span>${
        item.querySelector("span").textContent
      }</span>`;
    } else if (textContent.startsWith("Bài:")) {
      item.innerHTML = `Bài: ${lessonCount++}: <span>${
        item.querySelector("span").textContent
      }</span>`;
    }
  });
}
