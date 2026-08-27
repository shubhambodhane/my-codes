// using express to give response for node js server
const express = require("express");

const app = express();

// ==> Sequence of API routes matters just like it is in Reactjs Routes. <==

// Case 1: for the API routes:
app.use("/test", (req, res) => {
  res.send("Test response send.");
});

app.use("/app", (req, res) => {
  res.send("App response send.");
});

// Case 2:
// app.use("/hello/2", (req, res) => {
//   res.send("Helllo-hello two response send.");
// });
// if this one will be at the first sequence then with prefix "/hello"
//  all the path it will give same response from the "hello"
// when the "exact path" will "match" it will give the response. ex hello/2 hello hello will be response
// first "EXACT path will be MATCHED then the response will be given." ex. "hello/2"
// ex http://localhost:3333/hello/2/well/Igot/it/now it will be handled by the hello twice response.
app.use("/hello/2", (req, res) => {
  res.send("Helllo-hello two response send.");
});

// as we know order of seqeunce is matters the path changes then this will give response
// http://localhost:3333/hello/good/example :: it has hello and other path from / so it will give hello res
// if exact hello path match failed then the default response will be given.
app.use("/hello", (req, res) => {
  res.send("Hello response send.");
});

// USE THE POSTMAN SOFTWARE TO CHECK THE DIFFERENT API METHODS AND THE RESPONSE.

// HTTP: Methods: Get, Post, Delete methods:
// it will give the response to only the written method ex. get/user : for post/user error will be given
// for get method we will get the user response but if method is changes with same api route then
// default response will be given. head/user : default response will be given
// if method is not given with path then default reponse will be given
app.get("/user", (request, response) => {
  response.send("User response send.");
});

app.post("/user", (reqeust, response) => {
  response.send("Path:User, Method:Post: response.");
});

app.delete("/user", (req, res) => {
  res.send("Path:User, Method:Delete: response.");
});

app.get("/card/:cardId",(req,res)=> {
    // console.log(req.params);
    console.log(req.query);
})
// the path here can accepts the regular expression as well
// like "/user*now" : prefix:user, suffix: now, in-between all the letters will be accepted.
// "/ab+c": prefix:a suffix: c, b+ = b can be added many times
// "/ab?c": accepts: ac, b= optional

// this is default response for all methods:
// If the api path is missing then the default response will be given
app.use("/", (req, res) => {
  res.send("default response send.");
});

// server listening to the port : accepting request giving replies
app.listen(3333, () => {
  console.log("Server is listening...");
});
