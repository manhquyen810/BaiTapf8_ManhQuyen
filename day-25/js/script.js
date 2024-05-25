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

Object.prototype.nested = function () {
  console.log("Mảng ban đầu: ", this);
  var obj = {};
  var result = [];
  this.forEach(function (key) {
    obj[key.id] = { ...key, children: [] };
  });
  this.forEach(function (key) {
    if (key.parent === 0) {
      result.push(obj[key.id]);
    } else {
      if (obj[key.parent]) {
        obj[key.parent].children.push(obj[key.id]);
      }
    }
  });
  console.log("Mảng sau khi lồng: ", result);
};
categories.nested();
