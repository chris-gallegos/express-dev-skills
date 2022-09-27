var express = require('express');
var router = express.Router();

// All actual paths start with "/todos"
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);

module.exports = router;
