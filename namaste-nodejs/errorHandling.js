const express = require("express");
const app = express();
// always try to write code using try catch block

// the route handler accepts four/4 arguments:
// 1. if 2 arguments: (request, response)
// 2. if 3 arguments: (request,response,next)
// 3. if 4 arguments: (error, request,response,next)

// when writing all arguments use get method to catch all the method
//  error along with path if err is there then need to send res.send()
//  use app.use() method with default path= "/" to catch all error
// write this default path at the end of the route
// ---------------------------------------------------------------------------------
// example 1: throw error without try catch

// app.get("/myError", (req, res, next) => {
//   throw new Error("Something error");
//   res.send("error"); // it will not execute
// });
// output:
// something error: displayed
// ---------------------------------------------------------------------------------
// example 2: throw error with try catch

// app.get("/myError", (req, res, next) => {
//   try {
//     throw new Error("Something error");
//     res.send("error"); // it will not execute
//   } catch (e) {
//     res.status(501).send("error from catch");
//   }
// });
// output:
// something error: displayed
// ---------------------------------------------------------------------------------
// example 3: with default path and err arg route handler

// the error is thrown from this route as it does not have catch method
// error catched by default path and error argument
//
// app.get("/user", (req, res, next) => {
//   throw new Error("Something error");
//   res.send("error"); // it will not execute
// });

// app.use("/", (err, req, res, next) => {
//   res.status(500).send("myServer myError");
// });
// output:
// myServer myError: displayed

// ----------------------------------------------------------------
// example 4: default route at top
// the error is null at intial level: with default path
// as the error caught in user path
// it catched in default path route handler with error arg

// app.use("/", (error, req, res, next) => {
//   if (error) {
//     res.status(500).send("service error");
//   }
// });

// app.get("/user", (req, res, next) => {
//   throw new Error("Something error");
// });

// app.use("/", (error, req, res, next) => {
//   if (error) {
//     res.status(500).send("service error");
//   }
// });
// --------------------------------------------------------
app.get("/user", (req,res)=>{
    throw new Error("faku");
})

app.use("/",(err,req,res,ne)=>{
    if(err){
        res.status(500).send("erro bro with all args");
    }
})
// --------------------------------------------------------------------
app.listen(3333, () => {
  console.log("Server is listening...");
});
