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

var MONGODB_URI = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines");
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

mongoose.connection.on('open', () => console.log('🌎 Mongoose connected!'));


// Syncing our Mongodb models and then starting our express app
// app.get("/", (req, res) => {
//     res.redirect("/scrape");
// });


// process.on('unhandledRejection', (reason, p) => {
//     console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
//     // application specific logging, throwing an error, or other logic here
// });
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});