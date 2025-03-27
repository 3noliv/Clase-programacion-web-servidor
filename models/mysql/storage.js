// models/mysql/storage.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const Storage = sequelize.define(
  "storages",
  {
    url: DataTypes.STRING,
    filename: DataTypes.STRING,
  },
  {
    timestamps: true,
  }
);

module.exports = Storage;
