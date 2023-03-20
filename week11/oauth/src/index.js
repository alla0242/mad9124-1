"use strict";

require("dotenv/config");
const express = require("express");
const morgan = require("morgan");

require("./util/db");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (_req, res) => {
  res.send("server running");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
