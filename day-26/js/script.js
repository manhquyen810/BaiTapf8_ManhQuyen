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
Object.prototype.getCurrency = function (cur) {
  var checkNum = Number(this);
  if (!Number.isNaN(checkNum)) {
    var _this;
    if (cur === "đ") {
      _this = checkNum.toLocaleString("en-Us");
    } else if (cur === "vnđ") {
      _this = checkNum.toLocaleString("vi-VN");
    }
    return _this + " " + cur;
  } else {
    return "Dữ liệu truyền vào lỗi";
  }
};
var price = 12000;
console.log(price.getCurrency("đ"));

var price = 12000;
console.log(price.getCurrency("vnđ"));

var price = "12000000";
console.log(price.getCurrency("đ"));

//ex03
console.log("\nBài 3:");
Array.prototype.push2 = function () {
  for (const item of arguments) {
    this[this.length] = item;
  }
};
var arr = [1, 2, 3, 4, 5];
var newArr = [];
for (var value of arr) {
  newArr.push2(value);
}
console.log(newArr);

//ex04
console.log("\nBài 4:");
Array.prototype.filter2 = function (callback) {
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var value = this[i];
    if (callback(value, i)) {
      newArr[newArr.length] = value;
    }
  }
  return newArr;
};

var arr = [1, 2, 3, 4, 5];
var result = arr.filter2(function (number) {
  return number > 3;
});
console.log(result);

//ex05
console.log("\nBài 5:");
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function createOptions(categories) {}

var result2 = createOptions(categories);

console.log(result2);

document.write(`
<select name="" id="">
  <option value="0">Chọn chuyên mục</option>
  ${result2}
</select>`);
