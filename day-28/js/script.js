var todoList = document.querySelector("#todo-list");
var formAdd = document.querySelector(".import-add");
var importText = document.querySelector(".importText");
var btnAdd = document.querySelector(".btn-add");

console.log(formAdd);

btnAdd.addEventListener("click", function (event) {
  event.preventDefault();

  var task = importText.value.trim();

  if (task) {
    // console.log(task.length);
    createEl(task);

    importText.value = "";
  } else {
    createEl(task);
    listItem.textContent = "";
  }
});
// console.log(importText.value);

function createEl(task) {
  var list = document.createElement("div");
  list.classList.add("list");

  var listItem = document.createElement("li");
  validateText(listItem, task);
  listItem.style.cursor = "pointer";
  completeText(listItem);

  var editBtn = document.createElement("span");
  editBtn.classList.add("todo-edit");
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editText(task, listItem, editBtn);

  var removeBtn = document.createElement("span");
  removeBtn.classList.add("todo-remove");
  removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  removeText(list, removeBtn);

  list.appendChild(listItem);
  list.appendChild(editBtn);
  list.appendChild(removeBtn);
  todoList.appendChild(list);
}

function validateText(item, task) {
  if (task.length > 28) {
    item.textContent = task.substring(0, 28) + "...";
  } else {
    item.textContent = task;
  }
}

function completeText(item) {
  item.addEventListener("click", function () {
    var isComplete = item.classList.contains("complete");
    console.log(isComplete);
    if (!isComplete) {
      var del = document.createElement("del");
      del.textContent = item.textContent;
      item.innerHTML = "";
      item.appendChild(del);
      item.style.opacity = "0.5";
      item.classList.add("complete");
    } else {
      item.innerHTML = item.textContent;
      item.style.opacity = "1";
      item.classList.remove("complete");
    }
  });
}

function editText(task, listItem, editBtn) {
  editBtn.addEventListener("click", function () {});
}

function removeText(list, remove) {
  remove.addEventListener("click", function () {
    list.remove();
  });
  //xóa toàn bộ
  document.addEventListener("keyup", function (e) {
    if (e.key === "Delete") {
      list.remove();
    }
  });
}
