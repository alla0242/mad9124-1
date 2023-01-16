const os = require("os");
const path = require("path");
const queryString = require("querystring");
const stream = require("stream");
const http = require("http");

const server = new http.createServer((request, response) => {
  let body = "[test]: ";
  request.on("data", (data) => {
    console.log("!", data);
    body += data;
  });
  request.on("error", () => {
    request.statusCode(400);
  });
  response.write(body);
  response.end();
});

server.listen(4000, () => {
  console.log("server listening on port 4000");
});
