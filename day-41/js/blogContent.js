import { htmlLogin } from "./signIn.js";
import { htmlSignUp } from "./signUp.js";

const btnSign = document.querySelector(".btn-sign");

btnSign.addEventListener("click", (e) => {
  //   console.log(e.target);
  document.body.innerHTML = htmlLogin;
});
