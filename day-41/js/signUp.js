import { httpClient } from "../modules/client.js";

// console.log(httpClient.serverApi);

const serverApi = httpClient.serverApi;

const signUpForm = document.querySelector(".signUp-form");
// console.log(signUpForm);

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { name, email, password } = Object.fromEntries([
    ...new FormData(e.target),
  ]);

  const errors = {};
  if (!name) {
    errors.name = "Vui lòng nhập tên";
  } else {
    // const regex = /^[A-Z]/;
    // if (!regex.test(name)) {
    //   errors.name = "Tên không đúng định dạng chữ hoa";
    // }
  }
  if (!email) {
    errors.email = "Vui lòng nhập email";
  } else {
    // const check = email.trim();
    // if (!check.includes("@gmail.com")) {
    //   errors.email = "Email không đúng định dạng";
    // }
  }
  if (!password) {
    errors.password = "Vui lòng nhập mật khẩu";
  }
  const errorElList = signUpForm.querySelectorAll(".error");
  // console.log(errorElList);
  errorElList.forEach((errorEl) => {
    errorEl.innerText = "";
  });
  // console.log(Object.keys(errors));
  if (Object.keys(errors).length) {
    Object.keys(errors).forEach((key) => {
      const error = errors[key];
      // console.log(error);
      const errorEl = signUpForm.querySelector(`.error-${key}`);
      if (errorEl) {
        errorEl.innerText = error;
      }
    });
  } else {
    setLoadingBtn(signUpForm);
    const registerData = await sendRegister({ name, email, password });
    // console.log(registerData);
    removeLoadingBtn(signUpForm);
    // console.log(registerData);
    if (!registerData) {
      alert("Đăng ký thất bại");
    } else {
      alert("Đăng ký thành công");
      window.location.href = "./blogSignin.html";
    }
  }
});

const sendRegister = async (registerData) => {
  const { response, data } = await httpClient.post(
    `/auth/register`,
    registerData
  );
  // console.log(response);
  if (!response.ok) {
    return false;
  }
  return data;
};

const setLoadingBtn = (registerForm) => {
  const btn = registerForm.querySelector("._button_1ayh0_1");
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span>`;
};

const removeLoadingBtn = (registerForm) => {
  const btn = registerForm.querySelector("._button_1ayh0_1");
  btn.innerText = "Sign up";
  btn.disabled = false;
};
