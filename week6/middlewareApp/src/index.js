"use strict";

const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./router/students");
const classesRouter = require("./router/classes");
const app = express();

app.use(express.json());

// app.use(morgan("tiny"));
// Morgan tiny clone
app.use((req, res, next) => {
  const startTime = Date.now();
  res.on("finish", () => {
    const endTime = Date.now();
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${
        endTime - startTime
      }ms`
    );
  });
  next();
});

app.get("/test", (req, res) => {
  res.status(400).send("Bad, world!");
});

app.use("/students", studentRouter);
app.use("/classes", classesRouter);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
