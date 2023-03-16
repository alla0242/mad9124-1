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

module.exports = model("owner", ownerSchema);
``