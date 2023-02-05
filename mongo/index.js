"use strict";

const Pokemon = require("./models/pokemon");

require("dotenv").config();
require("./config/db");
const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("/test", (_, res) => {
  res.json({ hello: "world" });
});

app.get("/pokemon", async (_, res) => {
  const pokemon = await Pokemon.find({});
  res.json({ pokemon });
});

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);
  res.json({ pokemon });
});

app.post("/pokemon/", async (req, res) => {
  try {
    const pokemon = await Pokemon.create(req.body);
    res.json({ pokemon });
  } catch (error) {
    res.status(400).json({
      errors: [{ message: "Fields missing" }],
    });
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
