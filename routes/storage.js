// routes/storage.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const { getItems } = require("../controllers/storage");

router.get("/", authMiddleware, getItems);

module.exports = router;
