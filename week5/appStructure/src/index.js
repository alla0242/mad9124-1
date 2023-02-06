"use strict";

const express = require("express");
const studentRouter = require('./router/students');

const app = express();

app.use(express.json());

app.use("/students", studentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
