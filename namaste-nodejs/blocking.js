let my = require("fs");
let crypto = require("crypto");

let a = 11;
let b = 22;

console.log("hello block");

function add(a, b) {
  let result = a + b;
  console.log(result);
  return result;
}

add(a, b);

// This is sync fuction it will go next line only when the function gets executes.
// thats why "end file" consoled logged at the end.
my.readFileSync("./testFile.txt");
console.log("filePathSync logged");

// this is also sync call once it will finish then only cryptoSync will be logged
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("cryptoSync logged");

console.log("end file");

// output: -------------
// hello block
// 33
// filePathSync  logged
// cryptoSync logged
// end file
// ---------------------------------------------
