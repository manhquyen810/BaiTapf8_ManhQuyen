const quiz = document.querySelector(".quizGame");
const overlay = quiz.querySelector(".overlay");
const quizStartBtn = quiz.querySelector(".quizGame__start--button");

let count = 3;
let interval;
const quizStart = () => {
  overlay.innerHTML = `<div class="quizizzGame__start--countdown w-full text-center">
            <p class="mb-0 animate__animated " id="timeDown">${count}</p>
            <audio>
              <source
                type="audio/mp3"
                src="./mp3/a7d86a47a36c9684c1eed76ec551f7ba.mp3"
              />
            </audio>
          </div>`;
  interval = setInterval(quizStartTime, 1000);
};

const quizStartTime = () => {
  const timeDown = document.querySelector("#timeDown");
  //   timeDown.classList.add("animate__zoomIn");
  count--;
  if (count === 0) {
    clearInterval(interval);
    timeDown.innerText = "GO!";
    // setTimeout(() => {});
  } else {
    timeDown.innerText = count;
  }
};

quizStartBtn.addEventListener("click", () => {
  //   console.log(overlay.children);
  overlay.removeChild(quizStartBtn);
  quizStart();
});
