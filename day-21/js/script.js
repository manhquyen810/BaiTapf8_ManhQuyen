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
  console.log(
    "Phần tử lớn nhất: " + max + ", nằm ở vị trí số " + (maxIndex + 1)
  );
  console.log(
    "Phần tử nhỏ nhất: " + min + ", nằm ở vị trí số " + (minIndex + 1)
  );
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
    console.log("Trung bình các số nguyên tố trong mảng: ", sum / count);
  } else {
    console.log("Không có số nguyên tố trong mảng");
  }
});

//ex03
const btnThree = document.getElementById("btn-ex-3");
btnThree.addEventListener("click", () => {
  var arr = [5, 2, 5, 2, 1, 9, 6, 1];
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
});
