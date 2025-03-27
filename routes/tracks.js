// routes/tracks.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const customHeader = require("../middleware/customHeader");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");

router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, validatorGetItem, getItem);
router.post(
  "/",
  authMiddleware,
  checkRol(["admin"]),
  customHeader,
  validatorCreateItem,
  createItem
);
router.put("/:id", authMiddleware, validatorCreateItem, updateItem);
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
