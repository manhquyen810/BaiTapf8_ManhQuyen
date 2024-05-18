var n = 6;

function isPrime(a) {
  if (a <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

function reverseNum(a) {
  var reversed = 0;
  while (a != 0) {
    var tmp = a % 10;
    reversed = reversed * 10 + tmp;
    a = Math.floor(a / 10);
  }
  return reversed;
}

function isSymmetricalNum(a) {
  if (a < 0) {
    return false;
  }
  return a === reverseNum(a);
}

function smallNum(n) {
  while (true) {
    if (isPrime(n) && isSymmetricalNum(n)) {
      return n;
    }
    n++;
  }
}

var result = smallNum(n);
console.log(result);

//ex02
nums1 = [1, 2];
nums2 = [3, 4];

var numbers = [];
numbers = numbers.concat(nums1, nums2);
console.log(numbers);
numbers = numbers.sort(function (a, b) {
  if (b > a) {
    return -1;
  }
});
console.log(numbers);
var midNumbers = Math.floor(numbers.length / 2);
console.log(numbers[midNumbers]);
