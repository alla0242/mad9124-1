"use strict";

const { Schema, model } = require("mongoose");

const userModel = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userModel);
