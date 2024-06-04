var todoList = document.querySelector("#todo-list");
var importText = document.querySelector(".importText");
var btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", function (event) {
  event.preventDefault();

  var task = importText.value.trim();

  if (task) {
    var list = document.createElement("div");
    list.classList.add("list");

    var listItem = document.createElement("li");
    listItem.textContent = task;

    var editBtn = document.createElement("span");
    editBtn.classList.add("todo-edit");
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    console.log(editBtn);

    var removeBtn = document.createElement("span");
    removeBtn.classList.add("todo-remove");
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    list.appendChild(listItem);
    list.appendChild(editBtn);
    list.appendChild(removeBtn);

    todoList.appendChild(list);

    importText.value = "";
  } else {
    alert("Vui lòng nhập task!");
  }
});
