// utils/handleJwt.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require("./handlePropertiesEngine");
const propertiesKey = getProperties();

const tokenSign = (user) => {
  return jwt.sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "2h" }
  );
};

const verifyToken = (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
