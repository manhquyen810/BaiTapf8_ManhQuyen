var press = document.querySelector("#press");
var login = document.querySelector(".login");
var register = document.querySelector(".register");

var btnLogin = document.querySelectorAll(".btn-login");
var btnRes = document.querySelectorAll(".btn-register");

var closeButtons = document.querySelectorAll(".close");
var overlayLog = document.querySelector(".overlay");
var overlayRes = document.querySelector(".overlay-2");

var notify = document.querySelectorAll(".notify");
var notifyNames = document.querySelectorAll(".notify-name");
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
    clearNotifications();
  });
});

btnLogin.forEach(function (btn) {
  btn.addEventListener("click", function () {
    login.classList.add("show");
    register.classList.remove("show-2");
    clearNotifications();
  });
});

function closeForm() {
  login.classList.remove("show");
  register.classList.remove("show-2");
  overlayLog.classList.remove("show");
  overlayRes.classList.remove("show-2");
  clearNotifications();
}

function clearNotifications() {
  notifyEmails.forEach(function (notify) {
    notify.textContent = "";
  });
  notifyPass.forEach(function (notify) {
    notify.textContent = "";
  });
}

var loginEmail = document.querySelector(".login-import-email");
var loginPass = document.querySelector(".login-import-pass");

var loginImports = document.querySelectorAll(".login-form .import");
//Login

loginImports.forEach(function (input) {
  input.addEventListener("blur", function () {
    if (loginEmail.value.trim() === "" || loginPass.value.trim() === "") {
      if (loginEmail.value === "") {
        notifyEmails[0].textContent = "Vui lòng nhập thông tin";
        loginEmail.style.borderColor = "red";
      } else {
        notifyEmails[0].textContent = "";
        loginEmail.style.borderColor = "";
      }
      if (loginPass.value === "") {
        notifyPass[0].textContent = "Vui lòng nhập thông tin";
        loginPass.style.borderColor = "red";
      } else {
        notifyPass[0].textContent = "";
        loginPass.style.borderColor = "";
      }
    } else {
      notifyEmails[0].textContent = "";
      notifyPass[0].textContent = "";
      loginEmail.style.borderColor = "";
      loginPass.style.borderColor = "";
    }
  });
});

loginEmail.addEventListener("input", function () {
  var trimEmail = loginEmail.value.trim();

  if (
    trimEmail.length > 0 &&
    (!trimEmail.includes("@gmail.com") || trimEmail.includes(" "))
  ) {
    notifyEmails[0].textContent = "Vui lòng nhập đúng định dạng";
    loginEmail.style.borderColor = "red";
  } else {
    notifyEmails[0].textContent = "";
    loginEmail.style.borderColor = "";
  }
});

loginPass.addEventListener("input", function () {
  if (loginPass.length > 0) {
    notifyPass[0].textContent = "";
    loginPass.style.borderColor = "";
  }
});
