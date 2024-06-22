var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Bấm chuột xuống tại progress-bar ==> Chấm màu tím sẽ di chuyển tới vị trí vừa bấm

//Tính chiều rộng của progress-bar
var progressBarWidth = progressBar.clientWidth;
// console.log(progressBarWidth);

var offsetX = 0;
var initialClientX = 0;
var lastOffsetProgressBar = 0;
var offsetProgressBar = 0;

progressBar.addEventListener("mousedown", function (e) {
  //Lấy được tọa độ tại vị trí bấm (offsetX)
  offsetX = e.offsetX;
  //   console.log(offsetX);
  //Tính tỉ lệ phần trăm giữa tọa độ bấm xuống và chiều rộng
  var rate = (offsetX / progressBarWidth) * 100;
  //   console.log(rate);
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;
  setDuration();
  audio.currentTime = (rate / 100) * duration;
  runTimer.style.display = "none";
  document.addEventListener("mousemove", handleDrag);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX; //Gán ví trí của button màu tím so với body
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  lastOffsetProgressBar = offsetProgressBar;
});

var handleDrag = function (e) {
  var clientX = e.clientX;
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = rate + "%";
  setDuration();
  audio.currentTime = (rate / 100) * duration;
  runTimer.style.display = "none";
};

var audio = document.querySelector("audio");
var player = document.querySelector(".player");
var playBtn = player.querySelector(".play-btn i");
var playTimer = player.querySelector(".play-timer");
var currentTimeEl = playTimer.firstElementChild; //span 00:00 đầu
var durationEl = playTimer.lastElementChild; //span 00:00 đuôi

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

window.addEventListener("load", function () {
  setDuration();
  durationEl.innerText = getTimeFormat(duration);
  playBtn.addEventListener("click", function () {
    if (audio.paused) {
      //Nhạc đang dừng
      audio.play(); //Phát nhạc
    } else {
      //Nhạc đang phát
      audio.pause(); //Dừng nhạc
    }
  });
  audio.addEventListener("play", function () {
    playBtn.classList.replace("fa-play", "fa-pause");
  });
  audio.addEventListener("pause", function () {
    playBtn.classList.replace("fa-pause", "fa-play");
  });
  audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    // console.log(currentTime);
    currentTimeEl.innerText = getTimeFormat(currentTime);
    // console.log(currentTimeEl);
    var rate = (currentTime / duration) * 100;
    progress.style.width = rate + "%";
  });
  audio.addEventListener("ended", function () {
    audio.currentTime = 0;
  });
});

var runTimer = player.querySelector(".run-timer");
progressBar.addEventListener("mousemove", function (e) {
  setDuration();
  offsetX = e.offsetX;
  // console.log(offsetX);
  var newTime = (offsetX / progressBarWidth) * duration;
  runTimer.innerText = getTimeFormat(newTime);
  runTimer.style.display = "block";
  runTimer.style.left = `${offsetX - 10}px`;
});
progressBar.addEventListener("mouseleave", function () {
  runTimer.style.display = "none";
});

var btnOpen = player.querySelector(".btn-open");
var karaokeDisplay = player.querySelector(".karaoke");
var btnClose = player.querySelector(".close");

btnOpen.addEventListener("click", function () {
  karaokeDisplay.style.translate = `0 0`;
});
btnClose.addEventListener("click", function () {
  karaokeDisplay.style.translate = `0 100%`;
});

