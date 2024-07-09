import { getUsers, addEventFormSubmit } from "../modules/data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const btnAdd = container.querySelector(".btn-add");

  const overlay = container.querySelector(".overlay");
  const btnSave = container.querySelector(".btn-save");
  const btnCancel = container.querySelector(".btn-cancel");

  btnAdd.addEventListener("click", () => {
    overlay.classList.add("show");
  });

  btnSave.addEventListener("click", () => {
    addEventFormSubmit();
  });

  btnCancel.addEventListener("click", () => {
    const form = document.querySelector(".add");
    form.reset();
    overlay.classList.remove("show");
  });

  getUsers();
});
