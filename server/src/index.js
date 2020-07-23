const express = require("express");
const app = express();
require("./configs/LoaderEnv");
const user = require("./models/User");

user.findAll().then(console.log);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Server is running in address: ${process.env.APP_URL}`);
})