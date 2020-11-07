//require our modeules and decalre our settings variables 
const express = require ('express');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const morgan = require('morgan');;

const skillsRouter = require('./routes/skills');
const indexRouter = require('./routes/index')

// create the express app
const app = express ();

// configure the server settings with app.set ()
app.set ('view engine','ejs');
// mount our routes

// static middleware for serving CSS, Front-end JS & Images
app.use(methodOverride('_method')) // POST /todos/1?_method=DELETE -> DELETE /todos/1
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req,res){
    res.render('index');
});
// all routers pertaining to//
app.use('/skills',skillsRouter);
app.use('/',indexRouter);

//tell the app to listen//
app.listen(port, function() {
    console.log('Express is listening on port:${port}');
});