var lyric = {
  err: 0,
  msg: "Success",
  data: {
    sentences: [
      {
        words: [
          {
            startTime: 1110,
            endTime: 4040,
            data: "Girl",
          },
        ],
      },
      {
        words: [
          {
            startTime: 4040,
            endTime: 4170,
            data: "I",
          },
          {
            startTime: 4170,
            endTime: 4170,
            data: "wanna",
          },
          {
            startTime: 4170,
            endTime: 4430,
            data: "tell",
          },
          {
            startTime: 4430,
            endTime: 7430,
            data: "you",
          },
        ],
      },
      {
        words: [
          {
            startTime: 10360,
            endTime: 10630,
            data: "Sẽ",
          },
          {
            startTime: 10630,
            endTime: 10900,
            data: "không",
          },
          {
            startTime: 10900,
            endTime: 11430,
            data: "có",
          },
          {
            startTime: 11430,
            endTime: 11700,
            data: "ai",
          },
          {
            startTime: 11700,
            endTime: 11950,
            data: "đặc",
          },
          {
            startTime: 11950,
            endTime: 12240,
            data: "biệt",
          },
          {
            startTime: 12240,
            endTime: 12500,
            data: "như",
          },
          {
            startTime: 12500,
            endTime: 13010,
            data: "vậy",
          },
        ],
      },
      {
        words: [
          {
            startTime: 13010,
            endTime: 13280,
            data: "(đặc",
          },
          {
            startTime: 13280,
            endTime: 13540,
            data: "biệt",
          },
          {
            startTime: 13540,
            endTime: 13810,
            data: "như",
          },
          {
            startTime: 13810,
            endTime: 14350,
            data: "vậy",
          },
          {
            startTime: 14350,
            endTime: 15410,
            data: "ye)",
          },
        ],
      },
      {
        words: [
          {
            startTime: 15410,
            endTime: 15670,
            data: "Vẫn",
          },
          {
            startTime: 15670,
            endTime: 15950,
            data: "chưa",
          },
          {
            startTime: 15950,
            endTime: 16470,
            data: "có",
          },
          {
            startTime: 16470,
            endTime: 16750,
            data: "ai",
          },
          {
            startTime: 16750,
            endTime: 17010,
            data: "dịu",
          },
          {
            startTime: 17010,
            endTime: 17270,
            data: "dàng",
          },
          {
            startTime: 17270,
            endTime: 17530,
            data: "như",
          },
          {
            startTime: 17530,
            endTime: 20460,
            data: "thế",
          },
        ],
      },
      {
        words: [
          {
            startTime: 20460,
            endTime: 20720,
            data: "Giữa",
          },
          {
            startTime: 20720,
            endTime: 21000,
            data: "trưa",
          },
          {
            startTime: 21000,
            endTime: 21520,
            data: "sao",
          },
          {
            startTime: 21520,
            endTime: 21780,
            data: "anh",
          },
          {
            startTime: 21780,
            endTime: 22040,
            data: "vẫn",
          },
          {
            startTime: 22040,
            endTime: 22320,
            data: "ngồi",
          },
          {
            startTime: 22320,
            endTime: 22580,
            data: "đắm",
          },
          {
            startTime: 22580,
            endTime: 25190,
            data: "say",
          },
        ],
      },
      {
        words: [
          {
            startTime: 25190,
            endTime: 25190,
            data: "Vì",
          },
          {
            startTime: 25190,
            endTime: 25980,
            data: "ai",
          },
          {
            startTime: 25980,
            endTime: 26470,
            data: "mà",
          },
        ],
      },
      {
        words: [
          {
            startTime: 26470,
            endTime: 26470,
            data: "Nắng",
          },
          {
            startTime: 26470,
            endTime: 26740,
            data: "to",
          },
          {
            startTime: 26740,
            endTime: 27010,
            data: "nhưng",
          },
          {
            startTime: 27010,
            endTime: 27270,
            data: "chưa",
          },
          {
            startTime: 27270,
            endTime: 27810,
            data: "chịu",
          },
          {
            startTime: 27810,
            endTime: 28860,
            data: "về",
          },
        ],
      },
      {
        words: [
          {
            startTime: 28860,
            endTime: 29120,
            data: "Hình",
          },
          {
            startTime: 29120,
            endTime: 29650,
            data: "như",
          },
          {
            startTime: 29650,
            endTime: 30190,
            data: "khi",
          },
          {
            startTime: 30190,
            endTime: 30920,
            data: "ấy",
          },
          {
            startTime: 30920,
            endTime: 31460,
            data: "muốn",
          },
          {
            startTime: 31460,
            endTime: 31720,
            data: "đứng",
          },
          {
            startTime: 31720,
            endTime: 31990,
            data: "lại",
          },
          {
            startTime: 31990,
            endTime: 32730,
            data: "gần",
          },
        ],
      },
      {
        words: [
          {
            startTime: 32730,
            endTime: 32730,
            data: "Tại",
          },
          {
            startTime: 32730,
            endTime: 33250,
            data: "sao",
          },
          {
            startTime: 33250,
            endTime: 33510,
            data: "anh",
          },
          {
            startTime: 33510,
            endTime: 33780,
            data: "không",
          },
          {
            startTime: 33780,
            endTime: 34040,
            data: "tiến",
          },
          {
            startTime: 34040,
            endTime: 34310,
            data: "tới",
          },
          {
            startTime: 34310,
            endTime: 34570,
            data: "một",
          },
          {
            startTime: 34570,
            endTime: 35110,
            data: "lần",
          },
        ],
      },
      {
        words: [
          {
            startTime: 35110,
            endTime: 35370,
            data: "Tại",
          },
          {
            startTime: 35370,
            endTime: 35650,
            data: "sao",
          },
          {
            startTime: 35650,
            endTime: 35900,
            data: "khi",
          },
          {
            startTime: 35900,
            endTime: 36160,
            data: "nghe",
          },
          {
            startTime: 36160,
            endTime: 36440,
            data: "tên",
          },
          {
            startTime: 36440,
            endTime: 36700,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 36700,
            endTime: 37240,
            data: "Làm",
          },
          {
            startTime: 37240,
            endTime: 37490,
            data: "mình",
          },
          {
            startTime: 37490,
            endTime: 37760,
            data: "chẳng",
          },
          {
            startTime: 37760,
            endTime: 38290,
            data: "thể",
          },
          {
            startTime: 38290,
            endTime: 38560,
            data: "tập",
          },
          {
            startTime: 38560,
            endTime: 38820,
            data: "trung",
          },
          {
            startTime: 38820,
            endTime: 39090,
            data: "như",
          },
          {
            startTime: 39090,
            endTime: 39620,
            data: "xưa",
          },
        ],
      },
      {
        words: [
          {
            startTime: 39620,
            endTime: 40160,
            data: "Vì",
          },
          {
            startTime: 40160,
            endTime: 40420,
            data: "em",
          },
          {
            startTime: 40420,
            endTime: 40610,
            data: "xinh",
          },
          {
            startTime: 40610,
            endTime: 40890,
            data: "lung",
          },
          {
            startTime: 40890,
            endTime: 41160,
            data: "linh",
          },
          {
            startTime: 41160,
            endTime: 41410,
            data: "lung",
          },
          {
            startTime: 41410,
            endTime: 42220,
            data: "linh",
          },
        ],
      },
      {
        words: [
          {
            startTime: 42220,
            endTime: 42480,
            data: "Làm",
          },
          {
            startTime: 42480,
            endTime: 42760,
            data: "con",
          },
          {
            startTime: 42760,
            endTime: 43290,
            data: "tim",
          },
          {
            startTime: 43290,
            endTime: 43560,
            data: "lung",
          },
          {
            startTime: 43560,
            endTime: 43820,
            data: "lay",
          },
          {
            startTime: 43820,
            endTime: 44090,
            data: "lung",
          },
          {
            startTime: 44090,
            endTime: 44630,
            data: "lay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 44630,
            endTime: 45150,
            data: "Vì",
          },
          {
            startTime: 45150,
            endTime: 45430,
            data: "anh",
          },
          {
            startTime: 45430,
            endTime: 45690,
            data: "đây",
          },
          {
            startTime: 45690,
            endTime: 45940,
            data: "để",
          },
          {
            startTime: 45940,
            endTime: 46210,
            data: "ý",
          },
          {
            startTime: 46210,
            endTime: 47010,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 47010,
            endTime: 47010,
            data: "Ngay",
          },
          {
            startTime: 47010,
            endTime: 47270,
            data: "từ",
          },
          {
            startTime: 47270,
            endTime: 47540,
            data: "ngày",
          },
          {
            startTime: 47540,
            endTime: 47810,
            data: "mà",
          },
          {
            startTime: 47810,
            endTime: 48600,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 48600,
            endTime: 48600,
            data: "Bước",
          },
          {
            startTime: 48600,
            endTime: 49140,
            data: "qua",
          },
          {
            startTime: 49140,
            endTime: 49140,
            data: "bước",
          },
          {
            startTime: 49140,
            endTime: 49880,
            data: "qua",
          },
        ],
      },
      {
        words: [
          {
            startTime: 49880,
            endTime: 50150,
            data: "Đưa",
          },
          {
            startTime: 50150,
            endTime: 50410,
            data: "em",
          },
          {
            startTime: 50410,
            endTime: 50670,
            data: "về",
          },
        ],
      },
      {
        words: [
          {
            startTime: 50670,
            endTime: 50950,
            data: "Nắm",
          },
          {
            startTime: 50950,
            endTime: 51210,
            data: "tay",
          },
          {
            startTime: 51210,
            endTime: 51480,
            data: "nắm",
          },
          {
            startTime: 51480,
            endTime: 52280,
            data: "tay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 52280,
            endTime: 52530,
            data: "Cứ",
          },
          {
            startTime: 52530,
            endTime: 53080,
            data: "như",
          },
          {
            startTime: 53080,
            endTime: 53340,
            data: "vậy",
          },
        ],
      },
      {
        words: [
          {
            startTime: 53340,
            endTime: 53600,
            data: "Nắm",
          },
          {
            startTime: 53600,
            endTime: 53600,
            data: "tay",
          },
          {
            startTime: 53600,
            endTime: 53860,
            data: "nắm",
          },
          {
            startTime: 53860,
            endTime: 54920,
            data: "tay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 54920,
            endTime: 55180,
            data: "Anh",
          },
          {
            startTime: 55180,
            endTime: 55460,
            data: "để",
          },
          {
            startTime: 55460,
            endTime: 55990,
            data: "ý",
          },
          {
            startTime: 55990,
            endTime: 56170,
            data: "em bây",
          },
          {
            startTime: 56170,
            endTime: 56700,
            data: "giờ",
          },
        ],
      },
      {
        words: [
          {
            startTime: 56700,
            endTime: 56970,
            data: "Ý",
          },
          {
            startTime: 56970,
            endTime: 57230,
            data: "em",
          },
          {
            startTime: 57230,
            endTime: 57500,
            data: "đây",
          },
          {
            startTime: 57500,
            endTime: 57770,
            data: "thì",
          },
          {
            startTime: 57770,
            endTime: 60770,
            data: "sao",
          },
        ],
      },
      {
        words: [
          {
            startTime: 66060,
            endTime: 66330,
            data: "Sẽ",
          },
          {
            startTime: 66330,
            endTime: 66590,
            data: "không",
          },
          {
            startTime: 66590,
            endTime: 66870,
            data: "có",
          },
          {
            startTime: 66870,
            endTime: 67130,
            data: "ai",
          },
          {
            startTime: 67130,
            endTime: 67390,
            data: "điệu",
          },
          {
            startTime: 67390,
            endTime: 67930,
            data: "đà",
          },
          {
            startTime: 67930,
            endTime: 68180,
            data: "như",
          },
          {
            startTime: 68180,
            endTime: 68650,
            data: "vậy",
          },
        ],
      },
      {
        words: [
          {
            startTime: 68650,
            endTime: 68920,
            data: "(sao",
          },
          {
            startTime: 68920,
            endTime: 69190,
            data: "em",
          },
          {
            startTime: 69190,
            endTime: 69190,
            data: "có",
          },
          {
            startTime: 69190,
            endTime: 69450,
            data: "thể",
          },
          {
            startTime: 69450,
            endTime: 69720,
            data: "điệu",
          },
          {
            startTime: 69720,
            endTime: 69720,
            data: "đà",
          },
          {
            startTime: 69720,
            endTime: 69980,
            data: "như",
          },
          {
            startTime: 69980,
            endTime: 70240,
            data: "vậy",
          },
          {
            startTime: 70240,
            endTime: 71260,
            data: "uh)",
          },
        ],
      },
      {
        words: [
          {
            startTime: 71260,
            endTime: 71520,
            data: "Vẫn",
          },
          {
            startTime: 71520,
            endTime: 71780,
            data: "chưa",
          },
          {
            startTime: 71780,
            endTime: 72060,
            data: "có",
          },
          {
            startTime: 72060,
            endTime: 72320,
            data: "ai",
          },
          {
            startTime: 72320,
            endTime: 72580,
            data: "nhìn",
          },
          {
            startTime: 72580,
            endTime: 72860,
            data: "mình",
          },
          {
            startTime: 72860,
            endTime: 73110,
            data: "như",
          },
          {
            startTime: 73110,
            endTime: 73840,
            data: "thế",
          },
        ],
      },
      {
        words: [
          {
            startTime: 73840,
            endTime: 74380,
            data: "Hình",
          },
          {
            startTime: 74380,
            endTime: 74910,
            data: "như",
          },
          {
            startTime: 74910,
            endTime: 75710,
            data: "khi",
          },
          {
            startTime: 75710,
            endTime: 76460,
            data: "ấy",
          },
          {
            startTime: 76460,
            endTime: 76980,
            data: "muốn",
          },
          {
            startTime: 76980,
            endTime: 77250,
            data: "đứng",
          },
          {
            startTime: 77250,
            endTime: 77520,
            data: "lại",
          },
          {
            startTime: 77520,
            endTime: 78050,
            data: "gần",
          },
        ],
      },
      {
        words: [
          {
            startTime: 78050,
            endTime: 78300,
            data: "Tại",
          },
          {
            startTime: 78300,
            endTime: 78580,
            data: "sao",
          },
          {
            startTime: 78580,
            endTime: 78840,
            data: "anh",
          },
          {
            startTime: 78840,
            endTime: 79100,
            data: "không",
          },
          {
            startTime: 79100,
            endTime: 79370,
            data: "tiến",
          },
          {
            startTime: 79370,
            endTime: 79640,
            data: "tới",
          },
          {
            startTime: 79640,
            endTime: 79900,
            data: "một",
          },
          {
            startTime: 79900,
            endTime: 80710,
            data: "lần",
          },
        ],
      },
      {
        words: [
          {
            startTime: 80710,
            endTime: 80710,
            data: "Tại",
          },
          {
            startTime: 80710,
            endTime: 80960,
            data: "sao",
          },
          {
            startTime: 80960,
            endTime: 81500,
            data: "khi",
          },
          {
            startTime: 81500,
            endTime: 81760,
            data: "nghe",
          },
          {
            startTime: 81760,
            endTime: 82030,
            data: "tên",
          },
          {
            startTime: 82030,
            endTime: 82250,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 82250,
            endTime: 82530,
            data: "Làm",
          },
          {
            startTime: 82530,
            endTime: 82980,
            data: "mình",
          },
          {
            startTime: 82980,
            endTime: 83250,
            data: "chẳng",
          },
          {
            startTime: 83250,
            endTime: 83520,
            data: "thể",
          },
          {
            startTime: 83520,
            endTime: 83780,
            data: "tập",
          },
          {
            startTime: 83780,
            endTime: 84050,
            data: "trung",
          },
          {
            startTime: 84050,
            endTime: 84580,
            data: "như",
          },
          {
            startTime: 84580,
            endTime: 85110,
            data: "xưa",
          },
        ],
      },
      {
        words: [
          {
            startTime: 85110,
            endTime: 85380,
            data: "Vì",
          },
          {
            startTime: 85380,
            endTime: 85910,
            data: "em",
          },
          {
            startTime: 85910,
            endTime: 86170,
            data: "xinh",
          },
          {
            startTime: 86170,
            endTime: 86430,
            data: "lung",
          },
          {
            startTime: 86430,
            endTime: 86690,
            data: "linh",
          },
          {
            startTime: 86690,
            endTime: 86970,
            data: "lung",
          },
          {
            startTime: 86970,
            endTime: 87490,
            data: "linh",
          },
        ],
      },
      {
        words: [
          {
            startTime: 87490,
            endTime: 88020,
            data: "Làm",
          },
          {
            startTime: 88020,
            endTime: 88300,
            data: "con",
          },
          {
            startTime: 88300,
            endTime: 88570,
            data: "tim",
          },
          {
            startTime: 88570,
            endTime: 88830,
            data: "lung",
          },
          {
            startTime: 88830,
            endTime: 89370,
            data: "lay",
          },
          {
            startTime: 89370,
            endTime: 89630,
            data: "lung",
          },
          {
            startTime: 89630,
            endTime: 90140,
            data: "lay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 90140,
            endTime: 90420,
            data: "Vì",
          },
          {
            startTime: 90420,
            endTime: 90680,
            data: "anh",
          },
          {
            startTime: 90680,
            endTime: 91220,
            data: "đây",
          },
          {
            startTime: 91220,
            endTime: 91480,
            data: "để",
          },
          {
            startTime: 91480,
            endTime: 91750,
            data: "ý",
          },
          {
            startTime: 91750,
            endTime: 92270,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 92270,
            endTime: 92550,
            data: "Ngay",
          },
          {
            startTime: 92550,
            endTime: 92810,
            data: "từ",
          },
          {
            startTime: 92810,
            endTime: 93080,
            data: "ngày",
          },
          {
            startTime: 93080,
            endTime: 93350,
            data: "mà",
          },
          {
            startTime: 93350,
            endTime: 93610,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 93610,
            endTime: 93880,
            data: "Bước",
          },
          {
            startTime: 93880,
            endTime: 94400,
            data: "qua",
          },
          {
            startTime: 94400,
            endTime: 94670,
            data: "bước",
          },
          {
            startTime: 94670,
            endTime: 95200,
            data: "qua",
          },
        ],
      },
      {
        words: [
          {
            startTime: 95200,
            endTime: 95470,
            data: "Đưa",
          },
          {
            startTime: 95470,
            endTime: 95990,
            data: "em",
          },
          {
            startTime: 95990,
            endTime: 96270,
            data: "về",
          },
        ],
      },
      {
        words: [
          {
            startTime: 96270,
            endTime: 96530,
            data: "Nắm",
          },
          {
            startTime: 96530,
            endTime: 96790,
            data: "tay",
          },
          {
            startTime: 96790,
            endTime: 97070,
            data: "nắm",
          },
          {
            startTime: 97070,
            endTime: 97590,
            data: "tay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 97590,
            endTime: 98130,
            data: "Cứ",
          },
          {
            startTime: 98130,
            endTime: 98400,
            data: "như",
          },
          {
            startTime: 98400,
            endTime: 98660,
            data: "vậy",
          },
        ],
      },
      {
        words: [
          {
            startTime: 98660,
            endTime: 98920,
            data: "Nắm",
          },
          {
            startTime: 98920,
            endTime: 99180,
            data: "tay",
          },
          {
            startTime: 99180,
            endTime: 99440,
            data: "nắm",
          },
          {
            startTime: 99440,
            endTime: 100240,
            data: "tay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 100240,
            endTime: 100520,
            data: "Anh",
          },
          {
            startTime: 100520,
            endTime: 100780,
            data: "để",
          },
          {
            startTime: 100780,
            endTime: 101310,
            data: "ý",
          },
          {
            startTime: 101310,
            endTime: 101580,
            data: "em",
          },
          {
            startTime: 101580,
            endTime: 101840,
            data: "bây",
          },
          {
            startTime: 101840,
            endTime: 102120,
            data: "giờ",
          },
        ],
      },
      {
        words: [
          {
            startTime: 102120,
            endTime: 102380,
            data: "Ý",
          },
          {
            startTime: 102380,
            endTime: 102640,
            data: "em",
          },
          {
            startTime: 102640,
            endTime: 102920,
            data: "đây",
          },
          {
            startTime: 102920,
            endTime: 105640,
            data: "thì",
          },
        ],
      },
      {
        words: [
          {
            startTime: 105640,
            endTime: 106050,
            data: "Anh",
          },
          {
            startTime: 106050,
            endTime: 106050,
            data: "để",
          },
          {
            startTime: 106050,
            endTime: 106310,
            data: "ý",
          },
          {
            startTime: 106310,
            endTime: 106570,
            data: "em",
          },
          {
            startTime: 106570,
            endTime: 107110,
            data: "như",
          },
          {
            startTime: 107110,
            endTime: 107380,
            data: "là",
          },
        ],
      },
      {
        words: [
          {
            startTime: 107380,
            endTime: 107640,
            data: "Nắng",
          },
          {
            startTime: 107640,
            endTime: 107910,
            data: "sẽ",
          },
          {
            startTime: 107910,
            endTime: 108180,
            data: "soi",
          },
          {
            startTime: 108180,
            endTime: 108440,
            data: "hàng",
          },
          {
            startTime: 108440,
            endTime: 110790,
            data: "cây",
          },
        ],
      },
      {
        words: [
          {
            startTime: 110790,
            endTime: 111060,
            data: "Anh",
          },
          {
            startTime: 111060,
            endTime: 111320,
            data: "cảm",
          },
          {
            startTime: 111320,
            endTime: 111590,
            data: "thấy",
          },
          {
            startTime: 111590,
            endTime: 111590,
            data: "anh",
          },
          {
            startTime: 111590,
            endTime: 111840,
            data: "đang",
          },
          {
            startTime: 111840,
            endTime: 112110,
            data: "chìm",
          },
          {
            startTime: 112110,
            endTime: 112640,
            data: "đắm",
          },
        ],
      },
      {
        words: [
          {
            startTime: 112640,
            endTime: 112900,
            data: "Trong",
          },
          {
            startTime: 112900,
            endTime: 113180,
            data: "từng",
          },
          {
            startTime: 113180,
            endTime: 113440,
            data: "phút",
          },
          {
            startTime: 113440,
            endTime: 115780,
            data: "giây",
          },
        ],
      },
      {
        words: [
          {
            startTime: 115780,
            endTime: 116040,
            data: "Anh",
          },
          {
            startTime: 116040,
            endTime: 116300,
            data: "để",
          },
          {
            startTime: 116300,
            endTime: 116580,
            data: "ý",
          },
          {
            startTime: 116580,
            endTime: 116580,
            data: "em",
          },
          {
            startTime: 116580,
            endTime: 116840,
            data: "anh",
          },
          {
            startTime: 116840,
            endTime: 117370,
            data: "để",
          },
          {
            startTime: 117370,
            endTime: 117640,
            data: "ý",
          },
          {
            startTime: 117640,
            endTime: 117900,
            data: "em",
          },
          {
            startTime: 117900,
            endTime: 120250,
            data: "everyday",
          },
        ],
      },
      {
        words: [
          {
            startTime: 120250,
            endTime: 120250,
            data: "Cứ",
          },
          {
            startTime: 120250,
            endTime: 120510,
            data: "như",
          },
          {
            startTime: 120510,
            endTime: 120790,
            data: "đang",
          },
          {
            startTime: 120790,
            endTime: 121050,
            data: "lạc",
          },
          {
            startTime: 121050,
            endTime: 121570,
            data: "trong",
          },
          {
            startTime: 121570,
            endTime: 121840,
            data: "cơn",
          },
          {
            startTime: 121840,
            endTime: 122100,
            data: "mơ",
          },
        ],
      },
      {
        words: [
          {
            startTime: 122100,
            endTime: 122370,
            data: "Anh",
          },
          {
            startTime: 122370,
            endTime: 122370,
            data: "chẳng",
          },
          {
            startTime: 122370,
            endTime: 122640,
            data: "thể",
          },
          {
            startTime: 122640,
            endTime: 123170,
            data: "nào",
          },
          {
            startTime: 123170,
            endTime: 123440,
            data: "không",
          },
          {
            startTime: 123440,
            endTime: 125840,
            data: "mơ",
          },
        ],
      },
      {
        words: [
          {
            startTime: 125840,
            endTime: 126080,
            data: "Vì",
          },
          {
            startTime: 126080,
            endTime: 126350,
            data: "em",
          },
          {
            startTime: 126350,
            endTime: 126620,
            data: "xinh",
          },
          {
            startTime: 126620,
            endTime: 126880,
            data: "lung",
          },
          {
            startTime: 126880,
            endTime: 127150,
            data: "linh",
          },
          {
            startTime: 127150,
            endTime: 127420,
            data: "lung",
          },
          {
            startTime: 127420,
            endTime: 128210,
            data: "linh",
          },
        ],
      },
      {
        words: [
          {
            startTime: 128210,
            endTime: 128490,
            data: "Làm",
          },
          {
            startTime: 128490,
            endTime: 128750,
            data: "con",
          },
          {
            startTime: 128750,
            endTime: 129010,
            data: "tim",
          },
          {
            startTime: 129010,
            endTime: 129290,
            data: "lung",
          },
          {
            startTime: 129290,
            endTime: 129820,
            data: "lay",
          },
          {
            startTime: 129820,
            endTime: 130090,
            data: "lung",
          },
          {
            startTime: 130090,
            endTime: 130600,
            data: "lay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 130600,
            endTime: 130870,
            data: "Vì",
          },
          {
            startTime: 130870,
            endTime: 131130,
            data: "anh",
          },
          {
            startTime: 131130,
            endTime: 131670,
            data: "đây",
          },
          {
            startTime: 131670,
            endTime: 131930,
            data: "để",
          },
          {
            startTime: 131930,
            endTime: 132200,
            data: "ý",
          },
          {
            startTime: 132200,
            endTime: 132740,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 132740,
            endTime: 133000,
            data: "Ngay",
          },
          {
            startTime: 133000,
            endTime: 133270,
            data: "từ",
          },
          {
            startTime: 133270,
            endTime: 133540,
            data: "ngày",
          },
          {
            startTime: 133540,
            endTime: 133790,
            data: "mà",
          },
          {
            startTime: 133790,
            endTime: 134340,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 134340,
            endTime: 134340,
            data: "Bước",
          },
          {
            startTime: 134340,
            endTime: 134860,
            data: "qua",
          },
          {
            startTime: 134860,
            endTime: 135120,
            data: "bước",
          },
          {
            startTime: 135120,
            endTime: 135650,
            data: "qua",
          },
        ],
      },
      {
        words: [
          {
            startTime: 135650,
            endTime: 135920,
            data: "Đưa",
          },
          {
            startTime: 135920,
            endTime: 136450,
            data: "em",
          },
          {
            startTime: 136450,
            endTime: 136720,
            data: "về",
          },
        ],
      },
      {
        words: [
          {
            startTime: 136720,
            endTime: 136980,
            data: "Nắm",
          },
          {
            startTime: 136980,
            endTime: 137250,
            data: "tay",
          },
          {
            startTime: 137250,
            endTime: 137520,
            data: "nắm",
          },
          {
            startTime: 137520,
            endTime: 138040,
            data: "tay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 138040,
            endTime: 138310,
            data: "Cứ",
          },
          {
            startTime: 138310,
            endTime: 138850,
            data: "như",
          },
          {
            startTime: 138850,
            endTime: 139110,
            data: "vậy",
          },
        ],
      },
      {
        words: [
          {
            startTime: 139110,
            endTime: 139370,
            data: "Nắm",
          },
          {
            startTime: 139370,
            endTime: 139630,
            data: "tay",
          },
          {
            startTime: 139630,
            endTime: 139900,
            data: "nắm",
          },
          {
            startTime: 139900,
            endTime: 140970,
            data: "tay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 140970,
            endTime: 141230,
            data: "Anh",
          },
          {
            startTime: 141230,
            endTime: 141500,
            data: "để",
          },
          {
            startTime: 141500,
            endTime: 141720,
            data: "ý",
          },
          {
            startTime: 141720,
            endTime: 141980,
            data: "em",
          },
          {
            startTime: 141980,
            endTime: 142250,
            data: "bây",
          },
          {
            startTime: 142250,
            endTime: 142520,
            data: "giờ",
          },
        ],
      },
      {
        words: [
          {
            startTime: 142520,
            endTime: 142780,
            data: "Ý",
          },
          {
            startTime: 142780,
            endTime: 143040,
            data: "em",
          },
          {
            startTime: 143040,
            endTime: 143320,
            data: "đây",
          },
          {
            startTime: 143320,
            endTime: 144060,
            data: "thì",
          },
          {
            startTime: 144060,
            endTime: 145910,
            data: "sao",
          },
        ],
      },
      {
        words: [
          {
            startTime: 145910,
            endTime: 146180,
            data: "Giờ",
          },
          {
            startTime: 146180,
            endTime: 146450,
            data: "mà",
          },
          {
            startTime: 146450,
            endTime: 146710,
            data: "được",
          },
        ],
      },
      {
        words: [
          {
            startTime: 146710,
            endTime: 146980,
            data: "Nắm",
          },
          {
            startTime: 146980,
            endTime: 147250,
            data: "tay",
          },
          {
            startTime: 147250,
            endTime: 147510,
            data: "nắm",
          },
          {
            startTime: 147510,
            endTime: 148320,
            data: "tay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 148320,
            endTime: 148560,
            data: "Đưa",
          },
          {
            startTime: 148560,
            endTime: 148830,
            data: "em",
          },
          {
            startTime: 148830,
            endTime: 149330,
            data: "về",
          },
        ],
      },
      {
        words: [
          {
            startTime: 149330,
            endTime: 149600,
            data: "Nắm",
          },
          {
            startTime: 149600,
            endTime: 149870,
            data: "tay",
          },
          {
            startTime: 149870,
            endTime: 150140,
            data: "nắm",
          },
          {
            startTime: 150140,
            endTime: 150940,
            data: "tay",
          },
        ],
      },
      {
        words: [
          {
            startTime: 150940,
            endTime: 151190,
            data: "Anh",
          },
          {
            startTime: 151190,
            endTime: 151450,
            data: "để",
          },
          {
            startTime: 151450,
            endTime: 151720,
            data: "ý",
          },
          {
            startTime: 151720,
            endTime: 151980,
            data: "em",
          },
          {
            startTime: 151980,
            endTime: 152250,
            data: "baby",
          },
        ],
      },
      {
        words: [
          {
            startTime: 152250,
            endTime: 152790,
            data: "Ý",
          },
          {
            startTime: 152790,
            endTime: 153050,
            data: "của",
          },
          {
            startTime: 153050,
            endTime: 153320,
            data: "em",
          },
          {
            startTime: 153320,
            endTime: 153590,
            data: "như",
          },
          {
            startTime: 153590,
            endTime: 154590,
            data: "nào",
          },
        ],
      },
    ],
  },
};

