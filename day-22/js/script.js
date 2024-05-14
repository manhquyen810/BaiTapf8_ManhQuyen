//ex01
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var result = [];

arrA.forEach(function (item) {
  if (arrB.includes(item)) {
    result.push(item);
  }
});
document.getElementById("ex-1").innerHTML = "Bài 1: Console";
console.log(result);
// ex02
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function graftArray(a) {
  var newArr = [];
  a.forEach(function (item) {
    if (typeof item === "object") {
      newArr = newArr.concat(graftArray(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

var resultTwo = graftArray(arr);
document.getElementById("ex-2").innerHTML = "Bài 2: Console";
console.log(resultTwo);

//ex03
var arrTwo = [
  ["a", 1, true],
  ["b", 2, false],
];

var strings = [];
var booleans = [];
var numbers = [];
var newArrTwo = [];
arrTwo.forEach(function (value) {
  value.forEach(function (item) {
    if (typeof item === "string") {
      strings.push(item);
    } else if (typeof item === "number") {
      numbers.push(item);
    } else if (typeof item === "boolean") {
      booleans.push(item);
    }
  });
});
newArrTwo = [strings, numbers, booleans];
document.getElementById("ex-3").innerHTML = "Bài 3: Console";
console.log(newArrTwo);
