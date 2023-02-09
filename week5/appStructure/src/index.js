"use strict";

require("dotenv/config");
const express = require("express");
const studentRouter = require("./router/students");

const app = express();

app.use(express.json());

app.use("/students", studentRouter);

console.log('a', process.env.PORT);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
