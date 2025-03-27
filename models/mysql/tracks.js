// models/mysql/tracks.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");
const Storage = require("./storage");

const Tracks = sequelize.define(
  "tracks",
  {
    name: DataTypes.STRING,
    album: DataTypes.STRING,
    cover: DataTypes.STRING,
    artist: DataTypes.JSON,
    duration: DataTypes.JSON,
    mediaId: DataTypes.INTEGER,
  },
  {
    timestamps: true,
  }
);

Tracks.findAllData = function () {
  Tracks.belongsTo(Storage, {
    foreignKey: "mediaId",
    as: "audio",
  });
  return Tracks.findAll({ include: "audio" });
};

Tracks.findOneData = function (id) {
  Tracks.belongsTo(Storage, {
    foreignKey: "mediaId",
    as: "audio",
  });
  return Tracks.findOne({ where: { id }, include: "audio" });
};

module.exports = Tracks;
