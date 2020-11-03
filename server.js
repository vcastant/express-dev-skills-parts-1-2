//require our modeules and decalre our settings variables 
const express = require ('express');
const port = 3000;

// create the express app
const app = express ();

// configure the server settings with app.set ()
app.set ('view engine','ejs');
// mount our routes

// tell the app to listen

app.listen(port, function() {
    console.log('Express is listening on port:${port}');
});