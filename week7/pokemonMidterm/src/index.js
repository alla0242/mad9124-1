"use strict";

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const isAuthenticated = require("./middleware/isAuthenticated");
const { errorHandler, NotFoundError } = require("./utils/errors");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

// router
app.get("/", isAuthenticated, (req, res) => {
  res.json({ success: true });
});

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
