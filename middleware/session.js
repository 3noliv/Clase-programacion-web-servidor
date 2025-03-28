// middleware/session.js
const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const getProperties = require("../utils/handlePropertiesEngine");
const propertiesKey = getProperties();

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return handleHttpError(res, "NOT_TOKEN", 401);
    }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken || !dataToken[propertiesKey.id]) {
      return handleHttpError(res, "INVALID_TOKEN", 401);
    }

    const query = { [propertiesKey.id]: dataToken[propertiesKey.id] };
    const user = await usersModel.findOne(query);
    req.user = user;
    next();
  } catch (e) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};

module.exports = authMiddleware;
