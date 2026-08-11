let file = require("fs");

setImmediate(() => {
  console.log("Set immediate logged");
});

setTimeout(() => {
  console.log("Set Timeout logged");
}, 0);

Promise.resolve("Promise callback logged").then(console.log);

file.readFile("./testFile.txt", "utf8", () => {
  setTimeout(() => {
    console.log("2nd set timeout logged");
  }, 0);

  process.nextTick(() => {
    console.log("2nd process nextTick logged");
  });

  setImmediate(() => {
    console.log("2nd Set immediate logged");
  });

  console.log("File reading ok");
});

process.nextTick(() => {
  console.log("Process nextTick logged");
});

console.log("Last line of program");

// output:---------------------------------
// Last line of program
// Process nextTick logged
// Promise callback logged
// Set Timeout logged
// Set immediate logged
// File reading ok
// 2nd process nextTick logged
// 2nd set immediate logged
// 2nd Set timeout logged
// -----------------------------------------
// Q. how 2nd immediate executes first? before the 2nd timeout logged
// A: when the call stack, callback queue, event loop idle, empty
// the event loop will goes to semi-infinite loop. and it will wait in the Poll execution phase
// as it is in the poll phase it will start executing from poll phase (NOT FROM THE TIMER PHASE)
// as the check phase is next thus it will execute from check then only
// the cycle will continue it will not break (will not start from timer will continue from poll-check-close)

// Event loop will wait in the Poll phase execution as call stack, callback queue is empty

// IN THE CALL BACK OF FILE READ SYSTEM:
// as in first exection the file read is completed
// event loop see the callback there therefore it(libuv) push the tasks based the priority from the execution in the call stack
// next tick and promise has higher priority they will pushed to their higher priority callback queue
// then check before close nextTick/promise will check and excute
// close phase execute again checking of nextTick/promise and finally it will goes to timer phase for exection
//  the cycle will start executing like normally
