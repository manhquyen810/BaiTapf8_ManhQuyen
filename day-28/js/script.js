var todoList = document.querySelector("#todo-list");
var importText = document.querySelector(".importText");
var btnAdd = document.querySelector(".btn-add");

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

  var editBtn = document.createElement("span");
  editBtn.classList.add("todo-edit");
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

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

function removeText(list, remove) {
  remove.addEventListener("click", function () {
    list.remove();
  });
}
