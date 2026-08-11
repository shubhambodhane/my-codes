let b = 100;
let file = require("fs");

// What is Tick ?
// One cycle of the event loop. (timer>poll>check>close)


// 4. check phase execution
setImmediate(() => {
  console.log("Set Immediate logged.");
});

// 2nd highest priority: promise
Promise.resolve("Promise callback logged").then(console.log);

// 5 coz of file read this will execute last in poll phase(2nd phase) as in phase 1 file read is going on
file.readFile("./testFile.txt", (err, data) => {
  console.log("File read logged");
});

// 3. set Timeout logged timer phase execution
setTimeout(() => {
  console.log("set Timeout logged");
}, 0);

// 1.highest priority execute first
process.nextTick(() => {
  console.log("process nextTick logged");
});

function printB() {
  console.log("b =", b);
}
printB();
console.log("Last line of function");

// Output: --------------------------------------
// b = 100
// Last line of function
// process nextTick logged
// Promise callback logged
// set Timeout logged
// Set Immediate logged.
// File read logged
// -----------------------------------------------
