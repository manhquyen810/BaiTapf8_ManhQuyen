import { htmlQuestion } from "../modules/htmlQuestion.js";
import { quizQuestion } from "../modules/quizQuestion.js";
export const quiz = document.querySelector(".quizGame");
// console.log(quiz.children);
export const overlay = quiz.querySelector(".overlay");
export const quizStartBtn = quiz.querySelector(".quizGame__start--button");

let count = 3;
let interval;
export const quizStart = () => {
  overlay.innerHTML = `<div class="quizGame__start--countdown w-full text-center">
            <p class="mb-0 animate__animated animate__zoomIn" id="timeDown">${count}</p>
            <audio>
              <source
                type="audio/mp3"
                src="./mp3/a7d86a47a36c9684c1eed76ec551f7ba.mp3"
              />
            </audio>
          </div>`;
  interval = setInterval(quizStartTime, 1000);
  //   const audio = document.querySelector("audio");
  //   audio.play();
};

export const quizStartTime = () => {
  const timeDown = document.querySelector("#timeDown");
  count--;
  if (count === 0) {
    clearInterval(interval);
    timeDown.innerText = "GO!";
    setTimeout(() => {
      quizDisplayQuestion();
    }, 1000);
  } else {
    timeDown.innerText = count;
  }
};

const quizDisplayQuestion = () => {
  quiz.innerHTML = htmlQuestion();
  const audio = overlay.querySelector("audio");
  audio.play();
};
