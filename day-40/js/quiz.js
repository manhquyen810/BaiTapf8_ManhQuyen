import { quizStart, overlay, quizStartBtn } from "../modules/quizStart.js";
quizStartBtn.addEventListener("click", () => {
  //   console.log(overlay.children);
  overlay.removeChild(quizStartBtn);
  quizStart();
});
