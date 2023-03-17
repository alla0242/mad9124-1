"use strict";

require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose"); // TODO delete this
require("./util/db");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (_req, res) => {
  // DONT DO THIS
  //   const Pokemon = mongoose.model("pokemon", { name: String, type: String });
  //   const pikachu = new Pokemon({ name: "pikachu", type: "electric" });
  //   await pikachu.save();
  //   res.send({ pikachu });
  res.send("Server running :)");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
