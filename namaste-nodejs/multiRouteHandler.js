const express = require("express");

const app = express();
//  next(parameter) function will jump directly to following route handler.
// after execution the last one will be execute like console.
// i.e 6 route handler executed , upto 5 next used then from route handler 5 to 1 consoled like example 9
// -------------------------------------------------------------
// example 1: multiple route handlers: output from first
// app.use(
//   "/route",
//   // the response go to first route:sending response
//   // it satisfy the condition hence response will comes from it,
//   //   it does not required to go next route handlers
//   (req1, res1) => {
//     console.log("Route handler 1");
//     res1.send("response 1 send");
//   },
//   (req2, res2) => {
//     console.log("Route handler 2");
//     res2.send("response 2 send");
//   },
//   (req3, res3) => {
//     console.log("Route handler 2");
//     res3.send("response 3 send");
//   },
// );
// output:
// route handler 1
// reponse 1 send
// --------------------------------------------------------------------
// example 2: response.send() is empty
// app.use(
//   "/route",
//   (req1, res1) => {
//     // the response.send is empty : the output is empty
//     // server accepted the request but response is null
//     // the page will be loading state:: It will timeout : hanged state
//     console.log("Route handler 1"); // console will be logged
//   },
//   (req2, res2) => {
//     console.log("Route handler 2");
//     res2.send("response 2 send");
//   },
// );
// output:
// no response: as router handler has not send any response: browser loading state
// -----------------------------------------------------------
// expmaple 3: using Next parameter: at the last after console log, no response send
// app.use(
//   "/route",
//   (req1, res1, next1) => {
//     // response send is empty
//     console.log("Route handler 1"); // it will be logged
//     next1();
//     // using next parameter; the next route handler will be called.
//   },
//   (req2, res2, next2) => {
//     // this will execute as previous handler has used next in it.
//     console.log("Route handler 2"); // it will be logged
//     res2.send("response 2 send"); // this will be output
//   },
//   (req3, res3, next3) => {
//     console.log("Route handler 2");
//     res2.send("response 2 send");
//   },
// );
// output:
// route handler 1 //using next parameter
// route handler 2
// response 2 send
// ------------------------------------------------------------
// expmaple 4: using Next parameter: next before the console log, no response send
// app.use(
//   "/route",
//   (req1, res1, next1) => {
//     next1();
//     console.log("Route handler 1");
//   },
//   (req2, res2, next2) => {
//     console.log("Route handler 2");
//     res2.send("response 2 send");
//   },
// );
// output: next will push the execution in following route handler
// route handler 1
// route handler 2
// response 2 send
// --------------------------------------------------------
// expmaple 5: Next parameter - in first line of 1 route handler with res send and console
// app.use(
//   "/route",
//   (req1, res1, next1) => {
//     next1();
//     res1.send("response 1 send");
//     console.log("Route handler 1");
//   },
//   (req2, res2, next2) => {
//     console.log("Route handler 2");
//     res2.send("response 2 send");
//   },
// );
// output:
// response 2 send: will be displayed
// Route handler 2 :consoled logged
// error at the console from server end as no repeate of response send
// ------------------------------------------------------------------------
// expmaple 6: Next parameter - at last with response send and console.log
// app.use(
//   "/route",
//   (req1, res1, next1) => {
//     res1.send("response 1 send");
//     console.log("Route handler 1");
//     next1();
//   },
//   (req2, res2, next2) => {
//     console.log("Route handler 2");
//     res2.send("response 2 send");
//   },
// );
// output:
// response 1 send: will be displayed
// Route handler 1: will be logged
// Route handler 2: will be logged
// while sending the response from same route no repeatation
// error at the server end as repeatation of the response send.
// ---------------------------------------------------------------------
// example 7: using multiple multiple route with next parmeter
// app.get(
//   "/route",
//   (req1, res1, next) => {
//     next();
//     console.log("route handler 1 console");
//   },
//   (req, res2, next) => {
//     next();
//     console.log("route handler 2 console");
//   },
//   (req1, res1, next) => {
//     next();
//     console.log("final route handler console");
//   },
// );
// output:
// display: 404 : get /route error
// final route handler console
// route handler 2 console
// route handler 1 console
// next function will jump directly to following route handler
// will complete last route handler execution
// why handler 2 came before 1 , LIFO Last in first out :
// event execution thus, it will give this output
// ------------------------------------------------------------
// example 7: combining the route handlers using array will give same output
// final handle has everything using next at the first line
// app.get("/route", [
//   (req1, res1, next) => {
//     next();
//     console.log("route handler 1 console");
//   },
//   (req2, res2, next) => {
//     next();
//     console.log("route handler 2 console");
//   },
//   (req3, res3, next) => {
//     next();
//     console.log("final route handler console");
//     res3.send("final response send");
//   },
// ]);
// output: display: 404 : get /route error as again it will check for other route handler
// final route handler console
// route handler 2 console
// route handler 1 console
//------------------------------------------------------------
// example 8: combining the route handlers using array will give same output
// app.get("/route", [
//   (req1, res1, next) => {
//     next();
//     console.log("route handler 1 console");
//   },
//   (req, res2, next) => {
//     next();
//     console.log("route handler 2 console");
//   },
//   (req3, res3, next) => {
//     console.log("final route handler console");
//     res3.send("final response send");
//   },
// ]);
// output: display: final response send
// final route handler console
// route handler 2 console
// route handler 1 console
//  last next route handler is executed
// ------------------------------------------------------------
// example 9: combining the route handlers using array will give same output
app.get(
  "/route",
  [
    (req1, res1, next) => {
      next();
      console.log("route handler 1 console");
    },
    (req, res2, next) => {
      next();
      console.log("route handler 2 console");
    },
    ,
    (req3, res3, next) => {
      next();
      console.log("route handler 3 console");
    },
  ],
  (req4, res4, next) => {
    next();
    console.log("route handler 4 console");
  },

  (req5, res5, next) => {
    next();
    console.log("route handler 5 console");
  },
  (req6, res6, next) => {
    console.log("final route handler console");
    res6.send("final response send");
  },
);
// output: display: final response send
// final route handler console
// route handler 5 console
// route handler 4 console
// route handler 3 console
// route handler 2 console
// route handler 1 console
// last route handler is executed before calling next
//--------------- server listening -------------------
app.listen(3333, () => {
  console.log("server is listening...");
});
