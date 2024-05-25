//ex01
console.log("Bài 1: ");
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];
function getCategories(id, name, parent) {
  return { id, name, parent };
}

Object.prototype.nested = function () {
  console.log("Mảng ban đầu: ", this);
  var obj = {};
  var result = [];
  var _this = this;

  _this.forEach(function (key) {
    var { id, name, parent } = getCategories(key.id, key.name, key.parent);
    obj[id] = { id, name, children: [] };

    if (parent === 0) {
      result.push(obj[id]);
    } else {
      if (obj[parent]) {
        obj[parent].children.push(obj[id]);
      }
    }
  });

  console.log("Mảng sau khi lồng: ", result);
};
categories.nested();

//Ex02
console.log("\nBài 2:");
var number = [1, 2, 3, 4, 5];
Array.prototype.reduce2 = function () {
  var acc = 0;
  for (var i = 0; i < this.length; i++) {
    cur = this[i];
    console.log("Giá trị tích lũy:", acc, ", giá trị hiện tại:", cur);
    acc += this[i];
  }
  return acc;
};
console.log(number.reduce2());
