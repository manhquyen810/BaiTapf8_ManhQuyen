//Show - close
var press = document.querySelector("#press");
var login = document.querySelector(".login");
var closeBtn = document.querySelector(".close");
var overlay = document.querySelector(".login-overlay");
var notifyEmail = document.querySelector(".notify-email");
var notifyPass = document.querySelector(".notify-pass");

press.addEventListener("click", function () {
  login.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  login.classList.remove("show");
  notifyEmail.innerHTML = "";
  notifyPass.innerHTML = "";
});

overlay.addEventListener("click", function () {
  login.classList.remove("show");
  notifyEmail.innerHTML = "";
  notifyPass.innerHTML = "";
});

//validate
var email = document.querySelector(".import-email");
var pass = document.querySelector(".import-pass");
var importInfor = document.querySelector(".log");

importInfor.addEventListener("click", function () {
  //   console.log(email.value);
  login.addEventListener("click", function (e) {
    if (email.value === "" || pass.value === "") {
      notifyEmail.innerHTML = "Vui lòng nhập thông tin";
      notifyPass.innerHTML = "Vui lòng nhập thông tin";
    }
    console.log(e);
  });
});
