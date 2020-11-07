// requre express//
const express = require('express');
const router = express.Router();

const skillsCtrl = require ('../controllers/skills');

//initialize a router object//
//TODO:require the controller module//

//define routes//

//all routes in this module start at /skills
router.get('/', skillsCtrl.index);
// create
router.post('/',skillsCtrl.create);

// show

router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);


// delete
router.delete('/:skill', skillsCtrl.delete);

//export the router object//
module.exports = router;