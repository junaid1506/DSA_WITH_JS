let prompt = require("prompt-sync")();
let n = prompt("Enter the first number");
// process.stdout.write(a);

// for (let j = 1; j <= n; j++) {
//   for (let i = 1; i <= n; i++) {
//     process.stdout.write(i + " ");
//   }
//   console.log();
// }

// for (let j = 1; j <= n; j++) {
//   for (let i = 1; i <= j; i++) {
//     process.stdout.write(i + " ");
//   }
//   console.log();
// }

// for (let j = 1; j <= n; j++) {
//   for (let i = n; i >= j; i--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

for (let j = 1; j <= n; j++) {
  for (let i = n; i > j; i--) {
    process.stdout.write(" ");
  }
  for (let i = 1; i <= j; i++) {
    process.stdout.write("*");
  }
  console.log();
}
