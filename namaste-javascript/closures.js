// javascript is single threaded, synchronous language.

// Closures: the function bind together with it's lexical environment.
// Lexical environment: the access to local memory and parent reference

// function b() {
//   var a = 3;
//   return function y() {
//     console.log(a);
//   };
// }

// var z = b();
// console.log(z);
// z();
/////////xxxxxxxxxxxxx///////xxxxxxxxxxxxxx////////xxxxxxxxxxxxxxxx/////////

// function c(){
//     var i = 4;
//     setTimeout(()=>{
//         console.log("i =",i);
//     }, 3000);
//     console.log("hello");
// };
// c();

// here the js wont wait for setTimeout to execute it console log 'hello'
// then setTimeout executes after 3 sec the value i is logged
// hello
// i = 4 (after 3 seconds)

/////////xxxxxxxxxxxxx///////xxxxxxxxxxxxxx////////xxxxxxxxxxxxxxxx/////////
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
/////////xxxxxxxxxxxxx///////xxxxxxxxxxxxxx////////xxxxxxxxxxxxxxxx/////////

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

/////////xxxxxxxxxxxxx///////xxxxxxxxxxxxxx////////xxxxxxxxxxxxxxxx/////////

// function outer(){
//     var a=10;
//     function inner(){
//         console.log("myouter",a);
//     }
//     return inner;
// }
// const myouter= outer();
// myouter();

// op: 10
// innner function formed closure hence a has been accessed

/////////xxxxxxxxxxxxx///////xxxxxxxxxxxxxx////////xxxxxxxxxxxxxxxx/////////

// function outer2(){
//     function inner2(){
//         console.log("close",a);
//     }
//     var a =10;
//     return inner2;
// }
// const close= outer2();
// close();

// op: 10
// closure has form and hoisting is followed here so a=10

/////////xxxxxxxxxxxxx///////xxxxxxxxxxxxxx////////xxxxxxxxxxxxxxxx/////////

// function outer3() {
//   function inner3() {
//     console.log("close3",a);
//   }
//   let a = 10;
//   return inner3;
// }
// const close3 = outer3();
// close3();

// op: 10
// formed closure and hoisting is followed so a =10

/////////xxxxxxxxxxxxx///////xxxxxxxxxxxxxx////////xxxxxxxxxxxxxxxx/////////

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

/////////xxxxxxxxxxxxx///////xxxxxxxxxxxxxx////////xxxxxxxxxxxxxxxx/////////

