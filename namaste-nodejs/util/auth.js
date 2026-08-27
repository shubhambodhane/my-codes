// this is user auth function: result : true
 const adminAuth = (req, res, next) => {
  console.log("Admin authentication function");
  let token = "xyz";
  if (!token === "xyz") {
    res.status(401).send("Unauthorized Access!");
  } else {
    next();
  }
};

// this is user auth function: result : fail
 const userAuth = (req, res, next) => {
  console.log("User Authenticatio porgress...");
  let token = "abc";
  let isValidUser = "xyz" === token;
  if (!isValidUser) {
    res.status(401).send("Unauthorized Access!");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
