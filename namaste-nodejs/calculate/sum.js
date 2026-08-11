// module = file = component

let myVariable = true;

// export function sum(a, b) {
function sum(a, b) {
  let sum = a + b;
  console.log(sum);
  return sum;
}

// example of single export from module like default export
// module.exports = sum;

// multiple export from same file similar like named export
module.exports = { myVariable, sum };
