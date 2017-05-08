// API version 1
var express = require('express');
var router = express.Router();
var path = require('path');
var recipes = require('../recipes.js');
var jsonrecipes = recipes;


router.get('/info', function(request, response) {
 response.status(200);
 response.json({
 "description": "status code 200"
 });
});

router.get('/recipes', function(request, response) {
 response.status(200);
 response.json(jsonrecipes);
});

router.get('*', function(request, response) {
	response.status(404);
	response.json({
		"description": "Error"
	});
})
module.exports = router;