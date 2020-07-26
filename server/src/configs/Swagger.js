const swaggerJsDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  info: {
    title: "Desafio Mytapp",
    version: "1.0.0",
    description: "Api do teste para vaga de fullstack da mytapp"
  }
}

const swaggerSpec = swaggerJsDoc({
  swaggerDefinition: swaggerDefinition,
  apis: [process.env.SWAGGER_PATH_ROUTES],
});

module.exports = swaggerSpec; 