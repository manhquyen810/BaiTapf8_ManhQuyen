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

//ex04
var customers = [
  [
    "./image/300x200.jpg",
    "Tiêu đề bài viết 1",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eveniet dolorum consequuntur assumenda enim fugit est molestiae magnam. Excepturi sint suscipit at a vitae iste minus quia ab eveniet ea.",
  ],
  [
    "./image/300x200.jpg",
    "Tiêu đề bài viết 2",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eveniet dolorum consequuntur assumenda enim fugit est molestiae magnam. Excepturi sint suscipit at a vitae iste minus quia ab eveniet ea.",
  ],
  [
    "./image/300x200.jpg",
    "Tiêu đề bài viết 3",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eveniet dolorum consequuntur assumenda enim fugit est molestiae magnam. Excepturi sint suscipit at a vitae iste minus quia ab eveniet ea.",
  ],
];

document.getElementById("ex-4").innerHTML = "Bài 4:";
var customerList = document.getElementById("customer-list");

customers.forEach(function (customer, index) {
  var customerDiv = document.createElement("div");
  customerDiv.classList.add("box");

  if (index === 1) {
    customerDiv.classList.add("box-res");
  }

  var image = document.createElement("img");
  image.src = customer[0];

  var inforDiv = document.createElement("div");
  inforDiv.classList.add("infor");

  var title = document.createElement("h3");
  title.textContent = customer[1];

  var text = document.createElement("p");
  text.textContent = customer[2];

  customerDiv.appendChild(image);
  customerDiv.appendChild(inforDiv);
  inforDiv.appendChild(title);
  inforDiv.appendChild(text);
  customerDiv.appendChild(inforDiv);

  customerList.appendChild(customerDiv);
});
