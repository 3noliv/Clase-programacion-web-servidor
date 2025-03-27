// models/mysql/users.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const Users = sequelize.define(
  "users",
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Users;
