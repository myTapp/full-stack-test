const express = require("express");
const bodyParser = require("body-parser");
require("./LoaderEnv");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./Swagger");
const app = express();
const routesApp = require("./../routes"); 

// Enable middleware parse datas to json.
app.use(bodyParser.json());

/**
 * @description Setting route with documentation swagger.
 */
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Set routes application.
routesApp(app);

module.exports = app;