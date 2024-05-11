//ex01
// Ví dụ: [5, 2, 1, 9, 6]
const btn = document.getElementById("btn-ex-1");
btn.addEventListener("click", () => {
  var arr = [5, 2, 1, 9, 6];
  var max = arr[0];
  var min = arr[0];
  var maxIndex, minIndex;
  // max
  for (var index in arr) {
    if (arr[index] > max) {
      max = arr[index];
      maxIndex = +index;
    }
  }
  //min
  for (var index in arr) {
    if (arr[index] < min) {
      min = arr[index];
      minIndex = +index;
    }
  }
  console.log("Phần tử lớn nhất: " + max + ", nằm ở vị trí số " + maxIndex);
  console.log("Phần tử nhỏ nhất: " + min + ", nằm ở vị trí số " + minIndex);
});

//ex02
const btnTwo = document.getElementById("btn-ex-2");
btnTwo.addEventListener("click", () => {
  var arr = [5, 2, 1, 9, 6, 11];
  var sum = 0,
    count = 0;
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  var prime = false;
  for (var index in arr) {
    if (isPrime(arr[index])) {
      sum += arr[index];
      count++;
      prime = true;
    }
  }
  if (prime) {
    console.log(
      "Trung bình các số nguyên tố trong mảng: ",
      parseFloat(sum / count)
    );
  } else {
    console.log("Không có số nguyên tố trong mảng");
  }
});

//ex03
const btnThree = document.getElementById("btn-ex-3");
btnThree.addEventListener("click", () => {
  var arr = [5, 2, 5, 2, 1, 9, 6, 1, "Quyền", "Quyền"];
  var newArr = [];
  for (var i of arr) {
    var repeat = false;
    for (var j of newArr) {
      if (i === j) {
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      newArr[newArr.length] = i;
    }
  }
  console.log(newArr);
});

//ex04
const btnFour = document.getElementById("btn-ex-4");
btnFour.addEventListener("click", () => {
  var numbers = [5, 1, 9, 8, 10];
  var element = 4;
  var newNumbers = [];

  function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      var min = i;
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      swap(arr, i, min);
    }
    return arr;
  }
  var result = selectionSort(numbers);
  console.log("Bước 1: ", result);
  numbers[numbers.length] = element;
  console.log(numbers);
});
