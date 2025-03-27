// routes/mail.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const { validatorMail } = require("../validators/mail");
const { send } = require("../controllers/mail");

router.post("/", authMiddleware, validatorMail, send);

module.exports = router;
