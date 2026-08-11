let file = require("fs");

setImmediate(() => {
  console.log("Set immediate logged");
});

setTimeout(() => {
  console.log("Set Timeout logged");
}, 0);

Promise.resolve("Promise callback logged").then(console.log);

file.readFile("./testFile.txt", "utf8", () => {
  console.log("File reading ok");
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("Inner nextTick logged");
  });
  console.log("process nextTick logged");
});

console.log("Last line of program");

// output:-----------------------------------
//1 Last line of program
//2 process nextTick logged
//3 Inner nextTick logged
//4 Promise callback logged
//5 Set Timeout logged
//6 Set immediate logged
//7 File reading ok
// -------------------------------------------

// priority
// nextTick > promiseCallback > timer > poll > check > close
