"use strict";

require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./router/students");
const app = express();

// this just tells express to expect JSON data in the request body
app.use(express.json());
app.use(morgan("tiny"));
app.use("/students", studentRouter);

console.log("port", process.env.PORT);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});
