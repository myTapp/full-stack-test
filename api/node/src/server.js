const express = require("express");
const routes = require("./routes/routes");
const  bodyParser = require('body-parser')
require("./database");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./routes/authRoutes')(app);
require('./routes/routes')(app)


app.listen(3333);
