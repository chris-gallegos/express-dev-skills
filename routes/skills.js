var express = require('express');
var router = express.Router();

// All actual paths start with "/todos"
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new); //added lab 2
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);

module.exports = router;
