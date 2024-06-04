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
  //   editText(task, listItem, editBtn);

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
    var isCompleted = item.classList.contains("completed");
    console.log(isCompleted);
    if (!isCompleted) {
      var del = document.createElement("del");
      del.textContent = item.textContent;
      item.innerHTML = "";
      item.appendChild(del);
      item.classList.add("completed");
    } else {
      item.innerHTML = item.textContent;
      item.classList.remove("completed");
    }
  });
}

// function editText(task, list, edit) {
//   edit.addEventListener("click", function () {
//     importText.value = task;
//     btnAdd.addEventListener("click", function () {
//       item.textContent = importText.value;
//     });
//   });
// }

function removeText(list, remove) {
  remove.addEventListener("click", function () {
    list.remove();
  });
}
