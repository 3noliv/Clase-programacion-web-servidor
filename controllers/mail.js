// controllers/mail.js
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { sendEmail } = require("../utils/handleEmail");

const send = async (req, res) => {
  try {
    const info = matchedData(req);
    const result = await sendEmail(info);
    res.send({ result });
  } catch (err) {
    handleHttpError(res, "ERROR_SEND_EMAIL");
  }
};

module.exports = { send };
