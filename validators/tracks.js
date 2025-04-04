// validators/tracks.js
const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration.start").exists().notEmpty().isInt(),
  check("duration.end").exists().notEmpty().isInt(),
  check("mediaId").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

const validatorGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { validatorCreateItem, validatorGetItem };
