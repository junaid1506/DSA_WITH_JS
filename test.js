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

// function isPalindrome(str) {
//   let reverse = "";
//   let result = false;

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
//   }

//   if (reverse === str) {
//     result = true;
//   }

//   return result;
// }

// console.log(isPalindrome('mama'))

// Q5

// function removeDuplicates(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeDuplicates([1,2,2,3,4,4,5]))

// Q6

// function countVowels(str) {
//   let result = 0;

//   for (let i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i])) {
//       result = result + 1;
//     }
//   }

//   return result;
// }

// function countVowels2(str) {
//   let result = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       result = result + 1;
//     }
//   }

//   return result;
// }

// console.log(countVowels("javascript"));
// console.log(countVowels2("javascript"));

//Q7

// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// console.log(twoSum([54, 7, 2, 15], 9));

// Q8

// function secondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// console.log(secondLargest([2, 4, 5, 3, 6, 763214]));

// Q9

function moveZeros(arr) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
      if(arr[i] )
    
  }


}
