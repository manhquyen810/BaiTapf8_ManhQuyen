var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var progressSpan = document.querySelector("span");

//Bấm chuột xuống tại progress-bar =>Chấm màu tím di chuyeenrv tới vị trí vừa bấm
var offsetX = 0,
  initialClientX = 0;
var progressBarWidth = progressBar.clientWidth;
var offsetProgressBar = 0;
var lastOffsetProgressBar = 0;

progressBar.addEventListener("mousedown", function (e) {
  //Lấy được tọa độ tại vị trí bấm (offsetX)
  offsetX = e.offsetX;
  console.log(offsetX);
  //Tính chiều rộng của progress-bar

  //Tính tỷ lệ phần trăm giữa tọa độ bấm xuống và chiều rộng
  var rate = (offsetX / progressBarWidth) * 100;
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;
  audio.currentTime = (rate / 100) * duration;
  document.addEventListener("mousemove", handlerDrag);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handlerDrag);
  //   var offsetSpan = e.offsetX;
  //   var rate = ((offsetX + offsetSpan / 2) / progressBarWidth) * 100;
  //   progress.style.width = rate + "%";
  initialClientX = e.clientX; //gán vị trị của button tím so với body
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handlerDrag);
  lastOffsetProgressBar = offsetProgressBar;
});

var handlerDrag = function (e) {
  var clientX = e.clientX;
  console.log(lastOffsetProgressBar);
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate > 100) {
    rate = 100;
  }
  if (rate < 100) {
    rate = 0;
  }
  progress.style.width = rate + "%";
  //   console.log(offsetProgressBar);
  audio.currentTime = (rate / 100) * duration;
};

var audio = document.querySelector(".audio");
var player = document.querySelector(".player");
var playerBtn = document.querySelector(".play-btn i");
var playTimer = document.querySelector(".play-timer");
var runTimer = document.querySelector(".run-timer");
var runEl = document.querySelector(".run-timer span");

var currentTimeEl = playTimer.firstElementChild;
var durationEl = playTimer.lastElementChild;

console.log(currentTimeEl);
console.log(durationEl);

var duration = 0;
var setDuration = function () {
  duration = audio.duration;
};

var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

// console.log(audio);
window.addEventListener("load", function () {
  // console.log("load");
  setDuration();
  // console.log(getTimeFormat(duration));
  durationEl.innerText = getTimeFormat(duration);
  playerBtn.addEventListener("click", function () {
    // console.log("clicked");
    if (audio.paused) {
      //Nhạc đang dừng
      audio.play(); //phát nhạc
      // this.classList.replace("fa-play", "fa-pause");
    } else {
      //Nhạc đang phát
      audio.pause(); //dừng nhạc
      // this.classList.replace("fa-pause", "fa-play");
    }

    // console.log(audio.paused);
  });

  audio.addEventListener("play", function () {
    playerBtn.classList.replace("fa-play", "fa-pause");
  });
  audio.addEventListener("pause", function () {
    playerBtn.classList.replace("fa-pause", "fa-play");
  });
  audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    // console.log(currentTime);
    currentTimeEl.innerText = getTimeFormat(currentTime);
    // console.log(currentTimeEl);
    var rate = (currentTime / duration) * 100;
    // console.log(rate);
    progress.style.width = `${rate}%`;
  });
});

//click để đến chỗ nghe dần
var progressBarWidth = progressBar.clientWidth;
console.log(progressBarWidth);
console.log(setDuration());
progressBar.addEventListener("click", function (e) {
  offsetX = e.offsetX;
  //   console.log(offsetX);
  var newTime = (offsetX / progressBarWidth) * duration;
  audio.currentTime = newTime;
});

//reset audio
audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  //   console.log(audio.currentTime);
});
