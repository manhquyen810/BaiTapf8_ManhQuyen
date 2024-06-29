var container = document.querySelector(".container");
var fileDown = container.querySelector(".file-down");
var file = container.querySelector(".file");

fileDown.addEventListener("click", function (e) {
  e.stopPropagation();
  file.classList.toggle("show");
});

document.addEventListener("click", function () {
  file.classList.remove("show");
});

var importLetter = container.querySelector(".import-letter");
var btnNew = container.querySelector(".btn-new");
var btnTxt = container.querySelector(".btn-txt");
var btnPdf = container.querySelector(".btn-pdf");
var fileNameInput = container.querySelector(".file-name");

btnNew.addEventListener("click", function () {
  importLetter.innerHTML = "";
  fileNameInput.value = "untitled";
});

btnTxt.addEventListener("click", function () {
  const text = importLetter.innerText;
  const fileName = fileNameInput.value.trim() || "document";
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.txt`;
  link.click();
});

btnPdf.addEventListener("click", function () {
  const text = importLetter.innerText;
  const fileName = fileNameInput.value.trim() || "document";
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(text, 10, 10);
  doc.save(`${fileName}.pdf`);
});

var btnB = container.querySelector(".btn-b");
var btnU = container.querySelector(".btn-u");
var btnI = container.querySelector(".btn-i");
var inColor = container.querySelector(".import-color");
// console.log(inColor);

btnB.addEventListener("click", function () {
  document.execCommand("bold");
});

btnU.addEventListener("click", function () {
  document.execCommand("underline");
});

btnI.addEventListener("click", function () {
  document.execCommand("italic");
});

inColor.addEventListener("input", function (e) {
  document.execCommand("forecolor", false, e.target.value);
});

var numChar = container.querySelector(".num-char");
var numWord = container.querySelector(".num-word");

importLetter.addEventListener("input", function () {
  const letter = importLetter.innerText;
  numChar.textContent = `Số kí tự: ${letter.length}`;
  const letterTrim = letter.trim().split(" ").length;
  numWord.textContent = `Số từ: ${letterTrim}`;
});
