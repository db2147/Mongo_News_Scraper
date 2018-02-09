// file is the initial starting point for the Node/Express server.
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");



// Sets up Express App
var app = express();
var PORT = process.env.PORT || 8080;
var index = require('./routes/index');


// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(express.static('public'));
// Sets up the Express app to handle data parsing

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.use("/", index);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_cbj9t6xb:qcho6um0ihr81423sshu5rf4sa@ds229918.mlab.com:29918/heroku_cbj9t6xb");
mongoose.connection.on('open', () => console.log('🌎 Mongoose connected!'));


// Syncing our Mongodb models and then starting our express app
// app.get("/", (req, res) => {
//     res.redirect("/scrape");
// });



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
 