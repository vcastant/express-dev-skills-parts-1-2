// requre express//
const express = require('express');
const router = express.Router();

const skillsCtrl = require ('../controllers/skills');

//initialize a router object//
//TODO:require the controller module//

//define routes//

//all routes in this module start at /skills
router.get('/', skillsCtrl.index);


//export the router object//
module.exports = router;