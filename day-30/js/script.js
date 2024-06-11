var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var box = document.querySelector(".box");
var btn = document.querySelector(".btn");
var action = document.querySelector(".action");
var result = document.querySelector(".result");

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "vi-VN";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

btn.addEventListener("click", function () {
  recognition.start();
  result.textContent = "Hãy nói nội dung bạn muốn";
});

var links = [
  {
    name: "Google",
    keyword: "google",
    url: "https://www.google.com",
  },
  {
    name: "Facebook",
    keyword: "facebook",
    url: "https://www.facebook.com",
  },
  {
    name: "Google Maps",
    keyword: "bản đồ",
    keywordUs: "google maps",
    url: "https://www.google.com/maps",
  },
  {
    name: "Google Drive",
    keyword: "google drive",
    url: "https://www.google.com/intl/vi_VN/drive/",
  },
  {
    name: "Zing MP3",
    keyword: "zing mp3",
    url: "https://zingmp3.vn/",
  },
  {
    name: "Youtube",
    keyword: "youtube",
    url: "https://www.youtube.com/",
  },
];

recognition.addEventListener("result", function (e) {
  var text = e.results[0][0].transcript.toLowerCase().trim();
  result.textContent = "Đã nói xong. Hy vọng kết quả như ý bạn";
  result.style.color = "green";

  var linkFound = false;

  for (var i = 0; i < links.length; i++) {
    if (text.includes(links[i].keyword) || text.includes(links[i].keywordUs)) {
      action.textContent = `Đang thực hiện: ${links[i].name}`;
      action.style.display = "block";
      window.open(links[i].url, "_blank");
      linkFound = true;
      break;
    }
  }

  if (!linkFound) {
    action.textContent = "Không tìm thấy kết quả phù hợp";
    action.style.display = "block";
  }
});

recognition.addEventListener("end", function () {
  recognition.stop();
});
