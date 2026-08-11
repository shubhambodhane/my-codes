// importing multiple function in single file this way
const { multiply } = require("./multiply.js");
const { substract } = require("./substract.js");
const { sum, myVariable } = require("./sum.js");

// exporting them this way
module.exports = { myVariable, sum, substract, multiply };

// by importing single file we can use multiple function
// helpful for code maintaining, readability

// if you forgot to export any module and after importing and tried to log the value you will get
// value of the variable as undefined ;;
// myVariable did not exported imported tried logging value got undefined
