// ex01

const btn = document.getElementById("btn-ex-1");
btn.addEventListener("click", () => {
  //praseInt ép kiểu số nguyên
  var a = parseInt(document.getElementById("number-a").value);
  var b = parseInt(document.getElementById("number-b").value);

  a = a + b;
  b = a - b;
  a = a - b;

  alert("Các số sau khi chuyển là: " + a + " và " + b);
});

//ex02
const btnTwo = document.getElementById("btn-ex-2");
btnTwo.addEventListener("click", () => {
  var s = 10 + 20 + 5 ** 10 / 2;

  alert("Kết quả: S = " + s);
});

//ex03
const btnThree = document.getElementById("btn-ex-3");
btnThree.addEventListener("click", () => {
  //praseInt ép kiểu số nguyên
  var a = parseInt(document.getElementById("number-a-ex-3").value);
  var b = parseInt(document.getElementById("number-b-ex-3").value);
  var c = parseInt(document.getElementById("number-c-ex-3").value);

  var max = a;

  if (b > max) {
    max = b;
  } else if (c > max) {
    max = c;
  }

  alert("Số lớn nhất là: " + max);
});

//ex04
const btnFour = document.getElementById("btn-ex-4");
btnFour.addEventListener("click", () => {
  //praseInt ép kiểu số nguyên
  var a = parseInt(document.getElementById("number-a-ex-4").value);
  var b = parseInt(document.getElementById("number-b-ex-4").value);

  if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    alert("Hai số " + a + " và " + b + " cùng dấu");
  } else {
    alert("Hai số " + a + " và " + b + " khác dấu");
  }
});

//ex05
const btnFive = document.getElementById("btn-ex-5");
btnFive.addEventListener("click", () => {
  //praseInt ép kiểu số nguyên
  var a = parseInt(document.getElementById("number-a-ex-5").value);
  var b = parseInt(document.getElementById("number-b-ex-5").value);
  var c = parseInt(document.getElementById("number-c-ex-5").value);

  const numbersArray = [a, b, c];
  numbersArray.sort((x, y) => x - y);

  alert("Sắp xếp số theo thứ tự tăng dần: " + numbersArray);
});
