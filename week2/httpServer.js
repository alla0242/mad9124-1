const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    const data = {
      message: "Hello from Node.js",
    };
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ error: "Not Found" }));
    res.end();
  } else if (req.url === "/tim") {
    const data = {
      message: "Hello from Node.js",
    };
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ error: "Not Found" }));
    res.end();
  } else {
    res.write("Hello from Node.js");
    res.end();
  }
});

server.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server running on port 3000");
});
