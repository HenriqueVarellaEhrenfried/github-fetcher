var express = require('express');
var router = express.Router();

var settings = require('../settings.json')
var repositories = require('./repository')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//Use functions declared in repository.js 
//And set endpoint
router.get(`${settings.api.base_route}/repositories`, repositories.getAllRepositories);
router.get(`${settings.api.base_route}/repositories/:id`, repositories.getSingleRepository);
router.post(`${settings.api.base_route}/repositories`, repositories.createRepository);
router.post(`${settings.api.base_route}/repositories_bulk`, repositories.bulkInsertRepository);
router.put(`${settings.api.base_route}/repositories/:id`, repositories.updateRepository);
router.delete(`${settings.api.base_route}/repositories/:id`, repositories.removeRepository);
module.exports = router;
