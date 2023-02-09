"use strict";

require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./router/students");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/students", studentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
