"use strict";

const express = require("express");
const studentRouter = require("./router/students");
const app = express();

// this just tells express to expect JSON data in the request body
app.use(express.json());
app.use("/students", studentRouter);

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server running on port 3000");
});
