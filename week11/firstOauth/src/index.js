"use strict";

require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const authRouter = require('./router/auth');

require("./util/db");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (_req, res) => {
  res.send("server running");
});

app.use('/auth', authRouter);

app.get("/public", (_req, res) => {
  res.send("Anyone can see this page");
});

app.get("/private", (_req, res) => {
  res.send("You are logged in!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
