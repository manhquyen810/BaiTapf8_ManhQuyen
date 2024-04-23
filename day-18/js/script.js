// ex01

const btn = document.getElementById("btn-ex-1");
btn.addEventListener("click", () => {
  //praseInt ép kiểu số nguyên
  var a = parseInt(document.getElementById("number-a").value);
  var price = 0;
  if (a <= 1) {
    price = 15000;
  } else if (a > 1 && a <= 5) {
    price = 13500;
  } else if (a > 5) {
    price = 11000;
  }

  var total = price * a;
  if (a > 120) {
    total *= 0.9;
  }

  if (isNaN(a)) {
    alert("Vui lòng nhập số km");
  } else {
    alert("Tiền cước taxi: " + total + "đ");
  }
});

//ex02
const btnTwo = document.getElementById("btn-ex-2");
btnTwo.addEventListener("click", () => {
  var a = parseFloat(document.getElementById("number-a-ex-2").value);
  var price = 0;
  if (a >= 0 && a <= 50) {
    price = 1678;
  } else if (a >= 51 && a <= 100) {
    price = 1734;
  } else if (a >= 101 && a <= 200) {
    price = 2014;
  } else if (a >= 201 && a <= 300) {
    price = 2536;
  } else if (a >= 301 && a <= 400) {
    price = 2834;
  } else {
    price = 2927;
  }

  var total = a * price;
  if (isNaN(a)) {
    alert("Vui lòng nhập số kWh");
  } else {
    alert("Số tiền điện phải trả " + total + "đ");
  }
});

const btnThree = document.getElementById("btn-ex-3");
btnThree.addEventListener("click", () => {
  //praseInt ép kiểu số nguyên
  var n = parseInt(document.getElementById("number-a-ex-3").value);
  var s = 0;
  for (var i = 1; i <= n; i++) {
    s += i * (i + 1);
  }

  if (isNaN(n)) {
    alert("Vui lòng nhập số!");
  } else {
    alert("Tổng S = " + s);
  }
});

//ex04
const btnFour = document.getElementById("btn-ex-4");
btnFour.addEventListener("click", () => {
  //praseInt ép kiểu số nguyên
  var n = parseInt(document.getElementById("number-a-ex-4").value);
  function isPrime(n) {
    if (n == 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  if (isNaN(n)) {
    alert("Vui lòng nhập số!");
  } else if (isPrime(n)) {
    alert(n + " là số nguyên tố");
  } else {
    alert(n + " không là số nguyên tố");
  }
});

//ex05
const btnFive = document.getElementById("btn-ex-5");
btnFive.addEventListener("click", () => {
  //praseInt ép kiểu số nguyên
  var n = parseInt(document.getElementById("number-a-ex-5").value);

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {}
  }
});
