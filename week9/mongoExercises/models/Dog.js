"use strict";

const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: { type: Date, required: true },
  howGood: {
    type: Number,
    min: 1,
    max: 10,
    validate: {
      validator: Number.isInteger,
      message: "How Good must be an integer",
    },
    default: 5,
  },
  pals: [{ type: ObjectId, ref: "dog" }],
});

module.exports = mongoose.model("dog", dogSchema);
