"use strict";

const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const ownerSchema = new Schema({
  name: {
    type: "String",
    required: true,
  },
  dogs: [
    {
      type: ObjectId,
      ref: "dog",
    },
  ],
});

const dogSchema = new Schema({
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
  owner: ownerSchema,
});

module.exports = model("dog", dogSchema);
