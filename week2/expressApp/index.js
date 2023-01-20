const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express!");
});
app.get("/api", (req, res) => {
  const data = { message: "Hello from express!" };
  res.status(201).json({ data });
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is running on port 3000");
});
