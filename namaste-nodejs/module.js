// import { sum, myVariable } from "./sum.js";

// this will also work as index file will take case for it.
const { sum } = require("./calculate");

// to import exact function
// const { sum } = require("./calculate/sum.js");

let z = true;
// export let z = true;
sum(30, 20); // sum of two numbers
console.log(z);
console.log("logged from ESM Module");

// -----------------------------------------------------------------------------
// ESM : ES6 Modules : MJS

// this is example of ESM, ES6 module, MJS module
// It is simple way of using the function and variable standardized by JS foundations
// the way we are using in React JS.

// Main features:
// - New way of writing modules
// - Async can be used in it. (It can be both async or sync )
// - it runs in strict mode
// - to use: Add in package.json file :{"type": "module"} (must be there)

// - to import: keyword used import
// for import We will use import and then use in our module ( component)
// 1. for single import from file. (like default export)
// ex. import myFunction from "./file.js";
// 2. for Multiple import from same file (like Named export)
// ex. import { myVar, myFunction} from "./file.js";

// - to export: keyword used export.
// - Adding keyword export in-fornt of variable and function.
// ex. export myVar = true;
// ex. export function myFun(){};

// ex: import {Sum} from "file.js"
// Sum(10,20);
// export z= true;

// ------------------------------------------------------------------------------

// CJS : Common JS modules

// Main features:
// - Old way to write the modules
// - by default these are synchronous. (can not use async)
// - it runs in non-strict mode.
// - to use these modules: in package.json file :{"type": "commonjs"}
// package json with type not required as it is supported by default

// - to import: Modules imported like :
// 1. require("filePath") : to import the whole module
// 2. const someFunction = require("filePath"); // to import single function
// 3. const {myVar, myFunction} = require("filePath"); // for multiple imports

// - to export: module.export is used
// 1. for single function or value (like default export)
// ex. module.export = myFunction;
// 2. for multiple exports function or values
// ex. module.export = {myVar, myFunction};

// ex: const {sum} =require("filePath");
// sum(22,33);
// const z = false;
// module.exports = {z};
