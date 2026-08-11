// Install node js run time environment + verify in terminal using node -v, npm -v
// to run file use: node app.js // output will be in console

// let a = "hello";
// console.log(a);

require("./xyx.js");
const { myVariable, sum } = require("./calculate");

let a = 11;
let b = 22;
sum(a, b);
console.log(myVariable);
console.log("Hello Node");

// -------------------------------------------------
// global object in Node js is called "global"
// console.log(global);
//--------------------------------------------------
// this will also point to the global object
// standard way to call the global object in all javascript run time environment
// console.log(globalThis);

// in Node js console.log will give empty object
//console.log(this);// {} = empty object

// in Node js window is not global object, hence error will display
// console.log(window); // reference error

// in case browser window and this will point to global object
// Note: "this" will behave different as per "use strict"
// -------------------------------------------------------------
