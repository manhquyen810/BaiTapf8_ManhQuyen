const userApiUrl = `https://mg6629-8080.csb.app/todos`;

const getUsers = async () => {
  try {
    const response = await fetch(userApiUrl);
    if (!response.ok) throw new Error("Failed to fetch todos");
    const todos = await response.json();
    console.log(todos);
    renderTables(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

const addUser = async (data) => {
  try {
    const response = await fetch(userApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error("Error adding user:", error);
    return false;
  }
};

const renderTables = (tasks) => {
  const todosList = document.querySelector(".todos-list .list");
  todosList.innerHTML = tasks
    .map(
      ({ content, status }) => `
    <div class="todo-list">
      <span class="item-info">${content
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")}</span>
      <div class="btn-list">
        <button class="btn-del">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button class="btn-edit">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-check" ">
          <i class="fa-regular fa-square-check"></i>
        </button>
      </div>
    </div>
  `
    )
    .join("");
};

const addEventFormSubmit = () => {
  const form = document.querySelector(".add");
  const inputAdd = document.getElementById("in-add");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const content = inputAdd.value.trim();

    const formData = {
      content: content,
      status: "inactive",
    };

    const status = await addUser(formData);
    if (status) {
      getUsers();
      form.reset();
      const overlay = document.querySelector(".overlay");
      overlay.classList.remove("show");
    } else {
      alert("Thêm thất bại (Server error)");
    }
  });
};

export { getUsers, addUser, renderTables, addEventFormSubmit };
