const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");
const {
  validatorCreateItem,
  validatorGetItem,
  validatorUpdateItem,
} = require("../validators/tracks");

const router = express.Router();

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);
router.put("/:id", validatorUpdateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
