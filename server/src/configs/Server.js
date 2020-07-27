const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./LoaderEnv");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./Swagger");
const app = express();
const routesApp = require("./../routes"); 

// Enable middleware parse datas to json.
app.use(bodyParser.json());

// Enable cors on application.
app.use(cors());

/**
 * @description Setting route with documentation swagger.
 */
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Set routes application.
routesApp(app);

module.exports = app;