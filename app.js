// app.js
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
require("dotenvconfig");

const loggerStream = require("./utils/handleLogger");
const dbConnect = require("./config/mongo");
const { dbConnectMySql, sequelize } = require("./config/mysql");

const app = express();

// Middleware principal
app.use(cors());
app.use(express.json());

// Logger para errores 4XX y 5XX
morganBody(app, {
  noColors: true,
  skip: (req, res) => res.statusCode < 400,
  stream: loggerStream,
});

// Rutas
app.use("/api", require("./routes"));

// Arranque
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor en puerto", PORT));

// Base de datos dinámica
if (process.env.ENGINE_DB === "nosql") {
  dbConnect();
} else {
  dbConnectMySql();
  sequelize.sync();
}
