const time = document.querySelector(".time");
const btn = document.querySelector(".btn");

let count = 10;
let lastTime = Date.now();
let flag = true;

function updateTimer() {
  if (!flag) return;

  let currentTime = Date.now();
  let passTime = (currentTime - lastTime) / 1000;
  //   console.log(passTime);
  lastTime = currentTime;

  count -= passTime;
  //   console.log(count);
  if (count <= 0) {
    count = 0;
    btn.disabled = false;
    btn.classList.add("active");
    btn.style.cursor = "pointer";
  }

  time.textContent = Math.ceil(count);

  if (count > 0) {
    requestAnimationFrame(updateTimer);
  }
}

document.addEventListener("visibilitychange", () => {
  flag = !document.hidden;
  if (flag) {
    lastTime = Date.now();
    requestAnimationFrame(updateTimer);
  }
});

btn.addEventListener("click", () => {
  if (count <= 0) {
    window.location.href = "https://fullstack.edu.vn/";
  }
});

requestAnimationFrame(updateTimer);
