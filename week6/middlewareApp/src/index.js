"use strict";

const express = require("express");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const studentRouter = require("./router/students");

const app = express();

// Application level middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(logger);

app.get("/", (_req, res) => {
  res.send("Hello, world");
});

app.use("/students", studentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
