var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

router.get('/portfoliosingle', function(req, res, next) {
  res.render('portfoliosingle');
});

router.get('/services', function(req, res, next) {
  res.render('services');
});

module.exports = router;
