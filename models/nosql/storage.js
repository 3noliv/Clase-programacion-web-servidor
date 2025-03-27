// models/nosql/storage.js
const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
  {
    url: String,
    filename: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("storage", StorageSchema);
