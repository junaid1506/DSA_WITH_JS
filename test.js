// Q1

// function factorial(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum = sum * i;
//   }
//   return sum;
// }

// console.log(factorial(5));

// Q2
// function reverseString(str) {
//   let element = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     element = element + str[i];
//   }
//   return element;
// }

// let abc = "abc";
// let newOne = "";

// newOne = abc[2];
// newOne = newOne + abc[1];
// newOne = newOne + abc[0];
// console.log(newOne);

// console.log(reverseString("abc"));

//Q3
// function findMax(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([3, 17, 12, 9, 5]));

//Q4

function isPalindrome(str) {
  let reverse = "";
  let result = false;

  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }

  if (reverse === str) {
    result = true;
  }

  return result;
}



console.log(isPalindrome('mama'))