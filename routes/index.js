// require our modules
const express = require('express');

// create a router object
const router = express.Router();


// require the controller module
const indexCtrl = require('../controllers/index')

// define our routes

// everything after localhost:3000/
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
// export the router object
module.exports = router;