//ex01
const btn = document.getElementById("btn-ex-1");
btn.addEventListener("click", () => {
  var a = parseInt(document.getElementById("number-a").value);
  function isFibonaci(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    return isFibonaci(n - 1) + isFibonaci(n - 2);
  }
  var arr = [0];
  for (var i = 0; i < a; i++) {
    if (isFibonaci(i)) {
      arr.push(isFibonaci(i));
    }
  }
  if (isNaN(a) || a < 0) {
    alert("Vui lòng nhập số > 0");
  } else {
    alert(arr);
  }
});

const btnTwo = document.getElementById("btn-ex-2");
btnTwo.addEventListener("click", () => {
  var a = parseInt(document.getElementById("number-a-ex-2").value);
  function reverseNum(n) {
    var tmp = 0;
    while (n !== 0) {
      tmp = tmp * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return tmp;
  }
  alert(reverseNum(b));
});

const btnThree = document.getElementById("btn-ex-3");
btnThree.addEventListener("click", () => {
  var a = parseInt(document.getElementById("number-a-ex-3").value);
  // function toLetter(n) {
  //   var num = "";
  //   switch (n) {
  //     case 0:
  //       num = "không";
  //       break;
  //     case 1:
  //       num = "một";
  //       break;
  //     case 2:
  //       num = "hai";
  //       break;
  //     case 3:
  //       num = "ba";
  //       break;
  //     case 4:
  //       num = "bốn";
  //       break;
  //     case 5:
  //       num = "năm";
  //       break;
  //     case 6:
  //       num = "sáu";
  //       break;
  //     case 7:
  //       num = "bảy";
  //       break;
  //     case 8:
  //       num = "tám";
  //       break;
  //     case 9:
  //       num = "chín";
  //       break;
  //     case 10:
  //       num = "mười";
  //       break;
  //   }
  //   return num;
  // }
  // function inLetter(c) {
  //   var oc = c % 10;
  //   var tc = c % 100;
  //   var del_c_one = Math.floor(c / 10);
  //   var del_c_two = Math.floor(c / 100);

  //   if (c >= 0 && c <= 10) {
  //     return toLetter(c);
  //   } else if (c > 10 && c < 20) {
  //     return toLetter(10) + " " + toLetter(oc);
  //   } else if (c >= 20 && c < 100) {
  //     if (oc === 0) {
  //       return toLetter(del_c_one) + " mươi";
  //     } else if (oc === 1) {
  //       return toLetter(del_c_one) + " mươi mốt";
  //     }
  //     return toLetter(dc) + " mươi " + toLetter(oc);
  //   } else if (c >= 100 && c <= 999) {
  //     if (tc === 0) {
  //       return toLetter(del_c_two) + " trăm";
  //     } else if(){

  //     } else {
  //       return toLetter(del_c_two) + " trăm linh" + toLetter(oc);
  //     }
  //   }
  // }
  // alert(inLetter(a));

  function numberToWords(num) {
    if (num < 0 || num > 9999) {
      return "Số cần chuyển đổi phải nằm trong khoảng từ 0 đến 9999.";
    }

    const dv = [
      "",
      "một",
      "hai",
      "ba",
      "bốn",
      "năm",
      "sáu",
      "bảy",
      "tám",
      "chín",
    ];
    const c = [
      "",
      "mười",
      "hai mươi",
      "ba mươi",
      "bốn mươi",
      "năm mươi",
      "sáu mươi",
      "bảy mươi",
      "tám mươi",
      "chín mươi",
    ];

    var n = "";

    var del_n = Math.floor(num / 1000);
    if (del_n > 0) {
      n += dv[del_n] + " ngàn ";
      num %= 1000;
    }

    let del_t = Math.floor(num / 100);
    if (del_t > 0) {
      n += dv[del_t] + " trăm ";
      num %= 100;
    }

    if (num > 0) {
      if (num < 10) {
        n += dv[num];
      } else if (num < 20) {
        n += "mười " + dv[num % 10];
      } else {
        n += c[Math.floor(num / 10)];
        if (num % 10 > 0) {
          n += " " + dv[num % 10];
        }
      }
    }

    return n.trim();
  }

  alert(numberToWords(a));
});
