// config/mongo.js
const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.set("strictQuery", false);
  mongoose.connect(DB_URI, {}, (err, res) => {
    if (!err) console.log("Conexión correcta a MongoDB ✅");
    else console.error("Error de conexión ❌", err);
  });
};

module.exports = dbConnect;
