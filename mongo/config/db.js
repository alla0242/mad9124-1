"use strict";

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {}).then(() => console.log('???'));

const db = mongoose.connection;

db.once("connected", () => {
  console.log("connected to mongodb");
});

