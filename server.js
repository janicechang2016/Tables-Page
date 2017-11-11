// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// reservation data 
// =============================================================

var tableList = [
    {
        "customerName": "table1",
        "phoneNumber": "12123123",
        "customerEmail": "someemail@email.com",
        "customerID": "1"
    }
]

var waitList = [
    {
        "customerName": "wait test",
        "phoneNumber": "1515565555",
        "customerEmail": "email@email.com",
        "customerID": "1"
    }
]

// Routes
// =============================================================

// Route to the home page 
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "homePage.html"));
  });