// javascript is single threaded, synchronous language.

// Closures: the function bind together with it's lexical environment.
// Lexical environment: the access to local memory and reference to parental scope.

// function b() {
//   var a = 3;
//   return function y() {
//     console.log(a);
//   };
// }

// var z = b();
// console.log(z);
// z();
// output:
// 3
//----------------------------------------------------------------------------

// function c(){
//     var i = 4;
//     setTimeout(()=>{
//         console.log("i =",i);
//     }, 3000);
//     console.log("hello");
// };
// c();


// output:
// hello
// i = 4 (after 3 seconds)

// here the js wont wait for setTimeout to execute it console log 'hello'
// then setTimeout executes after 3 sec the value i is logged

//----------------------------------------------------------------------------
// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("hello");
// }
// x();

//here 'let' is block scope variable
// everytime loop works 'i' gets new copy after console logged value
// output:
// hello
// 0
// 1 (after 1 seconds)
// 2 (after 2 seconds)
// 3 (after 3 seconds)
// 4 (after 4 seconds)
// 5 (after 5 seconds)
//----------------------------------------------------------------------------

// function a() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("hello");
// }
// a();

// output:
// hello
// 6 (after 6 seconds)
// 6 prints 6 times after 6 seconds
// var is global scope variable it will get the value as last value

//----------------------------------------------------------------------------

// function outer(){
//     var a=10;
//     function inner(){
//         console.log("myouter",a);
//     }
//     return inner;
// }
// const myouter= outer();
// myouter();

// output: 10
// innner function formed closure hence a has been accessed

//----------------------------------------------------------------------------

// function outer2(){
//     function inner2(){
//         console.log("close",a);
//     }
//     var a =10;
//     return inner2;
// }
// const close= outer2();
// close();

// output: 10
// closure has form and hoisting is followed here so a=10

//----------------------------------------------------------------------------

// function outer3() {
//   function inner3() {
//     console.log("close3",a);
//   }
//   let a = 10;
//   return inner3;
// }
// const close3 = outer3();
// close3();

// output: 10
// formed closure and hoisting is followed so a =10

//----------------------------------------------------------------------------

// function outerest() {
//     var f=20;
//   function outer4(e) {
//     function inner4(){
//         console.log("inner4",d,e,f);
//     }
//     let d = 10;
//     return inner4;
//   }
//   return outer4;
// }
// const close4 = outerest()("Hello");
// close4();

// output: 10 Hello 20
// hoisting, closure
// outerest()("Hello") : passing value to inner function

//----------------------------------------------------------------------------
// Q — Loop + var closure

const fns = [];
for (var i = 0; i < 3; i++) {
 fns.push(() => i);
}
console.log(fns.map(fn => fn()));

// Output:
// [3, 3, 3]
//--------------------------------------------------------------------
// Q — Isolated state factory
function counter(start = 0) {
 let n = start;
 return { inc: () => ++n, val: () => n };
}
const a = counter(5), b = counter(5);
a.inc(); a.inc();
b.inc();
console.log(a.val(), b.val());

// output:
// 7, 6
// 
//--------------------------------------------------------------------
// Q — Stale closure with async

function makeLoggers() {
 const out = [];
 for (let i = 0; i < 3; i++) {
 out.push(() => console.log(i));
 }
 return out;
}
const [l0, l1, l2] = makeLoggers();
setTimeout(l0, 0);
setTimeout(l1, 0);
setTimeout(l2, 0);

// Output:
// 0,1,2
//--------------------------------------------------------------------

