//since we don't have a database we'll use our front end models at the moment
var Films = require('../client/src/models/films');
var films = new Films();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

//index
filmRouter.get('/', function(req, res) {
  res.json({data: films});
})
//create
filmRouter.post('/', function(req, res) {
  films.push(req.body);
  res.json({data: films});
})
//show
filmRouter.get('/:id', function(req, res) {
  var film = films[req.params.id];
  res.json({data: film})
})
//update
filmRouter.put('/:id', function(req, res) {
  var film = films[req.params.id];
  film = req.body;
  res.json({data: film})
})
//destroy
filmRouter.delete('/:id', function(req, res) {
  var index = req.params.id;
  films.splice(index, 1);
  res.json({data: films})
})
//add review
filmRouter.post('/:id', function(req, res) {
  var film = films[req.params.id];
  film.reviews.push(req.body);
  res.json({data: film});
})

module.exports = filmRouter;
