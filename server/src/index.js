const express = require("express");
const bodyParser = require("body-parser");
require("./configs/LoaderEnv");
const app = express();
const routesApp = require("./routes");

// Enable middleware parse datas to json.
app.use(bodyParser.json());

// Set routes application.
routesApp(app);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Server is running in address: ${process.env.APP_URL}`);
})