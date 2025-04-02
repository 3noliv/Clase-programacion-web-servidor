const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API - Documentación",
      version: "1.0.0"
    }
  },
  apis: ["./routes/*.js"] // Documenta todas las rutas
};

const openapiSpecification = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
};

module.exports = swaggerDocs;
