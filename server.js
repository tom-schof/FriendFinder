var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT)
});