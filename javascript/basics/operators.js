// //  let postfix = 5;
// // let prefix = 5;

// // console.log(postfix++); // Prints 5. `postfix` is now 6.
// // console.log(postfix);   // Prints 6.

// // console.log(++prefix); // Prints 6. `prefix` is now 6.
// // console.log(prefix);   // Prints 6.

//     console.log(7 == "7");   // true (string "7" is coerced to number 7)
// console.log(0 == false); // true (boolean false is coerced to number 0)
//     console.log(7 === "7");   // false (number is not a string)
// console.log(0 === false); // false (number is not a boolean)
//logical
//     let username = ""; // an empty string is "falsy"
// let displayName = username || "Guest"; // displayName becomes "Guest"
//     let isLoggedIn = false;
// if (!isLoggedIn) {
//   console.log("Please log in.");
// }
let score = 99;
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

console.log(`Your grade is: ${grade}`);