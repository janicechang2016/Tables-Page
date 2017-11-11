// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

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
        "customerID": "tableID"
    }
]

var waitList = [
    {
        "customerName": "wait test",
        "phoneNumber": "1515565555",
        "customerEmail": "email@email.com",
        "customerID": "WaitListID"
    }
]

// Routes
// =============================================================

// Route to the home page 
app.get("/", function(req, res) {
    // hompage view 
    res.sendFile(path.join(__dirname, "homePage.html"));
  });

// Route to the home page 
app.get("/tables", function(req, res) {
    // reservation view 
    res.sendFile(path.join(__dirname, "reservationViews.html"));
  });


// Route to the home page 
app.get("/reserve", function(req, res) {
    // reservation form 
    res.sendFile(path.join(__dirname, "reservationForm.html"));
  });

function checkAvailabeTables(reservation, response){
    if(tableList.length<5){
        tableList.push(reservation);
        return response.json({booked:true});
    }
    else{
        waitList.push(reservation);
        return response.json({booked:false});
    }
}

// handle request from form 
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var reservation = req.body;
  
    console.log(reservation);

    checkAvailabeTables(reservation, res);
    
    res.json(reservation);
  });


  //when they ask for table list 
  app.get("/api/tables", function(req, res) {
    return res.json(tableList);
  });

  //they ask for waitlist 
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});