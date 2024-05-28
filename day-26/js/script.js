//ex01
console.log("Bài 1:");
function sumNumber(...n) {
  var sum = 0;
  for (var num of n) {
    var num = +num;
    if (!num) {
      return "Lỗi dữ liệu truyền vào";
    } else {
      sum += num;
    }
  }
  return sum;
}

var result = sumNumber(1, 2, 3, "a", "b");
console.log(result);

//ex02
console.log("\nBài 2:");
Number.prototype.getCurrency = function (cur) {
  var _this,
    checkNum = Number(this);
  if (!Number.isNaN(checkNum)) {
    if (cur === "đ") {
      _this = this.toLocaleString("en-Us");
    } else if (cur === "vnđ") {
      _this = this.toLocaleString("vi-VN");
    }
  } else {
    console.log("Dữ liệu truyền vào bị lỗi");
  }
  return _this + " " + cur;
};
var price = 12000;
console.log(price.getCurrency("đ"));

var price = 12000;
console.log(price.getCurrency("vnđ"));
// var price = "12000000";
// console.log(price.getCurrency("đ"));

//ex03
console.log("\nBài 3:");
Array.prototype.push2 = function (value) {
  this[this.length] = value;
};
var arr = [1, 2, 3, 4, 5];
arr.push2(6);
console.log(arr);
