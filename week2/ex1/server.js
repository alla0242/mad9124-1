"use strict";
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello from express");
  response.code = 201;
});

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) return console.log("[ERROR]", err);
  console.log(`Server listening on PORT:${PORT}`);
});
