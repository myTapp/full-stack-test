const express = require("express");
var cors = require('cors')
const  bodyParser = require('body-parser')

require("./database");

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./routes/authRoutes')(app);
require('./routes/routes')(app)


app.listen(3333);
