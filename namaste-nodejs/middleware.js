const express = require("express");
const { adminAuth, userAuth } = require("./util/auth.js");
const app = express();
// Middleware: the function which is in the middle of the request chain function.
// it will check route, route handler based on the implementation it will execute
// Express: will try to send the response as early as possible

// adminAuth,userAuth function is example of middleware in expressJS.

// this function is also middleware. it will check where it is admin or not!!
// also first "route" will be checked. then authentication will be checked
// in authentication response will be send, if not admin then unauthorized user
// else next() function will be called, the route it will check
// based on the request type it will sending the response Delete or Get.
// ------------------------------Admin Auth-----------------------------------------------------
app.use("/admin", adminAuth);

// admin/ route will do authentication then getAllData will give response
app.get("/admin/getAllData", (req, res) => {
  res.send("All admin data.");
});

//adminAuth + http request type is checked then the delete API will be called
app.delete("/admin/delete", (req, res) => {
  res.send("Admin data deleted.");
});

// ----------------------------User Auth--------------------------------------------------------
app.use("/user", userAuth);
app.get("/user/getDetails", (req, res) => {
  res.send("User Data Displayed");
});

app.delete("/user/deleteUser", (req,res)=>{
res.send("User deleted");
});
// ---------------------------server listening--------------------------------------------------
app.listen(3333, () => {
  console.log("Server is listening...");
});
