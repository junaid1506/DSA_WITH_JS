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

// function moveZeros(arr) {
//   let arr2 = [];
//   let arr3 = [];
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr3.push(arr[i]);
//     } else {
//       arr2.push(arr[i]);
//     }
//   }
//   return [...arr2, ...arr3];
// }

// console.log(moveZeros([0, 1, 0, 3, 12]));

// Q10

// function firstUnique(str) {
//   let newStr = [];
//   for (let i = 0; i < str.length; i++) {

//   }
// }

// function getPrimes(n) {
//   if (typeof n !== "number") {
//     return console.log("Please enter the valid number ");
//   }
//   if (n < 1) {
//     return console.log("Please enter the the number who greater that 0 ");
//   }

//   let prime = [];

//   for (let i = 2; i < n; i++) {
//     if (n % i !== 0)  {
//       prime.push(i);
//     }
//   }
//   return console.log(prime);
// }

// getPrimes(10);

//
// async function getUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     console.log("Data:", data);
//     console.log("ye tb tk nhi chalega jb tk data nhi aa jata");
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// getUsers();

// console.log("This will log before the data is fetched");

// function arrayDiff(a, b) {
//   let res = [];
//   for (i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       res.push(a[i]);
//     }
//   }

//   return res;
// }

// console.log(arrayDiff([1, 2, 2, 3], [2]));

// function filter_list(l) {
//   let res = [];

//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] === "number") {
//       res.push(l[i]);
//     }
//   }

//   return res;
// }

// console.log(filter_list([1, 2, "a", "b"]));

let num = Number(prompt("Enter number"));
if (isNaN(num)) {
  console.log("Cancelled");
}
console.log(num);