var karaokeInner = player.querySelector(".karaoke-inner");
var karaokeWord = player.querySelector(".karaoke-word");
var pFirst = karaokeWord.firstElementChild;
// console.log(pFirst);
var pLast = karaokeWord.lastElementChild;
// console.log(pLast);

audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;
  // console.log(currentTime);
  var lyricData = lyric.data.sentences;

  lyricData.forEach(function (value, index) {
    var startTime = value.words[0].startTime / 1000;
    // console.log(startTime);
    var endTime = value.words[value.words.length - 1].endTime / 1000;
    // console.log(endTime);
    if (startTime <= currentTime && endTime >= currentTime) {
      var wordData = value.words.map(function (word) {
        return word.data;
      });
      // console.log(wordData);
      var result = wordData.join(" ");
      if (index % 2 === 0) {
        pFirst.innerHTML = result;
      } else {
        pLast.innerHTML = result;
      }
    }
  });
});

// var currentTime = audio.currentTime;
// var getCurrentTime = getTimeFormat(currentTime);
// // console.log(currentTime);
// var lyricData = lyric.data.sentences;
// lyricData.map(function (value, indexVal) {
//   console.log(lyricData[indexVal]);
//   // console.log(value.words);
//   // console.log("vị trí mảng lớn: ", indexVal);
//   var inValue = value.words;
//   inValue.map(function (key, indexKey) {
//     console.log(inValue[indexKey].data);
//     // console.log(key);
//     // console.log("vị trí mảng con: ", indexKey);
//     var startTime = getTimeFormat(key.startTime / 1000);
//     // console.log("start: ", startTime);
//     var endTime = getTimeFormat(key.endTime / 1000);
//     // console.log("end: ", endTime);
//     var dataKey = key.data;
//     // console.log(dataKey);

//   });
// });
