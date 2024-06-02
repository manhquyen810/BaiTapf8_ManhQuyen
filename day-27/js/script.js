var press = document.querySelector("#press");
var login = document.querySelector(".login");
var register = document.querySelector(".register");

var btnLogin = document.querySelectorAll(".btn-login");
var btnRes = document.querySelectorAll(".btn-register");

var closeButtons = document.querySelectorAll(".close");
var overlayLog = document.querySelector(".overlay");
var overlayRes = document.querySelector(".overlay-2");

var notifyNames = document.querySelectorAll(".notify-name");
var notifyEmails = document.querySelectorAll(".notify-email");
var notifyPass = document.querySelectorAll(".notify-pass");

var impt = document.querySelectorAll(".import");

press.addEventListener("click", function () {
  login.classList.add("show");
});

closeButtons.forEach(function (button) {
  button.addEventListener("click", closeForm);
});
overlayLog.addEventListener("click", closeForm);
overlayRes.addEventListener("click", closeForm);

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
  notifyNames.forEach(function (notify) {
    notify.textContent = "";
  });
  impt.forEach(function (input) {
    input.style.borderColor = "";
  });
}

// đăng nhập
var loginEmail = document.querySelector(".login-import-email");
var loginPass = document.querySelector(".login-import-pass");
var loginImports = document.querySelectorAll(".login-form .import");

loginImports.forEach(function (input) {
  input.addEventListener("blur", validateLoginForm);
});

loginEmail.addEventListener("input", function () {
  var trimmedEmail = loginEmail.value.trim();
  if (
    trimmedEmail.length > 0 &&
    (!trimmedEmail.includes("@gmail.com") || trimmedEmail.includes(" "))
  ) {
    notifyEmails[0].textContent = "Vui lòng nhập đúng định dạng";
    loginEmail.style.borderColor = "red";
  } else {
    notifyEmails[0].textContent = "";
    loginEmail.style.borderColor = "";
  }
});

loginPass.addEventListener("input", function () {
  if (loginPass.value.trim().length > 0) {
    notifyPass[0].textContent = "";
    loginPass.style.borderColor = "";
  }
});

function validateLoginForm() {
  validateLoginEmail();
  validateLoginPass();
}

function validateLoginEmail() {
  var trimmedEmail = loginEmail.value.trim();
  if (trimmedEmail === "") {
    notifyEmails[0].textContent = "Vui lòng nhập thông tin";
    loginEmail.style.borderColor = "red";
  } else if (
    !trimmedEmail.includes("@gmail.com") ||
    trimmedEmail.includes(" ")
  ) {
    notifyEmails[0].textContent = "Vui lòng nhập đúng định dạng";
    loginEmail.style.borderColor = "red";
  } else {
    notifyEmails[0].textContent = "";
    loginEmail.style.borderColor = "";
  }
}

function validateLoginPass() {
  if (loginPass.value.trim() === "") {
    notifyPass[0].textContent = "Vui lòng nhập thông tin";
    loginPass.style.borderColor = "red";
  } else {
    notifyPass[0].textContent = "";
    loginPass.style.borderColor = "";
  }
}

//đăng ký
var registerName = document.querySelector(".register-import-name");
var registerEmail = document.querySelector(".register-import-email");
var registerPass = document.querySelector(".register-import-pass");
var registerImports = document.querySelectorAll(".register-form .import");

registerImports.forEach(function (input) {
  input.addEventListener("blur", validateRegisterForm);
});

registerName.addEventListener("input", function () {
  if (registerName.value.trim().length > 0) {
    notifyNames[0].textContent = "";
    registerName.style.borderColor = "";
  }
});

registerEmail.addEventListener("input", function () {
  var trimmedEmail = registerEmail.value.trim();
  if (
    trimmedEmail.length > 0 &&
    (!trimmedEmail.includes("@gmail.com") || trimmedEmail.includes(" "))
  ) {
    notifyEmails[1].textContent = "Vui lòng nhập đúng định dạng";
    registerEmail.style.borderColor = "red";
  } else {
    notifyEmails[1].textContent = "";
    registerEmail.style.borderColor = "";
  }
});

registerPass.addEventListener("input", function () {
  if (registerPass.value.trim().length > 0) {
    notifyPass[1].textContent = "";
    registerPass.style.borderColor = "";
  }
});

function validateRegisterForm() {
  validateRegisterName();
  validateRegisterEmail();
  validateRegisterPass();
}

function validateRegisterName() {
  if (registerName.value.trim() === "") {
    notifyNames[0].textContent = "Vui lòng nhập thông tin";
    registerName.style.borderColor = "red";
  } else {
    notifyNames[0].textContent = "";
    registerName.style.borderColor = "";
  }
}

function validateRegisterEmail() {
  var trimmedEmail = registerEmail.value.trim();
  if (trimmedEmail === "") {
    notifyEmails[1].textContent = "Vui lòng nhập thông tin";
    registerEmail.style.borderColor = "red";
  } else {
    notifyEmails[1].textContent = "";
    registerEmail.style.borderColor = "";
  }
}

function validateRegisterPass() {
  if (registerPass.value.trim() === "") {
    notifyPass[1].textContent = "Vui lòng nhập thông tin";
    registerPass.style.borderColor = "red";
  } else {
    notifyPass[1].textContent = "";
    registerPass.style.borderColor = "";
  }
}
