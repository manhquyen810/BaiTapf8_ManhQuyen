var press = document.querySelector("#press");
var login = document.querySelector(".login");
var register = document.querySelector(".register");

var btnLogin = document.querySelectorAll(".btn-login");
var btnRes = document.querySelectorAll(".btn-register");

var closeButtons = document.querySelectorAll(".close");
var overlayLog = document.querySelector(".overlay");
var overlayRes = document.querySelector(".overlay-2");

var notifyEmails = document.querySelectorAll(".notify-email");
var notifyPass = document.querySelectorAll(".notify-pass");

press.addEventListener("click", function () {
  login.classList.add("show");
});

closeButtons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function () {
    closeForm();
  });
});

overlayLog.addEventListener("click", function () {
  closeForm();
});

overlayRes.addEventListener("click", function () {
  closeForm();
});

btnRes.forEach(function (btn) {
  btn.addEventListener("click", function () {
    register.classList.add("show-2");
    login.classList.remove("show");
  });
});

btnLogin.forEach(function (btn) {
  btn.addEventListener("click", function () {
    login.classList.add("show");
    register.classList.remove("show-2");
  });
});

function closeForm() {
  login.classList.remove("show");
  register.classList.remove("show-2");
  overlayLog.classList.remove("show");
  overlayRes.classList.remove("show-2");
  //   overlay.classList.remove("show-2");
}

var email = document.querySelector(".import-email");
var pass = document.querySelector(".import-pass");
var importInfor = document.querySelector(".log");

function clearNotifications() {
  notifyEmail.innerHTML = "";
  notifyPass.innerHTML = "";
}
