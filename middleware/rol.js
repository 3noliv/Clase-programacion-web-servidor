// middleware/rol.js
const { handleHttpError } = require("../utils/handleError");

const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    if (!roles.includes(user.role)) {
      return handleHttpError(res, "NOT_ALLOWED", 403);
    }
    next();
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = checkRol;
