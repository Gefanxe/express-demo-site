const express = require('express');
const router = express.Router();

const User = require('../database/models/').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  // let Users = models['Users'];
  User.findAll({
    where: {
      id: 2
    }
  }).then(function(u) {
    console.log('user:', u);
  });
  res.send('here is test');
});

module.exports = router;
