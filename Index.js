// Sum of two inteergers
// let a = "12";
// let b = 13;
// console.log(a + b); //concatenation
// console.log(a - b); //type-coercion

// Sum and print with message

// let a = 10;
// let b = 20;
// console.log("The sum of a and b is " + a + b); // The sum of a and b is 1020
// console.log("The sum of a and b is " + (a + b)); // The sum of a and b is 30
// console.log(a + b + " is a sum of a and b"); // 30 is a sum of a and b

// Q3
// let age = Number(prompt("Enter your age"));
// console.log(age);

// Q4 Swapping of two numbers
// method one
// let a = 10;
// let b = 20;
// let c;
// c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// method two
// let a = 10;
// let b = 20;

// a = a + b; //30
// b = a - b; // 10
// a = a - b; // 20

// console.log(a);
// console.log(b);

// Q5 Opreator

// let a = 9430;
// console.log(a % 10);

//unary
// pre  => '++'  Phle laga ho to direct value bad jati hai
// post  => '++'  baad me laga ho to direct value nhi badti balki next call pe bdti hai

// let i = 11
// i = i++ + ++i
// console.log(i)

// const i = 11
// console.log(i++) // you cant apply unarry opreator on contant

// 15++ ( its also a error)
// let a = 10
// let b = ++(++a) // here is a errror showing
// console.log(b)

// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.trunc(4.9)); // 4
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.sqrt(16));
// console.log(Math.abs(-5)); // 5
// console.log(Math.max(3, 7)); // 7
// console.log(Math.min(3, 7)); // 3
// console.log(Math.random()); // 0 se 1 ke beech me koi bhi random number dega
// console.log(Math.trunc(Math.random() * 9000 + 1000));

// calculate are ad parimeter of rectangle

// let a = 5;
// let b = 7;

// let areaOfReactangle = a * b;
// let paremeterOfReactangle = 2 * (a + b);
// console.log(areaOfReactangle);
// console.log(paremeterOfReactangle);

// let age = Number(prompt("What is your age "));
// console.log(age);

// if (isNaN(age)) {
//   console.log("Wrong input");
// }
// if (age >= 18) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

// Loops

// for (let i = 200; i > 99; i--) {
//   console.log(i);
// }

// let end = Number(prompt("Sum of natural number"));
// if (isNaN(end)) {
//   console.log("invalid input");
// } else if (end < 1) {
//   console.log("Please enter a natural number");
// } else {
//   let num = 0;

//   for (let i = 1; i <= end; i++) {
//     num += i;
//   }
//   console.log(num);
// }

// let end = Number(prompt("factorial of natural number"));
// if (isNaN(end)) {
//   console.log("invalid input");
// } else if (end < 1) {
//   console.log("Please enter a natural number");
// } else {
//   let num = 1;

//   for (let i = 1; i <= end; i++) {
//     num *= i;
//   }
//   console.log(num);
// }

// let pr = prompt("Enter the number");
// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   let num = Number(pr);
//   if (isNaN(num)) {
//     console.log("plaes enter the valid number");
//   } else {
//     if (num > 0) {
//       let res = [];
//       for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//           res.push(i);
//         }
//       }
//       console.log(res);
//     } else {
//       console.log("Number should be natural number ");
//     }
//   }
// }

// let pr = prompt("Enter the number");
// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   let num = Number(pr);
//   if (isNaN(num)) {
//     console.log("plaes enter the valid number");
//   } else {
//     if (num > 0) {
//       let res = [];
//       for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//           res.push(i);
//         }
//       }
//       console.log(res);
//     } else {
//       console.log("Number should be natural number ");
//     }
//   }
// }

// While

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let num = prompt("Kuch bhi de do (exit for close)");

// while (num !== "exit") {
//   num = prompt("Kuch bhi de do (exit for close)");
// }

// do while
// var i = 1;
// do {
//   console.log("This will execute at least once" + i);
//   i++;
// } while (i <= 10);

// let numToGuess = Math.floor(Math.random() * 10 + 1);

// let userInput = Number(prompt("Guess the number from 1 - 10"));

// while (isNaN(userInput) || userInput < 1 || userInput > 10) {
//   userInput = Number(
//     prompt("Invalid input! Please enter a number from 1 - 10"),
//   );
// }

// while (userInput !== numToGuess) {
//   if (userInput > numToGuess) {
//     userInput = Number(prompt("Too High, try again"));
//   } else {
//     userInput = Number(prompt("Too Low, try again"));
//   }

//   while (isNaN(userInput) || userInput < 1 || userInput > 10) {
//     userInput = Number(
//       prompt("Invalid input! Please enter a number from 1 - 10"),
//     );
//   }
// }

// alert("Good!! Correct");

// let generate = Number(Math.round(Math.random() * 100 + 1)); // 23
// let guess = -1;
// let attempt = 0;

// while (guess !== generate) {
//   if (attempt === 5) {
//     console.log("your attempt is over");
//     break;
//   }
//   attempt++;
//   guess = Number(prompt("Enter the number , 1 - 100"));
//   if (isNaN(guess) || guess > 100 || guess < 1) {
//     console.log("Try again, Number should be 1 to 100");
//     continue;
//   }
//   if (guess > generate) {
//     console.log("Too high , Try again");
//   } else if (guess < generate) {
//     console.log("Too low, Try again");
//   } else {
//     console.log("Congratulation 🥳" + guess);
//   }
// }

// let num = Number(prompt("Enter the number")); //15

// let arr = [];

// if (isNaN(num) || num < 1) {
//   console.log("Number should be valid and also positive , 0 is not allowed");
// } else {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   console.log(arr.join(" "));
// }

// let amount = 10000;
// let userInput = -3;

// // 1. Check Balance
// // 2. Deposit
// // 3. Withdraw
// // 4. Exit

// while (userInput !== 4) {
//   userInput = Number(
//     prompt(
//       "Choice one Option  1. Check Balance 2. Deposit 3. Withdraw  4. Exit ",
//     ),
//   );
//   console.log(userInput);
//   if (
//     userInput !== 1 &&
//     userInput !== 2 &&
//     userInput !== 3 &&
//     userInput !== 4
//   ) {
//     alert("Please Enter the following option");
//     continue;
//   }
//   if (userInput === 1) {
//     alert("Your current amount is ₹" + amount);
//   } else if (userInput === 2) {
//     let deposite = Number(prompt("Enter the amount you want to deposit"));
//     if (isNaN(deposite)) {
//       alert("Please enter valid number ");
//       continue;
//     }
//     if (deposite < 1) {
//       alert("Please enter amount more than ₹1 ");
//       continue;
//     }
//     amount = amount + deposite;
//     alert("Now your current amount is ₹" + amount);
//   } else if (userInput === 3) {
//     let withdraw = Number(prompt("Enter the amount you want to withdraw"));
//     if (withdraw < 1) {
//       alert("Minimun withdrawl ammount is ₹1");
//     } else if (isNaN(deposite)) {
//       alert("Please enter valid number ");
//       continue;
//     } else if (withdraw > amount) {
//       alert("Insuficient amount");
//     } else {
//       amount = amount - withdraw;
//       alert("Now your current amount is ₹" + amount);
//     }
//   } else {
//     alert("Thank you for using our service");
//     break;
//   }
// }

// console.log("Hello ");
// console.log("World");

// process.stdout.write("Hello ");
// process.stdout.write("World");
let prompt = require("prompt-sync")();
let a = prompt("Enter the first number");
console.log(a);
