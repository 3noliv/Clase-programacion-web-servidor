// controllers/storage.js
const { storageModel } = require("../models");

const getItems = async (req, res) => {
  const data = await storageModel.find({});
  res.send({ data });
};

module.exports = { getItems };
