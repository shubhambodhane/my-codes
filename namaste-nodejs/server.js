const http = require("http");

// created server using createServer method of http method
// response end is close connetion with response
const server = http.createServer((req, res) => {
  // to get specified data as per path
  if (req.url === "/secretData") {
    res.end("No secret! Go away!");
  }
  res.end("Hello NodeJS Server");
});

// listen port
server.listen(3333);
