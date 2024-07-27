import { httpClient } from "../modules/client.js";

// console.log(httpClient.serverApi);

const serverApi = httpClient.serverApi;

document.body.addEventListener("submit", (e) => {
  if (e.target.classList.contains("signUp-form")) {
    console.log(e.target);
  }
});
