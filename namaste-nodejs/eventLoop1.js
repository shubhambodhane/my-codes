// example 1
// -----------------------------------------------------------------------
// let a = 100;
// let file = require("fs");
// // 3 check phase
// setImmediate(() => {
//   console.log("Set Immediate logged.");
// });
// // 2 Poll phase: but as reading file it will execute in next phase.
// file.readFile("./testFile.txt", "utf8", (err, data) => {
//   console.log("File read 1. Error:", err);
//   console.log("File read 2. Data:", data);
// });
// // 1. timer phase:
// setTimeout(() => {
//   console.log("set Timeout logged");
// }, 0);
// // sync execution phase
// function printA() {
//   console.log("Example 1");
//   console.log("a =", a);
// }
// printA();
// console.log("Last line of function");

// Output:
// a = 100
// Last line of function
// set Timeout logged
// Set Immediate logged.
// File read 1. Error: null
// File read 2. Data: This is Test file.

// --------------------------------------------------------------------------
// example 2

let b = 100;
let file = require("fs");

setImmediate(() => {
  console.log("Set Immediate logged.");
});

// as incorrect file name is there: file read exexutes first than check phase
file.readFile("./incorrectFile.txt", (err, data) => {
  console.log("As file path error: first executed before check phase.");
});

setTimeout(() => {
  console.log("set Timeout logged");
}, 0);

function printB() {
  console.log("b =", b);
}
printB();
console.log("Last line of function");

// output: ----
// b = 100
// Last line of function
// set Timeout logged
// As file path error: first executed before check phase.
// Set Immediate logged.
// -------------------------------------------------------------------------------
