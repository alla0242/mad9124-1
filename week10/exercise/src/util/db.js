"use strict";

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(`connected to mongo`);
});
