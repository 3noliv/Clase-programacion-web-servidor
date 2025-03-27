// routes/users.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { getItems } = require("../controllers/users");

router.get("/", authMiddleware, checkRol(["admin"]), getItems);

module.exports = router;
